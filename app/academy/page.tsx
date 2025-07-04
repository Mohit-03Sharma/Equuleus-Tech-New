import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Award, Briefcase, CheckCircle, BookOpen, Code, TrendingUp, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AcademyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
            Academy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Equuleus Academy</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">Nurturing Talent. Empowering Futures.</p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your gateway to deep industry knowledge, hands-on experience, and accelerated career growth in technology
          </p>
        </div>

        {/* Academy Hero Image */}
        <section className="mb-20">
          <div className="relative">
            <Image
              src="/images/cloud-computing.jpg"
              alt="Technology learning and cloud computing education"
              width={1200}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 rounded-3xl flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Learn. Grow. Excel.</h2>
                <p className="text-xl md:text-2xl opacity-90">
                  Transform your career with cutting-edge technology skills
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Transform Your Career with Us</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                At Equuleus Technologies, we believe that true transformation begins with learning. Equuleus Academy is
                our dedicated initiative to cultivate the next generation of technology professionals through structured
                training, mentorship, and real-world exposure.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Offer */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
              Programs
            </Badge>
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive programs designed for your success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Industry-Aligned Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Designed and delivered by experts, our programs cover emerging technologies, real-world problem
                  solving, and business-focused IT practices.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Cloud Computing
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    DevOps
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Digital Marketing
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Data Analytics
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <Code className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Live Projects & Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn by doing. Participants get to work on real-time client projects under the mentorship of our
                  senior engineers and consultants.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    Real Client Projects
                  </Badge>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    Expert Mentorship
                  </Badge>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    Hands-on Experience
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Certification & Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Earn recognition for your skills and receive personalized career mentoring to prepare for roles in
                  digital transformation, cloud, DevOps, marketing tech, and more.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-purple-200 text-purple-800">
                    Industry Certifications
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-200 text-purple-800">
                    Career Counseling
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-200 text-purple-800">
                    Interview Preparation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">Job-Ready Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Top-performing candidates may be offered full-time roles at Equuleus Technologies — turning learning
                  into lasting opportunity.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800">
                    Direct Placement
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800">
                    Full-time Opportunities
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800">
                    Career Growth
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who Can Apply */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <CardTitle className="text-3xl text-center">Who Can Apply?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Final Year Students & Fresh Graduates</h4>
                      <p className="text-gray-600 text-sm">In IT, Computer Science, or related fields</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Early-Career Professionals</h4>
                      <p className="text-gray-600 text-sm">Seeking to switch or grow in the tech industry</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Working Professionals</h4>
                      <p className="text-gray-600 text-sm">Looking to upskill in emerging technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Educational Institutions</h4>
                      <p className="text-gray-600 text-sm">Looking to partner for campus-to-corporate training</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Equuleus Academy */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Why Choose Equuleus Academy?</h2>
            <p className="text-xl text-gray-600">The advantages that set us apart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Real-world Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work on actual client projects and gain practical experience that employers value
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Expert-led Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn from industry veterans with 20+ years of collective experience</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Modern Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Training on cutting-edge technologies and industry-standard tools</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Growth-Oriented Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Inclusive culture that fosters learning, collaboration, and personal development
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Direct Placement Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Top performers get direct job offers at Equuleus Technologies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Earn certifications and credentials recognized across the industry</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
              <p className="text-xl mb-8 text-blue-100">Take the first step toward a career that matters</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
                  <Link href="mailto:career@equuleustechnologies.com">Enroll Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full bg-transparent"
                >
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
              <p className="mt-6 text-blue-100">📧 career@equuleustechnologies.com | Upcoming Batches: Coming Soon</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
