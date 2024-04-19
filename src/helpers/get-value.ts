function getValue(item: Element | RadioNodeList | null): string {
    return item instanceof HTMLInputElement ? item.value : ""
}

export { getValue }
