export const georgianMonths = [
  "იანვარი",
  "თებერვალი",
  "მარტი",
  "აპრილი",
  "მაისი",
  "ივნისი",
  "ივლისი",
  "აგვისტო",
  "სექტემბერი",
  "ოქტომბერი",
  "ნოემბერი",
  "დეკემბერი",
];
export function dateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
export function calendarDays(year: number, month: number) {
  const start = new Date(Date.UTC(year, month, 1));
  const offset = (start.getUTCDay() + 6) % 7;
  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(Date.UTC(year, month, i - offset + 1));
    return {
      key: dateKey(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
      ),
      day: date.getUTCDate(),
      inMonth: date.getUTCMonth() === month,
    };
  });
}
export function shiftDate(key: string, days: number) {
  const d = new Date(key + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
export function formatGeorgianDate(key: string) {
  if (!key) return "აირჩიეთ თარიღი";
  const [year, month, day] = key.split("-").map(Number);
  return `${day} ${georgianMonths[month - 1]}, ${year}`;
}
