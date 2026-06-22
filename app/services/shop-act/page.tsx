import {
  shopActServiceSchema,
  shopActFAQSchema,
  shopActBreadcrumbSchema,
} from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CheckCircle, Store, Clock, FileText } from 'lucide-react'

const ELIGIBLE_BUSINESSES = [
  'Retail Shops',
  'Grocery Stores',
  'Clothing & Fashion Stores',
  'Hardware Stores',
  'General Stores',
  'Mobile/Electronics Stores',
  'Pharmacies',
  'Offices & Professional Services',
  'Travel Agencies',
  'Beauty & Wellness Salons',
]

const SHOP_ACT_FAQ = [
  {
    question: 'What is Shop Act registration?',
    answer: 'Shop Act registration is a municipal license required for retail shops and commercial establishments. It regulates working hours, wages, and employee protection under state labor laws.',
  },
  {
    question: 'Who needs Shop Act registration?',
    answer: 'Any retail shop, office, or commercial establishment where goods are sold or services are provided must register under the Shop Act. Requirements vary by state.',
  },
  {
    question: 'How do I get Shop Act registration?',
    answer: 'Shop Act registration is obtained from the municipal corporation or local authority. We handle the complete documentation and application process for you.',
  },
  {
    question: 'What are the benefits?',
    answer: 'Legal compliance, employee protection, better business standing, and eligibility for various business loans and schemes.',
  },
  {
    question: 'How long does it take?',
    answer: 'Typically 1-2 weeks from application to certificate receipt. We expedite the process through established relationships with local authorities.',
  },
]
export const metadata = {
  title: "Shop Act Registration Online | Shop & Establishment License | CloudTech",
  description:
    "Apply for Shop Act Registration online with CloudTech. Fast and hassle-free Shop & Establishment License registration for shops, offices, restaurants, startups, and businesses across India.",

  keywords: [
    "Shop Act Registration",
    "Shop Establishment License",
    "Shop and Establishment Registration",
    "Trade License",
    "Business License",
    "Shop License Online",
    "Commercial Establishment Registration",
    "Retail Shop Registration",
    "Office Registration",
    "Restaurant License",
    "Startup Registration",
    "Shop Act India",
    "CloudTech Shop Act",
  ],
};
export default function ShopActPage() {
  return (
    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(shopActServiceSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(shopActFAQSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(shopActBreadcrumbSchema),
    }}
  />

    <MainLayout>
      {/* Hero */}
      <Hero
        title="Shop Act Registration"
        subtitle="Get Shop Act license from your municipal corporation. Legal compliance for retail shops and commercial establishments."
        primaryCta={{ text: 'Apply for Shop Act', href: '/contact' }}
        secondaryCta={{ text: 'Check Requirements', href: '/contact' }}
        backgroundGradient
      />

      {/* What is Shop Act */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">What is Shop Act Registration?</h2>
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            The Shop Act is state labor legislation that regulates working hours, wages, and conditions of work for employees in shops 
            and commercial establishments. Shop Act registration is mandatory for retail shops, offices, and service establishments.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Registration ensures compliance with state labor laws and employee protection provisions. Each state has its own Shop Act, 
            and we help you navigate the specific requirements for your location.
          </p>
        </div>
      </section>

      {/* Eligible Businesses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Shops & Businesses That Need Shop Act License</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ELIGIBLE_BUSINESSES.map((business, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-lg p-4 border border-border">
                <Store className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-secondary font-medium">{business}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Shop Act Registration Process</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: 'Pre-Registration Consultation', desc: 'We review your business location and type to determine Shop Act applicability.' },
              { step: 2, title: 'Documentation', desc: 'Gather PAN, Aadhar, property papers, and shop details.' },
              { step: 3, title: 'Municipal Application', desc: 'Submit application to your municipal corporation with all required documents.' },
              { step: 4, title: 'Inspection', desc: 'Municipal inspector verifies your shop premises and conditions.' },
              { step: 5, title: 'License Issuance', desc: 'Receive your Shop Act license certificate within 1-2 weeks.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 pb-6 border-b border-border last:border-0">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-secondary text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Benefits of Shop Act Registration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Legal & Compliance Benefits</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Legal operation without penalties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Employee protection compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Working hours and wages regulation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Business Benefits</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Better credibility with suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Easier access to business loans</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional business registration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Frequently Asked Questions</h2>
          <FAQAccordion items={SHOP_ACT_FAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Get Your Shop Act License Today"
        subtitle="Ensure legal compliance for your retail shop or commercial establishment. Apply for Shop Act registration now."
        primaryCta={{ text: 'Start Application', href: '/contact' }}
      />
    </MainLayout>
    </>
  )
}
