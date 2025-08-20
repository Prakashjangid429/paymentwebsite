"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Users, value: "15,000+", label: "Happy Customers", color: "text-blue-500" },
    { icon: TrendingUp, value: "₹20,000+ Cr", label: "Processed Monthly", color: "text-green-500" },
    { icon: Award, value: "99.9%", label: "Uptime Guarantee", color: "text-purple-500" },
  ]

  return (
    <section className="relative pt-24 pb-20 gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Since 2018</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading text-foreground mb-6 leading-tight">
                <span className="block">Revolutionizing</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Payment Processing
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
              Since 2018, PayFlow has been at the forefront of payment innovation, helping businesses of all sizes
              process payments securely, efficiently, and at scale.
            </p>

            <Button
              size="lg"
              className="text-xl px-10 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Our Story
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="PayFlow headquarters"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-card/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-border">
                <div className={`transition-all duration-500 ${currentStat === 0 ? "scale-110" : "scale-100"}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    {React.createElement(stats[currentStat].icon, {
                      className: `h-8 w-8 ${stats[currentStat].color}`,
                    })}
                    <div className="text-3xl font-black text-primary">{stats[currentStat].value}</div>
                  </div>
                  <div className="text-base font-semibold text-muted-foreground">{stats[currentStat].label}</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-primary/10 backdrop-blur-sm p-4 rounded-xl border border-primary/20">
                <div className="text-2xl font-bold text-primary">2018</div>
                <div className="text-sm text-primary/80">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
