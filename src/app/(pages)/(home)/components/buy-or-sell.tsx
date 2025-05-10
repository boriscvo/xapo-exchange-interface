"use client"
import { Switch } from "@/app/atoms/switch"
import { useBuyOrSell } from "../hooks/buy-or-sell"
import { ActivePurchaseState } from "../types"

export function BuyOrSell() {
  const { activeState, optionBuy, optionSell, handleChange } = useBuyOrSell()
  return (
    <div className="mt-10">
      <Switch<ActivePurchaseState>
        activeState={activeState}
        options={{
          option1: optionBuy,
          option2: optionSell,
        }}
        onChange={handleChange}
      />
    </div>
  )
}
