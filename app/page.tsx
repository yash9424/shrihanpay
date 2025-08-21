"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const services = [
    { name: "Mobile Recharge", icon: "📱", slug: "mobile-recharge", color: "bg-blue-100 hover:bg-blue-200" },
    { name: "DTH", icon: "📺", slug: "dth", color: "bg-purple-100 hover:bg-purple-200" },
    { name: "Electricity", icon: "💡", slug: "electricity", color: "bg-yellow-100 hover:bg-yellow-200" },
    { name: "Loan Repayment", icon: "💰", slug: "loan-repayment", color: "bg-green-100 hover:bg-green-200" },
    { name: "Piped Gas", icon: "🔥", slug: "piped-gas", color: "bg-red-100 hover:bg-red-200" },
    { name: "Postpaid Bill", icon: "📄", slug: "postpaid-bill", color: "bg-gray-100 hover:bg-gray-200" },
    { name: "Cable TV", icon: "📺", slug: "cable-tv", color: "bg-indigo-100 hover:bg-indigo-200" },
    { name: "Water", icon: "💧", slug: "water", color: "bg-cyan-100 hover:bg-cyan-200" },
    { name: "Credit Card", icon: "💳", slug: "credit-card", color: "bg-pink-100 hover:bg-pink-200" },
    { name: "Municipal Tax", icon: "🏛️", slug: "municipal-tax", color: "bg-orange-100 hover:bg-orange-200" },
    { name: "Club & Association", icon: "🏢", slug: "club-association", color: "bg-teal-100 hover:bg-teal-200" },
    { name: "Education", icon: "🎓", slug: "education", color: "bg-emerald-100 hover:bg-emerald-200" },
    { name: "Hospital", icon: "🏥", slug: "hospital", color: "bg-rose-100 hover:bg-rose-200" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SP</span>
              </div>
              <div>
                <h1 className="font-serif font-bold text-lg sm:text-xl text-foreground">SHRIHANPAY</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">FINTECH PRIVATE LIMITED</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#faqs" className="text-foreground hover:text-primary transition-colors">
                FAQs
              </a>
            </div>

            <div className="hidden sm:flex items-center space-x-4">
              <Link href="/register">
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </Link>
              <Link href="/login">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Login
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden flex flex-col space-y-1 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-6 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span
                className={`w-6 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <a
                  href="#services"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="#faqs"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </a>
                <div className="flex flex-col sm:hidden space-y-3 pt-4 border-t border-border">
                  <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Register
                    </Button>
                  </Link>
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 w-full">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  One app
                  <br />
                  for all your
                  <br />
                  <span className="text-primary">utility needs</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">Recharges & Bill Payments, and a lot more</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/smartphone-utility-payments.png"
                  alt="Smartphone showing utility payment services"
                  className="w-64 sm:w-80 h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 lg:space-y-12">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                <span className="text-primary">Recharges</span> & <span className="text-secondary">Bill Payments</span>
              </h2>
              <p className="text-muted-foreground">Recharge and pay every bill in one place</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <Link key={index} href={`/services/${service.slug}`}>
                  <Card
                    className={`p-4 sm:p-6 text-center hover:shadow-lg transition-all cursor-pointer ${service.color} border-2 hover:border-primary/30`}
                  >
                    <CardContent className="space-y-2 sm:space-y-3 p-0">
                      <div className="text-2xl sm:text-4xl">{service.icon}</div>
                      <p className="text-xs sm:text-sm font-medium text-foreground leading-tight">{service.name}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-12 sm:py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center lg:text-left">
                  About <span className="text-primary">Our Company</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  <p>
                    SHRIHANPAY FINTECH PRIVATE LIMITED is a leading fintech company providing comprehensive utility
                    payment solutions. We specialize in mobile recharges, bill payments, and digital financial services.
                  </p>
                  <p>
                    Our platform offers seamless transactions for all major service providers, ensuring secure, fast,
                    and reliable payment processing 24/7. We serve over 1.5 million registered customers across India.
                  </p>
                  <p>
                    With a focus on customer satisfaction and technological innovation, we make utility payments
                    accessible to everyone through our user-friendly app and comprehensive API services.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">1.5M+</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2">28+</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Total Services</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center order-1 lg:order-2">
              <img
                src="/mobile-utility-payments.png"
                alt="App Screenshots"
                className="w-64 sm:w-80 h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 lg:mb-12">
              Customer <span className="text-primary">Feedback</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="text-center space-y-4 sm:space-y-6 p-0">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg sm:text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg text-muted-foreground italic leading-relaxed">
                    "ShrihanPay has revolutionized how I handle my utility payments. The app is incredibly user-friendly
                    and I can pay all my bills in one place. The customer service is exceptional and transactions are
                    always secure and fast."
                  </blockquote>
                  <div className="pt-4">
                    <p className="font-semibold text-foreground">Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">Find answers to common questions about our services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-3">
                  What is SHRIHANPAY FINTECH PRIVATE LIMITED?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We are a leading fintech company providing comprehensive utility payment solutions. SHRIHANPAY FINTECH
                  PRIVATE LIMITED serves as a multi-utility and 24*7 recharge platform offering mobile recharges, DTH,
                  electricity, gas, water, insurance, loan EMI, credit card, broadband, and many more payment services
                  with secure transactions and 24/7 customer support.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-3">
                  How secure are the transactions?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  All transactions are processed through secure payment gateways with end-to-end encryption. We follow
                  industry-standard security protocols to ensure your financial information is always protected.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We accept all major payment methods including credit cards, debit cards, net banking, UPI, and digital
                  wallets for your convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-3">
                  Is customer support available 24/7?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Yes, our customer support team is available 24/7 to assist you with any queries or issues you may have
                  regarding our services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Got a Question? We'd love to hear from you. Send us a message and we will respond as soon as possible
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0">
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Name*</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address*</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base">
                      <option>This question is about...</option>
                      <option>Mobile Recharge</option>
                      <option>Bill Payment</option>
                      <option>Technical Support</option>
                      <option>Account Issues</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Message...</label>
                    <textarea
                      rows={6}
                      placeholder="Your Message..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 w-full sm:w-auto">
                      Send Your Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-sm">SP</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg">SHRIHANPAY</h3>
                  <p className="text-xs opacity-80">FINTECH PRIVATE LIMITED</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Your trusted partner for all utility payments and recharge services. Available 24/7 with secure and fast
                transactions.
              </p>
              <div className="text-sm opacity-80 leading-relaxed">
                <p className="font-medium mb-1">Address:</p>
                <p>H.NO. B-168 GF, CHHATTARP, EXTENSION NEAR GURUDWARA,</p>
                <p>Sanjay Colony Bhati Mines, South West Delhi,</p>
                <p>South West Delhi-110074, Delhi</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/services/mobile-recharge" className="hover:text-secondary transition-colors">
                    Mobile Recharge
                  </Link>
                </li>
                <li>
                  <Link href="/services/electricity" className="hover:text-secondary transition-colors">
                    Electricity Bills
                  </Link>
                </li>
                <li>
                  <Link href="/services/dth" className="hover:text-secondary transition-colors">
                    DTH Recharge
                  </Link>
                </li>
                <li>
                  <Link href="/services/water" className="hover:text-secondary transition-colors">
                    Water Bills
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#about" className="hover:text-secondary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-secondary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    24/7 Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-sm opacity-80">© 2025 ShrihanPay Fintech Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
