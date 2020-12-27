import { getImage } from "../../helpers/get-image";

import Background from "./background.jpg";

async function renderBackground(ctx: CanvasRenderingContext2D) {
    const img = await getImage(Background);
    ctx.drawImage(img, 0, 0);
}

export {
    renderBackground
};