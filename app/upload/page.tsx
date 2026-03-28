"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Upload, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type === "application/pdf" || file.type === "text/plain") {
        setUploadedFile(file)
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files.length > 0) {
      setUploadedFile(files[0])
    }
  }

  const handleAnalyze = async () => {
    if (!uploadedFile || !jobDescription) return

    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      // In a real app, this would navigate to dashboard with results
    }, 2000)
  }

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

        <div className="relative max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Upload Resume
            </span>
          </h1>

          <p className="text-lg text-foreground/70 text-center mb-12 text-balance">
            Upload your resume and paste a job description to get AI-powered matching insights
          </p>

          {/* File Upload Section */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-3">Resume (PDF or TXT)</label>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                isDragging
                  ? "border-accent bg-accent/10"
                  : uploadedFile
                    ? "border-primary/50 bg-primary/5"
                    : "border-primary/30 hover:border-accent/50"
              }`}
            >
              <input
                type="file"
                accept=".pdf,.txt"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <div className="flex flex-col items-center gap-3">
                {uploadedFile ? (
                  <>
                    <CheckCircle className="w-12 h-12 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">{uploadedFile.name}</p>
                      <p className="text-sm text-foreground/60">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Drag and drop your resume</p>
                      <p className="text-sm text-foreground/60">or click to browse</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="mb-8">
            <label htmlFor="job-desc" className="block text-sm font-medium text-foreground mb-3">
              Job Description
            </label>

            <textarea
              id="job-desc"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full h-40 p-4 rounded-lg bg-input border border-primary/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleAnalyze}
              disabled={!uploadedFile || !jobDescription || isAnalyzing}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Match"}
            </Button>

            <Link href="/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-16">
            {[
              {
                icon: FileText,
                title: "Supported Formats",
                desc: "Upload PDF or TXT files up to 10MB",
              },
              {
                icon: Upload,
                title: "Quick Analysis",
                desc: "Get results in seconds with AI matching",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="glassmorphism p-6 rounded-lg border border-primary/20 hover:border-accent/40 transition-all"
                >
                  <Icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
