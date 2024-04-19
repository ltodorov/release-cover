import { afterEach, describe, expect, it, vi } from "vitest";
import { handleReset } from "../handle-reset";

describe("handleReset", () => {
    let coverEl: HTMLElement;

    afterEach(() => {
        document.body.removeChild(coverEl)
    })

    it("should not clear canvas if #cover is not HTMLCanvasElement", () => {
        coverEl = document.createElement("div")
        coverEl.id = "cover"
        document.body.appendChild(coverEl)
        const spyClearRect = vi.spyOn(CanvasRenderingContext2D.prototype, "clearRect")

        handleReset()

        expect(spyClearRect).not.toHaveBeenCalled()
    })

    it("should clear canvas if #cover is HTMLCanvasElement", () => {
        coverEl = document.createElement("canvas")
        coverEl.id = "cover"
        document.body.appendChild(coverEl)
        const spyClearRect = vi.spyOn(CanvasRenderingContext2D.prototype, "clearRect")

        handleReset()

        expect(spyClearRect).toHaveBeenCalled()
    })
})