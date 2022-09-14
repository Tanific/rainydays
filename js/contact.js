const form = document.querySelector("#wrapper-ContactForm");
const title = document.querySelector("#title");
const titleError = document.querySelector("#titleErr");
const question = document.querySelector ("#question")
const questionError = document.querySelector ("#questionErr")
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailErr");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressErr");

function validateForm(event) {
    event.preventDefault();

        if (validateLength(title.value, 1) === true) {
            titleError.style.display = "none";
        } else {
            titleError.style.display = "block";
        }

        if (validateLength(question.value, 20) === true) {
            questionError.style.display = "none";
        } else {
            questionError.style.display = "block";
        }

        if (validateEmail(email.value) === true) {
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
        }

        if (validateLength(address.value, 5) === true) {
            addressError.style.display = "none";
        } else {
            addressError.style.display = "block";
        }

}

function validateLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validPattern = regEx.test(email);
    return validPattern;
}

form.addEventListener("submit", validateForm);