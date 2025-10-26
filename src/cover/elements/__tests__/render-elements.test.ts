import { afterEach, describe, expect, it, vi } from "vitest";
import { renderCircle } from "../render-circle";
import { renderElements } from "../render-elements";
import { renderSquare } from "../render-square";
import { renderTriangle } from "../render-triangle";

vi.mock("../render-square", () => ({
    renderSquare: vi.fn(),
}));

vi.mock("../render-triangle", () => ({
    renderTriangle: vi.fn(),
}));

vi.mock("../render-circle", () => ({
    renderCircle: vi.fn(),
}));

describe("renderElements", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should call renderSquare", () => {
        const cs = document.createElement("canvas");
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D;
        const spyRandom = vi.spyOn(Math, "random");

        spyRandom.mockImplementation(() => 0);

        renderElements(ctx, 1);

        expect(renderSquare).toHaveBeenCalledWith({
            ctx,
            posX: 0,
            posY: 0,
            size: 100,
        });
    });

    it("should call renderTriangle", () => {
        const cs = document.createElement("canvas");
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D;
        const spyRandom = vi.spyOn(Math, "random");

        spyRandom.mockImplementation(() => 0.5);

        renderElements(ctx, 1);

        expect(renderTriangle).toHaveBeenCalledWith({
            ctx,
            posX: 1250,
            posY: 1250,
            size: 300,
        });
    });

    it("should call renderCircle", () => {
        const cs = document.createElement("canvas");
        const ctx = cs.getContext("2d") as CanvasRenderingContext2D;
        const spyRandom = vi.spyOn(Math, "random");

        spyRandom.mockImplementation(() => 0.9999);

        renderElements(ctx, 1);

        expect(renderCircle).toHaveBeenCalledWith({
            ctx,
            posX: 2499.75,
            posY: 2499.75,
            size: 500,
        });
    });
});
