export const isEmpty = (value: any): boolean => {
    if (value === "" || value === null || value === undefined) return true;
    if (typeof value === "object") return Object.keys(value).length === 0;
    if (Array.isArray(value)) return value.length === 0;
    return false;
};

export const formatCurrency = (value: any) => {
    let numberValue: number;

    if (typeof value === "string") {
        numberValue = Number(value.replace(/,/g, ""));
        if (isNaN(numberValue)) return "-";
    } else if (typeof value === "number") {
        numberValue = value;
    } else {
        return "-";
    }

    const formatted = numberValue.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });
    return formatted.replace("₩", "₩ ");
}