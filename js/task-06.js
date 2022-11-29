const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onIputBlur);

function onIputBlur() {
    if (inputEl.getAttribute('data-length') >= this.value.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else { 
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};