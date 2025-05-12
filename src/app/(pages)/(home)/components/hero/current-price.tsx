import { Numeral } from "@/app/atoms/numeral"

type Props = {
  btcRate: string
}

export function CurrentPrice({ btcRate }: Props) {
  return (
    <p className="flex">
      <span className="mr-1">Current price:</span>
      <span className="text-positive font-semibold">
        <Numeral
          numberValue={btcRate}
          format="round-with-decimals"
          decimals={2}
          trailSymbol="USD"
        />
      </span>
      <span className="ml-1">for 1 BTC</span>
    </p>
  )
}
