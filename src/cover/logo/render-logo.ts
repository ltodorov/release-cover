import { coverPadding, coverSize } from "../cover-config";
import { getImage } from "../../helpers/get-image";

import Logo from "./logo.svg";

const logoSVGWidth: number = 449.978; // Width of the SVG viewBox
const logoSVGHeight: number = 489.315; // Height of the SVG viewBox

const logoActualHeight: number = 300; // Actual height of the rendered logo
const availableSpace: number = 200; // Available space for the release number

async function renderLogo(ctx: CanvasRenderingContext2D) {
    const dH = logoActualHeight;
    const dW = dH * (logoSVGWidth / logoSVGHeight);
    const dY = coverSize - coverPadding - dH;
    const dX = dY - availableSpace;
    const image = await getImage(Logo);
    ctx.drawImage(image, dX, dY, dW, dH);
}

export {
    renderLogo
};