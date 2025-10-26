import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { handleError } from "../../handlers/handle-error";
import { renderBackground } from "../backround/render-background";
import { setDownloadLink } from "../download/set-download-link";
import { renderElements } from "../elements/render-elements";
import { renderLogo } from "../logo/render-logo";
import { type RenderProps, renderCover } from "../render-cover";
import { renderTexts } from "../texts/render-texts";

vi.mock("../backround/render-background", () => ({
    renderBackground: vi.fn(),
}));
vi.mock("../download/set-download-link", () => ({
    setDownloadLink: vi.fn(),
}));
vi.mock("../elements/render-elements", () => ({
    renderElements: vi.fn(),
}));
vi.mock("../logo/render-logo", () => ({
    renderLogo: vi.fn(),
}));
vi.mock("../texts/render-texts", () => ({
    renderTexts: vi.fn(),
}));
vi.mock("../../handlers/handle-error", () => ({
    handleError: vi.fn(),
}));

describe("renderCover", () => {
    const defaultCoverProps: RenderProps = {
        artistLine1: "ART1",
        artistLine2: "ART2",
        releaseTitle: "Title",
        releaseNo: "CAT002",
        elementsAmount: 0,
    };

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe("no canvas scenarios", () => {
        it("should not render anything if no canvas", async () => {
            expect.assertions(5);

            await renderCover(defaultCoverProps);

            expect(renderBackground).not.toHaveBeenCalled();
            expect(renderElements).not.toHaveBeenCalled();
            expect(renderLogo).not.toHaveBeenCalled();
            expect(renderTexts).not.toHaveBeenCalled();
            expect(setDownloadLink).not.toHaveBeenCalled();
        });
    });

    describe("canvas scenarios", () => {
        let canvas: HTMLCanvasElement;

        beforeEach(() => {
            canvas = document.createElement("canvas");
            canvas.id = "cover";
            document.body.appendChild(canvas);
        });

        afterEach(() => {
            document.body.innerHTML = "";
        });

        it("should skip drawing when getContext returns null but still set download link", async () => {
            expect.assertions(5);

            canvas.getContext = vi.fn().mockReturnValueOnce(null);

            await renderCover(defaultCoverProps);

            expect(renderBackground).not.toHaveBeenCalled();
            expect(renderElements).not.toHaveBeenCalled();
            expect(renderLogo).not.toHaveBeenCalled();
            expect(renderTexts).not.toHaveBeenCalled();
            expect(setDownloadLink).toHaveBeenCalled();
        });

        it("should render image cover", async () => {
            expect.assertions(5);

            await renderCover(defaultCoverProps);

            expect(renderBackground).toHaveBeenCalled();
            expect(renderElements).not.toHaveBeenCalled();
            expect(renderLogo).toHaveBeenCalled();
            expect(renderTexts).toHaveBeenCalled();
            expect(setDownloadLink).toHaveBeenCalled();
        });

        it("should render elements cover", async () => {
            expect.assertions(5);

            await renderCover({
                ...defaultCoverProps,
                elementsAmount: 10,
            });

            expect(renderBackground).not.toHaveBeenCalled();
            expect(renderElements).toHaveBeenCalled();
            expect(renderLogo).toHaveBeenCalled();
            expect(renderTexts).toHaveBeenCalled();
            expect(setDownloadLink).toHaveBeenCalled();
        });

        it("should handle errors", async () => {
            expect.assertions(1);

            const errorMessage: string = "Test error";
            vi.mocked(renderBackground).mockRejectedValue(errorMessage);

            await renderCover(defaultCoverProps);

            expect(handleError).toHaveBeenCalledWith(errorMessage);
        });
    });
});
