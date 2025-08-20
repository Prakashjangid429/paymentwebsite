"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function TeamGrid() {
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

    const element = document.getElementById("team-grid")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const departments = [
    {
      name: "Engineering",
      count: 85,
      description: "Building secure, scalable payment infrastructure",
      image: "/diverse-engineering-team.png",
    },
    {
      name: "Product",
      count: 25,
      description: "Designing user-centric payment experiences",
      image: "/product-design-meeting.png",
    },
    {
      name: "Sales & Marketing",
      count: 35,
      description: "Connecting with customers and growing our community",
      image: "/sales-marketing-team.png",
    },
    {
      name: "Customer Success",
      count: 20,
      description: "Ensuring our customers achieve their payment goals",
      image: "/customer-success-team.png",
    },
    {
      name: "Operations",
      count: 15,
      description: "Keeping everything running smoothly behind the scenes",
      image: "/operations-team-office.png",
    },
    {
      name: "Security & Compliance",
      count: 20,
      description: "Protecting our platform and ensuring regulatory compliance",
      image: "/security-monitoring-compliance.png",
    },
  ]

  return (
    <section id="team-grid" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-card-foreground mb-4">Our Departments</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented professionals across all functions working together to deliver exceptional payment solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-0">
                <img
                  src={dept.image || "/placeholder.svg"}
                  alt={dept.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold font-heading text-card-foreground">{dept.name}</h3>
                    <span className="text-2xl font-bold text-primary">{dept.count}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{dept.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
