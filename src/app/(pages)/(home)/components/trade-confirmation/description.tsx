import useGlobalStore from "@/app/store/use-global-store"

export function Description() {
  const amountInBtc = useGlobalStore((state) => state.amountInBtc)
  const amountInCurrency = useGlobalStore((state) => state.amountInCurrency)
  const tradeType = useGlobalStore((state) => state.tradeType)
  const tradeState = useGlobalStore((state) => state.tradeState)

  const Proceed = () => (
    <div className="mt-3">Are you sure you want to proceed?</div>
  )

  if (tradeState === "buy" && tradeType === "in-currency") {
    return (
      <>
        <div className="leading-6">
          You are about to{" "}
          <span className="font-semibold">buy {amountInCurrency} USD</span>{" "}
          worth of bitcoin, which accounts for{" "}
          <span className=" font-semibold">{amountInBtc} BTC</span>.
        </div>
        <Proceed />
      </>
    )
  }
  if (tradeState === "buy" && tradeType === "in-btc") {
    return (
      <>
        <div className="leading-5.5">
          You are about to{" "}
          <span className="font-semibold">buy {amountInBtc} BTC</span> which
          costs around{" "}
          <span className=" font-semibold">{amountInCurrency} USD</span>.
        </div>
        <Proceed />
      </>
    )
  }
  if (tradeState === "sell" && tradeType === "in-currency") {
    return (
      <>
        <div className="leading-5.5">
          You are about to{" "}
          <span className="font-semibold">sell {amountInCurrency} USD</span>{" "}
          worth of bitcoins, which is around{" "}
          <span className=" font-semibold">{amountInBtc} BTC</span>.
        </div>
        <Proceed />
      </>
    )
  }
  if (tradeState === "sell" && tradeType === "in-btc") {
    return (
      <div className="leading-5.5">
        You are about to{" "}
        <span className="font-semibold">sell {amountInBtc} BTC</span> which is
        worth around{" "}
        <span className=" font-semibold">{amountInCurrency} USD</span>.
        <Proceed />
      </div>
    )
  }
}
