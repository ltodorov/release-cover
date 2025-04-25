import { getRandomColor } from "../../helpers/get-random-color"
import type { RenderShape } from "../../types/render-shape"

function renderCircle({ ctx, posX, posY, size }: RenderShape) {
    ctx.beginPath()
    ctx.arc(posX, posY, size, 0, Math.PI * 2)
    ctx.fillStyle = getRandomColor()
    ctx.globalAlpha = Math.random() / 2
    ctx.fill()
    ctx.closePath()
}

export { renderCircle }
