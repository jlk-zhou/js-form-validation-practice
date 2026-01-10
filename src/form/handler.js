import { checkEmailInput } from "./validator";
function mountInputFocusHandler() {
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("focus", mountClickAwayHandler);
}

function mountClickAwayHandler() {
  window.addEventListener("click", clickAwayHandler);
}

function clickAwayHandler(event) {
  const emailInput = document.getElementById("email");
  if (event.target !== emailInput) {
    if (!checkEmailInput()) {
      mountHandlers();
    }
    window.removeEventListener("click", clickAwayHandler);
  }
}

function mountHandlers() {
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("input", checkEmailInput);
}

export { mountInputFocusHandler };
