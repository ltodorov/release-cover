import { afterEach, describe, expect, it, vi } from "vitest"
import { renderBackground } from "../render-background"

const mockImage = new Image()
mockImage.src = "background.jpg"

vi.mock("../../../helpers/get-image", () => ({
    getImage: vi.fn(async () => Promise.resolve(mockImage)),
}))

describe("renderBackground", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should draw an image", async () => {
        expect.assertions(1)

        const cs = document.createElement("canvas")
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D
        const spyDrawImage = vi.spyOn(ctx, "drawImage")

        await renderBackground(ctx)

        expect(spyDrawImage).toHaveBeenCalledWith(mockImage, 0, 0)
    })
})
