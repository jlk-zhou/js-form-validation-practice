import { checkEmailInput } from "./validator";

function mountHandlers() {
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("input", checkEmailInput);
}

export { mountHandlers };
