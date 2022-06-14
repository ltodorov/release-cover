import { coverPadding, coverSize } from "../cover-config";
import { ReleaseDetailsProps } from "../../types/release-details";

const fontFamily: string = `"Roboto Slab", serif`;

type RenderTextsProps = ReleaseDetailsProps & {
    ctx: CanvasRenderingContext2D;
}

function renderTexts({
    ctx,
    artistLine1,
    artistLine2,
    releaseTitle,
    releaseNo
}: RenderTextsProps) {
    ctx.fillStyle = "white";

    ctx.font = `900 120px ${fontFamily}`;
    ctx.fillText(
        artistLine1.toUpperCase(),
        coverPadding,
        coverSize - coverPadding - 240
    );
    ctx.fillText(
        artistLine2.toUpperCase(),
        coverPadding,
        coverSize - coverPadding - 100
    );

    ctx.font = `300 70px ${fontFamily}`;
    ctx.fillText(
        releaseTitle,
        coverPadding,
        coverSize - coverPadding
    );

    ctx.font = `300 70px ${fontFamily}`;
    ctx.textAlign = "right";
    ctx.fillText(
        `NSR${releaseNo}`,
        coverSize - coverPadding,
        coverSize - coverPadding - 119
    );
}

export {
    type RenderTextsProps,
    renderTexts
};