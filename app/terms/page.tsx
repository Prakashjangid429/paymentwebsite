export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-xl text-muted-foreground">Last updated: January 2024</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using PaymentGateway Pro services, you accept and agree to be bound by the terms and
                provision of this agreement. These Terms of Service govern your use of our payment processing services,
                APIs, and related technologies.
              </p>

              <h2>2. Description of Service</h2>
              <p>PaymentGateway Pro provides secure payment processing services, including but not limited to:</p>
              <ul>
                <li>Credit and debit card processing</li>
                <li>Digital wallet integration</li>
                <li>Recurring billing and subscription management</li>
                <li>Fraud detection and prevention</li>
                <li>Real-time transaction monitoring</li>
                <li>API access and developer tools</li>
              </ul>

              <h2>3. Account Registration and Security</h2>
              <p>
                To use our services, you must register for an account and provide accurate, complete information. You
                are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains current and accurate</li>
              </ul>

              <h2>4. Acceptable Use Policy</h2>
              <p>You agree not to use our services for:</p>
              <ul>
                <li>Illegal activities or transactions</li>
                <li>Processing payments for prohibited businesses</li>
                <li>Money laundering or terrorist financing</li>
                <li>Fraudulent or deceptive practices</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>

              <h2>5. Fees and Payment Terms</h2>
              <p>Our fees are clearly outlined in your service agreement. Key terms include:</p>
              <ul>
                <li>Transaction fees are deducted from each processed payment</li>
                <li>Monthly fees are billed in advance</li>
                <li>Setup and integration fees may apply</li>
                <li>Chargeback and dispute fees as outlined in your agreement</li>
              </ul>

              <h2>6. Data Protection and Privacy</h2>
              <p>
                We are committed to protecting your data and maintaining PCI DSS compliance. Our data handling practices
                are detailed in our Privacy Policy, which forms part of these terms.
              </p>

              <h2>7. Service Availability</h2>
              <p>While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. We provide:</p>
              <ul>
                <li>24/7 system monitoring</li>
                <li>Redundant infrastructure</li>
                <li>Regular maintenance windows with advance notice</li>
                <li>Service level agreements for enterprise customers</li>
              </ul>

              <h2>8. Limitation of Liability</h2>
              <p>
                PaymentGateway Pro's liability is limited to the fees paid for our services in the preceding 12 months.
                We are not liable for indirect, incidental, or consequential damages.
              </p>

              <h2>9. Termination</h2>
              <p>
                Either party may terminate this agreement with 30 days written notice. We may terminate immediately for
                breach of terms or illegal activity.
              </p>

              <h2>10. Contact Information</h2>
              <p>For questions about these terms, contact us at:</p>
              <ul>
                <li>Email: legal@paymentgateway.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Payment Street, New York, NY 10004</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
