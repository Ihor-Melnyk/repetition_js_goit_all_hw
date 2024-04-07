function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btn: document.querySelector("button.change-color"),
  span: document.querySelector("span.color"),
  body: document.querySelector("body"),
};

refs.btn.addEventListener("click", (e) => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
});
