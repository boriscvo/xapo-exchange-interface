import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

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
      <body className={`antialiased ${poppins.className}`}>{children}</body>
    </html>
  )
}
