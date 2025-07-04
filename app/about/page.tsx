import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Equuleus Technologies</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A forward-thinking IT startup founded by seasoned professionals with over two decades of collective industry
            experience
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Equuleus Technologies was built to help organizations confidently navigate the evolving digital
                  landscape. Rooted in deep technological expertise and a passion for innovation, we bridge the gap
                  between legacy systems and next-generation solutions.
                </p>
                <p>
                  Our mission is to empower businesses to become more agile, resilient, and customer-centric. At the
                  heart of Equuleus lies a commitment to delivering value-driven solutions that are not only robust and
                  scalable but also strategically aligned with our clients' long-term goals.
                </p>
                <p>
                  We believe that technology should not only solve problems — it should unlock possibilities. Our
                  approach combines strategic insight with hands-on execution, ensuring every engagement results in
                  measurable impact and sustainable growth.
                </p>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 mt-6">
                <Link href="/contact" className="flex items-center">
                  Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/cybersecurity-data.jpg"
                alt="Cybersecurity and data protection solutions"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To bridge the gap between legacy systems and next-generation solutions, empowering businesses to
                  become more agile, resilient, and customer-centric through value-driven technology solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Eye className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be a trusted catalyst for digital evolution — empowering businesses worldwide to transform with
                  confidence, operate with agility, and grow with purpose in a future where innovation is accessible and
                  transformation is seamless.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three hardworking professionals united by a shared vision and over 20 years of collective experience
            </p>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <CardTitle className="text-2xl text-center">Founding Team</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  At the core of Equuleus Technologies is a founding team of three professionals who bring distinct yet
                  complementary expertise — spanning digital strategy, infrastructure and application management,
                  enterprise solutions, and human capital development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What sets our team apart is not just experience, but depth of execution, strategic foresight, and a
                  hands-on understanding of real-world IT challenges. Having led transformative initiatives across
                  diverse sectors, we understand what it takes to align technology with business outcomes — not just in
                  theory, but in action.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  We are builders, problem-solvers, and lifelong learners — driven by the belief that innovation is best
                  delivered through collaboration, clarity, and care.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold mb-4">The Principles That Guide Us</h2>
            <p className="text-xl text-gray-600">The values that shape everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="mx-auto bg-blue-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Building lasting relationships through transparency, reliability, and integrity in every interaction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="mx-auto bg-green-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Adaptability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Embracing change and evolving with technology to deliver innovative solutions that meet emerging
                  needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="mx-auto bg-purple-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pursuing relentless improvement in everything we do, from technical execution to client service.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how we can help transform your business with our expertise and experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full bg-transparent"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
