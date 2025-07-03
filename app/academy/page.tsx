import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Award, Briefcase, CheckCircle, BookOpen, Code, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function AcademyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4">
            Academy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Equuleus Academy</h1>
          <p className="text-2xl text-orange-600 font-semibold mb-4">Nurturing Talent. Empowering Futures.</p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your gateway to deep industry knowledge, hands-on experience, and accelerated career growth in technology
          </p>
        </div>

        {/* Overview */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <GraduationCap className="h-16 w-16 text-orange-600 mx-auto mb-4" />
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
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4">
              Programs
            </Badge>
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive programs designed for your success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">Industry-Aligned Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Designed and delivered by experts, our programs cover emerging technologies, real-world problem
                  solving, and business-focused IT practices.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800">
                    Cloud Computing
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800">
                    DevOps
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800">
                    Digital Marketing
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800">
                    Data Analytics
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader>
                <Code className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle className="text-xl">Live Projects & Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn by doing. Participants get to work on real-time client projects under the mentorship of our
                  senior engineers and consultants.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-amber-200 text-amber-800">
                    Real Client Projects
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-200 text-amber-800">
                    Expert Mentorship
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-200 text-amber-800">
                    Hands-on Experience
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-xl">Certification & Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Earn recognition for your skills and receive personalized career mentoring to prepare for roles in
                  digital transformation, cloud, DevOps, marketing tech, and more.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
                    Industry Certifications
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
                    Career Counseling
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
                    Interview Preparation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl">Job-Ready Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Top-performing candidates may be offered full-time roles at Equuleus Technologies — turning learning
                  into lasting opportunity.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-red-200 text-red-800">
                    Direct Placement
                  </Badge>
                  <Badge variant="secondary" className="bg-red-200 text-red-800">
                    Full-time Opportunities
                  </Badge>
                  <Badge variant="secondary" className="bg-red-200 text-red-800">
                    Career Growth
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who Can Apply */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <Users className="h-12 w-12 text-amber-600 mb-4 mx-auto" />
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
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Why Choose Equuleus Academy?</h2>
            <p className="text-xl text-gray-600">The advantages that set us apart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Real-world Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work on actual client projects and gain practical experience that employers value
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle>Expert-led Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn from industry veterans with 20+ years of collective experience</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader>
                <Code className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Modern Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Training on cutting-edge technologies and industry-standard tools</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Growth-Oriented Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Inclusive culture that fosters learning, collaboration, and personal development
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-amber-100">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Direct Placement Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Top performers get direct job offers at Equuleus Technologies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-amber-50 to-yellow-100">
              <CardHeader>
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
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
          <Card className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
              <p className="text-xl mb-8 text-orange-100">Take the first step toward a career that matters</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-gray-100 rounded-full"
                >
                  <Link href="mailto:career@equuleustechnologies.com">Enroll Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 rounded-full"
                >
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
              <p className="mt-6 text-orange-100">📧 career@equuleustechnologies.com | Upcoming Batches: Coming Soon</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
