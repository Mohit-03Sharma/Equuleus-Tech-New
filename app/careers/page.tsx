import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, Briefcase, ArrowRight, Heart, Zap, Award } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Build your career with a company that values innovation, growth, and work-life balance. Join us in shaping
              the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                <Link href="#openings">View Open Positions</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 bg-transparent"
              >
                <Link href="/contact">Contact HR</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Equuleus Technologies?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great people build great products. That's why we've created an environment where talent
              thrives and innovation flourishes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  Work with cutting-edge technologies and contribute to projects that make a real impact on businesses
                  worldwide.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Culture</h3>
                <p className="text-gray-600">
                  Join a diverse, inclusive team where every voice matters and collaboration drives our success.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Advance your career with continuous learning opportunities, mentorship programs, and clear growth
                  paths.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Work-Life Balance</h3>
                <p className="text-gray-600">
                  Flexible working arrangements, comprehensive benefits, and a culture that values your well-being.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Benefits</h3>
                <p className="text-gray-600">
                  Attractive compensation packages, health insurance, retirement plans, and performance bonuses.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Opportunities</h3>
                <p className="text-gray-600">
                  Work with international clients and teams, with opportunities for travel and global career
                  advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across different departments and experience levels.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Senior Full Stack Developer</CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">Gurugram, India / Remote</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">Full-time</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span className="text-sm">5+ years</span>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our development team to build scalable web applications using React, Node.js, and cloud
                  technologies. Lead technical decisions and mentor junior developers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">AWS</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">TypeScript</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">DevOps Engineer</CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">Gurugram, India</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">Full-time</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span className="text-sm">3+ years</span>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Design and maintain CI/CD pipelines, manage cloud infrastructure, and ensure high availability of our
                  applications across multiple environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Docker</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Kubernetes</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Jenkins</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Terraform</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Digital Marketing Specialist</CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">Gurugram, India / Hybrid</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">Full-time</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span className="text-sm">2+ years</span>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Drive our digital marketing initiatives across multiple channels. Create compelling campaigns and
                  analyze performance to optimize ROI.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">SEO/SEM</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Google Analytics</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Social Media</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    Content Marketing
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">UI/UX Designer</CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">Remote</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">Full-time</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span className="text-sm">3+ years</span>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create intuitive and beautiful user experiences for web and mobile applications. Collaborate with
                  development teams to bring designs to life.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Figma</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    Adobe Creative Suite
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Prototyping</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">User Research</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed a transparent and efficient hiring process to help you showcase your skills and learn about
              our culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Application</h3>
              <p className="text-gray-600">
                Submit your application with resume and cover letter. We review all applications carefully.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Screening</h3>
              <p className="text-gray-600">
                Initial conversation with our HR team to discuss your background and the role requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Interview</h3>
              <p className="text-gray-600">
                Technical assessment and interview with team members to evaluate your skills and problem-solving
                approach.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Interview</h3>
              <p className="text-gray-600">
                Meet with leadership team to discuss culture fit, career goals, and finalize the offer details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take the next step in your career journey. We're excited to learn more about you and explore how we can
              grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
              >
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 py-4 bg-transparent"
              >
                <Link href="/contact">Ask Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
