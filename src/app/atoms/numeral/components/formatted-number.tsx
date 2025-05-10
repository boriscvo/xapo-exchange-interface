import { NumeralType } from "../types"
import { IntegerAndDecimal } from "./integer-and-decimal"

export function FormattedNumber({
  numberValue,
  format = "round-with-decimals",
  decimals = 3,
}: NumeralType) {
  switch (format) {
    case "keep-as-is":
      return <>{String(numberValue)}</>
    default:
    case "round-with-decimals":
      return <IntegerAndDecimal value={Number(numberValue).toFixed(decimals)} />
  }
}
