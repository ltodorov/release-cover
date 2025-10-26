import { afterEach, describe, expect, it, vi } from "vitest";
import { getImage } from "../get-image";

class ImageMock extends Image {
    #src = "";
    get src() {
        return this.#src;
    }
    set src(source: string) {
        this.#src = source;
    }
}

describe("getImage", () => {
    const fileName = "background.jpg";

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.resetAllMocks();
    });

    it("should return the loaded image", async () => {
        expect.assertions(1);

        const loadFn = vi.fn((type: string, callback: () => void) => {
            if (type === "load") {
                callback();
            }
        });
        HTMLImageElement.prototype.addEventListener = loadFn;
        vi.stubGlobal("Image", ImageMock);

        const img = await getImage(fileName);

        expect(img.src).toBe(`http://localhost:3000/${fileName}`);
    });

    it("should return error message if exists", async () => {
        expect.assertions(1);

        const errorMessage = "Test error!";
        const errorFn = vi.fn(
            (type: string, callback: (err: unknown) => void) => {
                if (type === "error") {
                    callback({
                        message: errorMessage,
                    } as unknown as ErrorEvent);
                }
            },
        );
        HTMLImageElement.prototype.addEventListener = errorFn;
        vi.stubGlobal("Image", ImageMock);

        try {
            await getImage(fileName);
        } catch (reason) {
            expect(reason).toBe(errorMessage);
        }
    });

    it("should return default error message", async () => {
        expect.assertions(1);

        const errorFn = vi.fn(
            (type: string, callback: (err: unknown) => void) => {
                if (type === "error") {
                    callback({});
                }
            },
        );
        HTMLImageElement.prototype.addEventListener = errorFn;
        vi.stubGlobal("Image", ImageMock);

        try {
            await getImage(fileName);
        } catch (reason) {
            expect(reason).toBe(`An error from getImage(${fileName})`);
        }
    });
});
