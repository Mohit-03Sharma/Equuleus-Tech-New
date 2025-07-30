import Link from "next/link"
import Image from "next/image"

export default function Footer() {
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
              &copy; {new Date().getFullYear()} Equuleus Technology. All rights reserved.
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
              <p className="mb-2">📍 Plot no. A-10, First Floor, Sector - 34, Rohtak, Haryana, India.</p>
              <p>📞 +91 9999398103 | ✉️ info@equuleustechnology.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
