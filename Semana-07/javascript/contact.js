window.onload = function() {

    // containsNumber function.

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

    // Name validation.

    var signUpName = document.getElementById('name');
    var nameInlineAlert = document.createElement('p');
    nameInlineAlert.textContent = "";
    signUpName.addEventListener('blur', validateNameB);
    signUpName.addEventListener('focus', validateNameF);

    function validateNameB() {
        var numm = 0;
        var numm = containsNumber(signUpName);
        if ((numm > 0) || (signUpName.value.length < 3)) {
            nameInlineAlert.textContent = "* Name is not valid.";
            nameInlineAlert.style.color = 'red';
            signUpName.insertAdjacentElement('afterend', nameInlineAlert);
        } else {
            nameInlineAlert.textContent = "";
        }
    }
    function validateNameF() {
        nameInlineAlert.remove();
    }

    // Email valid.

    var signUpEmail = document.getElementById('email');
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailInlineAlert = document.createElement('p');
    emailInlineAlert.textContent = "";

    signUpEmail.addEventListener('blur', validateEmailB);
    signUpEmail.addEventListener('focus', validateEmailF);


    function validateEmailB() {
        if (!emailRegExp.test(signUpEmail.value)) {
            emailInlineAlert.textContent = "* Email is not valid.";
            emailInlineAlert.style.color = 'red';
            signUpEmail.insertAdjacentElement('afterend', emailInlineAlert);
        } else {
            emailInlineAlert.textContent = "";
        }
    }
    function validateEmailF() {
        emailInlineAlert.remove();
    }

    // Dropdown selection.

    var dropdownButton = document.getElementsByClassName('dropbtn');
    var dropdownListHuman = document.getElementById('human-r');
    var dropdownListSystems = document.getElementById('systems');
    var dropdownListCommer = document.getElementById('commer');
    var ok = 0;
    dropdownListHuman.addEventListener('click', dropdownHumanSelected);
    dropdownListSystems.addEventListener('click', dropdownSystemsSelected);
    dropdownListCommer.addEventListener('click', dropdownCommerSelected);

    function dropdownHumanSelected() {
        ok = 1;
        dropdownButton[0].innerText = dropdownListHuman.innerText;
        dropdownButton[0].style.color = '#000';
        dropdownButton[0].style.fontWeight = 'bold';
    }
    function dropdownSystemsSelected() {
        ok = 1;
        dropdownButton[0].innerText = dropdownListSystems.innerText;
        dropdownButton[0].style.color = '#000';
        dropdownButton[0].style.fontWeight = 'bold';
    }
    function dropdownCommerSelected() {
        ok = 1;
        dropdownButton[0].innerText = dropdownListCommer.innerText;
        dropdownButton[0].style.color = '#000';
        dropdownButton[0].style.fontWeight = 'bold';
    }

    // Enter your message valid.

    var signUpEnterYourMessage = document.getElementById('enter-your-message');
    var enterYourMessageInlineAlert = document.createElement('p');
    enterYourMessageInlineAlert.textContent = "";
    signUpEnterYourMessage.addEventListener('blur', validateEnterYourMessageB);
    signUpEnterYourMessage.addEventListener('focus', validateEnterYourMessageF);

    function validateEnterYourMessageB() {
        var numm = 0;
        var numm = containsNumber(signUpEnterYourMessage);
        var char = 0;
        if (signUpEnterYourMessage.value.length != numm) {
            char = 1;
        }
        if ((numm == 0) || (char == 0) || (signUpEnterYourMessage.value.length < 3)) {
            enterYourMessageInlineAlert.textContent = "*The Message is not valid.";
            enterYourMessageInlineAlert.style.color = 'red';
            signUpEnterYourMessage.insertAdjacentElement('afterend', enterYourMessageInlineAlert);
        } else {
            enterYourMessageInlineAlert.textContent = "";
        }
    }
    function validateEnterYourMessageF() {
        enterYourMessageInlineAlert.remove();
    }

    var continueBtn = document.getElementById('button1');
    continueBtn.addEventListener('click', btn);

    function btn() {
        if ((signUpName.value.length != 0) && (nameInlineAlert.textContent == "") && 
        (signUpEmail.value.length != 0) && (emailInlineAlert.textContent == "") && (ok == 1) && 
        (signUpEnterYourMessage.value.length != 0) && (enterYourMessageInlineAlert.textContent == "")) {
            alert('The Message has been sent correctrly');
            alert('Name: '+signUpName.value+'   Email: '+signUpEmail.value+'    Area: '+dropdownButton[0].innerText+
            '   Message: '+signUpEnterYourMessage.value);
        } else {
            alert('The Message has not been sent');
        }
    }
}