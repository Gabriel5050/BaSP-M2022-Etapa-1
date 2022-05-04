/* sing-up */
window.onload = function() {

    // containsNumber? function.

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

    // Name and Surname valids.

    var signUpName = document.getElementById('name');
    var signUpSurname = document.getElementById('surname');
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
            nameInlineAlert.textContent = "*The Name is not valid.";
            signUpName.insertAdjacentElement('afterend', nameInlineAlert);
            return false;
        } else {
            nameInlineAlert.textContent = "";
            return true;
        }
    }
    function validateNameF() {
        nameInlineAlert.textContent = "";
    }

    function validateSurnameB() {
        var numm = 0;
        var numm = containsNumber(signUpSurname);
        if ((numm > 0) || (signUpSurname.value.length < 3)) {
            surnameInlineAlert.textContent = "*The Surname is not valid.";
            signUpSurname.insertAdjacentElement('afterend', surnameInlineAlert);
            return false;
        } else {
            surnameInlineAlert.textContent = "";
            return true;
        }
    }
    function validateSurnameF() {
        surnameInlineAlert.remove();
    }

    // DNI, phone number and ZIP code.

    var signUpDni = document.getElementById('dni');
    var signUpPhone = document.getElementById('phone-number');
    var signUpZip = document.getElementById('zip');
    var dniInlineAlert = document.createElement('p');
    var phoneInlineAlert = document.createElement('p');
    var zipInlineAlert = document.createElement('p');
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
            dniInlineAlert.textContent = "*The DNI is not valid.";
            signUpDni.insertAdjacentElement('afterend', dniInlineAlert);
            return false;
        } else {
            dniInlineAlert.textContent = "";
            return true;
        }
    }
    function validateDniF() {
        dniInlineAlert.remove();
    }

    function validatePhoneB() {
        var numm = 0;
        var numm = containsNumber(signUpPhone);
        if ((signUpPhone.value.length != numm) || (signUpPhone.value.length != 10)) {
            phoneInlineAlert.textContent = "*The Phone Number is not valid.";
            signUpPhone.insertAdjacentElement('afterend', phoneInlineAlert);
            return false;
        } else {
            phoneInlineAlert.textContent = "";
            return true;
        }
    }
    function validatePhoneF() {
        phoneInlineAlert.remove();
    }

    function validateZipB() {
        var numm = 0;
        var numm = containsNumber(signUpZip);
        if ((signUpZip.value.length != numm) || (signUpZip.value.length < 4) || (signUpZip.value.length > 5)) {
            zipInlineAlert.textContent = "*The ZIP code is not valid.";
            signUpZip.insertAdjacentElement('afterend', zipInlineAlert);
            return false;
        } else {
            zipInlineAlert.textContent = "";
            return true;
        }
    }
    function validateZipF() {
        zipInlineAlert.remove();
    }

    // Date of birth valid.

    var signUpDob = document.getElementById('dob');
    var dobInlineAlert = document.createElement('p');
    dobInlineAlert.textContent = "";
    signUpDob.addEventListener('blur', validateDobB);
    signUpDob.addEventListener('focus', validateDobF);

    function validateDobB() {
        if ((containsNumber(signUpDob) != 8) || (signUpDob.value[2] != '/') || (signUpDob.value[5] != '/') ||
        (Number(signUpDob.value[0]+signUpDob.value[1]) > 12) || (Number(signUpDob.value[3]+signUpDob.value[4]) > 31)
        || (Number(signUpDob.value[6]+signUpDob.value[7]+signUpDob.value[8]+signUpDob.value[9]) > 2004)) {
            dobInlineAlert.textContent = "*The Date of birth is not valid.";
            signUpDob.insertAdjacentElement('afterend', dobInlineAlert);
            return false;
        } else {
            dobInlineAlert.textContent = "";
            return true;
        }
    }
    function validateDobF() {
        dobInlineAlert.remove();
    }

    // Address and city valids.

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
            addressInlineAlert.textContent = "*The Address is not valid.";
            signUpAddress.insertAdjacentElement('afterend', addressInlineAlert);
            return false;
        } else {
            addressInlineAlert.textContent = "";
            return true;
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
            cityInlineAlert.textContent = "*The City is not valid.";
            signUpCity.insertAdjacentElement('afterend', cityInlineAlert);
            return false;
        } else {
            cityInlineAlert.textContent = "";
            return true;
        }
    }
    function validateCityF() {
        cityInlineAlert.remove();
    }

    // Email, password and Repeat password valids.

    var signUpEmail = document.getElementById('email');
    var signUpPassword = document.getElementById('password');
    var signUpRepPassword = document.getElementById('rep-password');
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailInlineAlert = document.createElement('p');
    var passwordInlineAlert = document.createElement('p');
    var repPasswordInlineAlert = document.createElement('p');
    emailInlineAlert.textContent = "";
    passwordInlineAlert.textContent = "";
    repPasswordInlineAlert.textContent = "";
    signUpEmail.addEventListener('blur', validateEmailB);
    signUpEmail.addEventListener('focus', validateEmailF);
    signUpPassword.addEventListener('blur', validatePasswordB);
    signUpPassword.addEventListener('focus', validatePasswordF);
    signUpRepPassword.addEventListener('blur', validateRepPasswordB);
    signUpRepPassword.addEventListener('focus', validateRepPasswordF);

    function validateEmailB() {
        if (!emailRegExp.test(signUpEmail.value)) {
            emailInlineAlert.textContent = "*The Email is not valid.";
            signUpEmail.insertAdjacentElement('afterend', emailInlineAlert);
            return false;
        } else {
            emailInlineAlert.textContent = "";
            return true;
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
            passwordInlineAlert.textContent = "*The Password is not valid.";
            signUpPassword.insertAdjacentElement('afterend', passwordInlineAlert);
            return false;
        } else {
            passwordInlineAlert.textContent = "";
            return true;
        }
    }
    function validatePasswordF() {
        passwordInlineAlert.remove();
    }

    function validateRepPasswordB() {
        if (signUpPassword.value != signUpRepPassword.value) {
            repPasswordInlineAlert.textContent = "* Repeat the password";
            signUpRepPassword.insertAdjacentElement('afterend', repPasswordInlineAlert);
            return false;
        } else {
            repPasswordInlineAlert.textContent = "";
            return true;
        }
    }
    function validateRepPasswordF() {
        repPasswordInlineAlert.remove();
    }

    // LocalStorage check.

    if (localStorage.getItem("name") != null) {
        signUpName.value = localStorage.getItem("name");
        signUpSurname.value = localStorage.getItem("lastname");
        signUpDni.value = localStorage.getItem("dni");
        signUpDob.value = localStorage.getItem("dob");
        signUpPhone.value = localStorage.getItem("phone");
        signUpAddress.value = localStorage.getItem("address");
        signUpCity.value = localStorage.getItem("city");
        signUpZip.value = localStorage.getItem("zip");
        signUpEmail.value = localStorage.getItem("email");
        signUpPassword.value = localStorage.getItem("password");
        signUpRepPassword.value = localStorage.getItem("password");
    }

    // Button valid.

    var continueBtn = document.getElementById('continue-btn');
    continueBtn.addEventListener('click', btn);

    function urlString (name, lastname, dni, dob, phone, address, city, zip, email, password) {
        var urlArray = ["name="+name, "lastName="+lastname, "dni="+dni, "dob="+dob, "phone="+phone, 
        "address="+address, "city="+city, "zip="+zip, "email="+email, "password="+password];
        return urlArray.join("&");
    }

    function btn() {
        if (validateNameB() && validateSurnameB() && validateDniB() && validatePhoneB() && validateZipB() && 
        validateDobB() && validateAddressB() && validateCityB() && validateEmailB() && validatePasswordB() && 
        validateRepPasswordB()) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?'+urlString(signUpName.value,
            signUpSurname.value,signUpDni.value,signUpDob.value,signUpPhone.value,signUpAddress.value,
            signUpCity.value,signUpZip.value,signUpEmail.value,signUpPassword.value))
                .then(function (response) {
                    return response.json();
                })
                .then(function (responseJson) {
                    alert(responseJson.msg);
                    alert('Complete name: '+signUpName.value+' '+signUpSurname.value+'   DNI: '+signUpDni.value+
                    '   Date of birth: '+signUpDob.value+'   Phone number: '+signUpPhone.value+'   Address: '+
                    signUpAddress.value+'   City: '+signUpCity.value+'   ZIP code: '+signUpZip.value+'   Email: '+
                    signUpEmail.value+'  Password: '+signUpPassword.value);
                    localStorage.setItem("name", signUpName.value);
                    localStorage.setItem("lastname", signUpSurname.value);
                    localStorage.setItem("dni", signUpDni.value);
                    localStorage.setItem("dob", signUpDob.value);
                    localStorage.setItem("phone", signUpPhone.value);
                    localStorage.setItem("address", signUpAddress.value);
                    localStorage.setItem("city", signUpCity.value);
                    localStorage.setItem("zip", signUpZip.value);
                    localStorage.setItem("email", signUpEmail.value);
                    localStorage.setItem("password", signUpPassword.value);
                    window.location.replace("../views/login.html");
                })
                .catch(function(error) {
                    console.log(error);
            });
        } else {
            alert('Incorrect login');
        }
    }
}