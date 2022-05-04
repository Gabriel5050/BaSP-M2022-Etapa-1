/* log in*/
window.onload = function() {
    var loginEmail = document.getElementById('email');
    var loginPassword = document.getElementById('password');
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailInlineAlert = document.createElement('p');
    var passwordInlineAlert = document.createElement('p');
    emailInlineAlert.textContent = "";
    passwordInlineAlert.textContent = "";
    loginEmail.addEventListener('blur', validateEmailB);
    loginEmail.addEventListener('focus', validateEmailF);
    loginPassword.addEventListener('blur', validatePasswordB);
    loginPassword.addEventListener('focus', validatePasswordF);

    function validateEmailB() {
        if (!emailRegExp.test(loginEmail.value)) {
            emailInlineAlert.textContent = "*The Email is not valid.";
            loginEmail.insertAdjacentElement('afterend', emailInlineAlert);
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
        if ((num == 0) || (char == 0) || (loginPassword.value.length < 8)) {
            passwordInlineAlert.textContent = "*The Password is not valid.";
            loginPassword.insertAdjacentElement('afterend', passwordInlineAlert);
            return false;
        } else {
            passwordInlineAlert.textContent = "";
            return true;
        }
    }
    function validatePasswordF() {
        passwordInlineAlert.remove();
    }

    // Button valid.

    var continueBtn = document.getElementById('continue-btn');
    continueBtn.addEventListener('click', btn);

    function urlString (email, password) {
        var urlArray = ["email="+email, "password="+password];
        return urlArray.join("&");
    }
    function btn() {
        if (validateEmailB() && validatePasswordB()) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?'+
            urlString(loginEmail.value,loginPassword.value))
                .then(function (response) {
                    return response.json();
                })
                .then(function (responseJson) {
                    alert(responseJson.msg);
                    if (responseJson.success == true) {
                        alert('Email: '+loginEmail.value+'  Password: '+loginPassword.value);
                        window.location.replace("../views/index.html");
                    } else {
                        alert('Incorrect login');
                    }
                })
                .catch(function(error) {
                    console.log(error);
            });
        } else {
            alert('Incorrect login');
        }
    }
}