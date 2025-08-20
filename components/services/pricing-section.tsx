"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star } from "lucide-react"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: isAnnual ? 0 : 0,
      period: "month",
      features: [
        "Up to ₹8 lakh monthly volume",
        "4% + ₹2 per transaction",
        "Basic fraud protection",
        "Email support",
        "Standard reporting",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      description: "Ideal for growing businesses",
      price: isAnnual ? 2400 : 3200,
      period: "month",
      features: [
        "Up to ₹80 lakh monthly volume",
        "3.5% + ₹2 per transaction",
        "Advanced fraud protection",
        "Priority support",
        "Advanced analytics",
        "Multi-user access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      price: "Custom",
      period: "",
      features: [
        "Unlimited monthly volume",
        "Custom pricing starting at 2.5%",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-card-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>

          {/* ... existing toggle code ... */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? "text-card-foreground font-medium" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-card-foreground font-medium" : "text-muted-foreground"}`}>
              Annual
              <span className="ml-1 text-xs text-primary">(Save 25%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-lg ${
                plan.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold font-heading text-card-foreground">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  {typeof plan.price === "number" ? (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-black text-primary">₹{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-black text-primary">{plan.price}</div>
                  )}
                </div>
              </CardHeader>

              {/* ... existing card content ... */}
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "animate-pulse-glow" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include our core features: RBI compliance, fraud protection, and 24/7 monitoring.
          </p>
        </div>
      </div>
    </section>
  )
}
