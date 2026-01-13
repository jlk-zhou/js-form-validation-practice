import { mountInputFocusHandler } from "./email/handler";
import { mountCountryFocusHandler } from "./country/handler";
import { mountPostcodeFocusHandler } from "./postcode/handler";
import { mountPasswordFocusHandler } from "./password/handler";
import { submitHandler } from "./submit/handler";

import "./style.css";

mountInputFocusHandler();
mountCountryFocusHandler(); 
mountPostcodeFocusHandler(); 
mountPasswordFocusHandler(); 

const submit = document.querySelector('button[type="submit"]');
submit.addEventListener("click", submitHandler);
