import { showEmailError } from "./displayer";

function checkEmailInput() {
  const emailInput = document.getElementById("email"); 
  const emailError = document.querySelector("#email ~ span.error"); 

  emailInput.checkValidity(); 
  if (emailInput.validity.valid) {
    emailInput.className = ""; 
    emailError.textContent = ""; 
    emailError.className = "error"; 
    return true; 
  } else {
    showEmailError(); 
    return false; 
  }

}

export {
  checkEmailInput, 
}; 