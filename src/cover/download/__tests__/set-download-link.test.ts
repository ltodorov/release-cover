import { afterEach, describe, expect, it } from "vitest";
import { setDownloadLink } from "../set-download-link";

describe("setDownloadLink", () => {
    afterEach(() => {
        document.body.innerHTML = "";
    });

    it("should set href and download attributes to an anchor", () => {
        const canvas = document.createElement("canvas");
        const downloadEl = document.createElement("a");
        downloadEl.id = "download";
        document.body.appendChild(downloadEl);

        setDownloadLink(canvas, "test");

        expect(downloadEl.href).toBe("data:image/jpeg;base64,00");
        expect(downloadEl.download).toBe("test.jpg");
    });

    it("should not throw when download element is not an anchor", () => {
        const canvas = document.createElement("canvas");
        const downloadEl = document.createElement("div");
        downloadEl.id = "download";
        document.body.appendChild(downloadEl);

        expect(() => setDownloadLink(canvas, "test")).not.toThrow();
    });

    it("should not throw when download element doesn't exist", () => {
        const canvas = document.createElement("canvas");

        expect(() => setDownloadLink(canvas, "test")).not.toThrow();
    });
});
