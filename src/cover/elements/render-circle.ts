import type { RenderShape } from "../../types/render-shape"

function renderCircle({ ctx, posX, posY, size }: RenderShape) {
    ctx.beginPath()
    ctx.arc(posX, posY, size, 0, Math.PI * 2)
    ctx.fillStyle = `hsl(0, 0%, ${Math.random() * 50}%)`
    ctx.globalAlpha = Math.random() / 2
    ctx.fill()
    ctx.closePath()
}

export { renderCircle }
