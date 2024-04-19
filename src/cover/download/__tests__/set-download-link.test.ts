import { describe, expect, it } from "vitest"
import { setDownloadLink } from "../set-download-link"

describe("setDownloadLink", () => {
    it("should set href and download attributes to an anchor", () => {
        const canvas = document.createElement("canvas")
        const downloadEl = document.createElement("a")
        downloadEl.id = "download"
        document.body.appendChild(downloadEl)

        setDownloadLink(canvas, "test")

        expect(downloadEl.href).toBe("data:image/jpeg;base64,00")
        expect(downloadEl.download).toBe("test.jpg")
    })
})