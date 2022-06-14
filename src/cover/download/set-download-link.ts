function setDownloadLink(canvas: HTMLCanvasElement, fileName: string) {
  const imageURL = canvas.toDataURL("image/jpeg");
  const download = document.getElementById("download");

  if (download instanceof HTMLAnchorElement) {
    download.href = imageURL;
    download.download = `${fileName}.jpg`;
  }
}

export {
  setDownloadLink
};