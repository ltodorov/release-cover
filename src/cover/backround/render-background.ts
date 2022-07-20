import { getImage } from "../../helpers/get-image";

import background from "./background.jpg";

async function renderBackground(ctx: CanvasRenderingContext2D) {
  const img = await getImage(background);
  ctx.drawImage(img, 0, 0);
}

export {
  renderBackground,
};