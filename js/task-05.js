const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onIputChange);

function onIputChange(event) {
    event.preventDefault();
    if (refs.spanEl === "") {
        refs.spanEl.textContent; 
    } else {
        refs.spanEl.textContent = event.currentTarget.value;
    }
}