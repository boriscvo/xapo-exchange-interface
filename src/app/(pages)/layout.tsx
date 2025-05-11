import "../globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { MSW } from "../../libs/msw-wrapper"
import { QueryProvider } from "../../libs/query-provider/query-provider"

export const metadata: Metadata = {
  title: "XAPO Convertor",
  description: "Trade BTC on XAPO platform",
}

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <QueryProvider>
          <MSW />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
