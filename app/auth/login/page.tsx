"use client"

import { useState } from "react"

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()  //stop refresh
    console.log("Login Data:", form) // print email and password
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="glassmorphism p-6 rounded-xl w-96 space-y-4 border border-primary/20"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

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
          className="w-full bg-primary text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  )
}
