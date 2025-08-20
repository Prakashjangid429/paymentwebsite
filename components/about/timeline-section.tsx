"use client"

import { useEffect, useState } from "react"

export function TimelineSection() {
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

    const element = document.getElementById("timeline-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Spiral Pay was founded in Mumbai with a mission to simplify payment processing for Indian businesses.",
    },
    {
      year: "2019",
      title: "First 100 Customers",
      description:
        "Reached our first major milestone with 100 Indian businesses trusting Spiral Pay for their payments.",
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "Raised ₹120 crores in Series A funding to accelerate product development and team growth.",
    },
    {
      year: "2021",
      title: "UPI Integration",
      description: "Launched comprehensive UPI integration, supporting all major Indian payment methods and banks.",
    },
    {
      year: "2022",
      title: "15,000 Customers",
      description: "Celebrated serving over 15,000 businesses across India with ₹8,000+ crores in processed payments.",
    },
    {
      year: "2023",
      title: "AI-Powered Fraud Detection",
      description:
        "Launched advanced AI fraud detection specifically tuned for Indian payment patterns, reducing fraud by 95%.",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Processing ₹20,000+ crores annually and recognized as a leader in Indian payment innovation.",
    },
  ]

  return (
    <section id="timeline-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startup to industry leader - here are the key milestones in our growth story
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`w-full md:w-5/12 transition-all duration-700 delay-${index * 200} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div
                    className={`bg-card p-6 rounded-lg shadow-lg border border-border ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
                  >
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold font-heading text-card-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
