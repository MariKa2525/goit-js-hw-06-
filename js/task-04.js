const actions = document.querySelector("#counter");
const decrementActionsButton = document.querySelector("[data-action = 'decrement']");
const incrementActionsButton = document.querySelector("[data-action = 'increment']");
const spanValue = document.querySelector("#value");

let counterValue = 0;

decrementActionsButton.addEventListener('click', () => {
    counterValue -=1;
    spanValue.textContent = counterValue;
});

incrementActionsButton.addEventListener('click', () => {
    counterValue +=1;
    spanValue.textContent = counterValue;
});
