import type { ReleaseDetails } from "../../types/release-details"
import { coverConfig } from "../cover-config"

const fontFamily = '"Roboto Slab", serif'

interface RenderTextsProps extends ReleaseDetails {
    ctx: CanvasRenderingContext2D
}

function renderTexts({
    ctx,
    artistLine1,
    artistLine2,
    releaseTitle,
    releaseNo,
}: RenderTextsProps) {
    const { size, padding } = coverConfig
    ctx.fillStyle = "white"

    ctx.font = `900 120px ${fontFamily}`
    ctx.fillText(artistLine1.toUpperCase(), padding, size - padding - 240)
    ctx.fillText(artistLine2.toUpperCase(), padding, size - padding - 100)

    ctx.font = `300 70px ${fontFamily}`
    ctx.fillText(releaseTitle, padding, size - padding)

    ctx.font = `300 70px ${fontFamily}`
    ctx.fillText(`NSR${releaseNo}`, size - padding - 200, size - padding - 119)
}

export { renderTexts }
