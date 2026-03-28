"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Zap, Users, Target, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get AI-powered analysis results in seconds, not hours",
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Whether you're a job seeker or recruiter, IntelliHire works for you",
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Advanced algorithms ensure accurate skill and experience matching",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and never shared with third parties",
    },
  ]

  const stats = [
    { number: "10K+", label: "Resumes Analyzed" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "2s", label: "Average Analysis Time" },
    { number: "50+", label: "Skills Recognized" },
  ]

  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl float-animation"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                About IntelliHire
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance">
              Revolutionizing recruitment with artificial intelligence. We believe hiring should be smarter, faster, and
              fairer.
            </p>
          </div>

          {/* Mission Section */}
          <div className="glassmorphism p-8 rounded-lg border border-primary/20 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              IntelliHire is dedicated to transforming the hiring process by leveraging cutting-edge AI technology. We
              empower recruiters to make data-driven decisions and help job seekers showcase their true potential. Our
              platform eliminates bias, saves time, and ensures the best matches between candidates and opportunities.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="glassmorphism p-6 rounded-lg border border-primary/20 text-center">
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose IntelliHire?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div
                    key={i}
                    className="glassmorphism p-6 rounded-lg border border-primary/20 hover:border-accent/40 transition-all"
                  >
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="glassmorphism p-8 rounded-lg border border-primary/20 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Upload Resume",
                  description: "Submit your resume in PDF or TXT format",
                },
                {
                  step: "2",
                  title: "Add Job Description",
                  description: "Paste the job description you're interested in",
                },
                {
                  step: "3",
                  title: "Get Results",
                  description: "Receive detailed analysis and matching insights",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-foreground/70 mb-8 text-balance">
              Join thousands of job seekers and recruiters using IntelliHire to make smarter hiring decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/upload">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Start Analyzing
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="bg-transparent w-full sm:w-auto">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
