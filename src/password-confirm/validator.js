import { showPwdConfirmError } from "./displayer";

function checkPwdConfirmInput() {
  const pwdConfirmInput = document.getElementById("confirm-password");
  const pwdConfirmError = document.querySelector("#confirm-password ~ span.error");
  const passwordInput = document.getElementById("password"); 
  const password = passwordInput.value; 
  const confirmPassword = pwdConfirmInput.value; 

  pwdConfirmInput.checkValidity();
  if (pwdConfirmInput.validity.valid && password === confirmPassword) {
    pwdConfirmInput.className = "";
    pwdConfirmError.textContent = "";
    pwdConfirmError.className = "error";
    return true;
  } else {
    showPwdConfirmError();
    return false;
  }
}

export { checkPwdConfirmInput };
