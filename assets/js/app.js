'use strict';
const form = document.querySelector('.form-email');
const input = document.querySelector("#email");
const buttonSubmit = document.querySelector('.btn-submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.elements.email.value;
    const testRegex = /.+\@.+\..+/;
    
    if(testRegex.test(email)) {
        window.alert("Your email was sent succesfully!");
    } else {
        input.classList.add("errorShow");
        buttonSubmit.disabled = true;
    }
});

input.addEventListener('focus', () => {
    input.classList.remove('errorShow');
    submitButton.disabled = false;
});