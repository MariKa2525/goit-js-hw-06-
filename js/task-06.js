const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onIputBlur);

function onIputBlur() {
    if (inputEl.getAttribute('data-length') > inputEl.value.length) {
        inputEl.currentTarget = 
        inputEl.classList.add('valid');
    } else { inputEl.currentTarget = 
    inputEl.classList.add('invalid');
}
}