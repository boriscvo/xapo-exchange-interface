import { useState } from "react"
import { ActivePurchaseState } from "../types"

export function useBuyOrSell() {
  const [activeState, setActiveState] = useState<ActivePurchaseState>("buy")

  const handleChange = (value: ActivePurchaseState) => {
    setActiveState(value)
  }

  const optionBuy = {
    label: "Buy",
    value: "buy" as ActivePurchaseState,
  }

  const optionSell = {
    label: "Sell",
    value: "sell" as ActivePurchaseState,
  }

  return { activeState, optionBuy, optionSell, handleChange }
}
