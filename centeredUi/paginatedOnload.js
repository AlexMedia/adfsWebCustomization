function PaginatedNext() {
    // NOTE: You can add any custom navigation logic you want here. 

    // Check that a username was entered correctly 
    var u = new InputUtil();
    var e = new LoginErrors();
    var usernameInput = document.getElementById('userNameInput');
    if (!usernameInput.value || !usernameInput.value.match('[@\\\\]')) {
        u.setError(usernameInput, e.userNameFormatError);
        return false;
    }

    ShowPasswordPage();
}

function PaginatedBack() {
    // NOTE: You can add any custom navigation logic you want here. 

    ShowUsernamePage();
}

function AdjustElementDisplay(elementList, display) {
    for (var i = 0; i < elementList.length; i++) {
        if (elementList[i] && elementList[i].style) {
            elementList[i].style.display = display;
        }
    }
}

function GetLocalizedStringForElement(element) {
    // LOCALIZATION NOTE: The following table allows for the translation of the text items created 
    //  within this JavaScript. Elements created client-side are not localized by ADFS, so we must 
    //  localize the text ourselves. Admins can add additional translations to this table
    var translationTable = {
        "ms": {
            "backButton": "Ke belakang",
            "nextButton": "Seterusnya",
            "loginMessage": "Masukkan kata laluan"
        },
        "gl": {
            "backButton": "Atrás",
            "nextButton": "Seguinte",
            "loginMessage": "Introducir contrasinal"
        },
        "gu": {
            "backButton": "પાછળ",
            "nextButton": "આગલું",
            "loginMessage": "પાસવર્ડ દાખલ કરો"
        },
        "km": {
            "backButton": "ថយក្រោយ",
            "nextButton": "បន្ទាប់",
            "loginMessage": "បញ្ចូលពាក្យសម្ងាត់"
        },
        "ig": {
            "backButton": "Àzụ",
            "nextButton": "Osote",
            "loginMessage": "Tinye okwuntụghe"
        },
        "uz": {
            "backButton": "Orqaga",
            "nextButton": "Keyingisi",
            "loginMessage": "Parolni kiriting"
        },
        "sv": {
            "backButton": "Bakåt",
            "nextButton": "Nästa",
            "loginMessage": "Ange lösenord"
        },
        "mi": {
            "backButton": "Hoki",
            "nextButton": "Panuku",
            "loginMessage": "Tāuru kupuhipa"
        },
        "rw": {
            "backButton": "Gusubira inyuma",
            "nextButton": "Komeza",
            "loginMessage": "Andika ijambobanga"
        },
        "lb": {
            "backButton": "Zréck",
            "nextButton": "Nächst",
            "loginMessage": "Passwuert aginn"
        },
        "ku-Arab": {
            "backButton": "دواوە",
            "nextButton": "داهاتوو",
            "loginMessage": "لێدانی تێپەرەوشە"
        },
        "yo": {
            "backButton": "Padàsẹ́yìn",
            "nextButton": "Tókàn",
            "loginMessage": "Ṣàtẹ̀wọlé ọ̀rọ̀ aṣínà"
        },
        "am": {
            "backButton": "ወደኋላ",
            "nextButton": "ቀጣይ",
            "loginMessage": "የይለፍ ቃል ያስገቡ"
        },
        "es-MX": {
            "backButton": "Atrás",
            "nextButton": "Siguiente",
            "loginMessage": "Escriba la contraseña"
        },
        "ur": {
            "backButton": "واپس",
            "nextButton": "اگلا",
            "loginMessage": "پاس ورڈ درج کریں"
        },
        "quc": {
            "backButton": "Tzalijsab\u0027al",
            "nextButton": "Teren chi uloq",
            "loginMessage": "Utz\u0027ib\u0027axik retokib\u0027al"
        },
        "sl": {
            "backButton": "Nazaj",
            "nextButton": "Naprej",
            "loginMessage": "Vnesite geslo"
        },
        "pa-Arab-PK": {
            "backButton": "پچھے جاؤ",
            "nextButton": "آگے",
            "loginMessage": "پاس ورڈ داخل کرو"
        },
        "tk": {
            "backButton": "Yza",
            "nextButton": "Indiki",
            "loginMessage": "Parol giriz"
        },
        "te": {
            "backButton": "వెనుకకు",
            "nextButton": "తదుపరి",
            "loginMessage": "పాస్‌వర్డ్‌ను నమోదు చేయండి"
        },
        "ro": {
            "backButton": "Înapoi",
            "nextButton": "Următorul",
            "loginMessage": "Introduceți parola"
        },
        "en": {
            "backButton": "Back",
            "nextButton": "Next",
            "loginMessage": "Enter password"
        },
        "zh-hans": {
            "backButton": "后退",
            "nextButton": "下一步",
            "loginMessage": "输入密码"
        },
        "ha": {
            "backButton": "Baya",
            "nextButton": "Na gaba",
            "loginMessage": "Shigar da kalmar sirri"
        },
        "mt": {
            "backButton": "Lura",
            "nextButton": "Li Jmiss",
            "loginMessage": "Daħħal il-password"
        },
        "tn": {
            "backButton": "Morago",
            "nextButton": "Latelang",
            "loginMessage": "Tsenya khunololamoraba"
        },
        "mn": {
            "backButton": "Буцах",
            "nextButton": "Дараах",
            "loginMessage": "Нууц үг оруулах"
        },
        "pa-IN": {
            "backButton": "ਪਿੱਛੇ ਜਾਓ",
            "nextButton": "ਅਗਲਾ",
            "loginMessage": "ਪਾਸਵਰਡ ਦਾਖ਼ਲ ਕਰੋ"
        },
        "bn-IN": {
            "backButton": "ফিরে যান",
            "nextButton": "পরবর্তী",
            "loginMessage": "পাসওয়ার্ড লিখুন"
        },
        "kok": {
            "backButton": "फाटीं व्हरचें",
            "nextButton": "फुडलें",
            "loginMessage": "पासवर्ड नोंद करचो"
        },
        "id": {
            "backButton": "Kembali",
            "nextButton": "Selanjutnya",
            "loginMessage": "Masukkan sandi"
        },
        "bg": {
            "backButton": "Назад",
            "nextButton": "Напред",
            "loginMessage": "Въведете парола"
        },
        "da": {
            "backButton": "Tilbage",
            "nextButton": "Næste",
            "loginMessage": "Indtast adgangskode"
        },
        "az": {
            "backButton": "Geri",
            "nextButton": "Növbəti",
            "loginMessage": "Parol daxil edin"
        },
        "mk": {
            "backButton": "Назад",
            "nextButton": "Следно",
            "loginMessage": "Внесете ја лозинката"
        },
        "mr": {
            "backButton": "मागे",
            "nextButton": "पुढे",
            "loginMessage": "पासवर्ड प्रविष्ठ करा"
        },
        "kk": {
            "backButton": "Артқа",
            "nextButton": "Келесі",
            "loginMessage": "Құпия сөзді енгізіңіз"
        },
        "ml": {
            "backButton": "മടങ്ങുക",
            "nextButton": "അടുത്തത്",
            "loginMessage": "പാസ്‌വേഡ് നൽകുക"
        },
        "xh": {
            "backButton": "Emva",
            "nextButton": "Okulandelayo",
            "loginMessage": "Ngenisa iphaswedi"
        },
        "gd": {
            "backButton": "Air ais",
            "nextButton": "Air adhart",
            "loginMessage": "Cuir a-steach am facal-faire"
        },
        "as": {
            "backButton": "পিছলৈ যাওক",
            "nextButton": "পৰৱৰ্তী",
            "loginMessage": "পাছৱৰ্ড প্ৰৱিষ্ট কৰক"
        },
        "tr": {
            "backButton": "Geri",
            "nextButton": "İleri",
            "loginMessage": "Parola girin"
        },
        "is": {
            "backButton": "Til baka",
            "nextButton": "Áfram",
            "loginMessage": "Færa inn aðgangsorð"
        },
        "fa": {
            "backButton": "برگشت",
            "nextButton": "بعدی",
            "loginMessage": "رمز عبور را وارد کنید"
        },
        "ga": {
            "backButton": "Siar",
            "nextButton": "Ar aghaidh",
            "loginMessage": "Iontráil an pasfhocal"
        },
        "sr-Cyrl-BA": {
            "backButton": "Назад",
            "nextButton": "Даље",
            "loginMessage": "Унесите лозинку"
        },
        "tg": {
            "backButton": "Бозгашт",
            "nextButton": "Навбатӣ",
            "loginMessage": "Паролро дохил кунед"
        },
        "or": {
            "backButton": "ପଶ୍ଚ୍ୟାତ୍",
            "nextButton": "ପରବର୍ତ୍ତୀ",
            "loginMessage": "ପାସ୍‌ୱାର୍ଡ୍‌ ଏଣ୍ଟର୍‌ କରନ୍ତୁ"
        },
        "ru": {
            "backButton": "Назад",
            "nextButton": "Далее",
            "loginMessage": "Введите пароль"
        },
        "sq": {
            "backButton": "Prapa",
            "nextButton": "Tjetër",
            "loginMessage": "Fut fjalëkalimin"
        },
        "he": {
            "backButton": "הקודם",
            "nextButton": "הבא",
            "loginMessage": "הזן סיסמה"
        },
        "ug": {
            "backButton": "قايتىش",
            "nextButton": "كېيىنكى",
            "loginMessage": "پارول كىرگۈزۈڭ"
        },
        "eu": {
            "backButton": "Atzera",
            "nextButton": "Hurrengoa",
            "loginMessage": "Idatzi pasahitza"
        },
        "wo": {
            "backButton": "Dellu",
            "nextButton": "Li ci topp",
            "loginMessage": "Dugalal baatu-jàll bi"
        },
        "no": {
            "backButton": "Tilbake",
            "nextButton": "Neste",
            "loginMessage": "Skriv inn passord"
        },
        "es": {
            "backButton": "Atrás",
            "nextButton": "Siguiente",
            "loginMessage": "Escribir contraseña "
        },
        "pt-BR": {
            "backButton": "Voltar",
            "nextButton": "Avançar",
            "loginMessage": "Insira a senha"
        },
        "bn-BD": {
            "backButton": "ফিরুন",
            "nextButton": "পরবর্তী",
            "loginMessage": "পাসওয়ার্ড লিখুন"
        },
        "hy": {
            "backButton": "Հետ",
            "nextButton": "Հաջորդը",
            "loginMessage": "Մուտքագրեք գաղտնաբառը"
        },
        "zh-hant": {
            "backButton": "返回",
            "nextButton": "下一步",
            "loginMessage": "輸入密碼"
        },
        "vi": {
            "backButton": "Quay lại",
            "nextButton": "Tiếp theo",
            "loginMessage": "Nhập mật khẩu"
        },
        "sr-cyrl-RS": {
            "backButton": "Назад",
            "nextButton": "Даље",
            "loginMessage": "Унесите лозинку"
        },
        "sr-Latn-RS": {
            "backButton": "Nazad",
            "nextButton": "Dalje",
            "loginMessage": "Unesite lozinku"
        },
        "nl": {
            "backButton": "Vorige",
            "nextButton": "Volgende",
            "loginMessage": "Wachtwoord invoeren"
        },
        "th": {
            "backButton": "ย้อนกลับ",
            "nextButton": "ถัดไป",
            "loginMessage": "ใส่รหัสผ่าน"
        },
        "lt": {
            "backButton": "Atgal",
            "nextButton": "Tolyn",
            "loginMessage": "Įveskite slaptažodį"
        },
        "ja": {
            "backButton": "戻る",
            "nextButton": "次へ",
            "loginMessage": "パスワードの入力"
        },
        "ko": {
            "backButton": "뒤로",
            "nextButton": "다음",
            "loginMessage": "암호 입력"
        },
        "it": {
            "backButton": "Indietro",
            "nextButton": "Avanti",
            "loginMessage": "Immettere la password"
        },
        "el": {
            "backButton": "Πίσω",
            "nextButton": "Επόμενο",
            "loginMessage": "Εισαγάγετε κωδικό πρόσβασης"
        },
        "pt-PT": {
            "backButton": "Anterior",
            "nextButton": "Seguinte",
            "loginMessage": "Introduzir palavra-passe"
        },
        "kn": {
            "backButton": "ಹಿಂದಕ್ಕೆ",
            "nextButton": "ಮುಂದೆ",
            "loginMessage": "ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ"
        },
        "de": {
            "backButton": "Zurück",
            "nextButton": "Weiter",
            "loginMessage": "Kennwort eingeben"
        },
        "ne": {
            "backButton": "पछाडि जानुहोस्",
            "nextButton": "अर्को",
            "loginMessage": "पासवर्ड प्रविष्ट गर्नुहोस्"
        },
        "sd": {
            "backButton": "واپس",
            "nextButton": "اڳيون",
            "loginMessage": "پاسورڊ داخل ڪريو"
        },
        "ky": {
            "backButton": "Артка",
            "nextButton": "Кийинки",
            "loginMessage": "Сырсөз киргизүү"
        },
        "ar": {
            "backButton": "الخلف",
            "nextButton": "التالي",
            "loginMessage": "أدخل كلمة المرور"
        },
        "hi": {
            "backButton": "वापस जाएँ",
            "nextButton": "अगला",
            "loginMessage": "पासवर्ड दर्ज करें"
        },
        "quz": {
            "backButton": "Qhipa",
            "nextButton": "Qatiq",
            "loginMessage": "Kichanata qillqay"
        },
        "ka": {
            "backButton": "უკან",
            "nextButton": "შემდეგი",
            "loginMessage": "შეიყვანეთ პაროლი"
        },
        "af": {
            "backButton": "Terug",
            "nextButton": "Volgende",
            "loginMessage": "Voer wagwoord in"
        },
        "et": {
            "backButton": "Tagasi",
            "nextButton": "Edasi",
            "loginMessage": "Sisestage parool"
        },
        "pl": {
            "backButton": "Wstecz",
            "nextButton": "Dalej",
            "loginMessage": "Wprowadź hasło"
        },
        "ta": {
            "backButton": "பின் செல்",
            "nextButton": "அடுத்து",
            "loginMessage": "கடவுச்சொல்லை உள்ளிடவும்"
        },
        "prs": {
            "backButton": "بازگشت",
            "nextButton": "بعدی",
            "loginMessage": "رمزعبور را وارد کنید"
        },
        "tt": {
            "backButton": "Артка",
            "nextButton": "Алга",
            "loginMessage": "Серсүзне кертү"
        },
        "fr": {
            "backButton": "Précédent",
            "nextButton": "Suivant",
            "loginMessage": "Entrez le mot de passe"
        },
        "be": {
            "backButton": "Назад",
            "nextButton": "Наступны",
            "loginMessage": "Увядзіце пароль"
        },
        "hr": {
            "backButton": "Natrag",
            "nextButton": "Dalje",
            "loginMessage": "Unesite lozinku"
        },
        "zu": {
            "backButton": "Emuva",
            "nextButton": "Okulandelayo",
            "loginMessage": "Faka iphasiwedi"
        },
        "sk": {
            "backButton": "Späť",
            "nextButton": "Ďalej",
            "loginMessage": "Zadajte heslo"
        },
        "bs": {
            "backButton": "Nazad",
            "nextButton": "Dalje",
            "loginMessage": "Unesite lozinku"
        },
        "fi": {
            "backButton": "Edellinen",
            "nextButton": "Seuraava",
            "loginMessage": "Anna salasana"
        },
        "lo": {
            "backButton": "ກັບຄືນ",
            "nextButton": "ຖັດໄປ",
            "loginMessage": "ໃສ່ລະຫັດຜ່ານ"
        },
        "lv": {
            "backButton": "Atpakaļ",
            "nextButton": "Tālāk",
            "loginMessage": "Ievadīt paroli"
        },
        "fil": {
            "backButton": "Itim",
            "nextButton": "Susunod",
            "loginMessage": "Ipasok ang password"
        },
        "ti": {
            "backButton": "ድሕሪት",
            "nextButton": "ቀጻሊ",
            "loginMessage": "መሕለፊ ቃል የእትው"
        },
        "cy": {
            "backButton": "Yn ôl",
            "nextButton": "Nesaf",
            "loginMessage": "Rhowch gyfrinair"
        },
        "si": {
            "backButton": "ආපසු",
            "nextButton": "ඊළඟ",
            "loginMessage": "මුරපදය ඇතුළු කරන්න"
        },
        "sw": {
            "backButton": "Nyuma",
            "nextButton": "Ifuatayo",
            "loginMessage": "Ingiza nywila"
        },
        "fr-CA": {
            "backButton": "Précédent",
            "nextButton": "Suivant",
            "loginMessage": "Entrer le mot de passe"
        },
        "cs": {
            "backButton": "Zpět",
            "nextButton": "Další",
            "loginMessage": "Zadat heslo"
        },
        "uk": {
            "backButton": "Назад",
            "nextButton": "Далі",
            "loginMessage": "Введіть пароль"
        },
        "nn-NO": {
            "backButton": "Tilbake",
            "nextButton": "Neste",
            "loginMessage": "Skriv inn passord"
        },
        "nso": {
            "backButton": "Morago",
            "nextButton": "Latelago",
            "loginMessage": "Tsenya phasewete"
        },
        "hu": {
            "backButton": "Vissza",
            "nextButton": "Tovább",
            "loginMessage": "Jelszó megadása"
        },
        "ca": {
            "backButton": "Endarrere",
            "nextButton": "Següent",
            "loginMessage": "Introduïu la contrasenya"
        }
    };

    var languageAndCountry = (document.documentElement && document.documentElement.getAttribute("lang")) || (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
    var language = "en";
    
    if (languageAndCountry && languageAndCountry.length >= 2) {
        var languageOptions = Object.keys(translationTable);
        // Sort the codes by length, so that we match longest first 
        languageOptions.sort(function(a, b) {
            return b.length - a.length;
        });

        for (i = 0; i < languageOptions.length; i++) {
            // Prefix match the longest (most specific) langauge code we can 
            if (languageAndCountry.indexOf(languageOptions[i]) > -1) {
                language = languageOptions[i];
                break;
            }
        }
    }

    if (!element || !element.id) {
        return;
    }

    var returnText = "";
    returnText = translationTable["en"][element.id];
    if (translationTable[language]) {
        returnText = translationTable[language][element.id];
    }

    return returnText;
}

function ShowUsernamePage(badUsernamePassword) {
    var nextButton = document.getElementById('nextButton');
    var backButton = document.getElementById('backButton');
    var idBanner = document.getElementById('identityBanner');
    var idBannerImage = document.getElementById('identityBannerImage');

    var thingsToHide = [passArea, submitButton, backButton, idBannerImage, idBanner];
    var thingsToShow = [nextButton, username];

    // Show/Hide elements 
    AdjustElementDisplay(thingsToHide, 'none');
    AdjustElementDisplay(thingsToShow, 'block');

    // Set the login message to what it was originally
    if (loginMessage) {
        loginMessage.innerHTML = originalLoginMessage;
    }

    if (errorText && errorText.innerHTML && !badUsernamePassword) {
        errorDisplay.style.display = 'none';
    }

    // Create the 'next' button if we don't have it yet 
    if (submissionArea && !nextButton) {
        var nextButton = document.createElement("span");
        nextButton.id = "nextButton";
        nextButton.className = "submit";
        nextButton.setAttribute("onclick", "PaginatedNext(); return false;");

        var nextButtonText = GetLocalizedStringForElement(nextButton);
        nextButton.innerHTML = nextButtonText;
        nextButton.setAttribute("role", "button");
        submissionArea.appendChild(nextButton);
    }

    // Add 'enter' key listener to username textbox 
    if (usernameInput && !didAddListener) {
        usernameInput.addEventListener("keydown", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                PaginatedNext();
                return false;
            }
        });

        didAddListener = true;
    }
}

function ShowPasswordPage() {
    var nextButton = document.getElementById('nextButton');
    var idBanner = document.getElementById('identityBanner');
    var idBannerImage = document.getElementById('identityBannerImage');
    var backButton = document.getElementById('backButton');

    var thingsToHide = [errorDisplay, nextButton, username];
    var thingsToShow = [submitButton, passArea, backButton, idBanner, idBannerImage];

    // Show/Hide elements 
    AdjustElementDisplay(thingsToHide, 'none');
    AdjustElementDisplay(thingsToShow, 'block');

    if (loginMessage) {
        var loginMessageText = GetLocalizedStringForElement(loginMessage);
        loginMessage.innerHTML = loginMessageText;
    }

    if (idBanner) {
        idBanner.innerHTML = usernameInput.value;
    }

    // Create the ID Banner if we need to 
    if (workArea && !idBanner) {
        // Create the ID banner
        var idBanner = document.createElement("div");
        idBanner.id = "identityBanner";
        idBanner.className = "identityBanner";
        idBanner.innerHTML = usernameInput.value;

        // Create the ID banner user avatar image 
        var idBannerImage = document.createElement("img");
        idBannerImage.role = "presentation";
        idBannerImage.className = "identityBannerImage";
        idBannerImage.id = "identityBannerImage";

        // NOTE: Admins should set this source to the image host server they use. Additionally, this image should be set
        //  based on the username entered.  

        // Add the newly-created elements 
        workArea.insertBefore(idBannerImage, workArea.firstChild);
        workArea.insertBefore(idBanner, workArea.firstChild);
    }

    idBannerImage.src = gravatar(usernameInput.value, {
        "size": "48",
        "backup": "identicon"
    }); // "https://auth.gfx.ms/16.000.27564.3/images/picker_account_msa.svg";

    // Create the 'Back' button if we need to 
    if (submissionArea && !backButton) {
        var backButton = document.createElement("span");
        backButton.id = "backButton";
        backButton.className = "submit";
        backButton.classList.add('backButton');
        backButton.setAttribute("onclick", "PaginatedBack(); return false;");

        if (submitButton) {
            submitButton.classList.add('modifiedSignIn');
        }

        var backButtonText = GetLocalizedStringForElement(backButton);
        backButton.innerHTML = backButtonText;
        backButton.setAttribute("role", "button");
        submissionArea.appendChild(backButton);
    }

    if (passwordInput) {
        passwordInput.focus();
    }
}


var usernameInput = document.getElementById("userNameInput");
var passwordInput = document.getElementById('passwordInput');

if (usernameInput && passwordInput) {
    var username = document.getElementById('userNameArea');
    var passArea = document.getElementById('passwordArea');

    var submitButton = document.getElementById('submitButton');
    var submissionArea = document.getElementById('submissionArea');
    var errorText = document.getElementById('errorText');
    var errorDisplay = document.getElementById('error');
    var workArea = document.getElementById('workArea');

    var loginMessage = document.getElementById('loginMessage');
    var originalLoginMessage = "";
    var didLoadPasswordPageBefore = false;

    if (loginMessage) {
        originalLoginMessage = loginMessage.innerHTML;
    }
    var didAddListener = false;

    var errorIsShown = false;
    if (errorDisplay && errorDisplay.style && errorDisplay.style.display != "none") {
        errorIsShown = true;
    }

    // Show the Username page, unless a username was already entered (login hint on the request), or we have an error
    if (usernameInput && usernameInput.value && !errorIsShown) {
        ShowPasswordPage();
    } else {
        ShowUsernamePage(errorIsShown);
    }
}

function getStyle(element, styleProp) {
    var propStyle = null;

    if (element && element.currentStyle) {
        propStyle = element.currentStyle[styleProp];
    } else if (element && window.getComputedStyle) {
        propStyle = document.defaultView.getComputedStyle(element, null).getPropertyValue(styleProp);
    }

    return propStyle;
}

var computeLoadIllustration = function() {
    var branding = document.getElementById("branding");
    var brandingDisplay = getStyle(branding, "display");
    var brandingWrapperDisplay = getStyle(document.getElementById("brandingWrapper"), "display");

    if (brandingDisplay && brandingDisplay !== "none" &&
        brandingWrapperDisplay && brandingWrapperDisplay !== "none") {
        document.body.style.backgroundImage = "url(/adfs/portal/illustration/illustration-mini.jpg?c=" + new Date().getTime() + ")";

        setTimeout(function() {
            var newClass = "illustrationClass";

            if (branding.classList && branding.classList.add) {
                branding.classList.add(newClass);
            } else if (branding.className !== undefined) {
                branding.className += " " + newClass;
            }
            if (window.removeEventListener) {
                window.removeEventListener('load', computeLoadIllustration, false);
                window.removeEventListener('resize', computeLoadIllustration, false);
            } else if (window.detachEvent) {
                window.detachEvent('onload', computeLoadIllustration);
                window.detachEvent('onresize', computeLoadIllustration);
            }
        }, 0);
    }
};

if (window.addEventListener) {
    window.addEventListener('resize', computeLoadIllustration, false);
    window.addEventListener('load', computeLoadIllustration, false);
} else if (window.attachEvent) {
    window.attachEvent('onresize', computeLoadIllustration);
    window.attachEvent('onload', computeLoadIllustration);
}

function SetIllustrationImage(imageUri) {
    var illustrationImageClass = '.illustrationClass {background-image:url(' + imageUri + ');}';

    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet) css.styleSheet.cssText = illustrationImageClass;
    else css.appendChild(document.createTextNode(illustrationImageClass));

    document.getElementsByTagName("head")[0].appendChild(css);
}

function setIllustrationCopyright() {
    var copyright = document.querySelector("div#footerLinks span#copyright");
    if (!copyright)
        return;

    copyright.innerText = "";

    if (!("fetch" in window)) {
        // Fallback option for browsers that don't support fetch (such as IE)
        copyright.innerText = "Background: Bing";
        return;
    }

    window.fetch("/adfs/portal/script/illustration.js?c=" + new Date().getTime())
          .then(function(response) {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('Network response was not ok.');
          })
          .then(function(json) {
              if(json && json.images && json.images[0])
              {
                  copyright.innerText = "Background: " + json.images[0].copyright;
              }
          })
          ["catch"](function(error) {
              console.log('There has been a problem with your fetch operation: ', error.message);;
          });
}

document.addEventListener("DOMContentLoaded", setIllustrationCopyright);

function gravatar(email, options) {
    /* Gravatar.js by mazondo, https://github.com/mazondo/gravatarjs */
    
    // using md5() from here: http://www.myersdaily.org/joseph/javascript/md5-text.html
    function md5cycle(e, t) {
        var n = e[0],
            r = e[1],
            i = e[2],
            s = e[3];
        n = ff(n, r, i, s, t[0], 7, -680876936);
        s = ff(s, n, r, i, t[1], 12, -389564586);
        i = ff(i, s, n, r, t[2], 17, 606105819);
        r = ff(r, i, s, n, t[3], 22, -1044525330);
        n = ff(n, r, i, s, t[4], 7, -176418897);
        s = ff(s, n, r, i, t[5], 12, 1200080426);
        i = ff(i, s, n, r, t[6], 17, -1473231341);
        r = ff(r, i, s, n, t[7], 22, -45705983);
        n = ff(n, r, i, s, t[8], 7, 1770035416);
        s = ff(s, n, r, i, t[9], 12, -1958414417);
        i = ff(i, s, n, r, t[10], 17, -42063);
        r = ff(r, i, s, n, t[11], 22, -1990404162);
        n = ff(n, r, i, s, t[12], 7, 1804603682);
        s = ff(s, n, r, i, t[13], 12, -40341101);
        i = ff(i, s, n, r, t[14], 17, -1502002290);
        r = ff(r, i, s, n, t[15], 22, 1236535329);
        n = gg(n, r, i, s, t[1], 5, -165796510);
        s = gg(s, n, r, i, t[6], 9, -1069501632);
        i = gg(i, s, n, r, t[11], 14, 643717713);
        r = gg(r, i, s, n, t[0], 20, -373897302);
        n = gg(n, r, i, s, t[5], 5, -701558691);
        s = gg(s, n, r, i, t[10], 9, 38016083);
        i = gg(i, s, n, r, t[15], 14, -660478335);
        r = gg(r, i, s, n, t[4], 20, -405537848);
        n = gg(n, r, i, s, t[9], 5, 568446438);
        s = gg(s, n, r, i, t[14], 9, -1019803690);
        i = gg(i, s, n, r, t[3], 14, -187363961);
        r = gg(r, i, s, n, t[8], 20, 1163531501);
        n = gg(n, r, i, s, t[13], 5, -1444681467);
        s = gg(s, n, r, i, t[2], 9, -51403784);
        i = gg(i, s, n, r, t[7], 14, 1735328473);
        r = gg(r, i, s, n, t[12], 20, -1926607734);
        n = hh(n, r, i, s, t[5], 4, -378558);
        s = hh(s, n, r, i, t[8], 11, -2022574463);
        i = hh(i, s, n, r, t[11], 16, 1839030562);
        r = hh(r, i, s, n, t[14], 23, -35309556);
        n = hh(n, r, i, s, t[1], 4, -1530992060);
        s = hh(s, n, r, i, t[4], 11, 1272893353);
        i = hh(i, s, n, r, t[7], 16, -155497632);
        r = hh(r, i, s, n, t[10], 23, -1094730640);
        n = hh(n, r, i, s, t[13], 4, 681279174);
        s = hh(s, n, r, i, t[0], 11, -358537222);
        i = hh(i, s, n, r, t[3], 16, -722521979);
        r = hh(r, i, s, n, t[6], 23, 76029189);
        n = hh(n, r, i, s, t[9], 4, -640364487);
        s = hh(s, n, r, i, t[12], 11, -421815835);
        i = hh(i, s, n, r, t[15], 16, 530742520);
        r = hh(r, i, s, n, t[2], 23, -995338651);
        n = ii(n, r, i, s, t[0], 6, -198630844);
        s = ii(s, n, r, i, t[7], 10, 1126891415);
        i = ii(i, s, n, r, t[14], 15, -1416354905);
        r = ii(r, i, s, n, t[5], 21, -57434055);
        n = ii(n, r, i, s, t[12], 6, 1700485571);
        s = ii(s, n, r, i, t[3], 10, -1894986606);
        i = ii(i, s, n, r, t[10], 15, -1051523);
        r = ii(r, i, s, n, t[1], 21, -2054922799);
        n = ii(n, r, i, s, t[8], 6, 1873313359);
        s = ii(s, n, r, i, t[15], 10, -30611744);
        i = ii(i, s, n, r, t[6], 15, -1560198380);
        r = ii(r, i, s, n, t[13], 21, 1309151649);
        n = ii(n, r, i, s, t[4], 6, -145523070);
        s = ii(s, n, r, i, t[11], 10, -1120210379);
        i = ii(i, s, n, r, t[2], 15, 718787259);
        r = ii(r, i, s, n, t[9], 21, -343485551);
        e[0] = add32(n, e[0]);
        e[1] = add32(r, e[1]);
        e[2] = add32(i, e[2]);
        e[3] = add32(s, e[3])
    }

    function cmn(e, t, n, r, i, s) {
        t = add32(add32(t, e), add32(r, s));
        return add32(t << i | t >>> 32 - i, n)
    }

    function ff(e, t, n, r, i, s, o) {
        return cmn(t & n | ~t & r, e, t, i, s, o)
    }

    function gg(e, t, n, r, i, s, o) {
        return cmn(t & r | n & ~r, e, t, i, s, o)
    }

    function hh(e, t, n, r, i, s, o) {
        return cmn(t ^ n ^ r, e, t, i, s, o)
    }

    function ii(e, t, n, r, i, s, o) {
        return cmn(n ^ (t | ~r), e, t, i, s, o)
    }

    function md51(e) {
        txt = "";
        var t = e.length,
            n = [1732584193, -271733879, -1732584194, 271733878],
            r;
        for (r = 64; r <= e.length; r += 64) {
            md5cycle(n, md5blk(e.substring(r - 64, r)))
        }
        e = e.substring(r - 64);
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (r = 0; r < e.length; r++) i[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
        i[r >> 2] |= 128 << (r % 4 << 3);
        if (r > 55) {
            md5cycle(n, i);
            for (r = 0; r < 16; r++) i[r] = 0
        }
        i[14] = t * 8;
        md5cycle(n, i);
        return n
    }

    function md5blk(e) {
        var t = [],
            n;
        for (n = 0; n < 64; n += 4) {
            t[n >> 2] = e.charCodeAt(n) + (e.charCodeAt(n + 1) << 8) + (e.charCodeAt(n + 2) << 16) + (e.charCodeAt(n + 3) << 24)
        }
        return t
    }

    function rhex(e) {
        var t = "",
            n = 0;
        for (; n < 4; n++) t += hex_chr[e >> n * 8 + 4 & 15] + hex_chr[e >> n * 8 & 15];
        return t
    }

    function hex(e) {
        for (var t = 0; t < e.length; t++) e[t] = rhex(e[t]);
        return e.join("")
    }

    function md5(e) {
        return hex(md51(e))
    }

    function add32(e, t) {
        return e + t & 4294967295
    }
    var hex_chr = "0123456789abcdef".split("");
    if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") {
        function add32(e, t) {
            var n = (e & 65535) + (t & 65535),
                r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | n & 65535
        }
    }
    //check to make sure you gave us something
    var options = options || {},
        base,
        params = [];

    //set some defaults, just in case
    options = {
        size: options.size || "50",
        rating: options.rating || "g",
        secure: options.secure || (location.protocol === 'https:'),
        backup: options.backup || ""
    };

    //setup the email address
    email = email.trim().toLowerCase();

    //determine which base to use
    base = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';

    //add the params
    if (options.rating) {
        params.push("r=" + options.rating)
    };
    if (options.backup) {
        params.push("d=" + encodeURIComponent(options.backup))
    };
    if (options.size) {
        params.push("s=" + options.size)
    };

    //now throw it all together
    return base + md5(email) + "?" + params.join("&");
}