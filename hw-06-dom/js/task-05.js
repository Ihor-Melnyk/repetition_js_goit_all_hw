const refs = {
  input: document.querySelector("input#name-input"),
  output: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", (e) => (e.currentTarget.value ? (refs.output.textContent = e.currentTarget.value) : (refs.output.textContent = "Anonymous")));
