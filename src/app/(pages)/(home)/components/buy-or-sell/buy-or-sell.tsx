"use client"
import useGlobalStore from "@/app/store/use-global-store"
import { Switch } from "@/app/atoms/switch"
import { useBuyOrSell } from "../../hooks/use-buy-or-sell"
import { ActivePurchaseState } from "@/app/types/trade-flow"
import { TradeAction } from "./trade-action"

type Props = {
  btcRate: string
}

export function BuyOrSell({ btcRate }: Props) {
  const handleConfirmationOpen = useGlobalStore(
    (state) => state.setConfirmationOpen
  )
  const {
    activeState,
    optionBuy,
    optionSell,
    amountInCurrency,
    amountInBtc,
    focusBackInputRef,
    handleStateChange,
    handleTypeChange,
    handlePayUpdates,
  } = useBuyOrSell(btcRate)
  return (
    <div className="w-[50%] max-w-[22.5rem] mx-auto flex flex-col items-center">
      <Switch<ActivePurchaseState>
        activeState={activeState}
        options={{
          option1: optionBuy,
          option2: optionSell,
        }}
        onChange={handleStateChange}
      />
      <TradeAction
        focusBackInputRef={focusBackInputRef}
        amountInCurrency={amountInCurrency}
        amountInBtc={amountInBtc}
        handlePayUpdates={handlePayUpdates}
        handleTypeChange={handleTypeChange}
        handleConfirmationOpen={handleConfirmationOpen}
      />
    </div>
  )
}
