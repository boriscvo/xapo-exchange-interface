import useGlobalStore from "@/app/store/use-global-store"
import { ActivePurchaseState, ActivePurchaseType } from "@/app/types/trade-flow"

export function useTradeStates() {
  const tradeState = useGlobalStore((state) => state.tradeState)
  const tradeType = useGlobalStore((state) => state.tradeType)
  const setTradeState = useGlobalStore((state) => state.setTradeState)
  const setTradeType = useGlobalStore((state) => state.setTradeType)

  const handleStateChange = (value: ActivePurchaseState) => {
    setTradeState(value)
  }

  const handleTypeChange = (value: ActivePurchaseType) => {
    setTradeType(value)
  }

  const optionBuy = { label: "Buy", value: "buy" as ActivePurchaseState }

  const optionSell = { label: "Sell", value: "sell" as ActivePurchaseState }

  return {
    activeState: tradeState,
    activeType: tradeType,
    optionBuy,
    optionSell,
    handleStateChange,
    handleTypeChange,
  }
}
