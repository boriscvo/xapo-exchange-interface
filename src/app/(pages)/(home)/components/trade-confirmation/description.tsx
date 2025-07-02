import useGlobalStore from "@/store/use-global-store"
import { ContentMessage } from "./content-message"

export function Description() {
  const amountInBtc = useGlobalStore((state) => state.amountInBtc)
  const amountInCurrency = useGlobalStore((state) => state.amountInCurrency)
  const tradeType = useGlobalStore((state) => state.tradeType)
  const tradeState = useGlobalStore((state) => state.tradeState)

  if (tradeState === "buy" && tradeType === "in-currency") {
    return (
      <ContentMessage>
        You are about to{" "}
        <span className="font-semibold">buy {amountInCurrency} USD</span> worth
        of bitcoin, which accounts for{" "}
        <span className=" font-semibold">{amountInBtc} BTC</span>.
      </ContentMessage>
    )
  }
  if (tradeState === "buy" && tradeType === "in-btc") {
    return (
      <ContentMessage>
        You are about to{" "}
        <span className="font-semibold">buy {amountInBtc} BTC</span> which costs
        around <span className=" font-semibold">{amountInCurrency} USD</span>.
      </ContentMessage>
    )
  }
  if (tradeState === "sell" && tradeType === "in-currency") {
    return (
      <ContentMessage>
        You are about to{" "}
        <span className="font-semibold">sell {amountInCurrency} USD</span> worth
        of bitcoins, which is around{" "}
        <span className=" font-semibold">{amountInBtc} BTC</span>.
      </ContentMessage>
    )
  }
  if (tradeState === "sell" && tradeType === "in-btc") {
    return (
      <ContentMessage>
        You are about to{" "}
        <span className="font-semibold">sell {amountInBtc} BTC</span> which is
        worth around{" "}
        <span className=" font-semibold">{amountInCurrency} USD</span>.
      </ContentMessage>
    )
  }
}
