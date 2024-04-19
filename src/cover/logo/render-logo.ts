import { getImage } from "../../helpers/get-image"
import { coverConfig } from "../cover-config"

import Logo from "./logo.svg"

async function renderLogo(ctx: CanvasRenderingContext2D) {
    const logoSVGWidth = 449.978 // Width of the SVG viewBox
    const logoSVGHeight = 489.315 // Height of the SVG viewBox
    const logoActualHeight = 300 // Actual height of the rendered logo
    const availableSpace = 200 // Available space for the release number
    const { size, padding } = coverConfig
    const dH = logoActualHeight
    const dW = dH * (logoSVGWidth / logoSVGHeight)
    const dY = size - padding - dH
    const dX = dY - availableSpace
    const image = await getImage(Logo)
    ctx.drawImage(image, dX, dY, dW, dH)
}

export { renderLogo }
