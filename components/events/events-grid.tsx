"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"
import Link from "next/link"
import { events, eventTypes } from "@/lib/events-data"

export function EventsGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedType, setSelectedType] = useState("all")
  const [displayedEvents, setDisplayedEvents] = useState(6)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredEvents = selectedType === "all" ? events : events.filter((event) => event.type === selectedType)

  const visibleEvents = filteredEvents.slice(0, displayedEvents)
  const featuredEvent = events.find((event) => event.featured)

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
    <div className="space-y-12">
      {/* Event Type Filter */}
      <div className="flex flex-wrap gap-2">
        {eventTypes.map((type) => (
          <Button
            key={type}
            variant={selectedType === type ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedType(type)}
            className="transition-all duration-200 capitalize"
          >
            {type}
          </Button>
        ))}
      </div>

      {/* Featured Event */}
      {featuredEvent && selectedType === "all" && (
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredEvent.image || "/placeholder.svg"}
                alt={featuredEvent.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
              <Badge className={`absolute top-4 right-4 ${getEventTypeColor(featuredEvent.type)} capitalize`}>
                {featuredEvent.type}
              </Badge>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-card-foreground mb-4 leading-tight">
                {featuredEvent.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{featuredEvent.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {formatDate(featuredEvent.date)} at {formatTime(featuredEvent.time)}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{featuredEvent.duration} minutes</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {featuredEvent.location.type === "online" ? "Online Event" : featuredEvent.location.venue}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>
                    {featuredEvent.registered}/{featuredEvent.capacity} registered
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button asChild className="group">
                  <Link href={`/events/${featuredEvent.slug}`}>
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {featuredEvent.price.type === "free" ? (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Free
                  </Badge>
                ) : (
                  <Badge variant="outline">
                    ${featuredEvent.price.amount} {featuredEvent.price.currency}
                  </Badge>
                )}
              </div>
            </CardContent>
          </div>
        </Card>
      )}

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleEvents.map((event, index) => (
          <Card
            key={event.id}
            className={`group hover:shadow-lg transition-all duration-500 delay-${index * 100} ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative overflow-hidden">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className={`absolute top-4 left-4 ${getEventTypeColor(event.type)} capitalize`}>
                {event.type}
              </Badge>
              {event.price.type === "free" && (
                <Badge className="absolute top-4 right-4 bg-green-100 text-green-800">Free</Badge>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold font-heading text-card-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                <Link href={`/events/${event.slug}`}>{event.title}</Link>
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{event.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {formatDate(event.date)} at {formatTime(event.time)}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{event.location.type === "online" ? "Online" : event.location.city}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>
                    {event.registered}/{event.capacity} registered
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  {event.price.type === "free" ? (
                    <span className="text-green-600 font-medium">Free</span>
                  ) : (
                    <span className="font-medium">
                      ${event.price.amount} {event.price.currency}
                    </span>
                  )}
                </div>
                <Button variant="ghost" size="sm" asChild className="group/btn">
                  <Link href={`/events/${event.slug}`}>
                    View Details
                    <ExternalLink className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      {displayedEvents < filteredEvents.length && (
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setDisplayedEvents((prev) => prev + 6)}
            className="text-lg px-8 py-4"
          >
            Load More Events
          </Button>
        </div>
      )}
    </div>
  )
}
