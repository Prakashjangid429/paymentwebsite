import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { PricingSection } from "@/components/services/pricing-section"
import { IntegrationSection } from "@/components/services/integration-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <main>
        <ServicesHero />
        <ServicesList />
        <PricingSection />
        <IntegrationSection />
      </main>
    </div>
  )
}
