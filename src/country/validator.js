import { showCountryError } from "./displayer";

function checkCountry() {
  const selectCountry = document.querySelector("select#country"); 
  const selectCountryError = document.querySelector("select#country ~ span.error"); 
  if (selectCountry.checkValidity()) {
    selectCountry.className = ""; 
    selectCountryError.textContent = ""; 
    selectCountryError.className = "error"; 
  } else {
    showCountryError(); 
  }; 
}

export { checkCountry };
