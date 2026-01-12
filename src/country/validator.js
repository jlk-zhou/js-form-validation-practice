import { showCountryError } from "./displayer";

function checkCountry() {
  const selectCountry = document.querySelector("select#country"); 
  if (!selectCountry.checkValidity()) {
    showCountryError(); 
  }; 
}

export { checkCountry };
