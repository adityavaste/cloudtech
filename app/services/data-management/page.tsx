import {
  dataManagementServiceSchema,
  dataManagementFAQSchema,
  dataManagementBreadcrumbSchema,
} from "./schema";

import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { Database, Lock, Shield, Archive, CheckCircle, Clock } from 'lucide-react'

const DATA_SERVICES = [
  {
    title: 'Customer Data Management',
    description: 'Organize and secure all your customer information in one centralized, accessible system.',
  },
  {
    title: 'Product Data',
    description: 'Maintain accurate inventory and product information across all channels.',
  },
  {
    title: 'Database Administration',
    description: 'Professional management of your databases including optimization and maintenance.',
  },
  {
    title: 'Secure Storage',
    description: 'Cloud-based storage with encryption and access controls for sensitive data.',
  },
  {
    title: 'Automated Backups',
    description: 'Regular, automated backups ensuring you never lose important business data.',
  },
  {
    title: 'Disaster Recovery',
    description: 'Systems in place to restore your data quickly if something goes wrong.',
  },
  {
    title: 'Compliance & Audit',
    description: 'Maintain compliance with data protection regulations and industry standards.',
  },
  {
    title: 'Document Management',
    description: 'Organize, archive, and retrieve business documents efficiently and securely.',
  },
]

const SECURITY_FEATURES = [
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: 'Encryption',
    description: 'Military-grade encryption for data at rest and in transit.',
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Access Control',
    description: 'Role-based permissions and multi-factor authentication.',
  },
  {
    icon: <Archive className="w-6 h-6 text-primary" />,
    title: 'Redundancy',
    description: 'Data stored in multiple locations for protection against loss.',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: 'Monitoring',
    description: '24/7 monitoring for unauthorized access and suspicious activity.',
  },
]

const DATA_FAQ = [
  {
    question: 'Why is data management important for my business?',
    answer: 'Proper data management ensures you have quick access to critical information, reduces errors, maintains compliance, and protects against data loss which could be catastrophic.',
  },
  {
    question: 'How do you ensure my data is secure?',
    answer: 'We use enterprise-grade encryption, multi-layer security, regular backups, and 24/7 monitoring. We follow all industry compliance standards.',
  },
  {
    question: 'What if I lose my data?',
    answer: 'Our automated backup systems ensure you can recover data within hours. We maintain multiple backup copies in secure locations.',
  },
  {
    question: 'Can I access my data from anywhere?',
    answer: 'Yes. Our cloud-based system allows secure access from anywhere with internet connection and proper authentication.',
  },
  {
    question: 'Do you handle data migration?',
    answer: 'Absolutely. We safely migrate data from your old systems to the new secure infrastructure with zero data loss.',
  },
  {
    question: 'What compliance standards do you follow?',
    answer: 'We comply with GDPR, CCPA, ISO 27001, and other relevant data protection regulations depending on your industry.',
  },
]

export const metadata = {
  title: "Business Data Management Services | Secure Document Management | CloudTech",
  description:
    "Professional business data management services including document organization, cloud storage, digital record management, compliance documents, backups, and secure business data solutions across India.",

  keywords: [
    "Data Management Services",
    "Business Data Management",
    "Document Management",
    "Digital Record Management",
    "Cloud Document Storage",
    "Business Document Storage",
    "Compliance Document Management",
    "Business Data Backup",
    "Document Organization",
    "CloudTech Data Management",
  ],
};

export default function DataManagementPage() {
  const servicesFeatures = DATA_SERVICES.map((service) => ({
    icon: <Database className="w-6 h-6 text-primary" />,
    title: service.title,
    description: service.description,
  }))

  return (
    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(dataManagementServiceSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(dataManagementFAQSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(dataManagementBreadcrumbSchema),
    }}
  />
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Secure Business Data Management"
        subtitle="Protect, organize, and manage all your business-critical data with enterprise-grade security and compliance."
        primaryCta={{ text: 'Secure Your Data', href: '/contact' }}
        backgroundGradient
      />

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Your business data is your most valuable asset. Lost or compromised data can destroy your business. We provide comprehensive data management solutions to keep your information safe, organized, and accessible.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: '99.99%', label: 'Data Availability' },
              { number: '24/7', label: 'Monitoring' },
              { number: '0 Loss', label: 'Track Record' },
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <FeatureGrid
        title="Data Management Services"
        subtitle="Complete solutions for all your data management needs"
        features={servicesFeatures}
        columns={4}
      />

      {/* Security & Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-balance">
            Enterprise Security & Compliance
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Your data is protected with multiple layers of security and compliance with industry standards.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_FEATURES.map((feature, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-smooth">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Our Data Management Process
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Assessment', desc: 'We audit your current data systems and identify gaps in security and organization.' },
              { title: 'Planning', desc: 'Design a comprehensive data management strategy tailored to your business.' },
              { title: 'Migration', desc: 'Securely move your data to our managed infrastructure with validation.' },
              { title: 'Setup', desc: 'Configure access controls, backups, monitoring, and compliance systems.' },
              { title: 'Training', desc: 'Teach your team how to properly manage and access the data.' },
              { title: 'Support', desc: 'Ongoing monitoring, backups, and support to keep everything running smoothly.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 pb-6 border-b border-border last:border-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Backup & Recovery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
                Never Lose Your Data
              </h2>
              <ul className="space-y-4">
                {[
                  'Automated daily backups',
                  'Multiple backup locations',
                  'Quick recovery capabilities',
                  'Disaster recovery plans',
                  'Regular backup testing',
                  'Compliance documentation',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-blue rounded-lg h-64 flex items-center justify-center">
              <Archive className="w-24 h-24 text-white opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            Data Management FAQ
          </h2>
          <FAQAccordion items={DATA_FAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Protect Your Business Data Today"
        subtitle="Schedule a free data security assessment and learn how we can safeguard your information."
        primaryCta={{ text: 'Get Free Assessment', href: '/contact' }}
      />
    </MainLayout>
    </>
  )
}
