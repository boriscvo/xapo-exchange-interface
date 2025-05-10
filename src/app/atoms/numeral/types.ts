export type NumeralType = {
  numberValue: string | number
  format?: NumberFormat
  trailSymbol?: string
  decimals?: number
}

export type NumberFormat = "keep-as-is" | "round-with-decimals"
