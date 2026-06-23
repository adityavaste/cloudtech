"use client";
import { schemas } from "./schema";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { CheckCircle, Utensils, Shield, FileText, Clock } from "lucide-react";

const FSSAI_TYPES = [
  {
    title: "Basic Registration",
    description: "For businesses with turnover below 12 lakhs",
    duration: "1 week",
    cost: "₹500-1,000",
  },
  {
    title: "State License",
    description: "For businesses with turnover 12 lakhs - 20 crores",
    duration: "2 weeks",
    cost: "₹ 1,000-5,000",
  },
  {
    title: "Central License",
    description: "For businesses with turnover above 20 crores",
    duration: "3 weeks",
    cost: "₹5,000-10,000",
  },
];

const ELIGIBLE_BUSINESSES = [
  "Restaurants & Cafes",
  "Food Manufacturers",
  "Bakeries & Confectioneries",
  "Cloud Kitchens",
  "Food Delivery Services",
  "Home-based Food Business (HBFO)",
  "Dairy Products",
  "Packaged Food Products",
  "Spice Manufacturers",
  "Beverage Manufacturers",
];

const FSSAI_FAQ = [
  {
    question: "Who requires FSSAI registration?",
    answer:
      "Any business involved in manufacturing, processing, distribution, or selling food products requires FSSAI registration. This includes restaurants, food manufacturers, and food delivery businesses.",
  },
  {
    question: "What are the three types of FSSAI licenses?",
    answer:
      "Basic Registration (below 12 lakhs), State License (12 lakhs - 20 crores), and Central License (above 20 crores). We help determine which category applies to your business.",
  },
  {
    question: "How long is FSSAI license valid?",
    answer:
      "FSSAI licenses are valid for 3 years from the date of issue. We handle timely renewals to ensure continuous compliance.",
  },
  {
    question: "What documents are required?",
    answer:
      "PAN, Aadhar, property address proof, food safety plan, menu/product details, and premises photos. Full list provided during consultation.",
  },
  {
    question: "Can I operate a cloud kitchen without FSSAI?",
    answer:
      "No, FSSAI license is mandatory for all food businesses including cloud kitchens. We handle quick online registration for new food businesses.",
  },
];

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
          primaryCta={{ text: "Apply for FSSAI", href: "/contact" }}
          secondaryCta={{ text: "Get License Type Advice", href: "/contact" }}
          backgroundGradient
        />
        {/* Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-secondary text-center mb-8">
              FSSAI (Food Safety and Standards Authority of India) registration
              is mandatory for every food business operating in India. Whether
              you own a restaurant, cloud kitchen, bakery, food manufacturing
              unit, or food delivery business, obtaining an FSSAI license
              ensures legal compliance and builds customer trust.
            </p>
          </div>
        </section>

        {/* License Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              FSSAI License Categories
            </h2>
            <p className="text-lg text-secondary text-center mb-12 max-w-2xl mx-auto">
              We assist businesses of every size in obtaining the right FSSAI
              registration or license with complete documentation and government
              filing support.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {FSSAI_TYPES.map((type, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth hover:-translate-y-1"
                >
                  <FileText className="w-8 h-8 text-primary mb-4" />

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {type.title}
                  </h3>

                  <p className="text-secondary text-sm leading-relaxed mb-5">
                    {type.description}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{type.duration}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span>{type.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligible Businesses */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Businesses That Require FSSAI Registration
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ELIGIBLE_BUSINESSES.map((business, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-lg p-5 flex items-center gap-3 hover:border-primary transition-smooth"
                >
                  <Utensils className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {business}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-subtle">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Benefits of Getting an FSSAI License
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <Shield className="w-12 h-12 text-primary mb-5" />

                <h3 className="text-xl font-bold mb-5">
                  Legal & Regulatory Benefits
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Operate your food business legally.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Avoid government penalties and legal notices.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Comply with Food Safety & Standards regulations.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Meet Swiggy, Zomato and e-commerce platform requirements.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <CheckCircle className="w-12 h-12 text-green-600 mb-5" />

                <h3 className="text-xl font-bold mb-5">
                  Business Growth Benefits
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Build customer trust and credibility.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Expand your business across India.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Improve eligibility for business loans.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Increase customer confidence in food quality.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Our FSSAI Registration Process
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Business Assessment",
                  desc: "We identify the correct FSSAI registration or license based on your business turnover and operations.",
                },
                {
                  title: "Document Collection",
                  desc: "Our experts help you prepare and verify all required documents.",
                },
                {
                  title: "Application Filing",
                  desc: "We prepare and submit your application through the official FSSAI portal.",
                },
                {
                  title: "Government Follow-up",
                  desc: "We coordinate with the authorities and respond to any queries raised.",
                },
                {
                  title: "License Delivery",
                  desc: "Receive your FSSAI Registration Certificate or License quickly and securely.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 pb-6 border-b border-border last:border-0"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <FAQAccordion items={FSSAI_FAQ} />
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Apply for Your FSSAI License Today"
          subtitle="Our experts make FSSAI registration simple, fast, and hassle-free with complete documentation and end-to-end support."
          primaryCta={{
            text: "Apply Now",
            href: "/contact",
          }}
        />
      </MainLayout>
    </>
  );
}
