import { getCleanNumber } from "./get-clean-number"

export function getFormattedValue(value?: string) {
  if (!value) return ""
  const [integerPart, decimalPart] = value.toString().split(".")
  const cleanNumber = String(getCleanNumber(integerPart))
  const formattedIntegerPart = cleanNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const formattedNumber =
    decimalPart !== undefined
      ? `${formattedIntegerPart}.${decimalPart}`
      : formattedIntegerPart
  return formattedNumber
}
