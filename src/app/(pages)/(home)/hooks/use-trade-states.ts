import { useState } from "react"
import { ActivePurchaseState, ActivePurchaseType } from "../types"

export function useTradeStates() {
  const [activeState, setActiveState] = useState<ActivePurchaseState>("buy")
  const [activeType, setActiveType] =
    useState<ActivePurchaseType>("in-currency")

  const handleStateChange = (value: ActivePurchaseState) => {
    setActiveState(value)
  }

  const handleTypeChange = (value: ActivePurchaseType) => {
    setActiveType(value)
  }

  const optionBuy = {
    label: "Buy",
    value: "buy" as ActivePurchaseState,
  }

  const optionSell = {
    label: "Sell",
    value: "sell" as ActivePurchaseState,
  }

  return {
    activeState,
    activeType,
    optionBuy,
    optionSell,
    handleStateChange,
    handleTypeChange,
  }
}
