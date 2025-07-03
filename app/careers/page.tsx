import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Heart, Target, Laptop, Award } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4">
            Careers
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build the Future with Us</h1>
          <p className="text-2xl text-orange-600 font-semibold mb-4">Join Our Team of Passionate Innovators</p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Equuleus Technologies, we're not just building digital solutions — we're building a team of passionate,
            curious, and forward-thinking individuals who are driven by purpose and powered by innovation.
          </p>
        </div>

        {/* Why Work With Us */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4">
              Why Join Us
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">Discover what makes Equuleus Technologies a great place to work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Growth From Day One</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work on meaningful projects that challenge you and accelerate your career. Every project is an
                  opportunity to learn, grow, and make a real impact.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join a team that values openness, respect, and continuous learning. We believe the best solutions come
                  from diverse perspectives working together.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Leadership You Can Learn From</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our founding team brings decades of experience and is actively involved in mentoring and guiding
                  talent. Learn from the best in the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader>
                <Laptop className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Flexibility & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in empowering our people with the autonomy they need to thrive — whether remote, hybrid, or
                  in-office. Work where you're most productive.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-amber-100">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Make a Real Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As part of a lean team, your work won't just support the business — it will shape its future. Every
                  contribution matters and is recognized.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-amber-50 to-yellow-100">
              <CardHeader>
                <Heart className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Purpose-Driven Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work on projects that matter. Help organizations transform digitally and make a positive impact on
                  businesses and communities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Openings */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4">
              Open Positions
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Explore opportunities to join our growing team</p>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Senior Full Stack Developer</CardTitle>
                    <CardDescription className="text-lg">Digital Transformation Team</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    Full-time
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our digital transformation team to build cutting-edge web applications using modern technologies.
                  Work with React, Node.js, cloud platforms, and help clients modernize their digital presence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    AWS
                  </Badge>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    MongoDB
                  </Badge>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  <Link href="mailto:careers@equuleustechnologies.com?subject=Senior Full Stack Developer Application">
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">DevOps Engineer</CardTitle>
                    <CardDescription className="text-lg">Infrastructure & Operations</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                    Full-time
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help our clients build robust, scalable infrastructure. Work with containerization, CI/CD pipelines,
                  cloud platforms, and automation tools to enable seamless deployments and operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-amber-200 text-amber-700">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="border-amber-200 text-amber-700">
                    Kubernetes
                  </Badge>
                  <Badge variant="outline" className="border-amber-200 text-amber-700">
                    Jenkins
                  </Badge>
                  <Badge variant="outline" className="border-amber-200 text-amber-700">
                    Terraform
                  </Badge>
                  <Badge variant="outline" className="border-amber-200 text-amber-700">
                    AWS/Azure
                  </Badge>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                  <Link href="mailto:careers@equuleustechnologies.com?subject=DevOps Engineer Application">
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Digital Marketing Specialist</CardTitle>
                    <CardDescription className="text-lg">Marketing & Growth</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    Full-time
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Drive digital marketing strategies for our clients and our own brand. Work with SEO, PPC, social
                  media, content marketing, and analytics to deliver measurable results and growth.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-yellow-200 text-yellow-700">
                    SEO
                  </Badge>
                  <Badge variant="outline" className="border-yellow-200 text-yellow-700">
                    Google Ads
                  </Badge>
                  <Badge variant="outline" className="border-yellow-200 text-yellow-700">
                    Social Media
                  </Badge>
                  <Badge variant="outline" className="border-yellow-200 text-yellow-700">
                    Analytics
                  </Badge>
                  <Badge variant="outline" className="border-yellow-200 text-yellow-700">
                    Content Strategy
                  </Badge>
                </div>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full">
                  <Link href="mailto:careers@equuleustechnologies.com?subject=Digital Marketing Specialist Application">
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Application Process</CardTitle>
              <CardDescription className="text-lg text-center">
                How to join the Equuleus Technologies team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-orange-600">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Submit Application</h4>
                  <p className="text-sm text-gray-600">Send your resume and cover letter to our careers email</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-amber-600">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Initial Screening</h4>
                  <p className="text-sm text-gray-600">Phone/video call to discuss your background and interests</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-yellow-600">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Technical Interview</h4>
                  <p className="text-sm text-gray-600">Demonstrate your skills through practical exercises</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-red-600">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Final Interview</h4>
                  <p className="text-sm text-gray-600">Meet the team and discuss your role and growth path</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
              <p className="text-xl mb-8 text-orange-100">
                Send us your resume and let's start a conversation about your future with us
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full">
                <Link href="mailto:careers@equuleustechnologies.com">Send Your Resume</Link>
              </Button>
              <p className="mt-6 text-orange-100">📧 careers@equuleustechnologies.com</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
