function checkPasswordInput() {
    const smallLettersRegex = /[a-z]/g;
    const bigLettersRegex = /[A-Z]/g;
    const specialCharactersRegex = /[!@#$%^&*)(+=._-]/g

    const noSmallLettersMessage = "Min. 1 mała litera";
    const noBigLettersMessage = "Min. 1 duża litera ";
    const noSpecialCharactersMessage = "Min. 1 znak specjalny";
    const notEnoughCharactersMessage = "Min. 8 znaków";

    const passwordValue = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "";
    if (!smallLettersRegex.test(passwordValue)) {
        addErrorMessage(passwordError, noSmallLettersMessage);
    }
    if (!bigLettersRegex.test(passwordValue)) {
        addErrorMessage(passwordError, noBigLettersMessage);
    }
    if (!specialCharactersRegex.test(passwordValue)) {
        addErrorMessage(passwordError, noSpecialCharactersMessage);
    }
    if (passwordValue.length < 8) {
        addErrorMessage(passwordError, notEnoughCharactersMessage);
    }
    if (passwordValue.length === 0) {
        passwordError.innerHTML = "";
    }
    checkIfPasswordIsTheSame();
}

function addErrorMessage(passwordError, message) {
    return passwordError.innerHTML += "<p>" + message + "</p>";
}

function checkIfPasswordIsTheSame() {
    const passwordValue = document.getElementById("password").value;
    const repeatedPasswordValue = document.getElementById("repeatedPassword").value;
    const repeatedPasswordError = document.getElementById("repeatedPasswordError");
    const missMatchError = "Hasła są różne!"

    if (repeatedPasswordValue === passwordValue) {
        repeatedPasswordError.innerHTML = "";
    } else {
        repeatedPasswordError.innerHTML = missMatchError;
    }
}

