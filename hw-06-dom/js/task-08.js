const refs = {
  form: document.querySelector("form.login-form"),
};

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log({ email: email, password: password });
    form.reset();
  }
});
