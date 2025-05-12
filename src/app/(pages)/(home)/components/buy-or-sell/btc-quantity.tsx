"use client"
import { EasyText } from "@/app/atoms/easy-text"
import { Input } from "@/app/atoms/input"
import useGlobalStore from "@/app/store/use-global-store"
import { ActivePurchaseType } from "@/app/types/trade-flow"
import { Bitcoin } from "lucide-react"

type Props = {
  amountInBtc: string
  onChange: (value: string) => void
  onFocus: (value: ActivePurchaseType) => void
}

export function BtcQuantity({ amountInBtc, onChange, onFocus }: Props) {
  const tradeState = useGlobalStore((state) => state.tradeState)
  return (
    <div className="relative flex items-center w-full max-w-[22.5rem] mt-3 px-3">
      <EasyText isVisible={tradeState === "buy"}>
        <span className="absolute mr-4 -mt-3.5 text-lg">You get:</span>
      </EasyText>
      <EasyText isVisible={tradeState === "sell"}>
        <span className="absolute mr-4 -mt-3.5 text-lg">By selling:</span>
      </EasyText>
      <Input
        value={amountInBtc}
        customClass="w-[11rem] ml-auto"
        onChange={onChange}
        onFocus={() => onFocus("in-btc")}
      />
      <Bitcoin className="ml-2" />
    </div>
  )
}
