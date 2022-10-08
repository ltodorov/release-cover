interface RenderCircleProps {
  ctx: CanvasRenderingContext2D;
  posX: number;
  posY: number;
  size: number;
}

function renderCircle({
  ctx,
  posX,
  posY,
  size,
}: RenderCircleProps) {
  ctx.beginPath();
  ctx.arc(posX, posY, size, 0, Math.PI * 2);
  ctx.fillStyle = `hsl(0, 0%, ${Math.random() * 50}%)`;
  ctx.globalAlpha = Math.random() / 2;
  ctx.fill();
  ctx.closePath();
}

export {
  renderCircle,
};