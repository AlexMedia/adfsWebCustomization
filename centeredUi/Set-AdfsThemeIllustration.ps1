<#
.Synopsis
Gets the current Bing daily wallpaper file and applies it as an ADFS theme illustration.
.Description
Sets the ADFS illustration to the current Bing wallpaper.
.Parameter Path
The full path to the Wallpaper file.
.Example
Set-AdfsThemeIllustration.ps1 -Path "c:\wallpaper\wallpaper.jpg" 
This command gets the current Bing daily wallpaper and applies it to the ADFS default theme.
.Example
Set-AdfsThemeIllustration.ps1 -Path "c:\wallpaper\wallpaper.jpg" -Theme "My Theme"
This command gets the current Bing daily wallpaper and applies it to the ADFS "My Theme" theme.
.Link
http://msfreaks.wordpress.com
.Notes
Name: Set-ADFSWallpaper
Author: Arjan Mensch
Lastedit: 11/30/2015
#>

param(
	[Parameter(Mandatory=$true)]
	[string]$Path,
	[Parameter(Mandatory=$false)]
	[string]$Theme="Default"
)

[System.Reflection.Assembly]::LoadFile( "C:\Windows\Microsoft.NET\Framework\v2.0.50727\System.Drawing.dll") 

function Download-IllustrationFile {
	param(
		 [Parameter(Mandatory=$True,Position=1)]
		 [string]$Path
	)
	
	$jsonUrl = "http://www.bing.com/HPImageArchive.aspx?format=js&mbl=1&idx=0&n=1&cc=us"
	Invoke-WebRequest -UseBasicParsing -Uri $jsonUrl -OutFile $Path
}

function Get-BingWallpaper {
	param(
		 [Parameter(Mandatory=$True,Position=1)]
		 [string]$JsonPath,
		 [Parameter(Mandatory=$True,Position=2)]
		 [string]$Path
	)
	
	$baseUrl = "http://www.bing.com"
	$json = Get-Content $JsonPath | ConvertFrom-Json
	$url = $baseUrl + $json.images.url.toString().trim();

	if ($url.indexOf("http://") -eq -1) { $url = "http://" + $url }
    
	if ($url -ne "") {
		Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $Path
	}

	return $Path
}

Function Get-LoadedModule { 
	Param([string]$name)
	if(-not(Get-Module -name $name)) 
	{ 
		if(Get-Module -ListAvailable | Where-Object { $_.name -eq $name }) 
		{
			Import-Module -Name $name 
			$true 
		}
		else { $false }
	}
	else { $true }
}

Function Resize-Image() {
    # Powershell image resizer logic, by someshinyobject on Github
	# https://gist.github.com/someshinyobject/617bf00556bc43af87cd
	
    Param (
        [Parameter(Mandatory=$True)]
        [ValidateScript({
            $_ | ForEach-Object {
                Test-Path $_
            }
        })][String[]]$ImagePath,
        [Parameter(Mandatory=$False)][Switch]$MaintainRatio,
        [Parameter(Mandatory=$False, ParameterSetName="Absolute")][Int]$Height,
        [Parameter(Mandatory=$False, ParameterSetName="Absolute")][Int]$Width,
        [Parameter(Mandatory=$False, ParameterSetName="Percent")][Double]$Percentage
    )
    Begin {
        If ($Width -and $Height -and $MaintainRatio) {
            Throw "Absolute Width and Height cannot be given with the MaintainRatio parameter."
        }

        If (($Width -xor $Height) -and (-not $MaintainRatio)) {
            Throw "MaintainRatio must be set with incomplete size parameters (Missing height or width without MaintainRatio)"
        }

        If ($Percentage -and $MaintainRatio) {
            Write-Warning "The MaintainRatio flag while using the Percentage parameter does nothing"
        }
    }
    Process {
        ForEach ($Image in $ImagePath) {
            $Path = (Resolve-Path $Image).Path
            $Dot = $Path.LastIndexOf(".")
            #Add name modifier (OriginalName_resized.jpg)
            $OutputPath = $Path.Substring(0,$Dot) + "_resized" + $Path.Substring($Dot,$Path.Length - $Dot)
            $OldImage = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $Path
            $OldHeight = $OldImage.Height
            $OldWidth = $OldImage.Width

            If ($MaintainRatio) {
                $OldHeight = $OldImage.Height
                $OldWidth = $OldImage.Width
                If ($Height) {
                    $Width = $OldWidth / $OldHeight * $Height
                }
                If ($Width) {
                    $Height = $OldHeight / $OldWidth * $Width
                }
            }

            If ($Percentage) {
                $Percentage = ($Percentage / 100)
                $Height = $OldHeight * $Percentage
                $Width = $OldWidth * $Percentage
            }

            $Bitmap = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $Width, $Height
            $NewImage = [System.Drawing.Graphics]::FromImage($Bitmap)
            
            #Retrieving the best quality possible
            $NewImage.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $NewImage.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $NewImage.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            
            $NewImage.DrawImage($OldImage, $(New-Object -TypeName System.Drawing.Rectangle -ArgumentList 0, 0, $Width, $Height))
            If ($PSCmdlet.ShouldProcess("Resized image based on $Path", "saved to $OutputPath")) {
                $Bitmap.Save($OutputPath)
            }
            $Bitmap.Dispose()
            $NewImage.Dispose()
        }
    }
}

if (-not (Get-LoadedModule("ADFS"))) { Write-Host "ERROR: ADFS module is not installed on this system or could not be loaded" -foregroundcolor "red" ; exit }

# Download the theme metadata from Bing's website
$jsonFile = [System.IO.Path]::ChangeExtension($Path, "json");
Download-IllustrationFile -Path $jsonFile

# Download the image from Bing and upload to ADFS
Get-BingWallpaper -JsonPath $jsonFile -Path $Path
Set-AdfsWebTheme -TargetName $Theme -Illustration @{path="$($Path)"}

# Create and upload a tiny version
Resize-Image -Width 50 -MaintainRatio -ImagePath $Path
$oPath = (Resolve-Path $Path).Path
$Dot = $oPath.LastIndexOf(".")
$OutputPath = $oPath.Substring(0,$Dot) + "_resized" + $oPath.Substring($Dot,$oPath.Length - $Dot)

Set-AdfsWebTheme -TargetName $Theme -AdditionalFileResource @{Uri="/adfs/portal/illustration/illustration-mini.jpg";Path=$($OutputPath) }

# Upload the JSON file to ADFS
Set-AdfsWebTheme -TargetName $Theme -AdditionalFileResource @{Uri="/adfs/portal/script/illustration.js";Path=$($jsonFile) }