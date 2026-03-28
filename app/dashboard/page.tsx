"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, TrendingUp, Download } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data - in a real app, this would come from the analysis
  const matchScore = 82
  const matchedSkills = ["Python", "React", "TypeScript", "Node.js", "SQL", "Git"]
  const missingSkills = ["Docker", "Kubernetes", "AWS"]
  const recommendations = [
    "Strong technical foundation with excellent React and TypeScript skills",
    "Consider learning Docker and Kubernetes for DevOps capabilities",
    "AWS certification would significantly improve job prospects",
    "Your Python skills are a great asset for backend development",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Analysis Results
            </span>
          </h1>

          <p className="text-lg text-foreground/70 text-center mb-12 text-balance">
            Your resume has been analyzed against the job description
          </p>

          {/* Match Score Card */}
          <div className="glassmorphism p-8 rounded-lg border border-primary/20 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2">Overall Match Score</h2>
                <p className="text-foreground/70 mb-6">
                  Your resume matches {matchScore}% of the job requirements. This is a strong match!
                </p>
                <div className="flex gap-4">
                  <Link href="/upload">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Analyze Another
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </div>

              {/* Score Circle */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-primary/20"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray={`${(matchScore / 100) * 440} 440`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                        <stop offset="100%" stopColor="rgb(168, 85, 247)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent">{matchScore}%</div>
                      <div className="text-sm text-foreground/60">Match</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Matched Skills */}
            <div className="glassmorphism p-6 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Matched Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {matchedSkills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            <div className="glassmorphism p-6 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Skills to Develop</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {missingSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="glassmorphism p-6 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Recommendations</h3>
            </div>

            <div className="space-y-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">{i + 1}</span>
                  </div>
                  <p className="text-foreground/80">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-6">Ready to apply or need more analysis?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/upload">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Upload Another Resume
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
