"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Zap } from "lucide-react"

export function IntegrationSection() {
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

    const element = document.getElementById("integration-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const integrations = [
    {
      icon: Code,
      title: "Developer APIs",
      description: "RESTful APIs with comprehensive documentation and SDKs for all major programming languages.",
      languages: ["JavaScript", "Python", "PHP", "Ruby", "Java", "C#"],
    },
    {
      icon: Smartphone,
      title: "Mobile SDKs",
      description: "Native mobile SDKs for iOS and Android with seamless integration and optimal performance.",
      languages: ["iOS (Swift)", "Android (Kotlin)", "React Native", "Flutter"],
    },
    {
      icon: Globe,
      title: "E-commerce Platforms",
      description: "Pre-built integrations with popular e-commerce platforms and content management systems.",
      languages: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Squarespace", "WordPress"],
    },
    {
      icon: Zap,
      title: "No-Code Solutions",
      description: "Easy-to-use plugins and widgets that require no coding knowledge for quick implementation.",
      languages: ["Payment Links", "Hosted Checkout", "Embeddable Forms", "QR Codes"],
    },
  ]

  return (
    <section id="integration-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Easy Integration</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get up and running quickly with our developer-friendly tools and comprehensive documentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <integration.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-card-foreground">{integration.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{integration.description}</p>
                <div className="flex flex-wrap gap-2">
                  {integration.languages.map((language, langIndex) => (
                    <span
                      key={langIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold font-heading text-card-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Our technical team is here to help you integrate PayFlow into your platform quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                View Documentation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
