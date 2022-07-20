async function getImage(src: string): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const error = `An error from getImage(${src})`;
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", err => reject(err.message ?? error));
    img.src = src;
  });
}

export {
  getImage,
};