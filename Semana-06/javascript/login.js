window.onload = function() {
    var loginEmail = document.getElementById("email");
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var loginPassword = document.getElementById("password");
    var emailInlineAlert = document.createElement("p");
    var passwordInlineAlert = document.createElement("p");
    emailInlineAlert.textContent = " ";
    passwordInlineAlert.textContent = " ";
    loginEmail.addEventListener("blur", validateEmailB);
    loginEmail.addEventListener("focus", validateEmailF);
    loginPassword.addEventListener("blur", validatePasswordB);
    loginPassword.addEventListener("focus", validatePasswordF);

    function validateEmailB() {
        if (!emailRegExp.test(loginEmail.value)) {
            emailInlineAlert.textContent = "* Email Error";
            loginEmail.insertAdjacentElement("afterend", emailInlineAlert);
        } else {
            emailInlineAlert.textContent = " ";
        }
    }
    function validateEmailF() {
        emailInlineAlert.remove();
    }
    
    function validatePasswordB() {
        var numbers = [0,1,2,3,4,5,6,7,8,9];
        var num = 0;
        var char = 0;
        for (i=0; i < loginPassword.value.length; i++) {
            for (j=0; j < 10; j++) {
                if (loginPassword.value[i] == numbers[j]) {
                    num++;
                }
            }
        }
        if (loginPassword.value.length != num) {
            char = 1;
        }
        if ((numm == 0) || (char == 0) || (signUpPassword.value.length < 8)) {
            passwordInlineAlert.textContent = "* Password Error";
            loginPassword.insertAdjacentElement('afterend', passwordInlineAlert);
        } else {
            passwordInlineAlert.textContent = " ";
        }
    }
    function validatePasswordF() {
        passwordInlineAlert.remove();
    }

    var continueBtn = document.getElementById('continue');
    continueBtn.addEventListener('click', btn);

    function btn() {
        if ((loginEmail.value.length != 0) && (loginPassword.value.length != 0) &&
            (passwordInlineAlert.textContent == " ") && (emailInlineAlert.textContent == " ")) {
            alert('Login successfull');
            alert('Email: '+loginEmail.value+'  Password: '+loginPassword.value);
        } else {
            alert('Incorrect login');
        }
    }
}