import { handleError } from "../handlers/handle-error";
import type { ReleaseDetails } from "../types/release-details";
import { renderBackground } from "./backround/render-background";
import { coverConfig } from "./cover-config";
import { setDownloadLink } from "./download/set-download-link";
import { renderElements } from "./elements/render-elements";
import { renderLogo } from "./logo/render-logo";
import { renderTexts } from "./texts/render-texts";

interface RenderProps extends ReleaseDetails {
    elementsAmount: number;
}

async function renderCover({
    artistLine1,
    artistLine2,
    releaseTitle,
    releaseNo,
    elementsAmount = 0,
}: RenderProps) {
    try {
        const cs = document.getElementById("cover");
        const { size } = coverConfig;

        if (cs instanceof HTMLCanvasElement) {
            cs.width = size;
            cs.height = size;
            const ctx = cs.getContext("2d");

            if (ctx) {
                if (elementsAmount > 0) {
                    renderElements(ctx, elementsAmount);
                } else {
                    await renderBackground(ctx);
                }
                await renderLogo(ctx);
                renderTexts({
                    ctx,
                    artistLine1,
                    artistLine2,
                    releaseTitle,
                    releaseNo,
                });
            }

            setDownloadLink(cs, `NSR${releaseNo}`);
        }
    } catch (err: unknown) {
        handleError(err);
    }
}

export { type RenderProps, renderCover };
