"use client"
import { Dialog } from "@/app/blocks/dialog/"
import { useTradeConfirmation } from "../../hooks/use-trade-confirmation"
import { Description } from "./description"

export function TradeConfirmation() {
  const {
    isConfirmationOn,
    actionStatus,
    handleConfirm,
    handleConfirmationClose,
  } = useTradeConfirmation()
  return (
    <Dialog
      isOpen={isConfirmationOn}
      title="Confirm Trade"
      content={<Description />}
      actionStatus={actionStatus}
      handleClose={handleConfirmationClose}
      handleConfirm={handleConfirm}
      loadingText="Please wait until the transaction is placed..."
      successText="Transaction placed successfully!"
    />
  )
}
