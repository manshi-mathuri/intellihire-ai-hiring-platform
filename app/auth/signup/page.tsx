"use client"

import { useState } from "react"

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Signup Data:", form)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="glassmorphism p-6 rounded-xl w-96 space-y-4 border border-primary/20 bg-white/10 backdrop-blur-xl"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-2 rounded-md border bg-background"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 rounded-md border bg-background"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 rounded-md border bg-background"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary/80"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
