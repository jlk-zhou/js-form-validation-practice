import { showEmailError } from "./displayer";

function checkEmailInput() {
  const emailInput = document.getElementById("email"); 
  const emailError = document.querySelector(".email-error"); 

  emailInput.checkValidity(); 
  if (emailInput.validity.valid) {
    emailInput.className = ""; 
    emailError.textContent = ""; 
    emailError.className = "email-error"; 
    return true; 
  } else {
    showEmailError(); 
    return false; 
  }

}

export {
  checkEmailInput, 
}; 