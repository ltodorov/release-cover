import { describe, expect, it, vi } from "vitest";
import { handleError } from "../handle-error";

describe("handleError", () => {
    it("should log error in console", () => {
        const spyConsoleError = vi.spyOn(console, "error").mockImplementation(() => {})
        const errorMessage: string = "Test error"

        handleError(errorMessage)

        expect(spyConsoleError).toHaveBeenCalledWith(errorMessage)
    })

})
