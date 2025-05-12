import { fetchBtcPrice } from "@/app/http/fetch-btc-price"
import {
  BuyOrSell,
  Container,
  TradeLayout,
  Hero,
  TradeConfirmation,
} from "./components"

export default async function Home() {
  const btcRate = await fetchBtcPrice()
  return (
    <>
      <Container>
        <TradeLayout>
          <Hero btcRate={btcRate.price} />
          <BuyOrSell btcRate={btcRate.price} />
        </TradeLayout>
      </Container>
      <TradeConfirmation />
    </>
  )
}
