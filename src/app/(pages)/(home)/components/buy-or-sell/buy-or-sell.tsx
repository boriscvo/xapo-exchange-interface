"use client"
import useGlobalStore from "@/app/store/use-global-store"
import { Switch } from "@/app/atoms/switch"
import { useBuyOrSell } from "../../hooks/use-buy-or-sell"
import { Button } from "@/app/atoms/button"
import { ActivePurchaseState } from "@/app/types/trade-flow"
import { MoneyAmount } from "./money-amount"
import { BtcQuantity } from "./btc-quantity"

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
      <MoneyAmount
        amountInCurrency={amountInCurrency}
        activeType={activeType}
        handlePayUpdates={handlePayUpdates}
      />
      <BtcQuantity
        amountInBtc={amountInBtc}
        activeType={activeType}
        handlePayUpdates={handlePayUpdates}
      />
      <Button
        isDisabled={!amountInCurrency || !amountInBtc}
        variant="primary"
        onClick={handleConfirmationOpen}
        customClass="px-3 py-2"
      >
        Proceed
      </Button>
    </div>
  )
}
