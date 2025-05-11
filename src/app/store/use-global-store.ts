import { create } from "zustand"
import {
  BtcTradeFlowSlice,
  btcTradeFlowSlice,
} from "./slices/btc-trade-flow-slice"

type Args = BtcTradeFlowSlice

const useGlobalStore = create<Args>((set, get, api) => ({
  ...btcTradeFlowSlice(set, get, api),
}))

export default useGlobalStore
