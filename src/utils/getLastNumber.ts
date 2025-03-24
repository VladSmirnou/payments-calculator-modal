export const getLastNumber = <T,>(value: T): number => {
    const numericValue = Number(String(value).split('.')[0].at(-1));
    if (isNaN(numericValue)) {
        throw new Error('This value cannot be converted to a number');
    }
    return numericValue
}