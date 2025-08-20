"use client"

import { useEffect, useState } from "react"

export function PartnerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const partners = [
    { name: "State Bank of India", logo: "/sbi-logo.png" },
    { name: "HDFC Bank", logo: "/hdfc-logo.png" },
    { name: "ICICI Bank", logo: "/icici-logo.png" },
    { name: "Axis Bank", logo: "/axis-logo.png" },
    { name: "Paytm", logo: "/paytm-logo.png" },
    { name: "PhonePe", logo: "/phonepe-logo.png" },
    { name: "Google Pay", logo: "/gpay-logo.png" },
    { name: "Amazon Pay", logo: "/amazonpay-logo.png" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(partners.length / 4))
    }, 3000)

    return () => clearInterval(interval)
  }, [partners.length])

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
            Trusted Banking & Payment Partners
          </h2>
          <p className="text-muted-foreground">Integrated with India's leading banks and payment platforms</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                  {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    >
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
