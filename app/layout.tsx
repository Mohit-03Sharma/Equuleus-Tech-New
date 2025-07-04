import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./clientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Equuleus Technologies - Digital Transformation & IT Services",
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
  return <ClientLayout>{children}</ClientLayout>
}
