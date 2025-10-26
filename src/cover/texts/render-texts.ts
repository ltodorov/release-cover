import type { ReleaseDetails } from "../../types/release-details";
import { coverConfig } from "../cover-config";

const fontFamily = '"Roboto Slab", serif';

interface RenderTextsProps extends ReleaseDetails {
    ctx: CanvasRenderingContext2D;
}

function renderTexts({
    ctx,
    artistLine1,
    artistLine2,
    releaseTitle,
    releaseNo,
}: RenderTextsProps) {
    const { size } = coverConfig;
    const padding = size / 10;
    const largeFontSize = size * 0.04; // 120px for size 3000
    const smallFontSize = size * 0.0233333333333333; // 70px for size 3000

    ctx.fillStyle = "white";

    ctx.font = `900 ${largeFontSize}px ${fontFamily}`;
    const line1YOffset = size * 0.08; // 240px for size 3000
    const line2YOffset = size * 0.0333333333333333; // 100px for size 3000
    ctx.fillText(
        artistLine1.toUpperCase(),
        padding,
        size - padding - line1YOffset,
    );
    ctx.fillText(
        artistLine2.toUpperCase(),
        padding,
        size - padding - line2YOffset,
    );

    ctx.font = `300 ${smallFontSize}px ${fontFamily}`;
    ctx.fillText(releaseTitle, padding, size - padding);

    ctx.font = `300 ${smallFontSize}px ${fontFamily}`;
    const releaseNoXOffset = size * 0.0666666666666667; // 200px for size 3000
    const releaseNoYOffset = size * 0.0396666666666667; // 119px for size 3000
    ctx.fillText(
        `NSR${releaseNo}`,
        size - padding - releaseNoXOffset,
        size - padding - releaseNoYOffset,
    );
}

export { renderTexts };
