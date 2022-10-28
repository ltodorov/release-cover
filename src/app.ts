import { handleSubmit } from "./handlers/handle-submit";
import { handleReset } from "./handlers/handle-reset";

import "./app.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("details");
  form?.addEventListener("submit", handleSubmit);
  form?.addEventListener("reset", handleReset);
});