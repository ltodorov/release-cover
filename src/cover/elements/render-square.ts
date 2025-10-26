import { getRandomColor } from "../../helpers/get-random-color";
import type { RenderShape } from "../../types/render-shape";

function renderSquare({ ctx, posX, posY, size }: RenderShape) {
    ctx.fillStyle = getRandomColor();
    ctx.globalAlpha = Math.random() / 2;
    ctx.fillRect(posX, posY, size, size);
}

export { renderSquare };
