import { showPostCodeError } from "./displayer";

function checkPostcodeInput() {
  const postcodeInput = document.getElementById("postcode");
  const postcodeError = document.querySelector("#postcode ~ span.error");

  postcodeInput.checkValidity();
  if (postcodeInput.validity.valid) {
    postcodeInput.className = "";
    postcodeError.textContent = "";
    postcodeError.className = "error";
    return true;
  } else {
    showPostCodeError();
    return false;
  }
}

export { checkPostcodeInput };
