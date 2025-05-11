import { delay, http, HttpResponse } from "msw"

export const handlers = [
  http.post("https://boris_example/transactions/", async ({ request }) => {
    const body = await request.json()
    await delay(1500)
    return new HttpResponse(
      JSON.stringify({
        message: "Transaction placed",
        body,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }),
]
