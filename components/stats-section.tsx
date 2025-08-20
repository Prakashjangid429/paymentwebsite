"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
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

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "50,000+", label: "Active Indian Merchants", suffix: "" },
    { number: "₹15,000Cr+", label: "Processed Annually", suffix: "" },
    { number: "99.9%", label: "Uptime Guarantee", suffix: "" },
    { number: "28", label: "States & UTs Covered", suffix: "" },
  ]

  return (
    <section id="stats-section" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-card-foreground mb-4">
            Trusted by Businesses Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Indian companies who rely on Spiral Pay for their payment processing needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-3xl md:text-4xl font-black font-heading text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
