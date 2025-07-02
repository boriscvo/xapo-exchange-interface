type Args = {
  userId: string
  money?: {
    amount: number
    currency: string
  }
  coins?: string
}

export async function postBtcTransaction(args: Args) {
  const { userId, money, coins } = args
  const url = `https://boris_example/transactions/`
  const body = {
    userId,
    money,
    coins,
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error("Bad response")
    }

    const json = await response.json()
    return json
  } catch (error) {
    console.error("Internal error: ", error)
    return null
  }
}
