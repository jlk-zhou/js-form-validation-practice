function showPwdConfirmError() {
  const pwdConfirmInput = document.getElementById("confirm-password");
  const pwdConfirmError = document.querySelector(
    "#confirm-password ~ span.error"
  );

  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  const confirmPassword = pwdConfirmInput.value;

  if (pwdConfirmInput.validity.valueMissing) {
    pwdConfirmError.textContent = "Please type the same password again here. ";
  } else if (password !== confirmPassword) {
    pwdConfirmError.textContent =
      "The passwords you have entered are different. ";
  }

  pwdConfirmInput.className = "invalid";
  pwdConfirmError.className = "error active";
}

export { showPwdConfirmError };
