export const isEmpty = (value: any): boolean => {
    if (value === "" || value === null || value === undefined) return true;
    if (typeof value === "object") return Object.keys(value).length === 0;
    if (Array.isArray(value)) return value.length === 0;
    return false;
};