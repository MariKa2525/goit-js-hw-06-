const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);

const liEl = document.querySelectorAll('.item');

liEl.forEach( (element) => {
    const nameCategory = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${nameCategory} \n Elements: ${itemsLength}`);
});