function getValue(item: Element | RadioNodeList | null): string {
    return item && item instanceof HTMLInputElement ? item.value : "";
}

export {
    getValue
};