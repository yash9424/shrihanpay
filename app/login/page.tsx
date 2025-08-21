"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [message, setMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("Login successful! Redirecting...")
    setTimeout(() => {
      router.push("/")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
        <CardHeader className="text-center space-y-3 bg-gradient-to-r from-green-50 to-blue-50 pb-8">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">Login to access your account</CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium text-lg">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-14 border-gray-300 focus:border-green-500 text-lg rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-700 font-medium text-lg">
                  Password
                </Label>
                <Link href="/forgot-password" className="text-green-600 hover:text-green-800 font-medium text-sm">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="h-14 border-gray-300 focus:border-green-500 text-lg rounded-xl"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              Log In
            </Button>
          </form>

          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-lg">
              Don't have an account?{" "}
              <Link href="/register" className="text-green-600 hover:text-green-800 font-semibold">
                Register here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
