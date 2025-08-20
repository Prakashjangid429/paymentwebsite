import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team/team-hero"
import { LeadershipSection } from "@/components/team/leadership-section"
import { TeamGrid } from "@/components/team/team-grid"
import { CultureSection } from "@/components/team/culture-section"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <main>
        <TeamHero />
        <LeadershipSection />
        <TeamGrid />
        <CultureSection />
      </main>
    </div>
  )
}
