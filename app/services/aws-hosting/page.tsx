import {
  awsHostingServiceSchema,
  awsHostingFAQSchema,
  awsHostingBreadcrumbSchema,
} from "./schema";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Cloud, Zap, Shield, TrendingUp, Lock, BarChart3 } from "lucide-react";

const AWS_SERVICES = [
  {
    title: "EC2 Compute",
    description:
      "Scalable virtual servers that automatically adjust resources based on demand.",
  },
  {
    title: "S3 Storage",
    description:
      "Secure, unlimited storage for your files, backups, and media content.",
  },
  {
    title: "CloudFront CDN",
    description:
      "Global content delivery network for lightning-fast page loads worldwide.",
  },
  {
    title: "RDS Databases",
    description:
      "Managed databases with automatic backups and high availability.",
  },
  {
    title: "Route53 DNS",
    description:
      "Reliable domain management and global routing for your websites.",
  },
  {
    title: "CloudWatch Monitoring",
    description:
      "Real-time monitoring and alerts to ensure your applications stay online.",
  },
];

const AWS_BENEFITS = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Auto-Scaling",
    description:
      "Automatically handle traffic spikes without manual intervention or downtime.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Enterprise Security",
    description:
      "Multi-layer security with encryption, firewalls, and compliance certifications.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Cost Effective",
    description:
      "Pay only for what you use with no upfront investments or long-term commitments.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Analytics",
    description:
      "Detailed insights into your application performance and user behavior.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "Global Infrastructure",
    description:
      "Deploy your application in multiple regions for low latency worldwide.",
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Disaster Recovery",
    description:
      "Automated backups and failover systems ensure business continuity.",
  },
];

const AWS_FAQ = [
  {
    question: "What is AWS and why should I use it?",
    answer:
      "AWS (Amazon Web Services) is the leading cloud platform providing servers, storage, and services. It's used by millions of businesses for reliability, scalability, and cost-effectiveness.",
  },
  {
    question: "How much does AWS hosting cost?",
    answer:
      "AWS pricing depends on usage. We help you choose the right setup to optimize costs. Most small to medium businesses pay $50-500 per month.",
  },
  {
    question: "Can you migrate my existing website to AWS?",
    answer:
      "Absolutely. We handle complete migration with zero downtime, ensuring your website works smoothly on AWS infrastructure.",
  },
  {
    question: "Do I need to manage AWS myself?",
    answer:
      "No. We manage everything for you - setup, monitoring, security, updates, and optimization. You just focus on your business.",
  },
  {
    question: "Is AWS secure?",
    answer:
      "Yes. AWS meets the highest security standards including ISO 27001, SOC 2, and PCI DSS compliance.",
  },
  {
    question: "What happens if there's a problem?",
    answer:
      "We provide 24/7 monitoring and support. Our team is alerted immediately to any issues and resolves them quickly.",
  },
];
export const metadata = {
  title: "AWS Cloud Hosting Services | Managed AWS Hosting | CloudTech",

  description:
    "Managed AWS cloud hosting services for businesses, startups, WordPress, and eCommerce websites. Secure, scalable, fast hosting with SSL, backups, CDN, migrations, and 24/7 support across India.",

  keywords: [
    "AWS Hosting",
    "Managed AWS Hosting",
    "AWS Cloud Hosting",
    "Amazon Web Services Hosting",
    "Website Hosting India",
    "Business Website Hosting",
    "Cloud Hosting",
    "Managed Cloud Hosting",
    "WordPress AWS Hosting",
    "AWS Server Management",
    "AWS Website Migration",
    "AWS Hosting Company",
    "Scalable Cloud Hosting",
    "High Performance Hosting",
    "CloudTech AWS Hosting",
  ],

  alternates: {
    canonical: "https://cloudtech.host/services/aws-hosting",
  },
};
export default function AWSHostingPage() {
  const servicesFeatures = AWS_SERVICES.map((service) => ({
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: service.title,
    description: service.description,
  }));

  const benefitsFeatures = AWS_BENEFITS.map((benefit) => ({
    icon: benefit.icon,
    title: benefit.title,
    description: benefit.description,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(awsHostingServiceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(awsHostingFAQSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(awsHostingBreadcrumbSchema),
        }}
      />
      <MainLayout>
        {/* Hero */}
        <Hero
          title="AWS Cloud Hosting for Enterprise Performance"
          subtitle="Reliable, scalable cloud infrastructure powered by Amazon Web Services. Deploy your website with confidence, knowing it will handle any amount of traffic."
          primaryCta={{ text: "Discuss Your Hosting Needs", href: "https://docs.google.com/forms/d/e/1FAIpQLSeuC3NADjP4kI5kpny984oVgqlD91-teQBfhfiCTB8wwSrnmw/viewform?usp=publish-editor",external: true,
           
           }}
          
          
          backgroundGradient
          
        />

        {/* What is AWS */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-5 sm:mb-6 text-balance">
      What is AWS?
    </h2>

    <p className="text-base sm:text-lg text-muted-foreground text-center leading-7 sm:leading-8 mb-5 sm:mb-6">
      AWS is Amazon&apos;s cloud platform used by millions of
      businesses, from startups to Fortune 500 companies. Instead of
      buying expensive servers, you rent computing power on demand.
    </p>

    <p className="text-base sm:text-lg text-muted-foreground text-center leading-7 sm:leading-8">
      Think of it like electricity - you only pay for what you use. When
      your website gets more visitors, AWS automatically provides more
      resources. When traffic decreases, you pay less.
    </p>
  </div>
</section>

{/* AWS Services Explained */}
<div className="px-5 sm:px-6 lg:px-8">
  <FeatureGrid
    title="Core AWS Services We Use"
    subtitle="Simple explanations of the AWS services powering your business"
    features={servicesFeatures}
    columns={3}
  />
</div>

{/* Why AWS */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 gradient-subtle">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-balance">
      Why Choose AWS?
    </h2>

    <p className="text-center text-base sm:text-lg text-muted-foreground leading-7 sm:leading-8 mb-10 sm:mb-12 max-w-3xl mx-auto">
      AWS is the #1 choice for businesses of all sizes because it&apos;s
      reliable, secure, and affordable.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {benefitsFeatures.map((benefit, i) => (
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
</section>{/* AWS vs Traditional Hosting */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-card">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 text-balance">
      AWS vs Traditional Hosting
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-5 text-red-600">
          Traditional Hosting Issues
        </h3>

        <ul className="space-y-4">
          {[
            "Fixed resources - can't scale quickly",
            "Website crashes during traffic spikes",
            "Slow performance during peak hours",
            "Limited security features",
            "Difficult migrations and upgrades",
            "Long-term contracts and commitments",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-red-600 mt-0.5">✗</span>
              <span className="text-sm sm:text-base text-muted-foreground leading-6">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-5 text-green-600">
          AWS Advantages
        </h3>

        <ul className="space-y-4">
          {[
            "Auto-scaling - resources grow with demand",
            "Never goes down from traffic",
            "Lightning-fast performance always",
            "Enterprise-grade security included",
            "Easy migrations and upgrades",
            "Pay only for what you use",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-green-600 mt-0.5">✓</span>
              <span className="text-sm sm:text-base text-foreground leading-6">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Our AWS Setup */}
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 text-balance">
      How We Set Up AWS For You
    </h2>

    <div className="space-y-6">
      {[
        {
          title: "Assessment",
          desc: "We analyze your application needs to design the optimal AWS architecture.",
        },
        {
          title: "Setup",
          desc: "Configure servers, databases, storage, and security with best practices.",
        },
        {
          title: "Migration",
          desc: "Move your website to AWS with zero downtime.",
        },
        {
          title: "Optimization",
          desc: "Fine-tune performance and costs for your specific needs.",
        },
        {
          title: "Monitoring",
          desc: "Continuous monitoring with 24/7 alerts and support.",
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
<section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 gradient-subtle">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 text-balance">
      AWS Hosting FAQ
    </h2>

    <FAQAccordion items={AWS_FAQ} />
  </div>
</section>

{/* CTA */}
<div className="px-5 sm:px-6 lg:px-8">
  <CTASection
    title="Ready to Move to AWS?"
    subtitle="Let us handle the technical details. Get enterprise-grade hosting at a fraction of the cost."
    primaryCta={{
      text: "Talk to Our Technical Team",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeuC3NADjP4kI5kpny984oVgqlD91-teQBfhfiCTB8wwSrnmw/viewform?usp=publish-editor",
      external: true,
    }}
  />
</div>
      </MainLayout>
    </>
  );
}
