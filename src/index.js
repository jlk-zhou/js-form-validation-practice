import { mountInputFocusHandler } from "./email/handler";
import { mountCountryFocusHandler } from "./country/handler";
import { submitHandler } from "./submit/handler";

import "./style.css";

mountInputFocusHandler();
mountCountryFocusHandler(); 

const submit = document.querySelector('button[type="submit"]');
submit.addEventListener("click", submitHandler);
