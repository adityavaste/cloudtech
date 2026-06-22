'use client'
import { schemas } from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CheckCircle, FileText, Clock, DollarSign, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const GST_BENEFITS = [
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: 'Legal Compliance',
    description: 'Operating legally without GST registration penalties or business closure risks.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: 'Input Tax Credit',
    description: 'Claim tax credits on purchases to reduce your tax burden significantly.',
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Enhanced Credibility',
    description: 'GST registration improves your business reputation with customers and partners.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: 'Better Business Growth',
    description: 'Access to new business opportunities and corporate partnerships.',
  },
]

const GST_PROCESS = [
  { step: 1, title: 'Free Consultation', desc: 'Discuss your business turnover, type, and GST eligibility.' },
  { step: 2, title: 'Document Collection', desc: 'Gather PAN, Aadhar, address proof, and business documents.' },
  { step: 3, title: 'Application Filing', desc: 'We fill and submit your GST application online (Form REG-01).' },
  { step: 4, title: 'Verification', desc: 'Handle officer correspondence and provide required clarifications.' },
  { step: 5, title: 'GST Certificate', desc: 'Receive your GSTIN and certificate within 1-3 weeks.' },
]

const GST_DOCUMENTS = [
  'PAN Card',
  'Aadhar Card',
  'Address Proof (Utility Bill/Rent Agreement)',
  'Bank Account Statement (3 months)',
  'Shop Act/Trade License',
  'Proof of Business Premises',
  'Passport-sized Photos',
  'Auditor Details (if applicable)',
]

const GST_FAQ = [
  {
    question: 'Is GST registration mandatory?',
    answer: 'Yes, GST registration is mandatory for businesses with annual turnover above 40 lakhs (20 lakhs for certain states). Even below this threshold, GST registration is beneficial for input tax credit benefits.',
  },
  {
    question: 'How long does GST registration take?',
    answer: 'Typically 1-3 weeks from application to receiving your GSTIN. We ensure quick processing through our established relationships with GST authorities.',
  },
  {
    question: 'What are GST filing requirements?',
    answer: 'Monthly GST returns are required by default. We provide complete GST return filing assistance to ensure timely and accurate submissions.',
  },
  {
    question: 'Can I apply for GST online?',
    answer: 'Yes, GST registration is entirely online through the GST portal. We handle the complete process for you.',
  },
  {
    question: 'What is the GST registration fee?',
    answer: 'There is no government fee for GST registration. Our service fee is competitive and includes all documentation and filing.',
  },
  {
    question: 'What happens after GST registration?',
    answer: 'You can start charging GST on your invoices, claim input tax credit, and file GST returns. We provide ongoing support.',
  },
]






export default function GSTPage() {

  return (
  <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    
    <MainLayout>
      {/* Hero */}
      <Hero
        title="GST Registration Services"
        subtitle="Quick and hassle-free GST registration with complete compliance support. Get your GSTIN within 1-3 weeks."
        primaryCta={{ text: 'Apply for GST Now', href: '/contact' }}
        secondaryCta={{ text: 'Free Consultation', href: '/contact' }}
        backgroundGradient
      />

      {/* What is GST */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">What is GST Registration?</h2>
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            GST (Goods and Services Tax) Registration is mandatory for businesses with a turnover exceeding 40 lakhs per annum. 
            A GSTIN (GST Identification Number) allows you to legally collect GST on your sales and claim input tax credit on purchases.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            GST replaced multiple indirect taxes and streamlined the taxation system. Registration is a one-time process that takes 
            1-3 weeks and opens doors to numerous business benefits and compliance requirements.
          </p>
        </div>
      </section>

      {/* Who Needs GST */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Who Needs GST Registration?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Mandatory GST Registration</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Turnover exceeds 40 lakhs annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Inter-state supplies of goods/services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ecommerce marketplace sellers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Import/export of goods</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Voluntary GST Registration</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Below 40 lakhs turnover (optional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Claim input tax credit benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>B2B customers requiring GST invoice</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Boost business credibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GST Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Benefits of GST Registration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GST_BENEFITS.map((benefit, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-8 hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth hover:-translate-y-1">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-secondary text-base leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Documents Required for GST Registration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {GST_DOCUMENTS.map((doc, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-lg p-4 border border-border">
                <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-secondary font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GST Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Our GST Registration Process</h2>
          <div className="space-y-6">
            {GST_PROCESS.map((item) => (
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

      {/* Timeline & Cost */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-blue-light">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border border-border text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Processing Time</h3>
            <p className="text-4xl font-bold text-primary mb-2">1-3 Weeks</p>
            <p className="text-secondary">From application to GSTIN receipt</p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-border text-center">
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Government Fee</h3>
            <p className="text-4xl font-bold text-primary mb-2">FREE</p>
            <p className="text-secondary">Zero registration cost (we handle it)</p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-border text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Documentation</h3>
            <p className="text-4xl font-bold text-primary mb-2">10 Docs</p>
            <p className="text-secondary">Simple documents we collect for you</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Frequently Asked Questions</h2>
          <FAQAccordion items={GST_FAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Your GST Registration?"
        subtitle="Let our experts handle your GST registration. Schedule a free consultation to discuss your business needs and eligibility."
        primaryCta={{ text: 'Book Free Consultation', href: '/contact' }}
      />
    </MainLayout>
    </>
  )
}
