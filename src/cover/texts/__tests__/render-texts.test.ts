import { describe, expect, it, vi } from "vitest";
import { renderTexts } from "../render-texts";

describe("renderTexts", () => {
    it("should render all texts", () => {
        const cs = document.createElement("canvas");
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D;
        const spyFillText = vi.spyOn(ctx, "fillText");

        renderTexts({
            ctx,
            artistLine1: "ART1",
            artistLine2: "ART2",
            releaseTitle: "Title",
            releaseNo: "CAT001",
        });

        expect(spyFillText).toHaveBeenCalledTimes(4);
    });
});
