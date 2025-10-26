import { afterEach, describe, expect, it, vi } from "vitest";
import { renderLogo } from "../render-logo";

const mockImage = new Image();
mockImage.src = "logo.svg";

vi.mock("../../../helpers/get-image", () => ({
    getImage: vi.fn(async () => Promise.resolve(mockImage)),
}));

describe("renderLogo", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should draw a logo", async () => {
        const cs = document.createElement("canvas");
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D;
        const spyDrawImage = vi.spyOn(ctx, "drawImage");

        await renderLogo(ctx);

        expect(spyDrawImage).toHaveBeenCalledWith(
            mockImage,
            2200,
            2400,
            275.88240703841086,
            300,
        );
    });
});
