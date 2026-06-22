'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, pricing, and how we work."
        backgroundGradient
      />

      {/* FAQ Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">General Questions</h2>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-blue-700 transition-smooth font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Schedule a free consultation with our team today."
        primaryCta={{ text: 'Book Consultation', href: '/contact' }}
      />
    </MainLayout>
  )
}
