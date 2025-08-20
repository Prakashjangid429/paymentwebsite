"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Share2, Bookmark, ExternalLink } from "lucide-react"
import type { Event } from "@/lib/events-data"

interface EventHeaderProps {
  event: Event
}

export function EventHeader({ event }: EventHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (timeString: string) => {
    return new Date(`2024-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "webinar":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "conference":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "workshop":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "meetup":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <section className="relative pt-16 pb-12 gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className={`${getEventTypeColor(event.type)} capitalize`}>{event.type}</Badge>
            {event.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
            {event.price.type === "free" && (
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Free</Badge>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-foreground mb-6 leading-tight">
            {event.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">{event.description}</p>

          {/* Event Meta Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">{formatDate(event.date)}</div>
                <div className="text-sm text-muted-foreground">{formatTime(event.time)}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">{event.duration} minutes</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">
                  {event.location.type === "online" ? "Online Event" : event.location.venue}
                </div>
                <div className="text-sm text-muted-foreground">
                  {event.location.type === "online" ? "Virtual" : event.location.city}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">
                  {event.registered}/{event.capacity}
                </div>
                <div className="text-sm text-muted-foreground">Registered</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow group">
              Register Now
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center space-x-3">
              {event.price.type === "paid" && (
                <div className="text-lg font-semibold text-foreground">
                  ${event.price.amount} {event.price.currency}
                </div>
              )}
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
