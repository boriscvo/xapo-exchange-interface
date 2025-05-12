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
      <FormattedNumber
        numberValue={numberValue}
        format={format}
        decimals={decimals}
      />
      {trailSymbol ? ` ${trailSymbol}` : ""}
    </Container>
  )
}
