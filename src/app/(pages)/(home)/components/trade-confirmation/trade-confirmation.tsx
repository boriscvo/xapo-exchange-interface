"use client"
import { Dialog } from "@/app/blocks/dialog/"
import { useTradeConfirmation } from "../../hooks/use-trade-confirmation"
import { Description } from "./description"

export function TradeConfirmation() {
  const { isConfirmationOn, handleConfirmationClose } = useTradeConfirmation()
  return (
    <Dialog
      isOpen={isConfirmationOn}
      title="Confirm Trade"
      content={<Description />}
      handleClose={handleConfirmationClose}
      handleConfirm={() => {}}
      loadingText="Please wait until the transaction is placed..."
      successText="Transaction placed successfully!"
    />
  )
}
