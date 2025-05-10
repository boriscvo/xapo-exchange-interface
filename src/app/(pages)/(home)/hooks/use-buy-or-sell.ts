import { useState } from "react"
import { getCleanNumber } from "@/app/utils/get-clean-number"
import { getFormattedValue } from "@/app/utils/get-formatted-number"
import { useTradeStates } from "./use-trade-states"

export function useBuyOrSell(btcRate: string) {
  const {
    activeState,
    activeType,
    optionBuy,
    optionSell,
    handleStateChange,
    handleTypeChange,
  } = useTradeStates()

  const [payMoneyValue, setPayMoneyValue] = useState<string>("")
  const [receiveCoinValue, setReceiveCoinValue] = useState<string>("")

  const handleStateUpdates = (value?: string) => {
    if (value === undefined) {
      setPayMoneyValue("")
      setReceiveCoinValue("")
      return
    }
    if (activeType === "in-currency") {
      const convertedBtc = (getCleanNumber(value) / Number(btcRate)).toFixed(5)
      setPayMoneyValue(getFormattedValue(value))
      setReceiveCoinValue(getFormattedValue(convertedBtc))
      return
    }
    const convertedCurrency = (getCleanNumber(value) * Number(btcRate)).toFixed(
      2
    )
    setPayMoneyValue(getFormattedValue(convertedCurrency))
    setReceiveCoinValue(value)
  }

  const handlePayUpdates = (inputValue: string) => {
    if (!inputValue) {
      handleStateUpdates()
      return
    }
    const value = String(getCleanNumber(inputValue))
    if (isNaN(Number(value)) || (Number(value) < 0 && value.length > 0)) {
      return
    }
    if (inputValue.split(".")[1]?.length > 2) {
      return
    }
    handleStateUpdates(inputValue)
  }

  return {
    activeState,
    activeType,
    optionBuy,
    optionSell,
    payMoneyValue,
    receiveCoinValue,
    handleStateChange,
    handleTypeChange,
    handlePayUpdates,
  }
}
