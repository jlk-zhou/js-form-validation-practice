import { mountInputFocusHandler, submitHandler } from "./form/handler";

import "./style.css";

mountInputFocusHandler();

const submit = document.querySelector('button[type="submit"]');
submit.addEventListener("click", submitHandler);
