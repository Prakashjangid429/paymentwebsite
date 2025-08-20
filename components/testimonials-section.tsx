"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
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

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      company: "Delhi Electronics Hub",
      content:
        "Spiral Pay transformed our business! UPI integration was seamless and our sales increased by 40%. The 4% fee is very competitive.",
      rating: 5,
      avatar: "/indian-businessman-avatar.png",
    },
    {
      name: "Priya Patel",
      role: "CTO",
      company: "Mumbai Fashion Store",
      content:
        "The fraud protection is excellent. We've had zero payment disputes since switching to Spiral Pay. Customer support is also very responsive.",
      rating: 5,
      avatar: "/indian-businesswoman-avatar.png",
    },
    {
      name: "Arjun Reddy",
      role: "Finance Head",
      company: "Bangalore Tech Solutions",
      content:
        "GST-compliant reports and real-time analytics help us manage our finances better. The dashboard is intuitive and very user-friendly.",
      rating: 5,
      avatar: "/indian-businessman-avatar-2.png",
    },
  ]

  return (
    <section id="testimonials-section" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-card-foreground mb-4">
            What Our Indian Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Indian business leaders are saying about Spiral Pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-700 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
