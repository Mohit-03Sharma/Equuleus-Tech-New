import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Cloud,
  Shield,
  Users,
  Target,
  Zap,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation journey and drive
              sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Digital Transformation</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modernize your business processes and technology infrastructure with our comprehensive digital
                transformation services. We help organizations embrace digital-first strategies that drive efficiency,
                innovation, and competitive advantage.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Cloud className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Cloud Migration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Data Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Process Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Mobile Solutions</span>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/cybersecurity-data.jpg"
                alt="Digital transformation and cybersecurity"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">IT Managed Services</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive IT support and infrastructure management services that ensure your technology systems run
                smoothly, securely, and efficiently. Focus on your core business while we handle your IT needs.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">24/7 Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Backup & Recovery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">System Maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Network Security</span>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                <Link href="/contact">Get Support</Link>
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <Image
                src="/images/business-analytics.jpg"
                alt="IT managed services and business analytics"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Digital Marketing</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data-driven digital marketing strategies that enhance your online presence, engage your target audience,
                and drive measurable business results across all digital channels.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">SEO & SEM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Social Media</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Content Marketing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Email Campaigns</span>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                <Link href="/contact">Boost Your Presence</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/digital-travel.jpg"
                alt="Digital marketing and online presence"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Staff Augmentation</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Scale your team with skilled professionals who integrate seamlessly with your existing workforce. Access
                top talent without the overhead of permanent hiring.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Software Developers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">DevOps Engineers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Data Scientists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Project Managers</span>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                <Link href="/contact">Find Talent</Link>
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <Image
                src="/images/cloud-computing.jpg"
                alt="Staff augmentation and team collaboration"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Additional Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to address your unique business challenges and technology requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Cloud Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Design and implement scalable, secure cloud infrastructure solutions tailored to your business needs.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Data Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build robust data pipelines and analytics platforms to unlock insights from your business data.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create engaging mobile applications for iOS and Android that deliver exceptional user experiences.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our services can help accelerate your digital transformation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 py-4 bg-transparent"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
