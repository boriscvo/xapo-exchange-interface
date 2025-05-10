import { Container, FormattedNumber } from "./components"
import { NumeralType } from "./types"

export function Numeral({
  numberValue,
  format,
  trailSymbol,
  decimals,
}: NumeralType) {
  return (
    <Container>
      <span className="flex items-baseline">
        <FormattedNumber
          numberValue={numberValue}
          format={format}
          decimals={decimals}
        />
        {trailSymbol ? ` ${trailSymbol}` : ""}
      </span>
    </Container>
  )
}
