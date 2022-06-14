import { ReleaseDetailsProps } from "../types/release-details";
import { renderBackground } from "./backround/render-background";
import { coverSize } from "./cover-config";
import { setDownloadLink } from "./download/set-download-link";
import { renderElements } from "./elements/render-elements";
import { renderLogo } from "./logo/render-logo";
import { renderTexts } from "./texts/render-texts";

import "./cover.css";

type RenderProps = ReleaseDetailsProps & {
  isRandom: boolean;
}

async function renderCover({
  isRandom = true,
  artistLine1,
  artistLine2,
  releaseTitle,
  releaseNo
}: RenderProps) {
  const cs = document.getElementById("cover");

  if (cs instanceof HTMLCanvasElement) {
    cs.width = coverSize;
    cs.height = coverSize;
    const ctx = cs.getContext("2d");

    if (ctx) {
      try {
        if (isRandom) {
          renderElements(ctx, 30);
        } else {
          await renderBackground(ctx);
        }
        await renderLogo(ctx);
        renderTexts({
          ctx,
          artistLine1,
          artistLine2,
          releaseTitle,
          releaseNo
        });
      } catch (err: any) {
        throw new Error(err);
      }
    }

    setDownloadLink(cs, `NSR${releaseNo}`);
  }
}

export {
  renderCover
};