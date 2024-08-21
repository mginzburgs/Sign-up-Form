function validatePassword(event) {
  event.preventDefault();

  let passfield1 = document.getElementById("password").value;
  let passfield2 = document.getElementById("passwordConfirm").value;
  let errorMessage = document.querySelector(".form-field__error");

  if (passfield1 && passfield1 === passfield2) {
    errorMessage.classList.remove("active");
    this.submit();
  } else {
    errorMessage.classList.add("active");
    return;
  }
}

document
  .querySelector(".body__form")
  .addEventListener("submit", validatePassword);
