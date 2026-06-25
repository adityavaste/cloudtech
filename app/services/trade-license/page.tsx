import {
  tradeLicenseServiceSchema,
  tradeLicenseFAQSchema,
  tradeLicenseBreadcrumbSchema,
} from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CheckCircle, Building, Clock, FileText } from 'lucide-react'

const TRADE_LICENSE_FAQ = [
  {
    question: 'What is a Trade License?',
    answer: 'A Trade License is a municipal permit that authorizes a business to legally operate in a specific location. It is issued by the Municipal Corporation for shops, establishments, and businesses within their jurisdiction.',
  },
  {
    question: 'Who needs Trade License?',
    answer: 'Any business engaged in trade or business activities, including shops, offices, restaurants, warehouses, and commercial establishments require Trade License.',
  },
  {
    question: 'How do I obtain Trade License?',
    answer: 'Trade License is obtained from your municipal corporation. You apply with property documents, ownership proof, and business details. Processing typically takes 2-4 weeks.',
  },
  {
    question: 'What are the benefits?',
    answer: 'Legal authorization to operate, better credibility, eligibility for government contracts, loans, and professional standing in your business community.',
  },
  {
    question: 'Is renewal required?',
    answer: 'Yes, Trade License needs annual renewal. We provide renewal support to ensure you maintain continuous legal operation.',
  },
]
export const metadata = {
  title: "Trade License Registration Online | Trade License Renewal | CloudTech",

  description:
    "Apply for Trade License registration and renewal online with CloudTech. Expert assistance for shops, restaurants, offices, manufacturers, and businesses across India.",

  keywords: [
    "Trade License",
    "Trade License Registration",
    "Trade License Renewal",
    "Municipal Trade License",
    "Business License",
    "Shop Trade License",
    "Restaurant Trade License",
    "Trade License Online",
    "Trade License India",
    "Trade License Consultant",
    "Commercial License",
    "Business Registration",
    "CloudTech Trade License",
  ],
};
export default function TradeLicensePage() {
  return (
    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(tradeLicenseServiceSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(tradeLicenseFAQSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(tradeLicenseBreadcrumbSchema),
    }}
  />
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Trade License Registration"
        subtitle="Get your municipal Trade License quickly. Legal authorization for your business with full compliance support."
        primaryCta={{ text: 'Apply for Trade License', href: '/contact' }}
        secondaryCta={{ text: 'Check Eligibility', href: '/contact' }}
        backgroundGradient
      />{/* What is Trade License */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">
      What is Trade License?
    </h2>

    <p className="text-base sm:text-lg text-secondary mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
      A Trade License (or Business License) is a mandatory municipal certificate that authorizes a business to legally operate from 
      a specific location. It is issued by the Municipal Corporation or Local Authority based on the type of business and compliance 
      with local regulations.
    </p>

    <p className="text-base sm:text-lg text-secondary leading-relaxed">
      Trade License demonstrates that your business operates within municipal guidelines and complies with local zoning, sanitation, 
      and safety regulations. It's essential for credibility and legal operation.
    </p>
  </div>
</section>

{/* Eligibility */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-10 lg:mb-12">
      Who Needs Trade License?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
      {[
        'Retail Shops',
        'Warehouses',
        'Commercial Offices',
        'Restaurants & Cafes',
        'Manufacturing Units',
        'Service Centers',
        'Medical Clinics',
        'Educational Institutes',
        'Entertainment Centers',
        'Event Halls',
        'Petrol Pumps',
        'Hotels & Lodges',
      ].map((type, i) => (
        <div
          key={i}
          className="flex items-center gap-3 sm:gap-4 bg-white rounded-lg p-3 sm:p-4 border border-border"
        >
          <Building className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span className="text-sm sm:text-base text-secondary font-medium">
            {type}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Process & Requirements */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-10 lg:mb-12">
      Trade License Process
    </h2>

    <div className="space-y-5 sm:space-y-6">
      {[
        { step: 1, title: 'Document Preparation', desc: 'Collect property papers, ownership proof, and business details.' },
        { step: 2, title: 'Municipal Application', desc: 'Submit application to municipal corporation with fee and documents.' },
        { step: 3, title: 'Verification & Inspection', desc: 'Municipal officials inspect your business premises.' },
        { step: 4, title: 'License Approval', desc: 'Receive Trade License certificate upon approval.' },
      ].map((item) => (
        <div
          key={item.step}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-border last:border-0"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-base sm:text-lg">
            {item.step}
          </div>

          <div className="flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-secondary leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Benefits */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-10 lg:mb-12">
      Benefits of Trade License
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
      <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-border">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
          Legal Benefits
        </h3>

        <ul className="space-y-2 sm:space-y-3 text-secondary">
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Legal authorization to operate</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Protection against sealing/closure</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Compliance with local regulations</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-border">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
          Business Benefits
        </h3>

        <ul className="space-y-2 sm:space-y-3 text-secondary">
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Enhanced business credibility</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Eligibility for government tenders</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base">Easier loan approval from banks</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Timeline */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-blue-light">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
    
    <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-border text-center">
      <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
        Processing Time
      </h3>
      <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        2-4 Weeks
      </p>
      <p className="text-sm sm:text-base text-secondary">
        From application to license receipt
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-border text-center">
      <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
        Renewal
      </h3>
      <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        Annual
      </p>
      <p className="text-sm sm:text-base text-secondary">
        We handle timely renewals
      </p>
    </div>

  </div>
</section>

{/* FAQ */}
<section className="py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12 sm:mb-14 lg:mb-16">
      Frequently Asked Questions
    </h2>

    <FAQAccordion items={TRADE_LICENSE_FAQ} />
  </div>
</section>

{/* CTA */}
<CTASection
  title="Get Your Trade License Today"
  subtitle="Authorize your business legally. Apply for Trade License with our complete documentation and municipal coordination support."
  primaryCta={{ text: 'Start Application', href: '/contact' }}
/>
    </MainLayout>
    </>
  )
}
