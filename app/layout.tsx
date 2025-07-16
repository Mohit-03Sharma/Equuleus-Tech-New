import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/navigation"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Equuleus Technology - Digital Transformation & IT Services",
  description:
    "Empowering businesses with digital transformation, IT managed services, digital marketing, and staff augmentation. 20+ years of collective experience.",
  keywords:
    "digital transformation, IT services, managed services, digital marketing, staff augmentation, cloud migration, DevOps",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
