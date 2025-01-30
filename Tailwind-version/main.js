// all elements
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let form = document.getElementById("form");
let mmc = document.querySelectorAll

const showError = (element, message) => {
    let parentElement = element.parentElement;
    parentElement.classList = "form-control error";
    let small = parentElement.querySelector("small");
    small.innerText = message;

}

const showSuccess = (element, message) => {
    let parentElement = element.parentElement;
    parentElement.classList = "form-control success";
    let small = parentElement.querySelector("small");
    small.style.display = "none";

}


const checkEmpty = (elements) => {
    elements.forEach( (element) => {
        if(element.value === "") {
            showError(element, 'Input Required');
        }else {
            showSuccess(element);
        }
    });
}

const checkPasswordLength = (element, min, max) => {
    if(element.value.length < min) {
        showError(element, `Password must be at least ${min} characters`);
    }else if(element.value.length > max) {
        showError(element, `Password must be less than ${max} characters`);
    } else {
        showSuccess(element);
    }
}

// const checkconfirmPassword = (element) => {
//     if(element.value !== password.value) {
//         showError(element, 'Password does not match');
//     }else {
//         showSuccess(element);
//     }
// }

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkEmpty( [username, email, password, confirmPassword] );
    checkPasswordLength(password, 6, 10);
    checkPasswordLength(confirmPassword, 6, 10);
});