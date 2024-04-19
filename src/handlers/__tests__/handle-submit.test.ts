import { afterEach, describe, expect, it, vi } from "vitest"
import { renderCover } from "../../cover/render-cover"
import { handleSubmit } from "../handle-submit"

vi.mock("../../cover/render-cover", () => ({
    renderCover: vi.fn(() => Promise.resolve()),
}))

describe("handleSubmit", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should render cover if HTMLFormElement", () => {
        const formEl = document.createElement("form")
        const artistLine1 = document.createElement("input")
        artistLine1.value = "Line 1"
        artistLine1.name = "artist-line-1"
        formEl.appendChild(artistLine1)
        const artistLine2 = document.createElement("input")
        artistLine2.value = "Line 2"
        artistLine2.name = "artist-line-2"
        formEl.appendChild(artistLine2)
        const releaseTitle = document.createElement("input")
        releaseTitle.value = "Title"
        releaseTitle.name = "release-title"
        formEl.appendChild(releaseTitle)
        const releaseNo = document.createElement("input")
        releaseNo.value = "NSR100"
        releaseNo.name = "release-no"
        formEl.appendChild(releaseNo)
        const event = new Event("submit")
        Object.defineProperty(event, "target", {
            value: formEl,
        })

        handleSubmit(event)

        expect(renderCover).toHaveBeenCalledWith({
            artistLine1: "Line 1",
            artistLine2: "Line 2",
            releaseTitle: "Title",
            releaseNo: "NSR100",
            elementsAmount: Number.NaN,
        })
    })

    it("should not render cover if not HTMLFormElement", () => {
        const divEl = document.createElement("div")
        const event = new Event("submit")
        Object.defineProperty(event, "target", {
            value: divEl,
        })

        handleSubmit(event)

        expect(renderCover).not.toHaveBeenCalled()
    })
})
