import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesOverview } from "@/components/services-overview"
import { PartnerSlider } from "@/components/partner-slider"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <PartnerSlider />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  )
}
