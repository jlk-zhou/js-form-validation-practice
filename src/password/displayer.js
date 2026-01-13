function showPasswordError() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.querySelector("#password ~ span.error");

  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = "Please select a password. ";
  } else if (passwordInput.validity.patternMismatch) {
    passwordError.textContent =
      "Password must contain minimum 8 characters, at least 1 letter and 1 number. ";
  }

  passwordInput.className = "invalid";
  passwordError.className = "error active";
}

export { showPasswordError };
