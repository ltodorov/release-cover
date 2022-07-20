import { handleSubmit } from "./handlers/submit";
import { handleReset } from "./handlers/reset";

import "./app.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("details");
  form?.addEventListener("submit", handleSubmit);
  form?.addEventListener("reset", handleReset);
});