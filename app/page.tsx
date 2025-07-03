import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Zap, Globe, Award, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Clavax Style */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Make Way for
                  <span className="block">
                    Next-Level <span className="text-orange-400">Digital</span>
                  </span>
                  <span className="text-orange-300 text-4xl md:text-5xl font-normal">Transformation</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  We excel at unlocking value through comprehensive IT solutions and expertise, creating an environment
                  of continuous improvement and innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold"
                >
                  <Link href="/contact">TALK TO EXPERTS</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 rounded-full bg-transparent"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">20+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">100+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">50+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              {/* Professional person with technology - Replace with actual image */}
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional with technology"
                  width={500}
                  height={600}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Clavax Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              We excel at unlocking value through{" "}
              <span className="text-blue-600">digital transformation solutions</span>. We create an environment of
              continuous improvement and innovation to{" "}
              <span className="text-blue-600">deliver customer value, faster</span>.
            </h2>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 mt-8 bg-transparent"
            >
              <Link href="/about" className="flex items-center">
                MORE ABOUT US <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-orange-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Modernize operations with cloud computing, AI, and automation for future-ready digital ecosystems.
                </CardDescription>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-green-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">IT Managed Services</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  24/7 application and infrastructure management with proactive monitoring and support.
                </CardDescription>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-purple-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Data-driven marketing strategies including SEO, PPC, social media, and content marketing.
                </CardDescription>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-orange-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Staff Augmentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Scale your team with skilled IT professionals across various technologies and domains.
                </CardDescription>
                <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
              <Link href="/services" className="flex items-center">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Your Trusted Partner for
                  <span className="text-blue-600 block">Digital Excellence</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 20 years of collective experience, we combine strategic vision with hands-on execution to
                  deliver transformative results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">20+ Years of Collective Experience</h3>
                    <p className="text-gray-600">
                      Deep industry knowledge across diverse sectors and cutting-edge technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Strategic Vision + Hands-on Execution</h3>
                    <p className="text-gray-600">
                      We combine strategic insight with practical implementation for measurable results
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Value-Driven Solutions</h3>
                    <p className="text-gray-600">
                      Robust, scalable solutions strategically aligned with your long-term business goals
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                <Link href="/about" className="flex items-center">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Team collaboration"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our Clients <span className="text-blue-600">Say About Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "Equuleus Technologies transformed our digital infrastructure completely. Their expertise and
                    dedication are unmatched."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold">Client Name</p>
                      <p className="text-sm text-gray-600">CEO, Company Name</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academy & Careers CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="bg-white/20 rounded-full p-3 w-fit mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Equuleus Academy</CardTitle>
                <CardDescription className="text-blue-100">Nurturing Talent. Empowering Futures.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-blue-100 leading-relaxed">
                  Join our structured training programs with industry-aligned curriculum, live projects, and direct
                  placement opportunities.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
                  <Link href="/academy">Explore Academy</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="bg-white/20 rounded-full p-3 w-fit mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Join Our Team</CardTitle>
                <CardDescription className="text-blue-100">Build the Future with Us</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-blue-100 leading-relaxed">
                  Work on meaningful projects, grow from day one, and make a real impact in a collaborative, trust-based
                  culture.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
                  <Link href="/careers">View Opportunities</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Let's start a conversation about your digital transformation journey. Our experts are ready to help you
              unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
                <Link href="/contact" className="flex items-center">
                  TALK TO EXPERTS <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 rounded-full bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
