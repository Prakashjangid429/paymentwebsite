"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Video, Coffee, Award } from "lucide-react"

export function EventsHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentEventType, setCurrentEventType] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentEventType((prev) => (prev + 1) % eventTypes.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const eventTypes = [
    { icon: Video, name: "Webinars", color: "text-blue-500" },
    { icon: Award, name: "Conferences", color: "text-purple-500" },
    { icon: Coffee, name: "Workshops", color: "text-orange-500" },
    { icon: Users, name: "Meetups", color: "text-green-500" },
  ]

  const eventStats = [
    { icon: Calendar, value: "50+", label: "Events This Year" },
    { icon: Users, value: "10,000+", label: "Attendees" },
    { icon: MapPin, value: "25+", label: "Cities Worldwide" },
  ]

  return (
    <section className="relative pt-24 pb-20 gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute top-20 left-20 opacity-10">
          <Calendar className="h-16 w-16 text-primary animate-float" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-10">
          <Users className="h-18 w-18 text-secondary animate-float delay-1000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-8">
              {React.createElement(eventTypes[currentEventType].icon, {
                className: `h-5 w-5 ${eventTypes[currentEventType].color}`,
              })}
              <span className="text-base font-semibold text-primary">{eventTypes[currentEventType].name} & More</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading text-foreground mb-6 leading-tight">
              <span className="block">PayFlow</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Events
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Join us for webinars, conferences, workshops, and meetups designed to advance your payment processing
            knowledge and connect with industry professionals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {eventStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <stat.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-black text-primary mb-3">{stat.value}</div>
                <div className="text-lg font-semibold text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              View Upcoming Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
