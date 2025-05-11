"use client"
import { Input } from "@/app/atoms/input"
import useGlobalStore from "@/app/store/use-global-store"

type Props = {
  amountInCurrency: string
  activeType: "in-currency" | "in-btc"
  handlePayUpdates: (value: string) => void
}

export function MoneyAmount({
  amountInCurrency,
  activeType,
  handlePayUpdates,
}: Props) {
  const tradeState = useGlobalStore((state) => state.tradeState)
  return (
    <div className="flex mt-4">
      {tradeState === "buy" ? (
        <span className="mr-4">You pay:</span>
      ) : (
        <span className="mr-4">You receive:</span>
      )}
      <Input
        value={amountInCurrency}
        onChange={handlePayUpdates}
        isDisabled={activeType === "in-btc"}
        isAutoFocus
      />
      <span className="ml-2">USD</span>
    </div>
  )
}
