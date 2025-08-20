"use client"

import { useEffect, useState } from "react"

export function CompanyStory() {
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

    const element = document.getElementById("company-story")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="company-story" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <img src="/diverse-team-office.png" alt="Spiral Pay team" className="rounded-2xl shadow-lg" />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Spiral Pay was founded in 2018 by a team of fintech veterans who recognized the need for a more secure,
                efficient, and developer-friendly payment processing solution in India. Frustrated by the complexity and
                high costs of existing platforms, we set out to build something better for Indian businesses.
              </p>
              <p>
                Starting in a small Mumbai office, our founders combined decades of experience from leading Indian
                fintech companies and global payment processors to create a platform that prioritizes security,
                simplicity, and scalability for the Indian market.
              </p>
              <p>
                Today, Spiral Pay processes over ₹20,000 crores annually for more than 15,000 businesses across India.
                We've grown from a team of 3 to over 150 employees across multiple offices in Mumbai, Bangalore, and
                Delhi, but our mission remains the same: to make payments simple, secure, and accessible for every
                Indian business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
