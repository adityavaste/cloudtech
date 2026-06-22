'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { PricingCard } from '@/components/ui/pricing-card'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { PRICING_PLANS } from '@/lib/constants'

const PRICING_FAQ = [
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, absolutely. You can upgrade or downgrade your plan at any time.',
  },
  {
    question: 'Do you offer custom plans?',
    answer: 'Yes. For enterprise needs, contact us for a custom quote tailored to your requirements.',
  },
  {
    question: 'What is included in support?',
    answer: 'Each plan includes email support. Growth and Enterprise plans include priority support and phone support.',
  },
  {
    question: 'Are there setup fees?',
    answer: 'No setup fees. All prices are transparent with no hidden charges.',
  },
  {
    question: 'What if I need help choosing a plan?',
    answer: 'Contact us for a free consultation. We\'ll recommend the best plan based on your needs and budget.',
  },
]

export default function PricingPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="Choose the perfect plan for your business. No hidden fees, no surprises. Always upgrade or downgrade when you need."
        backgroundGradient
      />

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard
                key={i}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                ctaHref={plan.ctaHref}
                isRecommended={plan.isRecommended}
              />
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            All plans include SSL certificate, automatic backups, and basic monitoring. Enterprise plans include custom features and dedicated support. Prices are per month when billed monthly.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Detailed Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold">Starter</th>
                  <th className="text-center py-3 px-4 font-semibold">Growth</th>
                  <th className="text-center py-3 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Website Pages', starter: 'Up to 5', growth: 'Up to 15', enterprise: 'Unlimited' },
                  { feature: 'Storage', starter: '10 GB', growth: '100 GB', enterprise: 'Unlimited' },
                  { feature: 'SSL Certificate', starter: '✓', growth: '✓', enterprise: '✓' },
                  { feature: 'Automatic Backups', starter: 'Weekly', growth: 'Daily', enterprise: 'Hourly' },
                  { feature: 'Support', starter: 'Email', growth: 'Priority Email', enterprise: '24/7 Phone' },
                  { feature: 'SEO Optimization', starter: '✗', growth: 'Basic', enterprise: 'Advanced' },
                  { feature: 'Custom Domain', starter: 'Included', growth: 'Included', enterprise: 'Included' },
                  { feature: 'Email Accounts', starter: '5', growth: '25', enterprise: 'Unlimited' },
                  { feature: 'Uptime Guarantee', starter: '99%', growth: '99.5%', enterprise: '99.99%' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-3 px-4 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center">{row.starter}</td>
                    <td className="py-3 px-4 text-center">{row.growth}</td>
                    <td className="py-3 px-4 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Pricing Questions
          </h2>
          <FAQAccordion items={PRICING_FAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Choose your plan today and start growing your business online."
        primaryCta={{ text: 'Choose Plan', href: '/contact' }}
      />
    </MainLayout>
  )
}
