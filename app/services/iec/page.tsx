import {
  iecServiceSchema,
  iecFAQSchema,
  iecBreadcrumbSchema,
} from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CheckCircle, Globe, TrendingUp, FileText } from 'lucide-react'

const IEC_BENEFITS = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: 'Global Trade Access',
    description: 'Import and export goods legally with government authorization.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: 'Export Promotion',
    description: 'Access government export schemes and international business opportunities.',
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: 'Legal Documentation',
    description: 'Get international shipping documents and customs clearance support.',
  },
]

const IEC_FAQ = [
  {
    question: 'What is an IEC (Import Export Code)?',
    answer: 'IEC is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT) that allows businesses to legally import and export goods from India.',
  },
  {
    question: 'Who needs an IEC?',
    answer: 'Any individual or organization involved in import/export of goods. This includes traders, manufacturers, exporters, and e-commerce businesses.',
  },
  {
    question: 'How is IEC obtained?',
    answer: 'IEC is obtained from DGFT online portal. We handle the complete documentation and filing process. Registration is free and takes 1-2 weeks.',
  },
  {
    question: 'What documents are required?',
    answer: 'PAN, business address proof, bank account details, and business details. For partnerships, partnership deed is needed. We provide complete document list.',
  },
  {
    question: 'Can I export through e-commerce with IEC?',
    answer: 'Yes, e-commerce businesses exporting through platforms can use IEC for international shipments and customs documentation.',
  },
]
export const metadata = {
  title: "IEC Registration Online | Import Export Code Registration | CloudTech",
  description:
    "Apply for Import Export Code (IEC) Registration online with CloudTech. Fast DGFT IEC certificate registration for exporters, importers, startups, MSMEs, LLPs, and companies across India.",

  keywords: [
    "IEC Registration",
    "Import Export Code",
    "DGFT IEC",
    "IEC Certificate",
    "Import License India",
    "Export License India",
    "IEC Registration Online",
    "Import Export Registration",
    "DGFT Registration",
    "IEC for Company",
    "IEC for LLP",
    "IEC for Startup",
    "CloudTech IEC Registration",
  ],
};
export default function IECPage() {
  return (

    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(iecServiceSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(iecFAQSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(iecBreadcrumbSchema),
    }}
  />
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Import Export Code (IEC) Registration"
        subtitle="Get your IEC from DGFT and start importing or exporting goods legally. Complete documentation support included."
        primaryCta={{ text: 'Apply for IEC', href: '/contact' }}
        secondaryCta={{ text: 'Understand IEC Process', href: '/contact' }}
        backgroundGradient
      />
{/* Overview */}
<section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-4xl mx-auto">
    <p className="text-base sm:text-lg text-secondary text-center mb-8 leading-relaxed">
      An Import Export Code (IEC) is a mandatory business identification
      number required for importing or exporting goods and services from
      India. Our experts simplify the complete DGFT registration process,
      ensuring quick approval and hassle-free documentation.
    </p>
  </div>
</section>

{/* Who Needs IEC */}
<section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-6">
      Who Needs an IEC?
    </h2>

    <p className="text-base sm:text-lg text-secondary text-center max-w-2xl mx-auto mb-10 sm:mb-12">
      Any business or individual involved in international trade should
      obtain an IEC before importing or exporting goods and services.
    </p>

    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-border hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Exporters
        </h3>

        <ul className="space-y-4">
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Manufacturers exporting products overseas.</span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Merchant exporters and trading businesses.</span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span>E-commerce businesses selling internationally.</span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Service providers receiving foreign payments.</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 sm:p-8 border border-border hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Importers
        </h3>

        <ul className="space-y-4">
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Businesses importing raw materials.</span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Retailers sourcing products globally.</span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span>E-commerce import businesses.</span>
          </li>

          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Companies importing machinery and equipment.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Benefits of IEC</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {IEC_BENEFITS.map((benefit, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-8 hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth hover:-translate-y-1">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-secondary text-base leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">IEC Registration Process</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: 'Eligibility Check', desc: 'We verify your business eligibility for IEC registration.' },
              { step: 2, title: 'Document Collection', desc: 'Gather PAN, business address proof, and bank details.' },
              { step: 3, title: 'Online Application', desc: 'Submit application to DGFT portal with all documentation.' },
              { step: 4, title: 'Approval & IEC Code', desc: 'Receive your unique 10-digit IEC code within 1-2 weeks.' },
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

  
{/* FAQ */}
<section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
      Frequently Asked Questions
    </h2>

    <FAQAccordion items={IEC_FAQ} />
  </div>
</section>

{/* CTA */}
<CTASection
  title="Get Your Import Export Code Today"
  subtitle="Expand your business globally with a hassle-free IEC registration. Our experts manage the complete DGFT application process from start to finish."
  primaryCta={{
    text: "Apply for IEC",
    href: "/contact",
  }}
/>
    </MainLayout>
    </>
  )
}
