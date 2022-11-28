const refs = {
  bodyEl: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  text: document.querySelector('.widget > p'),
  span: document.querySelector('.color'),
};

refs.button.addEventListener('click', selectColor);

function selectColor() {
  const color = getRandomHexColor();
  refs.text.style.color = color;
  refs.span.textContent = color;
  };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};