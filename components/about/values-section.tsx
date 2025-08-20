"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Zap, Globe, Heart, Lightbulb } from "lucide-react"

export function ValuesSection() {
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

    const element = document.getElementById("values-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "We prioritize the security of every transaction and protect our customers' data with bank-level encryption.",
    },
    {
      icon: Users,
      title: "Customer Obsessed",
      description:
        "Our customers' success is our success. We go above and beyond to ensure their payment needs are met.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in payment technology and user experience.",
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description:
        "We build solutions that work anywhere in the world, supporting businesses of all sizes and industries.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in everything we do.",
    },
    {
      icon: Lightbulb,
      title: "Simplicity",
      description: "We believe complex problems deserve simple solutions that anyone can understand and use.",
    },
  ]

  return (
    <section id="values-section" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-card-foreground mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and shape our company culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
