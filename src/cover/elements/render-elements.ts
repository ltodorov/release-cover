import { coverConfig } from "../cover-config"
import { renderCircle } from "./render-circle"
import { renderSquare } from "./render-square"
import { renderTriangle } from "./render-triangle"

const elementSizes: number[] = [100, 150, 200, 250, 300, 350, 400, 500]
const elementSizeRatio: number[] = elementSizes.map((size) => size / 3000)
const { size } = coverConfig

const renders = [renderSquare, renderTriangle, renderCircle]

function renderElements(ctx: CanvasRenderingContext2D, n = 30) {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, size, size)

    for (let i = 0; i < n; i += 1) {
        const posX = getPosition(i)
        const posY = getPosition(i)
        const elementSize =
            elementSizeRatio[Math.floor(Math.random() * elementSizes.length)] *
            size
        renders[Math.floor(Math.random() * renders.length)]({
            ctx,
            posX,
            posY,
            size: elementSize,
        })
    }

    ctx.globalAlpha = 1
}

function getPosition(index: number): number {
    const maxPosition = size - Math.max(...elementSizeRatio) * size - index
    return index + Math.random() * maxPosition
}

export { renderElements }
