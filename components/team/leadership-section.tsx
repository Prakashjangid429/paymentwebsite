"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

export function LeadershipSection() {
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

    const element = document.getElementById("leadership-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const leaders = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Product at Stripe with 15+ years in fintech. Led product teams at PayPal and Square.",
      image: "/asian-ceo-headshot.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Principal Engineer at Square. Built payment infrastructure serving millions of transactions daily.",
      image: "/placeholder-tph54.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Johnson",
      role: "VP of Engineering",
      bio: "Former Engineering Director at Uber. Expert in distributed systems and payment security.",
      image: "/placeholder-qtttl.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "VP of Sales",
      bio: "Previously led enterprise sales at Salesforce. 20+ years experience in B2B software sales.",
      image: "/placeholder-28b1w.png",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <section id="leadership-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced leaders from top fintech companies who are passionate about innovation and customer success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6 text-center">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold font-heading text-card-foreground mb-1">{leader.name}</h3>
                <div className="text-primary font-medium mb-3">{leader.role}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={leader.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={leader.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
