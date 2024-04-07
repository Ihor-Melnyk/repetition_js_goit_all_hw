function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};

function createBoxes(amount) {
  let boxes = "";
  for (let index = 0; index < amount; index++) {
    boxes += `<div style="width: ${30 + 10 * index}px; height: ${30 + 10 * index}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  refs.boxes.innerHTML = boxes;
}

refs.btnCreate.addEventListener("click", () => createBoxes(refs.input.value));

refs.btnDestroy.addEventListener("click", () => {
  refs.input.value = "";
  refs.boxes.innerHTML = "";
});
