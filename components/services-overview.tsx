"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Smartphone, Shield, BarChart3, Globe, Zap } from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Smartphone,
      title: "UPI Payments",
      description: "Accept instant UPI payments from all major apps like PhonePe, Paytm, GPay with just 4% fee.",
      features: ["All UPI apps supported", "Instant settlements", "QR code payments"],
    },
    {
      icon: CreditCard,
      title: "Card Processing",
      description: "Accept Visa, Mastercard, RuPay cards with competitive rates and instant processing.",
      features: ["Visa, Mastercard, RuPay", "EMI options available", "Real-time processing"],
    },
    {
      icon: Globe,
      title: "Digital Wallets",
      description: "Integrate with popular Indian wallets like Paytm, PhonePe, Amazon Pay, and more.",
      features: ["Paytm, PhonePe, GPay", "Amazon Pay, Mobikwik", "One-click payments"],
    },
    {
      icon: Shield,
      title: "Net Banking",
      description: "Support for 100+ Indian banks including SBI, HDFC, ICICI, Axis, and regional banks.",
      features: ["100+ banks supported", "Secure bank redirects", "Real-time verification"],
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting with GST-ready invoices and detailed transaction analytics.",
      features: ["GST-compliant reports", "Real-time insights", "Revenue tracking"],
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Developer-friendly APIs with comprehensive documentation and Indian payment methods.",
      features: ["RESTful APIs", "Webhooks support", "Indian payment SDKs"],
    },
  ]

  return (
    <section id="services-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Complete Indian Payment Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accept UPI, cards, wallets, and net banking in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-card-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="text-lg px-8 py-4">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
