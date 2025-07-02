import { Rate } from "../types/rate"

export async function fetchBtcPrice() {
  try {
    const response = await fetch(
      "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    )
    if (!response.ok) {
      throw new Error("Bad response")
    }
    const json = (await response.json()) as Rate
    return json
  } catch (error) {
    console.error("Internal error: ", error)
    return {
      price: "123456",
      symbol: "BTCUSDT",
    } as Rate // just in case
  }
}
