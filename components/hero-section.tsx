"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Globe, CheckCircle, Play, Star } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: Shield, text: "RBI Compliant Security", color: "text-emerald-500" },
    { icon: Zap, text: "Instant UPI Processing", color: "text-yellow-500" },
    { icon: Globe, text: "Pan-India Coverage", color: "text-blue-500" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pb-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-secondary rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-accent rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6 mt-20">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-1 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Star className="h-4 w-4 text-primary fill-current" />
                <span className="text-sm font-semibold text-primary">Trusted by 50,000+ Indian businesses</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-heading text-foreground mb-6 leading-tight">
              <span className="block animate-fade-in-up">India's Leading</span>
              <span className=" bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up delay-200">
                Payment Gateway
              </span>
              <span className=" animate-fade-in-up delay-400"> for Digital India</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Accept UPI, cards, wallets & bank transfers with just 4% transaction fee.
            <span className="block mt-2 text-primary font-semibold">
              Built for Bharat, trusted by businesses nationwide.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 bg-card/90 backdrop-blur-sm px-6 py-4 rounded-full border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  currentFeature === index
                    ? "border-primary shadow-lg shadow-primary/25 bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <feature.icon
                  className={`h-5 w-5 ${currentFeature === index ? feature.color : "text-primary"} transition-colors duration-300`}
                />
                <span className="text-base font-semibold text-card-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-xl px-10 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            >
              Get Started Free
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-10 py-6 bg-transparent border-2 border-primary hover:bg-primary/10 hover:border-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg text-muted-foreground font-medium">RBI Authorized & Compliant</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-muted-foreground">
              <div className="flex items-center justify-center space-x-3 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-emerald-500" />
                <span className="text-base font-semibold">RBI Authorized</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-blue-500" />
                <span className="text-base font-semibold">PCI DSS Level 1</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-purple-500" />
                <span className="text-base font-semibold">ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center bg-primary/5 backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
