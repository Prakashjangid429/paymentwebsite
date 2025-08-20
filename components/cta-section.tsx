import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
  const benefits = [
    "Only 4% transaction fee - No hidden charges",
    "24/7 customer support in Hindi & English",
    "Easy integration in 15 minutes",
    "RBI authorized & PCI DSS compliant",
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-6">
            Ready to Accept UPI & Digital Payments?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join 50,000+ Indian businesses that trust Spiral Pay for secure, fast, and affordable payment processing.
            Start accepting payments today with just 4% transaction fee.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-foreground flex-shrink-0" />
                <span className="text-primary-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-background text-foreground hover:bg-background/90 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 mt-6">
            No setup fee • Cancel anytime • RBI authorized payment gateway
          </p>
        </div>
      </div>
    </section>
  )
}
