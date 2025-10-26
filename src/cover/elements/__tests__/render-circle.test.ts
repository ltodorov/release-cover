import { describe, expect, it, vi } from "vitest";
import { renderCircle } from "../render-circle";

describe("renderCircle", () => {
    it("should draw an arc", () => {
        const cs = document.createElement("canvas");
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D;
        const spyDraw = vi.spyOn(ctx, "arc");

        renderCircle({
            ctx,
            posX: 10,
            posY: 20,
            size: 50,
        });

        expect(spyDraw).toHaveBeenCalledWith(10, 20, 50, 0, Math.PI * 2);
    });
});
