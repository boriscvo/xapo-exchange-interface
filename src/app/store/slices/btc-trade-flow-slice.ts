import { ActivePurchaseState, ActivePurchaseType } from "@/app/types/trade-flow"
import { StateCreator } from "zustand"

export type BtcTradeFlowSlice = {
  tradeType: ActivePurchaseType
  tradeState: ActivePurchaseState
  setTradeType: (type: ActivePurchaseType) => void
  setTradeState: (state: ActivePurchaseState) => void
  setAmountInBtc: (amount: string) => void
  setAmountInCurrency: (amount: string) => void
  amountInBtc: string
  amountInCurrency: string
  isConfirmationOn: boolean
  setConfirmationOpen: () => void
  setConfirmationClose: () => void
}

export const btcTradeFlowSlice: StateCreator<BtcTradeFlowSlice> = (set) => ({
  tradeType: "in-currency",
  tradeState: "buy",
  isConfirmationOn: false,
  amountInBtc: "",
  amountInCurrency: "",
  setConfirmationOpen: () => {
    set(() => ({
      isConfirmationOn: true,
    }))
  },
  setConfirmationClose: () => {
    set(() => ({
      isConfirmationOn: false,
    }))
  },
  setAmountInBtc: (amount: string) => {
    set(() => ({
      amountInBtc: amount,
    }))
  },
  setAmountInCurrency: (amount: string) => {
    set(() => ({
      amountInCurrency: amount,
    }))
  },
  setTradeType: (type: ActivePurchaseType) => {
    set(() => ({
      tradeType: type,
    }))
  },
  setTradeState: (state: ActivePurchaseState) => {
    set(() => ({
      tradeState: state,
    }))
  },
})
