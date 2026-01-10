function showEmailError() {
  const emailInput = document.getElementById("email");
  const emailError = document.querySelector(".email-error");

  if (emailInput.validity.valueMissing) {
    emailError.textContent = "Please enter an email address. ";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address. ";
  }

  emailInput.className = "invalid"; 
  emailError.className = "email-error active";
}

export { showEmailError };
