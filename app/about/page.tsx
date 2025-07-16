import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe, Lightbulb, Cog, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Equuleus Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We are a forward-thinking technology company dedicated to empowering businesses through innovative digital
              solutions. With over 25 years of combined experience, we transform challenges into opportunities.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Mission & Vision</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses to transform with confidence, operate with agility, and grow with purpose
                    through innovative technology solutions that drive sustainable success.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading technology partner that enables organizations to thrive in the digital age by
                    delivering cutting-edge solutions that create lasting value and competitive advantage.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/digital-travel.jpg"
                alt="Digital innovation and technology"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Centre of Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Centre of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized centers drive innovation and deliver best-in-class solutions across key technology
              domains.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Lab</h3>
                <p className="text-gray-600">
                  Dedicated research and development center focusing on emerging technologies, AI/ML solutions, and
                  next-generation digital platforms.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cog className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps Excellence</h3>
                <p className="text-gray-600">
                  Specialized team ensuring seamless CI/CD pipelines, infrastructure automation, and cloud-native
                  deployments for optimal performance.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Strategy</h3>
                <p className="text-gray-600">
                  Strategic consulting hub that helps organizations navigate digital transformation with data-driven
                  insights and proven methodologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with clients, partners,
              and team members.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every project, delivering solutions that exceed expectations and drive
                  measurable results.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of partnership, working closely with our clients to understand their unique
                  challenges and goals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We embrace emerging technologies and innovative approaches to solve complex business challenges
                  effectively.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We conduct business with the highest ethical standards, building trust through transparency and
                  accountability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our mission to deliver exceptional technology solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">SM</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Satish Mudgil</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">Chief Executive Officer</p>
                <p className="text-gray-600 text-xs">
                  Visionary leader with 20+ years of experience in digital transformation and strategic business
                  development.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">AT</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Amit Thakur</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">Chief Technology Officer</p>
                <p className="text-gray-600 text-xs">
                  Technology expert specializing in cloud architecture, DevOps, and enterprise software solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">R</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rishu</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">Head of Business Development</p>
                <p className="text-gray-600 text-xs">
                  Business development leader focused on building strategic partnerships and driving revenue growth
                  through innovative solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">N</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nikita</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">Digital Marketing Lead</p>
                <p className="text-gray-600 text-xs">
                  Digital marketing specialist with 10+ years of experience in creating data-driven campaigns and
                  building brand presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our expertise and values can help drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 py-4 bg-transparent"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
