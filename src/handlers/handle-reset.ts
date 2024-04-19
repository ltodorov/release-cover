import { coverConfig } from "../cover/cover-config"

function handleReset() {
    const { size } = coverConfig
    const cs = document.getElementById("cover")

    if (cs instanceof HTMLCanvasElement) {
        const ctx = cs.getContext("2d")
        ctx?.clearRect(0, 0, size, size)
    }
}

export { handleReset }
