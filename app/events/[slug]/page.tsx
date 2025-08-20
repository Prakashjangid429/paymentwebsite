import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventHeader } from "@/components/events/event-header"
import { EventDetails } from "@/components/events/event-details"
import { EventAgenda } from "@/components/events/event-agenda"
import { EventSpeakers } from "@/components/events/event-speakers"
import { RelatedEvents } from "@/components/events/related-events"
import { events } from "@/lib/events-data"
import { notFound } from "next/navigation"

interface EventPageProps {
  params: {
    slug: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = events.find((e) => e.slug === params.slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <main>
        <EventHeader event={event} />
        <EventDetails event={event} />
        <EventAgenda agenda={event.agenda || []} />
        <EventSpeakers speakers={event.speakers || []} />
        <RelatedEvents currentEvent={event} />
      </main>
    </div>
  )
}

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }))
}
