import type React from "react"
import type { Metadata } from "next"
import { Mulish, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieConsent } from "@/components/cookie-consent"

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700"],
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Artols Investment | Agro-Industrial Holding",
  description:
    "SIA Artols Investment — Innovation-driven agro-industrial holding and trusted B2B supply chain partner for Western Europe.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${manrope.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
