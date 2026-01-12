import { checkPostcodeInput } from "./validator";

function mountPostcodeFocusHandler() {
  const postcodeInput = document.getElementById("postcode");
  postcodeInput.addEventListener("focus", mountPostcodeClickAwayHandler);
}

function mountPostcodeClickAwayHandler() {
  window.addEventListener("click", clickAwayHandler);
}

function clickAwayHandler(event) {
  const postcodeInput = document.getElementById("postcode");
  if (event.target !== postcodeInput) {
    checkPostcodeInput(); 
    mountPostcodeInputHandler(); 
    window.removeEventListener("click", clickAwayHandler);
  }
}

function mountPostcodeInputHandler() {
  const postcodeInput = document.getElementById("postcode");
  postcodeInput.addEventListener("input", checkPostcodeInput);
}

export { 
  mountPostcodeFocusHandler, 
  mountPostcodeInputHandler
};
