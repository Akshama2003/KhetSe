import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KisanSetu - Connecting Annadata to Bharat",
  description:
    "Web3-powered agri-commerce platform empowering Indian farmers with voice assistance, blockchain trust, and direct-to-consumer sales",
  keywords: "agriculture, farmers, blockchain, Web3, India, organic, direct sales, voice assistant",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
