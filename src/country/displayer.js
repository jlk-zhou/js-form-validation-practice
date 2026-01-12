function showCountryError() {
  const selectCountry = document.querySelector("select#country"); 
  const selectCountryError = document.querySelector("select#country ~ span.error"); 

  if (selectCountry.validity.valueMissing) {
    selectCountryError.textContent = "Please select a country. "; 
  }

  selectCountry.className = "invalid"; 
  selectCountryError.className = "error active"; 
}

export { showCountryError };
