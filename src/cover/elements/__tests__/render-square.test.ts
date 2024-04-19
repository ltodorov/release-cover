import { describe, expect, it, vi } from "vitest"
import { renderSquare } from "../render-square"

describe("renderSquare", () => {
    it("should draw a square", () => {
        const cs = document.createElement("canvas")
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D
        const spyDraw = vi.spyOn(ctx, "fillRect")

        renderSquare({
            ctx,
            posX: 10,
            posY: 20,
            size: 50,
        })

        expect(spyDraw).toHaveBeenCalledWith(10, 20, 50, 50)
    })
})
