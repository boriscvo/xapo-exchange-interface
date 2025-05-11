import { useEffect, useState } from "react"

export function useDialogVisibility(isOpen: boolean) {
  const [isDialogMounted, setIsDialogMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsDialogMounted(true)
      return
    }

    const closeTimer = setTimeout(() => {
      setIsDialogMounted(false)
    }, 300)

    return () => {
      clearTimeout(closeTimer)
    }
  }, [isOpen])

  const isMountingOn = isOpen && isDialogMounted

  return {
    isMountingOn,
    isDialogMounted,
  }
}
