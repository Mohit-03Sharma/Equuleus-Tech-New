import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Clock, ArrowRight, Play } from "lucide-react"
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
              Advance your career with industry-leading technology training programs. Learn from experts and gain
              practical skills that drive real-world results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 bg-transparent"
              >
                View Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Academy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Equuleus Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training programs are designed by industry experts to provide practical, hands-on
              learning experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals with 15+ years of real-world experience in cutting-edge
                  technologies.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hands-On Learning</h3>
                <p className="text-gray-600">
                  Practical projects and real-world scenarios ensure you gain applicable skills that employers value.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Certification</h3>
                <p className="text-gray-600">
                  Earn recognized certifications that validate your skills and enhance your professional credibility.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Schedule</h3>
                <p className="text-gray-600">
                  Choose from weekday, weekend, or online classes that fit your schedule and learning preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Course Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive curriculum covering the most in-demand technology skills in today's market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold text-sm">☁️</span>
                  </div>
                  Cloud Computing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Master AWS, Azure, and Google Cloud platforms with hands-on labs and real-world projects.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• AWS Solutions Architect</li>
                  <li>• Azure DevOps Engineer</li>
                  <li>• Google Cloud Professional</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  View Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm">💻</span>
                  </div>
                  Software Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn modern programming languages and frameworks used by top technology companies.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Full-Stack JavaScript</li>
                  <li>• Python & Django</li>
                  <li>• React & Node.js</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                >
                  View Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold text-sm">📊</span>
                  </div>
                  Data Science & AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dive into machine learning, artificial intelligence, and advanced analytics techniques.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Machine Learning with Python</li>
                  <li>• Deep Learning & Neural Networks</li>
                  <li>• Data Visualization</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  View Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold text-sm">🔒</span>
                  </div>
                  Cybersecurity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Protect organizations from cyber threats with comprehensive security training programs.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Ethical Hacking</li>
                  <li>• Security Operations Center</li>
                  <li>• Risk Management</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-orange-600 border-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  View Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-sm">⚙️</span>
                  </div>
                  DevOps & Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Master modern DevOps practices and infrastructure automation for scalable applications.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Docker & Kubernetes</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Infrastructure as Code</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                >
                  View Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-indigo-600 font-bold text-sm">📱</span>
                  </div>
                  Mobile Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build native and cross-platform mobile applications for iOS and Android platforms.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• React Native</li>
                  <li>• Flutter Development</li>
                  <li>• iOS & Android Native</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 bg-transparent"
                >
                  View Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Structured Learning Paths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our carefully designed learning paths to master specific technology domains from beginner to expert
              level.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Beginner Path</CardTitle>
                <p className="text-gray-600">Perfect for those starting their tech journey</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Programming Fundamentals</span>
                    <span className="text-sm text-blue-600 font-medium">4 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Web Development Basics</span>
                    <span className="text-sm text-blue-600 font-medium">6 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Database Essentials</span>
                    <span className="text-sm text-blue-600 font-medium">3 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">First Project</span>
                    <span className="text-sm text-blue-600 font-medium">2 weeks</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">Start Learning</Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Intermediate Path</CardTitle>
                <p className="text-gray-600">For developers ready to advance their skills</p>
                <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                  Most Popular
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Advanced Frameworks</span>
                    <span className="text-sm text-green-600 font-medium">8 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Cloud Deployment</span>
                    <span className="text-sm text-green-600 font-medium">4 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">API Development</span>
                    <span className="text-sm text-green-600 font-medium">5 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Portfolio Project</span>
                    <span className="text-sm text-green-600 font-medium">4 weeks</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">Advance Your Skills</Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Expert Path</CardTitle>
                <p className="text-gray-600">Master advanced concepts and leadership skills</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">System Architecture</span>
                    <span className="text-sm text-purple-600 font-medium">6 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Performance Optimization</span>
                    <span className="text-sm text-purple-600 font-medium">4 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Team Leadership</span>
                    <span className="text-sm text-purple-600 font-medium">3 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Capstone Project</span>
                    <span className="text-sm text-purple-600 font-medium">8 weeks</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">Become an Expert</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who have advanced their careers through Equuleus Academy. Start your
              journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
              >
                <Link href="/contact">Enroll Today</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8 py-4 bg-transparent"
              >
                <Link href="/contact">Request Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
