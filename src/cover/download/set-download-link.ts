function setDownloadLink(canvas: HTMLCanvasElement, fileName: string) {
    const imageURL = canvas.toDataURL("image/jpeg")
    const downloadEl = document.getElementById("download")

    if (downloadEl instanceof HTMLAnchorElement) {
        downloadEl.href = imageURL
        downloadEl.download = `${fileName}.jpg`
    }
}

export { setDownloadLink }
