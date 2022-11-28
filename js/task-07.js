const inputEl = document.querySelector('#font-size-control');
const nameLable = document.querySelector('#text');

inputEl.addEventListener('change', onInputChange);

function onInputChange() {
    nameLable.style.fontSize = `${inputEl.value}px`;
};
