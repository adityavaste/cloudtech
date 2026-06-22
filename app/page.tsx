import { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTASection } from "@/components/sections/cta-section";
import { ServiceCard } from "@/components/ui/service-card";
import { PricingCard } from "@/components/ui/pricing-card";
import { Testimonial } from "@/components/ui/testimonial";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  SERVICES,
  WHY_CHOOSE_US,
  BUSINESS_SERVICES,
  AWS_BENEFITS,
  HOW_WE_WORK,
  TESTIMONIALS,
  PRICING_PLANS,
  FAQ_ITEMS,
  PORTFOLIO_ITEMS,
} from "@/lib/constants";
import {
  Zap,
  Users,
  Shield,
  TrendingUp,
  Briefcase,
  CheckCircle,
  Cloud,
  Lock,
  Eye,
  BarChart3,
  Globe,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudtech.host"),

  title: "AWS Website Development & Business Registration Services",

  description:
    "Professional AWS website development, secure cloud hosting, GST registration, Shop Act, Udyam, IEC, MSME registration and complete business compliance services for startups and small businesses.",

  keywords: [
    "AWS website development",
    "AWS hosting",
    "cloud hosting",
    "website development",
    "small business website",
    "business website",
    "website maintenance",
    "GST registration",
    "Shop Act registration",
    "Shop Establishment License",
    "Udyam registration",
    "MSME registration",
    "IEC registration",
    "Import Export Code",
    "business registration",
    "startup registration",
    "business compliance",
    "digital business services",
    "website and business services",
    "India",
  ],

  openGraph: {
    title: "AWS Website Development & Business Registration Services",
    description:
      "Build your business online with professional websites, AWS cloud hosting, GST, Shop Act, Udyam and IEC registration services.",
    url: "https://cloudtech.host",
    siteName: "Your Company Name",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AWS Website Development & Business Registration",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://cloudtech.host",
  },
};

export default function HomePage() {
  const whyChooseFeatures = WHY_CHOOSE_US.map((item) => ({
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: item.title,
    description: item.description,
  }));

  const businessServicesFeatures = BUSINESS_SERVICES.slice(0, 6).map(
    (item) => ({
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: item.title,
      description: item.description,
    }),
  );

  const awsFeatures = AWS_BENEFITS.map((item) => ({
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: item.title,
    description: item.description,
  }));

  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero
        title="Professional Websites Built Around Your Business"
        subtitle="AWS-powered professional website development, secure cloud hosting, GST registration, Shop Act, Udyam, IEC, MSME registration, and complete business compliance services for startups and small businesses."
        primaryCta={{
          text: "Book Free Consultation",
          href: "https://wa.me/917350247244?text=Hi!%20I%20would%20like%20to%20book%20a%20free%20consultation.%20Please%20guide%20me%20through%20the%20next%20steps.",
        }}
        secondaryCta={{ text: "View Our Services", href: "/services" }}
        backgroundGradient
      />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-balance">
            Why Choose CloudTech?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {whyChooseFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 lg:p-7 hover:border-primary transition-smooth"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-balance">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={i}
                icon={[Zap, Cloud, Briefcase, Lock][i]}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Services */}
      <div className="py-12 sm:py-16 lg:py-24">
        <FeatureGrid
          title="Business Launch Services"
          subtitle="Complete registration and compliance solutions to start your business legally"
          features={businessServicesFeatures}
          columns={3}
        />
      </div>

      {/* Data Management */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 sm:mb-6 text-balance">
                Business Data Management
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-8">
                Secure, scalable storage and management of your
                business-critical data with enterprise-grade security and
                compliance.
              </p>

              <ul className="space-y-4">
                {[
                  "Secure cloud storage",
                  "Automated backups",
                  "Disaster recovery",
                  "Compliance monitoring",
                  "24/7 accessibility",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services/data-management"
                className="inline-flex items-center justify-center mt-8 sm:mt-10 w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-smooth font-semibold"
              >
                Learn More
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-gradient-blue rounded-xl h-56 sm:h-72 lg:h-80 flex items-center justify-center">
                <Lock className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Hosting Benefits */}
      <div className="py-12 sm:py-16 lg:py-24">
        <FeatureGrid
          title="AWS Cloud Hosting Benefits"
          subtitle="Enterprise-grade infrastructure for reliable, scalable performance"
          features={awsFeatures}
          columns={3}
        />
      </div>

      {/* How We Work */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-balance">
            How We Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {HOW_WE_WORK.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                  {item.step}
                </div>

                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-balance">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary transition-smooth"
              >
                <div className="bg-gradient-blue rounded-lg h-48 sm:h-52 lg:h-56 mb-5 flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 lg:w-20 lg:h-20 text-white opacity-30" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-7">
                  {item.description}
                </p>

                <p className="text-primary font-medium text-sm sm:text-base">
                  {item.result}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-balance">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <Testimonial
                key={i}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-balance">
            Simple, Transparent Pricing
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard
                key={i}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                ctaHref={plan.ctaHref}
                isRecommended={plan.isRecommended}
              />
            ))}
          </div>

          <p className="text-center text-sm sm:text-base text-muted-foreground">
            Need a custom solution?{" "}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact our sales team
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 text-balance">
            Frequently Asked Questions
          </h2>

          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10">
            Get answers to common questions about our services
          </p>

          <FAQAccordion items={FAQ_ITEMS.slice(0, 4)} />

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/faq"
              className="text-primary font-semibold hover:underline text-base"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Launch Your Business?"
        subtitle="Get a free consultation from our team today and start your journey to success."
        primaryCta={{
          text: "Book Free Consultation",
          href: "/contact",
        }}
      />
    </MainLayout>
  );
}
