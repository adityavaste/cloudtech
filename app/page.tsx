import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeProcess } from "@/components/sections/home-process";
import { HomePortfolio } from "@/components/sections/home-portfolio";
import { HomeFeatures } from "@/components/sections/home-features";

import {
  SERVICES,
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
  CheckCircle,
  Cloud,
  Lock,
  Eye,
  BarChart3,
  Globe,
  Headphones,
  ArrowRight,
  Calendar,
  Clock,
  Rocket,
  Star,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Business Registration & Website Development Services | Launch in 14 Days",
  description:
    "Get your business legally registered (GST, Shop Act, Udyam, IEC) and a professional website live in 14 days. Flat pricing, no hidden fees. 2+ businesses launched.",
  keywords: [
    "business registration",
    "GST registration",
    "Shop Act license",
    "MSME registration",
    "IEC code",
    "business website",
    "website development",
    "business launch",
    "startup compliance",
  ],
  openGraph: {
    title: "Launch Your Business in 14 Days — Registration + Website",
    description:
      "From GST to going live — we handle the paperwork and the website so you can focus on customers.",
    url: "https://yourdomain.com",
    siteName: "Your Company Name",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business Registration & Website Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://yourdomain.com" },
};

export default function Home() {
  return (
    <MainLayout>
      {/* === ANIMATED HERO WITH VIDEO === */}
      <HomeHero
        title="Launch Your Business in 14 Days — From Paperwork to Website"
        subtitle="We register your business (GST, Shop Act, Udyam) and build your professional website. One team. Flat fee. Zero headaches."
        primaryCta={{ text: "Get Free Business Launch Plan", href: "#audit" }}
        secondaryCta={{ text: "See How It Works", href: "#process" }}
      />

      {/* === PROOF BAR === */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">2+</span> businesses launched this quarter
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">100%</span> legal compliance guaranteed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>
              <span className="font-bold text-foreground">14-Day</span> delivery guarantee
            </span>
          </div>
        </div>
      </section>

      {/* === ANIMATED FEATURES === */}
      <HomeFeatures />

      {/* === ANIMATED PROCESS TIMELINE === */}
      <HomeProcess />

      {/* === SERVICES === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Everything You Need to Go Live
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't hire a CA, a web developer, and a designer. We handle it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Business Registrations",
                items: ["GST Registration", "Shop Act License", "Udyam/MSME", "IEC Code", "FSSAI (if needed)"],
                cta: { text: "See registration details", href: "/services/business-registration" },
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
              },
              {
                icon: Globe,
                title: "Professional Website",
                items: ["Custom design & development", "Mobile-responsive", "Contact forms & maps", "Google Business setup", "SEO optimization"],
                cta: { text: "View website packages", href: "/services/professional-website" },
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
              },
              {
                icon: Cloud,
                title: "AWS Cloud Hosting",
                items: ["99.9% uptime", "SSL certificate", "Daily backups", "CDN for speed", "6 months free"],
                cta: { text: "Hosting details", href: "/services/aws-hosting" },
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
              },
              {
                icon: Headphones,
                title: "Ongoing Support",
                items: ["Unlimited minor edits", "Monthly performance reports", "Security updates", "Content changes", "Phone & WhatsApp support"],
                cta: { text: "Support plans", href: "/services/support" },
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.cta.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all"
                  >
                    {service.cta.text}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PORTFOLIO WITH IMAGES === */}
      <HomePortfolio items={PORTFOLIO_ITEMS} />

      {/* === TESTIMONIALS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Don't Take Our Word For It
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              2+ businesses trust us with their launch. Here's what a few of them said.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="group bg-white border border-slate-100 rounded-2xl p-8 relative hover:shadow-xl hover:shadow-blue-100/30 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.author}</p>
                    <p className="text-muted-foreground text-sm">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Simple Pricing. No Hidden Fees.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Government fees, website build, hosting, and support — all included.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
                  plan.isRecommended
                    ? "border-blue-500 bg-gradient-to-b from-blue-50/80 to-white shadow-2xl shadow-blue-200/50 ring-1 ring-blue-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-xl"
                }`}
              >
                {plan.isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm"> one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={`block text-center w-full py-3.5 rounded-xl font-bold transition-all ${
                    plan.isRecommended
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
                      : "border-2 border-slate-200 text-foreground hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-6 py-3 rounded-full border border-slate-200 shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span>14-day money-back guarantee on all plans. No questions asked.</span>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Questions? Answered.
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before getting started.
            </p>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />

          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-lg">
            <p className="text-foreground font-semibold mb-2">Still have questions?</p>
            <p className="text-muted-foreground text-sm mb-4">
              Talk to a real human. We respond in under 10 minutes during business hours.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hi%2C%20I%27m%20interested%20in%20your%20website%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              WhatsApp us now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        title="Ready to stop waiting and start selling?"
        subtitle="Your competitors are already online. In 14 days, you could be too. Get your free launch plan and see exactly what it'll take."
        primaryCta={{ text: "Get My Free Launch Plan", href: "#audit" }}
        showForm={true}
        socialProof={{ count: "2+", label: "businesses launched this quarter" }}
      />
    </MainLayout>
  );
}