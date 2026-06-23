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
      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-secondary text-center mb-8">
            GST Registration is essential for businesses that meet the prescribed turnover limit or engage in specified taxable activities. Our experts provide end-to-end assistance with documentation, application filing, and GST compliance so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Who Needs GST */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-6">
            Who Should Register for GST?
          </h2>

          <p className="text-lg text-secondary text-center max-w-2xl mx-auto mb-12">
            Whether GST registration is mandatory or voluntary, our team helps you choose the right registration option and ensures complete legal compliance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Mandatory Registration
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Businesses exceeding the prescribed turnover limit.</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Inter-state suppliers of goods or services.</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>E-commerce sellers and online marketplaces.</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Importers, exporters and specified service providers.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Voluntary Registration
              </h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Businesses below the turnover threshold.</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Claim Input Tax Credit (ITC).</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Work with GST-registered B2B clients.</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Improve business credibility and expansion opportunities.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Benefits of GST Registration
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GST_BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-smooth"
              >
                <div className="mb-4">{benefit.icon}</div>

                <h3 className="font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Documents Required for GST Registration
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GST_DOCUMENTS.map((doc, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-5 flex items-center gap-3 hover:border-primary transition-smooth"
              >
                <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our GST Registration Process
          </h2>

          <div className="space-y-6">
            {GST_PROCESS.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 pb-6 border-b border-border last:border-0"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Processing Time
              </h3>

              <p className="text-4xl font-bold text-primary mb-2">
                7–15 Days
              </p>

              <p className="text-muted-foreground">
                Complete application processing.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Government Fee
              </h3>

              <p className="text-4xl font-bold text-primary mb-2">
                ₹0
              </p>

              <p className="text-muted-foreground">
                GST registration is free of government charges.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Documentation
              </h3>

              <p className="text-4xl font-bold text-primary mb-2">
                Easy
              </p>

              <p className="text-muted-foreground">
                We help prepare and verify all required documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <FAQAccordion items={GST_FAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Get Your GST Registration Today"
        subtitle="Our GST experts handle the complete registration process—from documentation to GSTIN approval—ensuring a smooth and hassle-free experience."
        primaryCta={{
          text: "Apply for GST Registration",
          href: "/contact",
        }}
      />
    </MainLayout>
    </>
  )
}
