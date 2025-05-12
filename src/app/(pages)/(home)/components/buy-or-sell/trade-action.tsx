import { Button } from "@/app/atoms/button"
import { BtcQuantity } from "./btc-quantity"
import { MoneyAmount } from "./money-amount"
import { Coins } from "lucide-react"
import { ActivePurchaseType } from "@/app/types/trade-flow"
import { useEffect, useState } from "react"

type Props = {
  focusBackInputRef: React.RefObject<HTMLInputElement | null>
  amountInCurrency: string
  amountInBtc: string
  handlePayUpdates: (value: string) => void
  handleTypeChange: (value: ActivePurchaseType) => void
  handleConfirmationOpen: () => void
}

export function TradeAction({
  focusBackInputRef,
  amountInCurrency,
  amountInBtc,
  handlePayUpdates,
  handleTypeChange,
  handleConfirmationOpen,
}: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <>
      <MoneyAmount
        ref={focusBackInputRef}
        amountInCurrency={amountInCurrency}
        onChange={handlePayUpdates}
        onFocus={handleTypeChange}
      />
      <BtcQuantity
        amountInBtc={amountInBtc}
        onChange={handlePayUpdates}
        onFocus={handleTypeChange}
      />
      <Button
        isDisabled={!amountInCurrency || !amountInBtc}
        variant="primary"
        onClick={handleConfirmationOpen}
        customClass="max-sm:mt-auto max-md:w-full ml-auto mr-11 sm:mt-8 md:mt-3 px-3 py-2 w-[11rem]"
        icon={<Coins size={16} className="mr-3 -ml-7" />}
      >
        <span>Proceed</span>
      </Button>
    </>
  )
}
