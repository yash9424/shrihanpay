"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    captcha: "",
  })
  const [captchaCode] = useState("09e99d")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration data:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-2xl">
        <CardHeader className="text-center space-y-2 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create Account
          </CardTitle>
          <CardDescription className="text-gray-600">Join SHRIHANPAY FINTECH PRIVATE LIMITED today</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="h-12 border-gray-300 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-gray-700 font-medium">
                  Mobile Number *
                </Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="h-12 border-gray-300 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email ID *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email ID*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-12 border-gray-300 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password *
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-12 border-gray-300 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="captcha" className="text-gray-700 font-medium">
                Captcha *
              </Label>
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 px-6 py-3 rounded-lg">
                  <span className="text-2xl font-mono font-bold text-gray-700 tracking-wider">{captchaCode}</span>
                </div>
                <Input
                  id="captcha"
                  name="captcha"
                  type="text"
                  placeholder="Enter captcha"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  required
                  className="h-12 border-gray-300 focus:border-blue-500 max-w-xs"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300"
            >
              Register
            </Button>
          </form>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                Login here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
