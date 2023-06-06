const first_name = document.getElementById('first-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const last_name = document.getElementById('last-name');
const phone_number = document.getElementById('phone-number');
const confirm_password = document.getElementById('confirm-password');
const form = document.querySelector('form');

const first_name_error = document.getElementById('first-name-error');
const email_error = document.getElementById('email-error');
const password_error = document.getElementById('password-error');
const last_name_error = document.getElementById('last-name-error');
const phone_number_error = document.getElementById('phone-number-error');
const confirm_password_error = document.getElementById('confirm-password-error');

first_name.addEventListener("input", (e) => {
    if (first_name.validity.tooShort) {
        first_name_error.textContent = "First Name needs to have at least 3 characters";
        first_name_error.style.display = 'inline-block';
    }
    else if(first_name.validity.valueMissing) {
        first_name_error.textContent = "First Name is required";
        first_name_error.style.display = 'inline-block';
    }
    else if (first_name.checkValidity()) {
        first_name_error.textContent = '';
        first_name_error.style.display = 'none';
    }
});

email.addEventListener("input", (e) => {
    if (email.validity.tooShort) {
        email_error.textContent = "Email needs to have at least 8 characters";
        email_error.style.display = 'inline-block';
    }
    else if (email.validity.typeMismatch) {
        email_error.textContent = "Please enter a valid email address";
        email_error.style.display = 'inline-block';
    }
    else if(email.validity.valueMissing) {
        email_error.textContent = "Email is required";
        email_error.style.display = 'inline-block';

    }
    else if (email.checkValidity()) {
        email_error.textContent = '';
        email_error.style.display = 'none';
    }
});

password.addEventListener("input", (e) => {
    if (password.validity.tooShort) {
        password_error.textContent = "Password needs to have at least 8 characters";
        password_error.style.display = 'inline-block';
    }
    else if(password.validity.valueMissing) {
        password_error.textContent = "Password is required";
        password_error.style.display = 'inline-block';
    }
    else if (password.checkValidity()) {
        password_error.textContent = '';
        password_error.style.display = 'none';
    }
});

last_name.addEventListener("input", (e) => {
    if (last_name.validity.tooShort) {
        last_name_error.textContent = "Last Name needs to have at least 3 characters";
        last_name_error.style.display = 'inline-block';
    }
    else if(last_name.validity.valueMissing) {
        last_name_error.textContent = "Last Name is required";
        last_name_error.style.display = 'inline-block';
    }
    else if (last_name.checkValidity()) {
        last_name_error.textContent = '';
        last_name_error.style.display = 'none';
    }
});

phone_number.addEventListener("input", (e) => {
    if (phone_number.validity.tooShort) {
        phone_number_error.textContent = "Phone Number needs to have at least 4 characters";
        phone_number_error.style.display = 'inline-block';
    }
    else if(phone_number.validity.valueMissing) {
        phone_number_error.textContent = "Phone Number is required";
        phone_number_error.style.display = 'inline-block';
    }
    else if (phone_number.validity.patternMismatch) {
        phone_number_error.textContent = "Please enter a valid Phone Number";
        phone_number_error.style.display = 'inline-block';
    }
    else if (phone_number.checkValidity()) {
        phone_number_error.textContent = '';
        phone_number_error.style.display = 'none';
    }
});

confirm_password.addEventListener("input", (e) => {
    if (confirm_password.validity.tooShort) {
        confirm_password_error.textContent = "Password needs to have at least 8 characters";
        confirm_password_error.style.display = 'inline-block';
    }
    else if(confirm_password.validity.valueMissing) {
        confirm_password_error.textContent = "Password is required";
        confirm_password_error.style.display = 'inline-block';
    }
    else if (confirm_password.checkValidity()) {
        confirm_password_error.textContent = '';
        confirm_password_error.style.display = 'none';
    }
});

form.addEventListener("submit", (e) => {
    let pass1 = password.value;
    let pass2 = confirm_password.value;
    if (form.checkValidity()) {
        if (pass1 == pass2) {
            confirm_password_error.textContent = "";
            confirm_password_error.style.display = 'none';
        }
        else {
            confirm_password_error.textContent = "Passwords do not match";
            confirm_password_error.style.display = 'inline-block';
            e.preventDefault();
        }
    }
    else {
        e.preventDefault();
    }
})