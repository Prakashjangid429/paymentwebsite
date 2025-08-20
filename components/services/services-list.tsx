"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CreditCard,
  Smartphone,
  Shield,
  BarChart3,
  Globe,
  Zap,
  Users,
  Settings,
  Headphones,
  Lock,
  TrendingUp,
  Webhook,
} from "lucide-react"

export function ServicesList() {
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

    const element = document.getElementById("services-list")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: CreditCard,
      title: "Payment Processing",
      description:
        "Accept all major credit cards, debit cards, and digital wallets with competitive rates and instant settlements.",
      features: ["Visa, Mastercard, Amex", "Apple Pay, Google Pay", "Real-time processing", "Instant settlements"],
      pricing: "2.9% + 30¢",
    },
    {
      icon: Smartphone,
      title: "Mobile Payments",
      description:
        "Seamless mobile payment solutions for on-the-go transactions, in-app purchases, and mobile commerce.",
      features: ["Mobile SDKs", "In-app payments", "QR code payments", "NFC support"],
      pricing: "2.9% + 30¢",
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Advanced AI-powered fraud detection and prevention to keep your business and customers secure.",
      features: ["Machine learning", "Real-time monitoring", "Risk scoring", "Chargeback protection"],
      pricing: "0.1% per transaction",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and analytics to track your payment performance and business insights.",
      features: ["Real-time insights", "Custom reports", "Revenue tracking", "Export capabilities"],
      pricing: "Included",
    },
    {
      icon: Globe,
      title: "Global Payments",
      description: "Accept payments from customers worldwide with multi-currency support and local payment methods.",
      features: ["150+ currencies", "Local payment methods", "Currency conversion", "Global compliance"],
      pricing: "3.4% + 30¢",
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Developer-friendly APIs and SDKs for seamless integration with your platform or application.",
      features: ["RESTful APIs", "Webhooks", "SDKs for all platforms", "Comprehensive docs"],
      pricing: "Free",
    },
    {
      icon: Users,
      title: "Multi-User Management",
      description: "Team management tools with role-based access control and permission management.",
      features: ["Role-based access", "Team permissions", "Activity logs", "User management"],
      pricing: "$10/user/month",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored payment solutions for enterprise clients with specific requirements and integrations.",
      features: ["Custom integrations", "Dedicated support", "SLA guarantees", "White-label options"],
      pricing: "Contact us",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support with dedicated account managers for enterprise clients.",
      features: ["24/7 phone support", "Live chat", "Email support", "Dedicated managers"],
      pricing: "Included",
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Bank-level security with PCI DSS compliance, encryption, and regular security audits.",
      features: ["PCI DSS Level 1", "End-to-end encryption", "Regular audits", "Compliance reporting"],
      pricing: "Included",
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Tools and insights to help optimize your payment flow and increase conversion rates.",
      features: ["A/B testing", "Conversion optimization", "Performance insights", "Recommendations"],
      pricing: "0.2% per transaction",
    },
    {
      icon: Webhook,
      title: "Webhooks & Notifications",
      description: "Real-time notifications and webhooks to keep your systems synchronized with payment events.",
      features: ["Real-time webhooks", "Event notifications", "Retry logic", "Delivery guarantees"],
      pricing: "Free",
    },
  ]

  return (
    <section id="services-list" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">All Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive payment solutions designed to grow with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 delay-${index * 50} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading text-card-foreground">{service.title}</h3>
                    <div className="text-sm font-medium text-primary">{service.pricing}</div>
                  </div>
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
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
