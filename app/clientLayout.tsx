import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })
;("use client")

import { useState } from "react"

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/equuleus-logo.jpg"
              alt="Equuleus Technologies Logo"
              width={360}
              height={120}
              className="h-24 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Equuleus
                <span className="block text-xl lg:text-2xl font-semibold text-blue-600">Technologies</span>
              </h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/academy" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Academy
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Careers
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/academy"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Academy
              </Link>
              <Link
                href="/careers"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <div className="px-4 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Empowering businesses to transform with confidence, operate with agility, and grow with purpose through
                innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Li</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Ig</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    IT Managed Services
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Staff Augmentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/academy" className="hover:text-white transition-colors">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-semibold text-lg mb-6">Innovation</h3>
              <div className="relative">
                <Image
                  src="/images/footer-tech.jpg"
                  alt="Cloud computing and digital innovation"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg"></div>
              </div>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Leading the future with cloud-first solutions and innovative technology partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Equuleus Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center text-gray-400 text-sm">
              <p className="mb-2">
                📍 Plot No. - A-57, Munchkin Tower, Ground Floor, Ryan Enclave, Sohna Road, Gurugram, Haryana, India
              </p>
              <p>📞 +91 9999398103 | ✉️ info@equuleustechnologies.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function ClientLayout({
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
