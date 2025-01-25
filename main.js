// All Elements

let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

const showError = (element, message) => {
    let parentElement = element.parentElement;
    parentElement.classList = "form-control error";
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = "visible";
    successIcon.style.visibility = "hidden";
    let small = parentElement.querySelector("small");
    small.innerText = message;

}

const showSuccess = (element) => {
    let parentElement = element.parentElement;
    parentElement.classList = "form-control success";
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = "hidden";
    successIcon.style.visibility = "visible";

}

const checkEmpty = (elements) => {
    elements.forEach( (element) =>  {
        if (element.value === "") {
            showError(element, 'Input Required');
        }else {
            showSuccess(element);
        }
    });
}

const checkEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email.value)) {
        showSuccess(email);
    }else {
        showError(email, 'Invalid email');
    }
}

const checkPasswordLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `Password must be atleast ${min} characters.`);
    }else if(input.value.length > max) {
        showError(input, `Password must be maximum ${max} characters.`);
    }else {
        showSuccess(input);
    }
}


form.addEventListener('submit', (event)=> {
    event.preventDefault();

    checkEmpty( [username, email, password, confirmPassword] );

    checkEmail(email);

    checkPasswordLength(password, 6, 10);
    checkPasswordLength(confirmPassword, 6, 10);

});