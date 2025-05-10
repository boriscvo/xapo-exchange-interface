type Props = {
  value: string
}

export function IntegerAndDecimal({ value }: Props) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 10,
  })
}
