import { describe, expect, it, vi } from "vitest";
import { renderTriangle } from "../render-triangle";

describe("renderTriangle", () => {
    it("should draw a triangle", () => {
        const cs = document.createElement("canvas")
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D
        const spyDraw = vi.spyOn(ctx, "lineTo")

        renderTriangle({
            ctx,
            posX: 10,
            posY: 0,
            size: 20,
        })

        expect(spyDraw).toHaveBeenNthCalledWith(1, 30, 17.32050807568877)
        expect(spyDraw).toHaveBeenNthCalledWith(2, 10, 17.32050807568877)
    })
})