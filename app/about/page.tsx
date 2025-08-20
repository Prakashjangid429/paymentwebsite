import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { ValuesSection } from "@/components/about/values-section"
import { TimelineSection } from "@/components/about/timeline-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <AboutHero />
        <CompanyStory />
        <ValuesSection />
        <TimelineSection />
      </main>
    </div>
  )
}
