const refs = {
  input: document.querySelector("input#font-size-control"),
  span: document.querySelector("span#text"),
};

refs.input.addEventListener("input", () => (refs.span.style.fontSize = `${refs.input.value}px`));
