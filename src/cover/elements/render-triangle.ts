import { RenderShape } from "../../types/render-shape";

function renderTriangle({
  ctx,
  posX,
  posY,
  size,
}: RenderShape) {
  const height = Math.sqrt(3) / 2 * size;
  ctx.beginPath();
  ctx.moveTo(posX + size / 2, posY);
  ctx.lineTo(posX + size, posY + height);
  ctx.lineTo(posX, posY + height);
  ctx.fillStyle = `hsl(0, 0%, ${Math.random() * 50}%)`;
  ctx.globalAlpha = Math.random() / 2;
  ctx.fill();
  ctx.closePath();
}

export {
  renderTriangle,
};