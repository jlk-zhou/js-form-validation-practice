import { showPasswordError } from "./displayer";

function checkPasswordInput() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.querySelector("#password ~ span.error");

  passwordInput.checkValidity();
  if (passwordInput.validity.valid) {
    passwordInput.className = "";
    passwordError.textContent = "";
    passwordError.className = "error";
    return true;
  } else {
    showPasswordError();
    return false;
  }
}

export { checkPasswordInput };
