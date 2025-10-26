import { getImage } from "../../helpers/get-image";
import { coverConfig } from "../cover-config";

import Logo from "./logo.svg";

async function renderLogo(ctx: CanvasRenderingContext2D) {
    const { size } = coverConfig;
    const logoSVGWidth = size * 0.1499926666666667; // Width of the SVG viewBox - 449.978 for size 3000
    const logoSVGHeight = size * 0.163105; // Height of the SVG viewBox - 489.315 for size 3000
    const logoActualHeight = size * 0.1; // Actual height of the rendered logo - 300 for size 3000
    const availableSpace = size * 0.0666666666666667; // Available space for the release number - 200 for size 3000
    const padding = size / 10;
    const dH = logoActualHeight;
    const dW = dH * (logoSVGWidth / logoSVGHeight);
    const dY = size - padding - dH;
    const dX = dY - availableSpace;
    const image = await getImage(Logo);
    ctx.drawImage(image, dX, dY, dW, dH);
}

export { renderLogo };
