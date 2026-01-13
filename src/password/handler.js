import { checkPasswordInput } from "./validator";

function mountPasswordFocusHandler() {
  const passwordInput = document.getElementById("password");
  passwordInput.addEventListener("focus", mountPasswordClickAwayHandler);
}

function mountPasswordClickAwayHandler() {
  window.addEventListener("click", clickAwayHandler);
}

function clickAwayHandler(event) {
  const passwordInput = document.getElementById("password");
  if (event.target !== passwordInput) {
    checkPasswordInput(); 
    mountPasswordInputHandler(); 
    window.removeEventListener("click", clickAwayHandler);
  }
}

function mountPasswordInputHandler() {
  const passwordInput = document.getElementById("password");
  passwordInput.addEventListener("input", checkPasswordInput);
}

export { 
  mountPasswordFocusHandler, 
  mountPasswordInputHandler
};
