interface RenderSquareProps {
  ctx: CanvasRenderingContext2D;
  posX: number;
  posY: number;
  size: number;
}

function renderSquare({
  ctx,
  posX,
  posY,
  size,
}: RenderSquareProps) {
  ctx.fillStyle = `hsl(0, 0%, ${Math.random() * 50}%)`;
  ctx.globalAlpha = Math.random() / 2;
  ctx.fillRect(posX, posY, size, size);
}

export {
  renderSquare,
};