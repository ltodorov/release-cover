function getRandomColor(): string {
    const hue = Math.random() * 360 // Random hue (0-360)
    const saturation = 80 + Math.random() * 20 // Saturation between 80% and 100%
    const lightness = 50 + Math.random() * 20 // Lightness between 50% and 70%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

export { getRandomColor }
