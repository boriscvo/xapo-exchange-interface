import useGlobalStore from "@/app/store/use-global-store"

export function useTradeConfirmation() {
  const isConfirmationOn = useGlobalStore((state) => state.isConfirmationOn)
  const handleConfirmationClose = useGlobalStore(
    (state) => state.setConfirmationClose
  )

  return {
    isConfirmationOn,
    handleConfirmationClose,
  }
}
