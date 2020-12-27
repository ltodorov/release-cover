import { coverSize } from "../cover-config";

const elementSizes: number[] = [100, 150, 200, 250, 300, 350, 400, 500];

function renderElements(ctx: CanvasRenderingContext2D, n: number = 30) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, coverSize, coverSize);

    for (let i = 0; i < n; i += 1) {
        const posX = getPosition(i);
        const posY = getPosition(i);
        const size = elementSizes[Math.floor(Math.random() * elementSizes.length)];

        ctx.fillStyle = `hsl(0, 0%, ${Math.random() * 50}%)`;
        ctx.globalAlpha = Math.random() / 2;
        ctx.fillRect(posX, posY, size, size);
    }

    ctx.globalAlpha = 1;
}

function getPosition(index: number): number {
    const maxPosition = coverSize - Math.max(...elementSizes) - index;
    return index + (Math.random() * maxPosition);
}

export {
    renderElements
};