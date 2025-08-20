"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import type { Event } from "@/lib/events-data"

interface EventDetailsProps {
  event: Event
}

export function EventDetails({ event }: EventDetailsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Event Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">About This Event</h2>
                <div
                  className="text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: event.fullDescription
                      .replace(/\n/g, "<br />")
                      .replace(/#{1,6}\s/g, (match) => {
                        const level = match.trim().length
                        return `<h${level} class="text-${4 - level}xl font-bold font-heading text-foreground mt-6 mb-3">`
                      })
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold font-heading text-foreground mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Event Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Registration Status */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold font-heading text-card-foreground mb-4">Registration</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-semibold text-card-foreground">
                      {event.price.type === "free" ? "Free" : `$${event.price.amount} ${event.price.currency}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span className="font-semibold text-card-foreground">{event.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Registered:</span>
                    <span className="font-semibold text-card-foreground">{event.registered}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.capacity - event.registered} spots remaining</p>
                </div>
              </div>

              {/* Location Details */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold font-heading text-card-foreground mb-4">Location</h3>
                <div className="space-y-2">
                  <div className="font-medium text-card-foreground capitalize">{event.location.type}</div>
                  {event.location.venue && <div className="text-muted-foreground">{event.location.venue}</div>}
                  {event.location.address && <div className="text-muted-foreground">{event.location.address}</div>}
                  {event.location.city && (
                    <div className="text-muted-foreground">
                      {event.location.city}, {event.location.country}
                    </div>
                  )}
                </div>
              </div>

              {/* Share Event */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold font-heading text-card-foreground mb-4">Share Event</h3>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-blue-800 text-white px-3 py-2 rounded text-sm hover:bg-blue-900 transition-colors">
                    LinkedIn
                  </button>
                  <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
