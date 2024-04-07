let counterValue = 0;
const refs = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  span: document.querySelector("#value"),
};
refs.btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  refs.span.textContent = counterValue;
});
refs.btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  refs.span.textContent = counterValue;
});
