import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventsHero } from "@/components/events/events-hero"
import { EventsGrid } from "@/components/events/events-grid"
import { EventsSidebar } from "@/components/events/events-sidebar"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <main>
        <EventsHero />
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <EventsGrid />
              </div>
              <div className="lg:col-span-1">
                <EventsSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
