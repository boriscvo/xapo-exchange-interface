"use client"

import useGlobalStore from "@/app/store/use-global-store"

export function CurrentMode() {
  const tradeState = useGlobalStore((state) => state.tradeState)
  return (
    <p className="flex mt-0.5">
      <span className="mr-1">Transaction mode:</span>
      <span className="font-semibold capitalize">{tradeState}</span>
    </p>
  )
}
