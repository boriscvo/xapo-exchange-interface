"use client"
import { Numeral } from "@/app/atoms/numeral/numeral"
import { BuyOrSell, Container, TradeLayout } from "./components"
// import { ArrowDownUp } from "lucide-react"

export default function Home() {
  return (
    <Container>
      <TradeLayout>
        Home
        <Numeral
          numberValue={1823.82345667}
          format="round-with-decimals"
          decimals={2}
          trailSymbol="USD"
        />
        <BuyOrSell />
      </TradeLayout>
    </Container>
  )
}
