"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
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

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              IntelliHire
            </span>
            <br />
            <span className="text-foreground/80">Smarter Hiring with AI</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-12 text-balance">
            Analyze resumes and match candidates to job descriptions effortlessly. Let AI do the heavy lifting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/upload">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect w-full sm:w-auto"
              >
                Upload Resume
              </Button>
            </Link>
            <Link href="/upload">
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent/10 w-full sm:w-auto bg-transparent"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              { title: "AI-Powered", desc: "Advanced algorithms analyze resumes instantly" },
              { title: "Smart Matching", desc: "Match candidates to job requirements perfectly" },
              { title: "Time Saving", desc: "Reduce screening time by 80%" },
            ].map((feature, i) => (
              <div
                key={i}
                className="glassmorphism p-6 rounded-lg border border-primary/20 hover:border-accent/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-accent mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
