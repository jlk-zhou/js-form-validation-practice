import { showEmailError } from "./displayer";

function checkEmailInput() {
  const emailInput = document.getElementById("email"); 
  const emailError = document.querySelector(".email-error"); 

  emailInput.checkValidity(); 
  if (emailInput.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "email-error"; 
  } else {
    showEmailError(); 
  }

}

export {
  checkEmailInput, 
}; 