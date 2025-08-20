"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, Shield, Zap, Globe } from "lucide-react"

export function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: CreditCard, text: "Accept all payment methods", color: "text-blue-500" },
    { icon: Globe, text: "Global currency support", color: "text-green-500" },
    { icon: Shield, text: "Advanced fraud protection", color: "text-red-500" },
    { icon: Zap, text: "Real-time analytics", color: "text-yellow-500" },
  ]

  return (
    <section className="relative pt-24 pb-20 gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        <div className="absolute top-20 right-20 opacity-10">
          <CreditCard className="h-16 w-16 text-primary animate-float" />
        </div>
        <div className="absolute bottom-32 left-16 opacity-10">
          <Shield className="h-20 w-20 text-secondary animate-float delay-1000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-8">
              <CreditCard className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold text-primary">Complete Payment Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading text-foreground mb-6 leading-tight">
              <span className="block">Complete Payment</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Everything you need to accept, process, and manage payments in one powerful, secure platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-6 rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${
                  currentFeature === index
                    ? "bg-primary/5 border-primary shadow-xl shadow-primary/25"
                    : "bg-card/50 backdrop-blur-sm border-border hover:border-primary/50"
                }`}
              >
                <div className={`p-3 rounded-xl ${currentFeature === index ? "bg-primary/10" : "bg-muted/50"}`}>
                  <feature.icon
                    className={`h-8 w-8 ${currentFeature === index ? feature.color : "text-primary"} transition-colors duration-300`}
                  />
                </div>
                <span className="text-lg font-semibold text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-xl px-10 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            >
              Get Started
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-10 py-6 bg-transparent border-2 border-primary hover:bg-primary/10 hover:border-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
