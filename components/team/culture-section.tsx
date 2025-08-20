"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Lightbulb, Globe, Coffee, Gamepad2 } from "lucide-react"

export function CultureSection() {
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

    const element = document.getElementById("culture-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs",
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO policy",
    },
    {
      icon: Lightbulb,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and internal training",
    },
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere with quarterly team meetups and annual company retreats",
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Free meals, premium coffee, gym membership, and commuter benefits",
    },
    {
      icon: Gamepad2,
      title: "Fun Culture",
      description: "Game rooms, team events, hackathons, and celebration of achievements",
    },
  ]

  return (
    <section id="culture-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Why Work at PayFlow?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in creating an environment where everyone can do their best work and grow their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-card-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary-foreground mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and customer success.
              Check out our open positions and become part of the PayFlow family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 bg-background text-foreground hover:bg-background/90"
              >
                View Open Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
