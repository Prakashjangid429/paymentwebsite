"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Filter, TrendingUp, Bell } from "lucide-react"
import Link from "next/link"
import { events, eventTags, eventTypes } from "@/lib/events-data"

export function EventsSidebar() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming").slice(0, 5)
  const popularTags = eventTags.slice(0, 10)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-8">
      {/* Event Types Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Event Types</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {eventTypes.slice(1).map((type) => {
              const count = events.filter((event) => event.type === type).length
              return (
                <div key={type} className="flex items-center justify-between">
                  <Link
                    href={`/events?type=${type}`}
                    className="text-muted-foreground hover:text-primary transition-colors capitalize"
                  >
                    {type}
                  </Link>
                  <Badge variant="secondary" className="text-xs">
                    {count}
                  </Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Upcoming Events</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group">
                <Link href={`/events/${event.slug}`}>
                  <h4 className="font-medium text-card-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                    {event.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(event.date)} • {event.type}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {event.price.type === "free" ? "Free" : `$${event.price.amount}`}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Popular Topics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Event Notifications */}
      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Event Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-sm">
            Get notified about new events, registration reminders, and exclusive invitations.
          </p>
          <Button className="w-full">Subscribe to Updates</Button>
        </CardContent>
      </Card>

      {/* Host an Event CTA */}
      <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
        <CardHeader>
          <CardTitle>Host an Event</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-sm">
            Want to share your expertise? Partner with us to host webinars, workshops, or meetups.
          </p>
          <Button variant="outline" className="w-full bg-transparent">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
