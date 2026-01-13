import { checkEmailInput } from "../email/validator";
import { mountHandlers } from "../email/handler";
import { checkCountry } from "../country/validator";
import { checkPostcodeInput } from "../postcode/validator";
import { mountPostcodeInputHandler } from "../postcode/handler";
import { checkPasswordInput } from "../password/validator";
import { mountPasswordInputHandler } from "../password/handler";
import { checkPwdConfirmInput } from "../password-confirm/validator";
import { mountPwdConfirmInputHandler } from "../password-confirm/handler";

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

    if (!checkPasswordInput()) {
      mountPasswordInputHandler();
    }

    if (!checkPwdConfirmInput()) {
      mountPwdConfirmInputHandler(); 
    }
    
  } else {
    highFive.textContent = "Form looks perfect! Gimme five ✋";
  }
}

export { submitHandler };
