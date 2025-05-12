import { CurrentMode } from "./current-mode"
import { CurrentPrice } from "./current-price"

type Props = {
  btcRate: string
}

export function Hero({ btcRate }: Props) {
  return (
    <div className="w-[50%] flex flex-col">
      <h2 className="uppercase text-5xl mb-5">
        BTC {"<>"} USD Exchange Interface
      </h2>
      <CurrentPrice btcRate={btcRate} />
      <CurrentMode />
    </div>
  )
}
