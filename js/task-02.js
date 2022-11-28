const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeIngredientList = ingredients => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredients;
  ingredientItem.classList.add('item');
  return ingredientItem;
};

const elements = ingredients.map(makeIngredientList);
listEl.append(...elements);