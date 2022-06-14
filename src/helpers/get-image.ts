const ERROR: string = "Image not found!";

async function getImage(src: string): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img), false);
    img.addEventListener("error", err => reject(err.message ?? ERROR), false);
    img.src = src;
  });
}

export {
  getImage
};