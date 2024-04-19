import { describe, expect, it } from "vitest"
import { getValue } from "../get-value"

describe("getValue", () => {
    it("should return input element's value", () => {
        const inputEl = document.createElement("input")
        inputEl.value = "Test value"

        const res = getValue(inputEl)
        expect(res).toBe("Test value")
    })

    it("should return an empty string if not input element", () => {
        const anotherEl = document.createElement("p")
        anotherEl.textContent = "Test content"

        const res = getValue(anotherEl)
        expect(res).toBe("")
    })
})
