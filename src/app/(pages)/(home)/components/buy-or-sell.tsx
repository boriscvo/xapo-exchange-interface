"use client"
import { Switch } from "@/app/atoms/switch"
import { useBuyOrSell } from "../hooks/use-buy-or-sell"
import { ActivePurchaseState } from "../types"
import { Input } from "@/app/atoms/input"

type Props = {
  btcRate: string
}

export function BuyOrSell({ btcRate }: Props) {
  const {
    activeState,
    activeType,
    optionBuy,
    optionSell,
    payMoneyValue,
    receiveCoinValue,
    handleStateChange,
    handlePayUpdates,
  } = useBuyOrSell(btcRate)
  return (
    <div className="mt-10">
      <Switch<ActivePurchaseState>
        activeState={activeState}
        options={{
          option1: optionBuy,
          option2: optionSell,
        }}
        onChange={handleStateChange}
      />
      <div className="flex mt-4">
        <span className="mr-4">You pay:</span>
        <Input
          value={payMoneyValue}
          onChange={handlePayUpdates}
          isDisabled={activeType === "in-btc"}
        />
        <span className="ml-2">USD</span>
      </div>
      <div className="flex mt-4">
        <span className="mr-4">You get:</span>
        <Input
          value={receiveCoinValue}
          onChange={handlePayUpdates}
          isDisabled={activeType === "in-currency"}
        />
        <span className="ml-2">BTC</span>
      </div>
    </div>
  )
}
