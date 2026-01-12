import { checkEmailInput } from "../email/validator";
import { mountHandlers } from "../email/handler";
import { checkCountry } from "../country/validator";
import { checkPostcodeInput } from "../postcode/validator";
import { mountPostcodeInputHandler } from "../postcode/handler";

function submitHandler(event) {
  const highFive = document.querySelector(".high-five");
  event.preventDefault();
  const form = document.querySelector("form");
  if (!form.checkValidity()) {
    if (!checkEmailInput()) {
      mountHandlers();
    }
    checkCountry(); 
    if (!checkPostcodeInput()) {
      mountPostcodeInputHandler(); 
    }
  } else {
    highFive.textContent = "Form looks perfect! Gimme five ✋";
  }
}

export { submitHandler };
