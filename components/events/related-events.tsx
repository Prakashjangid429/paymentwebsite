import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  location: string
  type: string
  slug: string
}

interface RelatedEventsProps {
  currentEventId: string
  events: Event[]
}

export function RelatedEvents({ currentEventId, events }: RelatedEventsProps) {
  const relatedEvents = events.filter((event) => event.id !== currentEventId).slice(0, 3)

  if (relatedEvents.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Related Events</h3>
      <div className="grid gap-6">
        {relatedEvents.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                    {event.type}
                  </span>
                  <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <Button asChild size="sm">
                  <Link href={`/events/${event.slug}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
