function showPostCodeError() {
  const postcodeInput = document.getElementById("postcode");
  const postcodeError = document.querySelector("#postcode ~ span.error");

  if (postcodeInput.validity.valueMissing) {
    postcodeError.textContent = "Please enter a postcode. ";
  } 

  postcodeInput.className = "invalid"; 
  postcodeError.className = "error active";
}

export { showPostCodeError };
