import { Numeral } from "@/app/atoms/numeral/"
import { fetchBtcPrice } from "@/app/http/fetch-btc-price"
import { BuyOrSell, Container, TradeLayout } from "./components"
import { TradeConfirmation } from "./components/trade-confirmation/trade-confirmation"

export default async function Home() {
  const btcRate = await fetchBtcPrice()
  return (
    <>
      <Container>
        <TradeLayout>
          Home
          <Numeral
            numberValue={btcRate.price}
            format="round-with-decimals"
            decimals={2}
            trailSymbol="USD"
          />
          <BuyOrSell btcRate={btcRate.price} />
        </TradeLayout>
      </Container>
      <TradeConfirmation />
    </>
  )
}
