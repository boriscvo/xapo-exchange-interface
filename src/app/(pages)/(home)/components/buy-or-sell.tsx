"use client"
import useGlobalStore from "@/app/store/use-global-store"
import { Switch } from "@/app/atoms/switch"
import { useBuyOrSell } from "../hooks/use-buy-or-sell"
import { Input } from "@/app/atoms/input"
import { Button } from "@/app/atoms/button"
import { ActivePurchaseState } from "@/app/types/trade-flow"

type Props = {
  btcRate: string
}

export function BuyOrSell({ btcRate }: Props) {
  const handleConfirmationOpen = useGlobalStore(
    (state) => state.setConfirmationOpen
  )
  const {
    activeState,
    activeType,
    optionBuy,
    optionSell,
    amountInCurrency,
    amountInBtc,
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
          value={amountInCurrency}
          onChange={handlePayUpdates}
          isDisabled={activeType === "in-btc"}
        />
        <span className="ml-2">USD</span>
      </div>
      <div className="flex mt-4">
        <span className="mr-4">You get:</span>
        <Input
          value={amountInBtc}
          onChange={handlePayUpdates}
          isDisabled={activeType === "in-currency"}
        />
        <span className="ml-2">BTC</span>
      </div>
      <Button variant="primary" onClick={handleConfirmationOpen}>
        Proceed
      </Button>
    </div>
  )
}
