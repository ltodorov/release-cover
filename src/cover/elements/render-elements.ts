import { coverConfig } from "../cover-config";

const elementSizes: number[] = [100, 150, 200, 250, 300, 350, 400, 500];
const { size } = coverConfig;

function renderElements(ctx: CanvasRenderingContext2D, n = 30) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < n; i += 1) {
    const posX = getPosition(i);
    const posY = getPosition(i);
    const size = elementSizes[Math.floor(
      Math.random() * elementSizes.length,
    )];

    ctx.fillStyle = `hsl(0, 0%, ${Math.random() * 50}%)`;
    ctx.globalAlpha = Math.random() / 2;
    ctx.fillRect(posX, posY, size, size);
  }

  ctx.globalAlpha = 1;
}

function getPosition(index: number): number {
  const maxPosition = size - Math.max(...elementSizes) - index;
  return index + (Math.random() * maxPosition);
}

export {
  renderElements,
};