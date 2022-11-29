const refs = {
  bodyEl: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  text: document.querySelector('.widget > p'),
  span: document.querySelector('.color'),
};

console.log(refs.bodyEl)
refs.button.addEventListener('click', selectColor);

function selectColor() {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.span.textContent = color;
  console.log(refs.span)
  };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};