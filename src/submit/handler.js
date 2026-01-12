import { checkEmailInput } from "../email/validator";
import { mountHandlers } from "../email/handler";
import { checkCountry } from "../country/validator";

function submitHandler(event) {
  const highFive = document.querySelector(".high-five");
  event.preventDefault();
  const form = document.querySelector("form");
  if (!form.checkValidity()) {
    if (!checkEmailInput()) {
        mountHandlers();
    }
    checkCountry(); 
  } else {
    highFive.textContent = "Form looks perfect! Gimme five ✋";
  }
}

export { submitHandler };
