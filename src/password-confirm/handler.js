import { checkPwdConfirmInput } from "./validator";

function mountPwdConfirmFocusHandler() {
  const pwdConfirmInput = document.getElementById("confirm-password");
  pwdConfirmInput.addEventListener("focus", mountPwdConfirmClickAwayHandler);
}

function mountPwdConfirmClickAwayHandler() {
  window.addEventListener("click", clickAwayHandler);
}

function clickAwayHandler(event) {
  const pwdConfirmInput = document.getElementById("confirm-password");
  if (event.target !== pwdConfirmInput) {
    checkPwdConfirmInput(); 
    mountPwdConfirmInputHandler(); 
    window.removeEventListener("click", clickAwayHandler);
  }
}

function mountPwdConfirmInputHandler() {
  const pwdConfirmInput = document.getElementById("confirm-password");
  pwdConfirmInput.addEventListener("input", checkPwdConfirmInput);
}

export { 
  mountPwdConfirmFocusHandler, 
  mountPwdConfirmInputHandler
};
