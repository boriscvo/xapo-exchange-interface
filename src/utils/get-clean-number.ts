export function getCleanNumber(value: string) {
  return Number(value.replace(/,/g, ""))
}
