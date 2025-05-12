import { CurrentMode } from "./current-mode"
import { CurrentPrice } from "./current-price"

type Props = {
  btcRate: string
}

export function Hero({ btcRate }: Props) {
  return (
    <div className="w-full md:w-[50%] flex flex-col">
      <h2 className="mb-8 md:mb-5 max-sm:mt-4 uppercase text-3xl sm:text-5xl max-md:text-center">
        BTC {"<>"} USD <br />
        Exchange Interface
      </h2>
      <div className="max-md:flex flex-col text-center items-center">
        <CurrentPrice btcRate={btcRate} />
        <CurrentMode />
      </div>
    </div>
  )
}
