import { describe, it, expect } from "vitest";
import { getRandomColor } from "../get-random-color";

describe("getRandomColor", () => {
    it("should return a valid HSL color string", () => {
        const color = getRandomColor();
        expect(color).toMatch(
            /^hsl\(\d+(\.\d+)?, \d+(\.\d+)?%, \d+(\.\d+)?%\)$/,
        );
    });

    it("should generate a hue value between 0 and 360", () => {
        for (let i = 0; i < 100; i++) {
            const color = getRandomColor();
            const hue = parseFloat(
                color.match(/^hsl\((\d+(\.\d+)?)/)?.[1] || "0",
            );
            expect(hue).toBeGreaterThanOrEqual(0);
            expect(hue).toBeLessThan(360);
        }
    });

    it("should generate a saturation value between 80% and 100%", () => {
        for (let i = 0; i < 100; i++) {
            const color = getRandomColor();
            const saturation = parseFloat(
                color.match(/, (\d+(\.\d+)?)%/)?.[1] || "0",
            );
            expect(saturation).toBeGreaterThanOrEqual(80);
            expect(saturation).toBeLessThanOrEqual(100);
        }
    });

    it("should generate a lightness value between 50% and 70%", () => {
        for (let i = 0; i < 100; i++) {
            const color = getRandomColor();
            const lightness = parseFloat(
                color.match(/, (\d+(\.\d+)?)%\)$/)?.[1] || "0",
            );
            expect(lightness).toBeGreaterThanOrEqual(50);
            expect(lightness).toBeLessThanOrEqual(70);
        }
    });
});
