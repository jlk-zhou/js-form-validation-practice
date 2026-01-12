import { checkCountry } from "./validator";

function mountCountryFocusHandler() {
  const selectCountry = document.querySelector("select#country");
  selectCountry.addEventListener("focus", mountCountryClickAwayHandler);
}

function mountCountryClickAwayHandler() {
  const selectCountry = document.querySelector("select#country");
  selectCountry.addEventListener("blur", countryClickAwayHandler); 
}

function countryClickAwayHandler() {
  checkCountry(); 
  mountCountryHandler(); 
}

function mountCountryHandler() {
  const selectCountry = document.querySelector("select#country");
  selectCountry.addEventListener("change", checkCountry); 
}

export { mountCountryFocusHandler };
