import { Input } from "@/app/atoms/input"
import useGlobalStore from "@/app/store/use-global-store"

type Props = {
  amountInBtc: string
  activeType: "in-currency" | "in-btc"
  handlePayUpdates: (value: string) => void
}

export function BtcQuantity({
  amountInBtc,
  activeType,
  handlePayUpdates,
}: Props) {
  const tradeState = useGlobalStore((state) => state.tradeState)
  return (
    <div className="flex mt-4">
      {tradeState === "buy" ? (
        <span className="mr-4">You get:</span>
      ) : (
        <span className="mr-4">By selling:</span>
      )}
      <Input
        value={amountInBtc}
        onChange={handlePayUpdates}
        isDisabled={activeType === "in-currency"}
      />
      <span className="ml-2">BTC</span>
    </div>
  )
}
