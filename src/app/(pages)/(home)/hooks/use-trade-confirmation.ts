import useGlobalStore from "@/app/store/use-global-store"
import { getActionStatus } from "@/app/utils/get-action-state"
import { useMutation } from "@tanstack/react-query"

export function useTradeConfirmation() {
  const isConfirmationOn = useGlobalStore((state) => state.isConfirmationOn)
  const amountInCurrency = useGlobalStore((state) => state.amountInCurrency)
  const handleAmountInCurrency = useGlobalStore(
    (state) => state.setAmountInCurrency
  )
  const handleAmountInBtc = useGlobalStore((state) => state.setAmountInBtc)
  const amountInBtc = useGlobalStore((state) => state.amountInBtc)
  const tradeType = useGlobalStore((state) => state.tradeType)
  const tradeState = useGlobalStore((state) => state.tradeState)
  const handleConfirmationClose = useGlobalStore(
    (state) => state.setConfirmationClose
  )
  const handleBsckFromConfirmation = useGlobalStore(
    (state) => state.setUserBackFromConfirmation
  )

  const {
    status,
    mutate: handleConfirm,
    reset,
  } = useMutation({
    mutationFn: async () => {
      const response = await fetch("https://boris_example/transactions/", {
        method: "POST",
        body: JSON.stringify({
          amount: tradeType === "in-currency" ? amountInCurrency : null,
          quantity: tradeType === "in-btc" ? amountInBtc : null,
          side: tradeState,
          userId: "123456",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      return response.json()
    },
  })

  const handleDone = () => {
    handleConfirmationClose()
    handleAmountInBtc("")
    handleAmountInCurrency("")
    setTimeout(() => {
      reset()
    }, 500)
  }

  const handleClose = () => {
    handleConfirmationClose()
    handleBsckFromConfirmation(true)
  }

  return {
    isConfirmationOn,
    actionStatus: getActionStatus(status),
    handleConfirm,
    handleDone,
    handleClose,
  }
}
