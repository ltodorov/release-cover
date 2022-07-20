import { renderCover } from "../cover/render-cover";
import { getValue } from "../helpers/get-value";

function handleSubmit(event: Event) {
  event.preventDefault();

  const { target } = event;

  if (target instanceof HTMLFormElement) {
    const { elements } = target;

    renderCover({
      artistLine1: getValue(elements.namedItem("artist-line-1")),
      artistLine2: getValue(elements.namedItem("artist-line-2")),
      releaseTitle: getValue(elements.namedItem("release-title")),
      releaseNo: getValue(elements.namedItem("release-no")),
      elementsAmount: parseInt(getValue(elements.namedItem("random-elements")), 10),
    });
  }
}

export {
  handleSubmit,
};