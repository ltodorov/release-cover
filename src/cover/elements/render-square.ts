import { RenderShape } from "../../types/render-shape";

function renderSquare({
  ctx,
  posX,
  posY,
  size,
}: RenderShape) {
  ctx.fillStyle = `hsl(0, 0%, ${Math.random() * 50}%)`;
  ctx.globalAlpha = Math.random() / 2;
  ctx.fillRect(posX, posY, size, size);
}

export {
  renderSquare,
};