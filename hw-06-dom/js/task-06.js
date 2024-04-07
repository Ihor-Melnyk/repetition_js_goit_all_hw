const refs = {
  input: document.querySelector("input#validation-input"),
};

refs.input.addEventListener("blur", () => {
  if (refs.input.dataset.length == refs.input.value.length) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
});
