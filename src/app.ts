import { getValue } from "./helpers/get-value";
import { renderCover } from "./cover/render-cover";

import "./app.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("details");
  form?.addEventListener("submit", submit, false);
}, false);

function submit(event: Event) {
  event.preventDefault();

  const target = event.target;

  if (target instanceof HTMLFormElement) {
    const elements = target.elements;

    renderCover({
      isRandom: false,
      artistLine1: getValue(elements.namedItem("artist-line-1")),
      artistLine2: getValue(elements.namedItem("artist-line-2")),
      releaseTitle: getValue(elements.namedItem("release-title")),
      releaseNo: getValue(elements.namedItem("release-no"))
    });
  }
}