"use client"
import { BuyOrSell, Container, TradeLayout } from "./components"
// import { ArrowDownUp } from "lucide-react"

export default function Home() {
  return (
    <Container>
      <TradeLayout>
        Home
        <BuyOrSell />
      </TradeLayout>
    </Container>
  )
}
