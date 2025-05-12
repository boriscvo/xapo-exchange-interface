import { useEffect, useState } from "react"

export function useEasyText(isVisible?: boolean) {
  const [isTextMounted, setIsTextMounted] = useState(false)

  useEffect(() => {
    if (!isVisible) {
      setIsTextMounted(false)
      return
    }

    const visibleTimer = setTimeout(() => {
      setIsTextMounted(true)
    }, 200)

    return () => {
      clearTimeout(visibleTimer)
    }
  }, [isVisible])

  const isMountingOn = isVisible && isTextMounted
  return {
    isMountingOn,
    isTextMounted,
  }
}
