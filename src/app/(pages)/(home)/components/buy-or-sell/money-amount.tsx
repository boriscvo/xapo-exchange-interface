"use client"
import useGlobalStore from "@/store/use-global-store"
import { ActivePurchaseType } from "@/types/trade-flow"
import { EasyText } from "@/app/atoms/easy-text"
import { Input } from "@/app/atoms/input"
import { DollarSignIcon } from "lucide-react"

type Props = {
  ref: React.RefObject<HTMLInputElement | null>
  amountInCurrency: string
  onChange: (value: string) => void
  onFocus: (value: ActivePurchaseType) => void
}

export function MoneyAmount({
  ref,
  amountInCurrency,
  onChange,
  onFocus,
}: Props) {
  const tradeState = useGlobalStore((state) => state.tradeState)

  return (
    <div className="relative flex items-center w-full max-w-[22.5rem] sm:px-3">
      <EasyText isVisible={tradeState === "buy"}>
        <span className="absolute mr-4 -mt-3.5 text-lg">You pay:</span>
      </EasyText>
      <EasyText isVisible={tradeState === "sell"}>
        <span className="absolute mr-4 -mt-3.5 text-lg">You receive:</span>
      </EasyText>
      <Input
        ref={ref}
        value={amountInCurrency}
        customClass="w-[11rem] ml-auto"
        isAutoFocus
        onFocus={() => onFocus("in-currency")}
        onChange={onChange}
      />
      <DollarSignIcon className="ml-2" />
    </div>
  )
}
