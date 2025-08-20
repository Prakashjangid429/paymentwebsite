export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground">Last updated: January 2024</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <h2>1. Information We Collect</h2>
              <p>PaymentGateway Pro collects information necessary to provide secure payment processing services:</p>

              <h3>Personal Information</h3>
              <ul>
                <li>Name, email address, and contact information</li>
                <li>Business information and tax identification numbers</li>
                <li>Bank account and financial information</li>
                <li>Identity verification documents</li>
              </ul>

              <h3>Transaction Data</h3>
              <ul>
                <li>Payment card information (encrypted and tokenized)</li>
                <li>Transaction amounts, dates, and merchant details</li>
                <li>Customer billing and shipping information</li>
                <li>Device and browser information</li>
              </ul>

              <h3>Technical Information</h3>
              <ul>
                <li>IP addresses and geolocation data</li>
                <li>API usage logs and system interactions</li>
                <li>Website analytics and performance data</li>
                <li>Security and fraud prevention data</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Process payments and manage transactions</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Provide customer support and technical assistance</li>
                <li>Improve our services and develop new features</li>
                <li>Send important service notifications</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>

              <h3>Service Providers</h3>
              <ul>
                <li>Payment networks (Visa, Mastercard, etc.)</li>
                <li>Banking partners and financial institutions</li>
                <li>Fraud prevention and security services</li>
                <li>Cloud infrastructure and hosting providers</li>
              </ul>

              <h3>Legal Requirements</h3>
              <ul>
                <li>Government agencies and regulators</li>
                <li>Law enforcement when required by law</li>
                <li>Legal proceedings and court orders</li>
                <li>Anti-money laundering compliance</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>We implement industry-leading security measures:</p>
              <ul>
                <li>PCI DSS Level 1 compliance</li>
                <li>End-to-end encryption for sensitive data</li>
                <li>Tokenization of payment card information</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication and access controls</li>
                <li>24/7 security monitoring and incident response</li>
              </ul>

              <h2>5. Data Retention</h2>
              <p>We retain information for as long as necessary to:</p>
              <ul>
                <li>Provide ongoing services to your account</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and prevent fraud</li>
                <li>Maintain business records as required by law</li>
              </ul>
              <p>
                Transaction data is typically retained for 7 years, while account information is kept for the duration
                of your relationship with us plus applicable legal requirements.
              </p>

              <h2>6. Your Rights and Choices</h2>
              <p>Depending on your location, you may have rights to:</p>
              <ul>
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your information</li>
                <li>Object to certain processing activities</li>
                <li>Data portability and transfer rights</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2>7. International Data Transfers</h2>
              <p>We operate globally and may transfer data across borders. We ensure appropriate safeguards through:</p>
              <ul>
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions by regulatory authorities</li>
                <li>Binding corporate rules</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>

              <h2>8. Cookies and Tracking</h2>
              <p>Our website uses cookies and similar technologies for:</p>
              <ul>
                <li>Essential website functionality</li>
                <li>Security and fraud prevention</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalization and user experience</li>
              </ul>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect
                personal information from children.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this privacy policy periodically. We will notify you of material changes through email or
                prominent website notices.
              </p>

              <h2>11. Contact Us</h2>
              <p>For privacy-related questions or requests, contact our Data Protection Officer:</p>
              <ul>
                <li>Email: privacy@paymentgateway.com</li>
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
