import { getCleanNumber } from "@/app/utils/get-clean-number"
import { getFormattedValue } from "@/app/utils/get-formatted-number"
import { useTradeStates } from "./use-trade-states"
import useGlobalStore from "@/app/store/use-global-store"

export function useBuyOrSell(btcRate: string) {
  const {
    activeState,
    activeType,
    optionBuy,
    optionSell,
    handleStateChange,
    handleTypeChange,
  } = useTradeStates()

  const amountInCurrency = useGlobalStore((state) => state.amountInCurrency)
  const amountInBtc = useGlobalStore((state) => state.amountInBtc)
  const setAmountInCurrency = useGlobalStore(
    (state) => state.setAmountInCurrency
  )
  const setAmountInBtc = useGlobalStore((state) => state.setAmountInBtc)

  const handleStateUpdates = (value?: string) => {
    if (value === undefined) {
      setAmountInCurrency("")
      setAmountInBtc("")
      return
    }
    if (activeType === "in-currency") {
      const convertedBtc = (getCleanNumber(value) / Number(btcRate)).toFixed(5)
      setAmountInCurrency(getFormattedValue(value))
      setAmountInBtc(getFormattedValue(convertedBtc))
      return
    }
    const convertedCurrency = (getCleanNumber(value) * Number(btcRate)).toFixed(
      2
    )
    setAmountInCurrency(getFormattedValue(convertedCurrency))
    setAmountInBtc(value)
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
    amountInCurrency,
    amountInBtc,
    handleStateChange,
    handleTypeChange,
    handlePayUpdates,
  }
}
