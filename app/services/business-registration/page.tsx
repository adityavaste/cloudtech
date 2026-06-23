import {
  businessRegistrationServiceSchema,
  businessRegistrationFAQSchema,
  businessRegistrationBreadcrumbSchema,
} from "./schema";
import Link from 'next/link'
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { ServiceCard } from '@/components/ui/service-card'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { BUSINESS_SERVICES } from '@/lib/constants'
import { CheckCircle, Clock, Shield, FileText, Briefcase, TrendingUp } from 'lucide-react'

const REGISTRATION_BENEFITS = [
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: 'Legal Compliance',
    description: 'Ensure your business operates legally with proper registrations and licenses.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: 'Access to Benefits',
    description: 'Unlock government benefits, subsidies, and financial support programs.',
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Protection',
    description: 'Legal protection for your business name and operations.',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: 'Save Time',
    description: 'Our experts handle all paperwork and compliance requirements.',
  },
]

const REGISTRATION_FAQ = [
  {
    question: 'What registration types do you offer?',
    answer: 'We handle all major registration types including Shop Act, Udyam, FSSAI, GST, IEC, Trade License, Professional Tax, DSC, and annual compliance filings.',
  },
  {
    question: 'How long does the registration process take?',
    answer: 'Most registrations are completed within 2-4 weeks depending on the type and documentation.',
  },
  {
    question: 'What documents do I need?',
    answer: 'Required documents vary by registration type. We provide a complete checklist during consultation.',
  },
  {
    question: 'Do you handle renewals?',
    answer: 'Yes, we provide complete renewal services to ensure your licenses and registrations stay current.',
  },
  {
    question: 'Can you help with compliance?',
    answer: 'Absolutely. We handle annual compliance, tax filings, and ongoing regulatory requirements.',
  },
  {
    question: 'What if my application gets rejected?',
    answer: 'We handle resubmission and corrections at no additional cost until your registration is approved.',
  },
]

  export const metadata = {
  title: "Business Registration Services in India | LLP, Pvt Ltd, GST, MSME | CloudTech",
  description:
    "Register your business online with CloudTech. We offer Private Limited Company, LLP, Partnership, Sole Proprietorship, GST, Udyam, IEC, FSSAI, Startup India, and compliance services across India.",

  keywords: [
    "Business Registration",
    "Company Registration",
    "Private Limited Company Registration",
    "LLP Registration",
    "Partnership Firm Registration",
    "Sole Proprietorship Registration",
    "OPC Registration",
    "Startup India Registration",
    "MSME Registration",
    "Udyam Registration",
    "GST Registration",
    "IEC Registration",
    "FSSAI Registration",
    "Business Compliance",
    "Online Business Registration",
    "CloudTech",
  ],
};

export default function BusinessRegistrationPage() {
  const serviceFeatures = BUSINESS_SERVICES.map((service) => ({
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: service.title,
    description: service.description,
  }))

  const dedicatedServices = [
    { name: 'GST Registration', href: '/services/gst', desc: 'Get GSTIN and manage tax compliance' },
    { name: 'Udyam Registration', href: '/services/udyam', desc: 'MSME registration with government benefits' },
    { name: 'FSSAI License', href: '/services/fssai', desc: 'Food business licensing and compliance' },
    { name: 'Shop Act Registration', href: '/services/shop-act', desc: 'Retail shop and commercial license' },
    { name: 'IEC Registration', href: '/services/iec', desc: 'Import-export code for global trade' },
    { name: 'Trade License', href: '/services/trade-license', desc: 'Municipal business authorization' },
    { name: 'Professional Tax', href: '/services/professional-tax', desc: 'Employer tax registration and compliance' },
    { name: 'Digital Signature', href: '/services/dsc', desc: 'DSC for government e-transactions' },
  ]
  return (
    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(businessRegistrationServiceSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(businessRegistrationFAQSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(businessRegistrationBreadcrumbSchema),
    }}
  />
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Business Registration & Compliance Services"
        subtitle="Complete, hassle-free business registration and ongoing compliance management to help you start and grow legally."
        primaryCta={{ text: 'Get Registration Help', href: "https://wa.me/917350247244?text=Hello%20%F0%9F%91%8B%20Team%2C%20I%20need%20assistance%20with%20a%20registration%20process."}}
        backgroundGradient
      />
{/* Overview */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-4xl mx-auto">
    <p className="text-base sm:text-lg text-secondary text-center leading-7 sm:leading-8 mb-8">
      Starting a business involves navigating complex legal requirements. Our team of experts handles all registration types, compliance requirements, and renewals so you can focus on growing your business.
    </p>
  </div>
</section>

{/* Dedicated Services Section */}
<section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 bg-section-alt">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 sm:mb-6 text-center">
      Our Registration Services
    </h2>

    <p className="text-base sm:text-lg text-secondary text-center leading-7 sm:leading-8 mb-10 sm:mb-12 max-w-2xl mx-auto">
      Expert guidance for all business registration types. Each service has dedicated specialists to ensure smooth, compliant registration.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {dedicatedServices.map((service, i) => (
        <Link key={i} href={service.href}>
          <div className="h-full bg-white rounded-xl p-5 sm:p-6 border border-border hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth hover:-translate-y-1 cursor-pointer">
            <Briefcase className="w-8 h-8 text-primary mb-4" />

            <h3 className="text-lg font-bold text-foreground mb-2">
              {service.name}
            </h3>

            <p className="text-secondary text-sm sm:text-base leading-6">
              {service.desc}
            </p>

            <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-1">
              Learn more <span>→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* Benefits Section */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 gradient-subtle">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 text-balance">
      Why Register Your Business?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {REGISTRATION_BENEFITS.map((benefit, i) => (
        <div
          key={i}
          className="bg-card border border-border rounded-lg p-5 sm:p-6 hover:border-primary transition-smooth"
        >
          <div className="mb-4">{benefit.icon}</div>

          <h3 className="text-lg font-semibold text-foreground mb-2">
            {benefit.title}
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground leading-6">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Process Section */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-card">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 text-balance">
      Our Simple Process
    </h2>

    <div className="space-y-6">
      {[
        {
          title: "Consultation",
          desc: "We review your business type and recommend appropriate registrations.",
        },
        {
          title: "Documentation",
          desc: "We help you gather all required documents and information.",
        },
        {
          title: "Filing",
          desc: "Our experts prepare and file all applications with authorities.",
        },
        {
          title: "Follow-up",
          desc: "We handle all correspondence and approvals.",
        },
        {
          title: "Delivery",
          desc: "You receive all certificates and documents in hand.",
        },
      ].map((step, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-border last:border-0"
        >
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
            {i + 1}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {step.title}
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-7">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 text-balance">
      Frequently Asked Questions
    </h2>

    <FAQAccordion items={REGISTRATION_FAQ} />
  </div>
</section>

{/* CTA */}
<div className="px-5 sm:px-6 lg:px-8">
  <CTASection
    title="Get Your Business Registered Today"
    subtitle="Schedule a free consultation with our registration experts to discuss your business needs."
    primaryCta={{
      text: "Book Consultation",
      href: "/contact",
    }}
  />
</div>
    </MainLayout>
    </>
  )
}
