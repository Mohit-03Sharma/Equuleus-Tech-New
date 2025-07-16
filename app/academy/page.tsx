import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Equuleus{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Academy
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Advance your career with industry-leading technology projects. Learn from experts and gain practical
              skills that drive real-world results.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                <Link href="/contact">Contact to Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
