import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Globe,
  Award,
  Users,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Search,
  MousePointer,
  Share2,
  Mail,
  Code,
  Server,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        {/* Services Hero Image */}
        <section className="mb-20">
          <div className="relative">
            <Image
              src="/images/digital-travel.jpg"
              alt="Global digital solutions and connectivity"
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 rounded-3xl flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Transforming Businesses Globally</h2>
                <p className="text-xl md:text-2xl opacity-90">Innovative solutions for the digital age</p>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Transformation */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Zap className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <CardTitle className="text-3xl">Digital Transformation</CardTitle>
                  <CardDescription className="text-lg">
                    Empowering businesses to evolve, innovate, and thrive in the digital age
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our Digital Transformation services help organizations modernize their operations, enhance customer
                experiences, and drive growth through cutting-edge technologies. We bring together cloud computing, data
                analytics, automation, and AI to create agile, scalable, and future-ready digital ecosystems.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start">
                  <Cloud className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Cloud Migration & Modernization</h4>
                    <p className="text-sm text-gray-600">
                      Seamlessly transition legacy systems to secure, scalable cloud platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Data-Driven Decision Making</h4>
                    <p className="text-sm text-gray-600">
                      Leverage advanced analytics and BI tools for actionable business insights
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Customer Experience Transformation</h4>
                    <p className="text-sm text-gray-600">
                      Deliver personalized, omni-channel experiences using digital tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise Application Modernization</h4>
                    <p className="text-sm text-gray-600">
                      Upgrade and integrate core business systems to boost agility
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Digital Risk & Compliance Management</h4>
                    <p className="text-sm text-gray-600">
                      Integrate security, governance, and compliance into your digital roadmap
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">GRC Process Automation</h4>
                    <p className="text-sm text-gray-600">
                      Streamline workflows with AI and RPA to reduce costs and improve efficiency
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                <Link href="/contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* IT Managed Services */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Globe className="h-12 w-12 text-green-600 mr-4" />
                <div>
                  <CardTitle className="text-3xl">IT Managed Services</CardTitle>
                  <CardDescription className="text-lg">
                    Reliable. Scalable. Proactive. We manage your IT so you can focus on your business
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our IT Managed Services provide end-to-end support for enterprise applications and infrastructure,
                ensuring seamless operations, minimal downtime, and maximum performance. With a focus on proactive
                monitoring, automation, and continuous improvement, we help businesses reduce IT complexity and enhance
                operational efficiency.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start">
                  <Code className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Application Management & Support</h4>
                    <p className="text-sm text-gray-600">
                      End-to-end lifecycle management with monitoring and performance tuning
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Server className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Infrastructure Management</h4>
                    <p className="text-sm text-gray-600">
                      24x7 monitoring for on-prem, cloud, and hybrid infrastructures
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cloud className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Cloud Operations (CloudOps)</h4>
                    <p className="text-sm text-gray-600">Optimized management with auto-scaling and cost control</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HeadphonesIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">IT Service Desk (L1/L2/L3)</h4>
                    <p className="text-sm text-gray-600">Multi-tiered support aligned with ITIL best practices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Security & Compliance Monitoring</h4>
                    <p className="text-sm text-gray-600">Real-time threat detection and compliance reporting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Disaster Recovery & Business Continuity</h4>
                    <p className="text-sm text-gray-600">Resilient architecture and backup solutions</p>
                  </div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                <Link href="/contact" className="flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Digital Marketing */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Award className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <CardTitle className="text-3xl">Digital Marketing</CardTitle>
                  <CardDescription className="text-lg">
                    Accelerate your brand growth with data-driven digital marketing strategies
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We help businesses connect, engage, and convert across the digital landscape with result-oriented
                marketing solutions. From brand awareness to lead generation, our tailored strategies are built to drive
                measurable outcomes and long-term success.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start">
                  <Search className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Search Engine Optimization (SEO)</h4>
                    <p className="text-sm text-gray-600">
                      Improve visibility and organic traffic with comprehensive SEO practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MousePointer className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Pay-Per-Click Advertising (PPC)</h4>
                    <p className="text-sm text-gray-600">
                      Drive targeted leads through Google Ads and social media campaigns
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Share2 className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Social Media Marketing (SMM)</h4>
                    <p className="text-sm text-gray-600">
                      Build strong digital presence on Facebook, Instagram, LinkedIn, and X
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Content Marketing</h4>
                    <p className="text-sm text-gray-600">
                      Engage audiences with high-impact content that informs and converts
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Marketing & Automation</h4>
                    <p className="text-sm text-gray-600">Deliver personalized messaging and nurture campaigns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Web Analytics & Conversion Optimization</h4>
                    <p className="text-sm text-gray-600">
                      Turn data into strategy with performance tracking and A/B testing
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                <Link href="/contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Staff Augmentation */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Users className="h-12 w-12 text-orange-600 mr-4" />
                <div>
                  <CardTitle className="text-3xl">Staff Augmentation</CardTitle>
                  <CardDescription className="text-lg">
                    Scale faster with the right talent, exactly when you need it
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our Staff Augmentation services provide you with skilled professionals to seamlessly extend your
                in-house teams, enabling faster delivery, improved flexibility, and reduced hiring overhead. Whether you
                need short-term expertise or long-term support, we help you access top-tier talent across technologies
                and domains.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Code className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">IT & Engineering Talent on Demand</h4>
                    <p className="text-sm text-gray-600">
                      Certified professionals in development, DevOps, cloud, testing, cybersecurity
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Engagement Models</h4>
                    <p className="text-sm text-gray-600">
                      Onsite, offshore, hybrid, or remote—scale as per project needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Domain-Specific Experts</h4>
                    <p className="text-sm text-gray-600">
                      Specialists with experience in BFSI, Telecom, Healthcare, Retail, Manufacturing
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Quick Onboarding & Ramp-Up</h4>
                    <p className="text-sm text-gray-600">Rapid resource deployment with proven recruitment processes</p>
                  </div>
                </div>
              </div>

              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                <Link href="/contact" className="flex items-center">
                  Find Talent <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how our services can accelerate your digital transformation
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
