import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Bodoni_Moda } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni-moda",
})

export const metadata: Metadata = {
  title: "ShrihanPay - One App for All Your Utility Needs",
  description: "Recharges & Bill Payments, and a lot more",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${bodoniModa.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
