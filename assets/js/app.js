'use strict';
const form = document.querySelector('.form-email');
const input = document.querySelector(".error-msg");
const errorSign = document.querySelector('.error-icon');
const buttonSubmit = document.querySelector('.btn-submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.elements.email.value;
    const testRegex = /.+\@.+\..+/;
    
    if(testRegex.test(email)) {
        window.alert("Your email was sent succesfully!");
    } else {
        input.classList.add("error-show");
        errorSign.classList.add("error-show");
        buttonSubmit.disabled = true;
        console.log('error')
    }
});

input.addEventListener('focus', () => {
    input.classList.remove('error-show');
    errorSign.classList.remove("error-show");
    submitButton.disabled = false;
});