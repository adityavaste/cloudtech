

import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CheckCircle, Lock, FileText, Clock, Smartphone } from 'lucide-react'
import {
  digitalSignatureCertificateSchema,
  dscFAQSchema,
  dscBreadcrumbSchema,
} from "./schema";

const DSC_TYPES = [
  {
    title: 'Class 2 DSC',
    description: 'For individual professionals and businesses',
    uses: 'GST filing, Income tax returns, Company forms',
    cost: '₹2,000-3,000',
  },
  {
    title: 'Class 3 DSC',
    description: 'For authorized signatories and directors',
    uses: 'Company registration, Legal documents, Tender participation',
    cost: '₹5,000-8,000',
  },
  {
    title: 'Token USB',
    description: 'Hardware-based digital signature',
    uses: 'High-security government documents',
    cost: '₹4,000-6,000',
  },
]

const DSC_FAQ = [
  {
    question: 'What is a Digital Signature Certificate (DSC)?',
    answer: 'DSC is a digital equivalent of a physical signature that provides legal authenticity to online documents. It is issued by a Certifying Authority and is recognized by Indian law.',
  },
  {
    question: 'What are the types of DSC?',
    answer: 'There are Class 2 DSC (for individuals), Class 3 DSC (for authorized signatories), and Token-based DSC. Each serves different purposes and has different validity periods.',
  },
  {
    question: 'Who needs DSC?',
    answer: 'Businesses, professionals, company directors, and anyone filing digital documents with government portals like GST, Income Tax, or MCA requires DSC.',
  },
  {
    question: 'How long is DSC valid?',
    answer: 'DSC is typically valid for 2 years from issuance. We help with timely renewal to ensure continuous digital signing capability.',
  },
  {
    question: 'What are the DSC uses?',
    answer: 'Digital document signing, GST e-invoicing, Income tax filing, Company forms, Tender documents, MCA filings, and any government e-portal transactions.',
  },
  {
    question: 'How is DSC obtained?',
    answer: 'We guide you through the process of obtaining DSC from authorized Certifying Authorities. Process includes identity verification and document submission.',
  },
]

export const metadata = {
  title: "Digital Signature Certificate (DSC) Registration Online | CloudTech",
  description:
    "Apply for Class 3 Digital Signature Certificate (DSC) online. Fast approval for MCA, GST, Income Tax, DGFT, ICEGATE, eTender, and business compliance across India.",

  keywords: [
    "Digital Signature Certificate",
    "DSC Registration",
    "Class 3 DSC",
    "Buy DSC Online",
    "DSC for Company Director",
    "DSC for GST",
    "MCA DSC",
    "Income Tax DSC",
    "ICEGATE DSC",
    "DGFT DSC",
    "eTender DSC",
    "Digital Signature India",
    "CloudTech DSC",
  ],
};

export default function DSCPage() {
  return (

    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(digitalSignatureCertificateSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(dscFAQSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(dscBreadcrumbSchema),
    }}
  />

  
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Digital Signature Certificate (DSC) Services"
        subtitle="Get your Digital Signature Certificate quickly. Support for all government portals including GST, Income Tax, and MCA."
        primaryCta={{ text: 'Apply for DSC', href: '/contact' }}
        secondaryCta={{ text: 'Choose DSC Type', href: '/contact' }}
        backgroundGradient
      />
{/* What is DSC */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
      What is Digital Signature Certificate (DSC)?
    </h2>

    <p className="text-base sm:text-lg text-secondary leading-7 sm:leading-8 mb-6">
      A Digital Signature Certificate (DSC) is a digital credential that
      authenticates electronic documents and transactions. It is the digital
      equivalent of a handwritten signature and has legal validity under the
      Information Technology Act, 2000.
    </p>

    <p className="text-base sm:text-lg text-secondary leading-7 sm:leading-8">
      DSC is issued by Certifying Authorities (CAs) and contains cryptographic
      information that proves the identity and authenticity of the signer. It is
      used for online transactions with government portals, filing returns, and
      signing digital documents.
    </p>
  </div>
</section>

{/* DSC Types */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-section-alt">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-10 sm:mb-12">
      Types of Digital Signature Certificates
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {DSC_TYPES.map((type, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 sm:p-8 border border-border hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth"
        >
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
            {type.title}
          </h3>

          <p className="text-secondary text-sm sm:text-base leading-6 mb-6">
            {type.description}
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">
                Uses:
              </p>
              <p className="text-secondary text-sm leading-6">
                {type.uses}
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xl font-bold text-primary">{type.cost}</p>
              <p className="text-secondary text-sm">2-year validity</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Uses of DSC */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-10 sm:mb-12">
      Uses of Digital Signature Certificate
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <div className="bg-section-light rounded-xl p-6 sm:p-8 border border-border">
        <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />

        <h3 className="text-xl font-bold text-foreground mb-6">
          Government Transactions
        </h3>

        <ul className="space-y-3 text-secondary">
          {[
            "GST e-invoicing and filing",
            "Income Tax Return filing",
            "MCA (Company) filings",
            "Ministry tender participation",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-section-light rounded-xl p-6 sm:p-8 border border-border">
        <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />

        <h3 className="text-xl font-bold text-foreground mb-6">
          Business Benefits
        </h3>

        <ul className="space-y-3 text-secondary">
          {[
            "Secure document signing",
            "Legal validity of documents",
            "Non-repudiation of transactions",
            "Compliance with regulations",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Requirements & Process */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-section-alt">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-10 sm:mb-12">
      DSC Application Process
    </h2>

    <div className="space-y-6">
      {[
        {
          step: 1,
          title: "Document Preparation",
          desc: "Gather PAN, Aadhar, and business verification documents.",
        },
        {
          step: 2,
          title: "Certifying Authority Selection",
          desc: "We help select the appropriate Certifying Authority based on your needs.",
        },
        {
          step: 3,
          title: "Online Application",
          desc: "Submit DSC application with complete documentation.",
        },
        {
          step: 4,
          title: "Identity Verification",
          desc: "CA verifies your identity through video call or in-person.",
        },
        {
          step: 5,
          title: "DSC Issuance",
          desc: "Receive your Digital Signature Certificate within 1-3 days.",
        },
      ].map((item) => (
        <div
          key={item.step}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 border-b border-border last:border-0"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-base sm:text-lg">
            {item.step}
          </div>

          <div className="flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              {item.title}
            </h3>

            <p className="text-secondary text-sm sm:text-base leading-7">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Quick Info */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-gradient-blue-light">
  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    <div className="bg-white rounded-xl p-6 sm:p-8 border border-border text-center">
      <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />

      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
        Processing Time
      </h3>

      <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        1-3 Days
      </p>

      <p className="text-sm sm:text-base text-secondary">
        Quick online issuance
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 sm:p-8 border border-border text-center">
      <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />

      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
        Validity Period
      </h3>

      <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        2 Years
      </p>

      <p className="text-sm sm:text-base text-secondary">
        Valid for all transactions
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 sm:p-8 border border-border text-center">
      <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />

      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
        Security
      </h3>

      <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        256-bit
      </p>

      <p className="text-sm sm:text-base text-secondary">
        Government standard encryption
      </p>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-foreground mb-10 sm:mb-12">
      Frequently Asked Questions
    </h2>

    <FAQAccordion items={DSC_FAQ} />
  </div>
</section>

{/* CTA */}
<div className="px-5 sm:px-6 lg:px-8">
  <CTASection
    title="Get Your Digital Signature Certificate Today"
    subtitle="Secure your digital transactions with a government-recognized Digital Signature Certificate. Quick processing, trusted security."
    primaryCta={{
      text: "Apply for DSC",
      href: "/contact",
    }}
  />
</div>
    </MainLayout>
    </>
  )
}
