export function round(value: number, scale: number = 2): number {
    const factor = Math.pow(10, scale);
    const roundedValue = Math.ceil(value * factor) / factor;
    return roundedValue;
}