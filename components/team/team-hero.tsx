"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Users, Globe, Briefcase, Heart } from "lucide-react"

export function TeamHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentValue((prev) => (prev + 1) % companyValues.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const companyValues = [
    { icon: Heart, text: "Passion-Driven", color: "text-red-500" },
    { icon: Users, text: "Collaborative", color: "text-blue-500" },
    { icon: Globe, text: "Global Mindset", color: "text-green-500" },
    { icon: Briefcase, text: "Professional", color: "text-purple-500" },
  ]

  const teamStats = [
    { value: "200+", label: "Team Members" },
    { value: "15+", label: "Countries" },
    { value: "50+", label: "Open Positions" },
  ]

  return (
    <section className="relative pt-24 pb-20 gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute top-16 right-20 opacity-10">
          <Users className="h-20 w-20 text-primary animate-float" />
        </div>
        <div className="absolute bottom-20 left-16 opacity-10">
          <Heart className="h-16 w-16 text-secondary animate-float delay-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-8">
              {React.createElement(companyValues[currentValue].icon, {
                className: `h-5 w-5 ${companyValues[currentValue].color}`,
              })}
              <span className="text-base font-semibold text-primary">{companyValues[currentValue].text} Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading text-foreground mb-6 leading-tight">
              <span className="block">Meet Our</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            The passionate people behind PayFlow who are dedicated to revolutionizing payment processing and helping
            businesses succeed worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl font-black text-primary mb-4">{stat.value}</div>
                <div className="text-lg font-semibold text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
