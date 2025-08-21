"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, use } from "react"

const services = {
  "mobile-recharge": {
    name: "Mobile Recharge",
    icon: "📱",
    color: "bg-blue-100",
    description:
      "Recharge your mobile phone instantly with all major network providers including Jio, Airtel, Vi, BSNL, and more.",
    features: [
      "Instant recharge processing",
      "All major operators supported",
      "Special offers and cashback",
      "24/7 availability",
      "Secure transactions",
    ],
    operators: ["Jio", "Airtel", "Vi", "BSNL", "Idea"],
  },
  dth: {
    name: "DTH Recharge",
    icon: "📺",
    color: "bg-purple-100",
    description: "Recharge your DTH connection for uninterrupted entertainment. Support for all major DTH providers.",
    features: [
      "Quick DTH recharge",
      "All DTH operators",
      "Plan recommendations",
      "Auto-recharge options",
      "Instant activation",
    ],
    operators: ["Tata Sky", "Dish TV", "Videocon D2H", "Sun Direct", "Airtel Digital TV"],
  },
  electricity: {
    name: "Electricity Bill Payment",
    icon: "💡",
    color: "bg-yellow-100",
    description:
      "Pay your electricity bills online with ease. Support for all state electricity boards and private providers.",
    features: [
      "All state boards supported",
      "Bill amount verification",
      "Payment history tracking",
      "Due date reminders",
      "Instant payment confirmation",
    ],
    operators: ["MSEB", "BSES", "TSSPDCL", "KSEB", "PSPCL"],
  },
  water: {
    name: "Water Bill Payment",
    icon: "💧",
    color: "bg-cyan-100",
    description: "Pay your water bills conveniently online. Support for municipal corporations and water boards.",
    features: [
      "Municipal water bills",
      "Private water suppliers",
      "Bill verification",
      "Payment receipts",
      "Multiple payment options",
    ],
    operators: ["BMC", "MCGM", "HMWSSB", "KWA", "PWD"],
  },
  "piped-gas": {
    name: "Piped Gas Bill Payment",
    icon: "🔥",
    color: "bg-red-100",
    description: "Pay your piped gas bills online safely and securely. All major gas companies supported.",
    features: ["All gas companies", "Secure payments", "Bill history", "Auto-pay options", "Instant confirmations"],
    operators: ["Indraprastha Gas", "Mahanagar Gas", "Gujarat Gas", "GAIL Gas", "Adani Gas"],
  },
  "credit-card": {
    name: "Credit Card Bill Payment",
    icon: "💳",
    color: "bg-pink-100",
    description: "Pay your credit card bills on time to avoid late fees. Support for all major banks and credit cards.",
    features: [
      "All major banks",
      "Minimum due alerts",
      "Payment scheduling",
      "Reward points tracking",
      "Secure processing",
    ],
    operators: ["HDFC", "ICICI", "SBI", "Axis Bank", "Kotak Mahindra"],
  },
  "loan-repayment": {
    name: "Loan Repayment",
    icon: "💰",
    color: "bg-green-100",
    description: "Make your loan EMI payments easily. Support for home loans, personal loans, and other loan types.",
    features: ["All loan types", "EMI calculators", "Payment reminders", "Loan balance tracking", "Prepayment options"],
    operators: ["SBI", "HDFC Bank", "ICICI Bank", "LIC Housing", "Bajaj Finserv"],
  },
  "postpaid-bill": {
    name: "Postpaid Bill Payment",
    icon: "📄",
    color: "bg-gray-100",
    description: "Pay your mobile postpaid bills to avoid service disconnection. All operators supported.",
    features: [
      "All postpaid operators",
      "Bill amount verification",
      "Usage details",
      "Payment history",
      "Auto-pay setup",
    ],
    operators: ["Jio", "Airtel", "Vi", "BSNL", "MTNL"],
  },
  "cable-tv": {
    name: "Cable TV Bill Payment",
    icon: "📺",
    color: "bg-indigo-100",
    description:
      "Pay your cable TV bills online for uninterrupted entertainment. Local and national operators supported.",
    features: [
      "Local cable operators",
      "National providers",
      "Package upgrades",
      "Service requests",
      "Payment confirmations",
    ],
    operators: ["Hathway", "DEN Networks", "GTPL", "Local Cable", "Siti Networks"],
  },
  "municipal-tax": {
    name: "Municipal Tax Payment",
    icon: "🏛️",
    color: "bg-orange-100",
    description: "Pay your property tax and other municipal taxes online. Support for all municipal corporations.",
    features: [
      "Property tax payments",
      "Water tax included",
      "Penalty calculations",
      "Receipt downloads",
      "Tax history",
    ],
    operators: ["BMC", "MCGM", "GHMC", "BBMP", "MCD"],
  },
  "club-association": {
    name: "Club & Association Fees",
    icon: "🏢",
    color: "bg-teal-100",
    description: "Pay your club membership fees and association dues online. Convenient and secure payments.",
    features: ["Club memberships", "Society maintenance", "Association fees", "Event bookings", "Member benefits"],
    operators: ["Sports Clubs", "Housing Societies", "Professional Associations", "Social Clubs", "Fitness Centers"],
  },
  education: {
    name: "Education Fee Payment",
    icon: "🎓",
    color: "bg-emerald-100",
    description: "Pay school and college fees online. Support for educational institutions across India.",
    features: ["School fee payments", "College tuition", "Exam fees", "Hostel charges", "Activity fees"],
    operators: ["CBSE Schools", "State Boards", "Universities", "Private Colleges", "Coaching Centers"],
  },
  hospital: {
    name: "Hospital Bill Payment",
    icon: "🏥",
    color: "bg-rose-100",
    description: "Pay your medical bills and hospital charges online. Support for hospitals and healthcare providers.",
    features: ["Hospital bills", "Diagnostic charges", "Insurance claims", "Appointment fees", "Medicine payments"],
    operators: ["Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Manipal Hospitals", "Local Hospitals"],
  },
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { slug } = use(params)
  const service = services[slug as keyof typeof services]

  if (!service) {
    notFound()
  }

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
              <a href="/#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="/#privacy" className="text-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/#faqs" className="text-foreground hover:text-primary transition-colors">
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
                  href="/#services"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="/#about"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/#contact"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/#privacy"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Privacy Policy
                </a>
                <a
                  href="/#faqs"
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

      {/* Service Hero */}
      <section className={`py-16 ${service.color}`}>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="text-6xl">{service.icon}</div>
            <h1 className="font-serif text-4xl font-bold text-foreground">{service.name}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Pay {service.name} Bill
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Supported Providers</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.operators.map((operator, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <p className="font-medium text-foreground">{operator}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Pay */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">How to Pay</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <CardTitle className="text-lg">Enter Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Enter your account number or customer ID</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground font-bold">2</span>
                </div>
                <CardTitle className="text-lg">Verify Amount</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Check and confirm the bill amount</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <CardTitle className="text-lg">Make Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Complete secure payment and get instant confirmation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Pay Your {service.name} Bill?</h2>
          <p className="text-xl opacity-90 mb-8">Quick, secure, and hassle-free payments</p>
          <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
            Start Payment Now
          </Button>
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
                  <a href="/#about" className="hover:text-secondary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-secondary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/#privacy" className="hover:text-secondary transition-colors">
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
