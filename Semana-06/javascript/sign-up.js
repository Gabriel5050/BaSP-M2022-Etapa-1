window.onload = function() {

    // function.

    function containsNumber(val) {
        var numbers = [0,1,2,3,4,5,6,7,8,9];
        var num = 0;
        for (i=0; i < val.value.length; i++) {
            for (j=0; j < 10; j++) {
                if ((val.value[i] == numbers[j]) && (val.value[i] != ' ')) {
                    num++;
                }
            }
        }
        return num;
    }

    // Name and Last name.

    var signUpName = document.getElementById("Name");
    var signUpSurname = document.getElementById("LastName");
    var nameInlineAlert = document.createElement('p');
    var surnameInlineAlert = document.createElement('p');
    nameInlineAlert.textContent = "";
    surnameInlineAlert.textContent = "";
    signUpName.addEventListener('blur', validateNameB);
    signUpName.addEventListener('focus', validateNameF);
    signUpSurname.addEventListener('blur', validateSurnameB);
    signUpSurname.addEventListener('focus', validateSurnameF);

    function validateNameB() {
        var numm = 0;
        var numm = containsNumber(signUpName);
        if ((numm > 0) || (signUpName.value.length < 3)) {
            nameInlineAlert.textContent = "* Name Error.";
            signUpName.insertAdjacentElement('afterend', nameInlineAlert);
        } else {
            nameInlineAlert.textContent = "";
        }
    }
    function validateNameF() {
        nameInlineAlert.remove();
    }

    function validateSurnameB() {
        var numm = 0;
        var numm = containsNumber(signUpSurname);
        if ((numm > 0) || (signUpSurname.value.length < 3)) {
            surnameInlineAlert.textContent = "* Last Name Error.";
            signUpSurname.insertAdjacentElement("afterend", surnameInlineAlert);
        } else {
            surnameInlineAlert.textContent = "";
        }
    }
    function validateSurnameF() {
        surnameInlineAlert.remove();
    }

    // DNI, phone number and ZIP code.

    var signUpDni = document.getElementById("dni");
    var signUpPhone = document.getElementById("phone");
    var signUpZip = document.getElementById("zip");
    var dniInlineAlert = document.createElement("p");
    var phoneInlineAlert = document.createElement("p");
    var zipInlineAlert = document.createElement("p");
    dniInlineAlert.textContent = "";
    phoneInlineAlert.textContent = "";
    zipInlineAlert.textContent = "";
    signUpDni.addEventListener('blur', validateDniB);
    signUpDni.addEventListener('focus', validateDniF);
    signUpPhone.addEventListener('blur', validatePhoneB);
    signUpPhone.addEventListener('focus', validatePhoneF);
    signUpZip.addEventListener('blur', validateZipB);
    signUpZip.addEventListener('focus', validateZipF);

    function validateDniB() {
        var numm = 0;
        var numm = containsNumber(signUpDni);
        if ((numm != signUpDni.value.length) || (signUpDni.value.length < 7)) {
            dniInlineAlert.textContent = "* DNI Error.";
            signUpDni.insertAdjacentElement('afterend', dniInlineAlert);
        } else {
            dniInlineAlert.textContent = "";
        }
    }
    function validateDniF() {
        dniInlineAlert.remove();
    }

    function validatePhoneB() {
        var numm = 0;
        var numm = containsNumber(signUpPhone);
        if ((signUpPhone.value.length != numm) || (signUpPhone.value.length != 10)) {
            phoneInlineAlert.textContent = "* Phone Error.";
            signUpPhone.insertAdjacentElement('afterend', phoneInlineAlert);
        } else {
            phoneInlineAlert.textContent = "";
        }
    }
    function validatePhoneF() {
        phoneInlineAlert.remove();
    }

    function validateZipB() {
        var numm = 0;
        var numm = containsNumber(signUpZip);
        if ((signUpZip.value.length != numm) || (signUpZip.value.length < 4) || (signUpZip.value.length > 5)) {
            zipInlineAlert.textContent = "* ZIP code Error";
            signUpZip.insertAdjacentElement('afterend', zipInlineAlert);
        } else {
            zipInlineAlert.textContent = "";
        }
    }
    function validateZipF() {
        zipInlineAlert.remove();
    }

    // Date of birth valid.

    var signUpDob = document.getElementById("birth");
    var dobInlineAlert = document.createElement('p');
    dobInlineAlert.textContent = "";
    signUpDob.addEventListener('blur', validateDobB);
    signUpDob.addEventListener('focus', validateDobF);

    function validateDobB() {
        if ((containsNumber(signUpDob) != 8) || (signUpDob.value[2] != "/") 
        || (signUpDob.value[5] != "/") 
        || (Number(signUpDob.value[0]+signUpDob.value[1]) > 31) 
        || (Number(signUpDob.value[3]+signUpDob.value[4]) > 12)
        || (Number(signUpDob.value[6]+signUpDob.value[7]+signUpDob.value[8]
            +signUpDob.value[9]) > 2004)) {
            dobInlineAlert.textContent = "* Date of birth Error";
            signUpDob.insertAdjacentElement("afterend", dobInlineAlert);
        } else {
            dobInlineAlert.textContent = "";
        }
    }
    function validateDobF() {
        dobInlineAlert.remove();
    }

    // Personal data

    var signUpAddress = document.getElementById('address');
    var signUpCity = document.getElementById('city');
    var addressInlineAlert = document.createElement('p');
    var cityInlineAlert = document.createElement('p');
    addressInlineAlert.textContent = "";
    cityInlineAlert.textContent = "";
    signUpAddress.addEventListener('blur', validateAddressB);
    signUpAddress.addEventListener('focus', validateAddressF);
    signUpCity.addEventListener('blur', validateCityB);
    signUpCity.addEventListener('focus', validateCityF);

    function containsSpace(val) {
        var space = 0;
        for (i=0; i < 10; i++) {
            if (val.value[i] == ' ') {
                space++;
            }
        }
        return space;
    }

    function validateAddressB() {
        var numm = 0;
        var numm = containsNumber(signUpAddress);
        var char = 0;
        var spacee = 0;
        spacee = containsSpace(signUpAddress);
        if (signUpAddress.value.length != numm) {
            char = 1;
        }
        if ((numm == 0) || (char == 0) || (signUpAddress.value.length < 5) || (spacee == 0)) {
            addressInlineAlert.textContent = "* Address Error.";
            signUpAddress.insertAdjacentElement('afterend', addressInlineAlert);
        } else {
            addressInlineAlert.textContent = "";
        }
    }
    function validateAddressF() {
        addressInlineAlert.remove();
    }
    
    function validateCityB() {
        var numm = 0;
        var numm = containsNumber(signUpCity);
        var char = signUpCity.value.length - numm;
        if (char < 3) {
            cityInlineAlert.textContent = "* City Error.";
            signUpCity.insertAdjacentElement('afterend', cityInlineAlert);
        } else {
            cityInlineAlert.textContent = "";
        }
    }
    function validateCityF() {
        cityInlineAlert.remove();
    }

    // Passwords

    var signUpEmail = document.getElementById("email");
    var signUpPassword = document.getElementById("password");
    var signUpRepPassword = document.getElementById("r-password");
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailInlineAlert = document.createElement("p");
    var passwordInlineAlert = document.createElement("p");
    var repPasswordInlineAlert = document.createElement("p");
    emailInlineAlert.textContent = "";
    passwordInlineAlert.textContent = "";
    repPasswordInlineAlert.textContent = "";
    signUpEmail.addEventListener("blur", validateEmailB);
    signUpEmail.addEventListener("focus", validateEmailF);
    signUpPassword.addEventListener("blur", validatePasswordB);
    signUpPassword.addEventListener("focus", validatePasswordF);
    signUpRepPassword.addEventListener("blur", validateRepPasswordB);
    signUpRepPassword.addEventListener("focus", validateRepPasswordF);

    function validateEmailB() {
        if (!emailRegExp.test(signUpEmail.value)) {
            emailInlineAlert.textContent = "* Email Error.";
            signUpEmail.insertAdjacentElement("afterend", emailInlineAlert);
        } else {
            emailInlineAlert.textContent = "";
        }
    }
    function validateEmailF() {
        emailInlineAlert.remove();
    }
    
    function validatePasswordB() {
        var char = 0;
        var numm = 0;
        var numm = containsNumber(signUpPassword);
        if (signUpPassword.value.length != numm) {
            char = 1;
        }
        if ((numm == 0) || (char == 0) || (signUpPassword.value.length < 8)) {
            passwordInlineAlert.textContent = "* Password Error.";
            signUpPassword.insertAdjacentElement("afterend", passwordInlineAlert);
        } else {
            passwordInlineAlert.textContent = "";
        }
    }
    function validatePasswordF() {
        passwordInlineAlert.remove();
    }

    function validateRepPasswordB() {
        if (signUpPassword.value != signUpRepPassword.value) {
            repPasswordInlineAlert.textContent = "* Password must be the same.";
            signUpPassword.insertAdjacentElement("afterend", repPasswordInlineAlert);
        } else {
            repPasswordInlineAlert.textContent = "";
        }
    }
    function validateRepPasswordF() {
        repPasswordInlineAlert.remove();
    }

    var continueBtn = document.getElementById("continue");
    continueBtn.addEventListener("click", btn);

    function btn() {
        if ((signUpCity.value.length != 0) && (cityInlineAlert.textContent == "") && (signUpAddress.value.length != 0) 
        && (addressInlineAlert.textContent == "") && (signUpDob.value.length != 0) && 
        (dobInlineAlert.textContent == "") && (signUpZip.value.length != 0) && (zipInlineAlert.textContent == "") 
        && (signUpPhone.value.length != 0) && (phoneInlineAlert.textContent == "") && (signUpDni.value.length != 0) 
        && (dniInlineAlert.textContent == "") && (signUpSurname.value.length != 0) && 
        (surnameInlineAlert.textContent == "") && (signUpName.value.length != 0) && 
        (nameInlineAlert.textContent == "") && (signUpEmail.value.length != 0) && (signUpPassword.value.length != 0) 
        && (emailInlineAlert.textContent == "") && (passwordInlineAlert.textContent == "") && 
        (signUpPassword.value == signUpRepPassword.value)) {
            alert("Login successfull");
            alert("Complete name: "+signUpName.value+" "+signUpSurname.value+"   DNI: "+signUpDni.value+
            "   Date of birth: "+signUpDob.value+"   Phone number: "+signUpPhone.value+"   Address: "+
            signUpAddress.value+"   City: "+signUpCity.value+"   ZIP code: "+signUpZip.value+"   Email: "+
            signUpEmail.value+"  Password: "+signUpPassword.value);
        } else {
            alert("Incorrect login");
        }
    }
}