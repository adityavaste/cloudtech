'use client'
import { schemas } from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { CheckCircle, Utensils, Shield, FileText, Clock } from 'lucide-react'

const FSSAI_TYPES = [
  {
    title: 'Basic Registration',
    description: 'For businesses with turnover below 12 lakhs',
    duration: '1 week',
    cost: '₹500-1,000',
  },
  {
    title: 'State License',
    description: 'For businesses with turnover 12 lakhs - 20 crores',
    duration: '2 weeks',
    cost: '₹ 1,000-5,000',
  },
  {
    title: 'Central License',
    description: 'For businesses with turnover above 20 crores',
    duration: '3 weeks',
    cost: '₹5,000-10,000',
  },
]

const ELIGIBLE_BUSINESSES = [
  'Restaurants & Cafes',
  'Food Manufacturers',
  'Bakeries & Confectioneries',
  'Cloud Kitchens',
  'Food Delivery Services',
  'Home-based Food Business (HBFO)',
  'Dairy Products',
  'Packaged Food Products',
  'Spice Manufacturers',
  'Beverage Manufacturers',
]

const FSSAI_FAQ = [
  {
    question: 'Who requires FSSAI registration?',
    answer: 'Any business involved in manufacturing, processing, distribution, or selling food products requires FSSAI registration. This includes restaurants, food manufacturers, and food delivery businesses.',
  },
  {
    question: 'What are the three types of FSSAI licenses?',
    answer: 'Basic Registration (below 12 lakhs), State License (12 lakhs - 20 crores), and Central License (above 20 crores). We help determine which category applies to your business.',
  },
  {
    question: 'How long is FSSAI license valid?',
    answer: 'FSSAI licenses are valid for 3 years from the date of issue. We handle timely renewals to ensure continuous compliance.',
  },
  {
    question: 'What documents are required?',
    answer: 'PAN, Aadhar, property address proof, food safety plan, menu/product details, and premises photos. Full list provided during consultation.',
  },
  {
    question: 'Can I operate a cloud kitchen without FSSAI?',
    answer: 'No, FSSAI license is mandatory for all food businesses including cloud kitchens. We handle quick online registration for new food businesses.',
  },
]

export default function FSSAIPage() {
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
        title="FSSAI Registration & License"
        subtitle="Complete FSSAI licensing for food businesses. From basic registration to central license, we handle all documentation and compliance."
        primaryCta={{ text: 'Apply for FSSAI', href: '/contact' }}
        secondaryCta={{ text: 'Get License Type Advice', href: '/contact' }}
        backgroundGradient
      />

      {/* What is FSSAI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">What is FSSAI?</h2>
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            FSSAI (Food Safety and Standards Authority of India) is the government agency that regulates food safety in India. 
            FSSAI registration and licensing is mandatory for all food businesses to ensure food safety and consumer protection.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            FSSAI licensing demonstrates your commitment to food safety standards and compliance. It includes regular inspections, 
            hygiene standards, and quality control measures. We handle the complete licensing process for restaurants, manufacturers, 
            and food delivery services.
          </p>
        </div>
      </section>

      {/* License Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">FSSAI License Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FSSAI_TYPES.map((type, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth">
                <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-secondary mb-6 text-base leading-relaxed">{type.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-secondary">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{type.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-secondary">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{type.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Businesses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Food Businesses That Need FSSAI License</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ELIGIBLE_BUSINESSES.map((business, i) => (
              <div key={i} className="flex items-center gap-4 bg-section-light rounded-lg p-4 border border-border">
                <Utensils className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-secondary font-medium">{business}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Benefits of FSSAI License</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Legal Compliance</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Avoid penalties and business closure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Operate legally without fear</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Meet food delivery platforms requirements</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-border">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Business Benefits</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Increased customer trust and credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>List on food delivery apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Better bank loan prospects</span>
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
          <FAQAccordion items={FSSAI_FAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Get Your FSSAI License Today"
        subtitle="Don't operate your food business illegally. Get FSSAI license quickly and securely. Our experts handle everything."
        primaryCta={{ text: 'Apply for FSSAI License', href: '/contact' }}
      />
    </MainLayout>
    </>
  )
}
