"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  MessageCircle,
  Phone,
  ArrowRight,
  Star,
  Monitor,
  AlertTriangle,
  Smartphone,
  MapPin,
  Search,
  Globe,
  Zap,
  Shield,
  Code,
  Palette,
  Rocket,
  TrendingUp,
  Users,
  Clock,
  Award,
  ChevronRight,
  Sparkles,
  MousePointer,
  BarChart3,
  Layers,
  Layout,
  Server,
} from "lucide-react";

const WEBSITE_FAQ = [
  {
    question: "How long does it take to build a business website?",
    answer:
      "A standard 5-page business website takes 7-10 days from content approval. E-commerce sites with payment integration take 2-3 weeks. We share a live preview link within 48 hours so you can track progress in real time.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Absolutely. Every website we build is fully responsive — it adapts perfectly to mobile, tablet, and desktop screens. Google ranks mobile-friendly sites higher, so this is non-negotiable for us.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes. We offer bundled packages that include domain registration (yourbusiness.com), premium hosting with SSL, and business email setup. Or we can deploy to your existing hosting — whatever works for you.",
  },
  {
    question: "What about SEO and Google ranking?",
    answer:
      "Every site we build includes on-page SEO — meta tags, structured data, fast loading speed, image optimization, and Google Search Console setup. Our SEO add-on includes keyword research, blog strategy, and monthly ranking reports.",
  },
  {
    question: "Can I update the website myself later?",
    answer:
      "Yes. We build on modern CMS platforms or provide a custom admin panel. We also record a 30-minute training video showing exactly how to edit text, images, and blog posts. No coding knowledge required.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "We start with a design mockup (Figma) for your approval before writing any code. You get 3 rounds of revisions included in every package. We don't proceed to development until you say 'this is perfect.'",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes. Our AMC (Annual Maintenance Contract) covers security updates, backups, content changes, and uptime monitoring starting at ₹999/month. We also offer pay-per-change options if you update rarely.",
  },
];

const websitePlans = [
  {
    name: "Starter Website",
    price: "₹9,999",
    period: "one-time",
    description: "Perfect for small businesses & startups",
    features: [
      "5-page custom design",
      "Mobile responsive",
      "Contact form + Google Map",
      "Basic SEO setup",
      "Social media integration",
      "1-year hosting + SSL",
      "Delivery in 7 days",
    ],
    cta: "Get Started",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20the%20Starter%20Website%20package",
    popular: false,
  },
  {
    name: "Business Pro",
    price: "₹19,999",
    period: "one-time",
    description: "For growing brands that need to convert",
    features: [
      "10-page custom design",
      "Advanced animations & effects",
      "Blog + CMS included",
      "Google Business Profile setup",
      "On-page SEO + Speed optimization",
      "WhatsApp chat integration",
      "2 revision rounds",
      "Delivery in 10 days",
    ],
    cta: "Most Popular",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20the%20Business%20Pro%20package",
    popular: true,
  },
  {
    name: "E-Commerce Plus",
    price: "₹39,999",
    period: "one-time",
    description: "Full online store with payments",
    features: [
      "Unlimited product pages",
      "Payment gateway (Razorpay/CCAvenue)",
      "Cart, checkout & order tracking",
      "Admin dashboard",
      "Inventory management",
      "SEO + Google Shopping ready",
      "3 months free support",
      "Delivery in 21 days",
    ],
    cta: "Launch Store",
    href: "https://wa.me/917350247244?text=Hello%2C%20I%20want%20the%20E-Commerce%20Plus%20package",
    popular: false,
  },
];

export default function WebsiteDesignPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [countersVisible, setCountersVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !phone || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phoneNumber: phone,
          businessType,
          budget,
          source: "website_design_page",
          page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll-triggered counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Palette, label: "Custom UI/UX Design", desc: "Unique, brand-aligned visuals" },
    { icon: Smartphone, label: "Mobile Responsive", desc: "Flawless on every device" },
    { icon: Code, label: "Clean Code", desc: "Fast, secure, scalable" },
    { icon: Search, label: "SEO Optimized", desc: "Rank higher on Google" },
    { icon: MapPin, label: "Google Business Setup", desc: "Maps, reviews, visibility" },
    { icon: Layout, label: "Contact Forms", desc: "Lead capture that converts" },
    { icon: Zap, label: "Speed Optimized", desc: "Under 2-second load time" },
    { icon: Shield, label: "SSL + Security", desc: "HTTPS and firewall protection" },
  ];

  const portfolioItems = [
    { name: "CloudTech Corporate", tag: "Business Website", color: "from-blue-500 to-indigo-600" },
    { name: "SpiceRoute Restaurant", tag: "Food & Dining", color: "from-orange-500 to-red-600" },
    { name: "MediCare Clinic", tag: "Healthcare", color: "from-teal-500 to-emerald-600" },
    { name: "UrbanStyle Store", tag: "E-Commerce", color: "from-violet-500 to-purple-600" },
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Figma", "Vercel", "AWS", "WordPress"
  ];

  return (
    <MainLayout>
      {/* === CUSTOM ANIMATION STYLES === */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes counter-pop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-counter { animation: counter-pop 0.6s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* === HERO === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 animate-gradient-shift">
        {/* Animated floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full mix-blend-overlay filter blur-[200px] opacity-10 animate-pulse-glow" />

        {/* Floating decorative elements */}
        <div className="absolute top-32 right-20 glass-card rounded-2xl p-4 animate-float hidden lg:flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white text-xs font-bold">Site Live</p>
            <p className="text-white/60 text-xs">cloudtech.com</p>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 glass-card rounded-2xl p-4 animate-float-delayed hidden lg:flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white text-xs font-bold">+340%</p>
            <p className="text-white/60 text-xs">Organic traffic</p>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-sm font-medium text-indigo-100">
                  500+ websites launched across India
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                Your Business Deserves a{" "}
                <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                  Website That Converts
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-indigo-100 mb-8 text-balance leading-relaxed">
                Custom design, mobile-first development, SEO built-in, and
                Google Business integration — all in one package. We don't just
                build websites. We build your digital storefront.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Custom design",
                  "Mobile responsive",
                  "SEO ready",
                  "7-day delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-indigo-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Team%2C%20I%20need%20a%20professional%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Quote
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  <Monitor className="w-5 h-5" />
                  View Packages
                </a>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-indigo-500/10 border border-white/20 animate-slide-up delay-200">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Get Your Free Website Quote
                    </h3>
                    <p className="text-muted-foreground">
                      Tell us about your business. We'll recommend the right
                      package and share a design concept within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Rahul Sharma"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="98765 43210"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Business Type
                        </label>
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select type</option>
                          <option value="retail">Retail / Store</option>
                          <option value="restaurant">Restaurant / Cafe</option>
                          <option value="healthcare">Healthcare / Clinic</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="consulting">Consulting / IT</option>
                          <option value="ecommerce">E-Commerce</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Budget Range
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select budget</option>
                          <option value="under-10k">Under ₹10,000</option>
                          <option value="10k-20k">₹10,000 – ₹20,000</option>
                          <option value="20k-40k">₹20,000 – ₹40,000</option>
                          <option value="40k+">₹40,000+</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 flex items-center justify-center gap-2 text-lg"
                    >
                      {isSubmitting ? "Sending..." : "Get My Free Quote"}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Free consultation. No commitment required.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-counter">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Quote Request Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our design team is reviewing your requirements. Expect a
                    call and mockup concept within 24 hours.
                  </p>
                  <div className="bg-slate-50 rounded-xl p-4 text-left mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Meanwhile, browse our packages:
                    </p>
                    <a
                      href="#packages"
                      className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:underline"
                    >
                      View website packages <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    href="https://wa.me/917350247244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* === ANIMATED STATS BAR === */}
      <section ref={statsRef} className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Monitor, value: "500+", label: "Websites Built", color: "text-indigo-600" },
            { icon: Clock, value: "7 Days", label: "Avg. Delivery", color: "text-emerald-600" },
            { icon: Smartphone, value: "100%", label: "Mobile Ready", color: "text-blue-600" },
            { icon: Star, value: "4.9/5", label: "Client Rating", color: "text-amber-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                countersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className={`text-2xl sm:text-3xl font-bold text-foreground ${countersVisible ? "animate-counter" : ""}`} style={{ animationDelay: `${i * 150}ms` }}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === PAIN: Bad website = lost customers === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span>Your current website might be costing you customers</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
                53% of Visitors Leave If Your Site Takes More Than{" "}
                <span className="text-red-600">3 Seconds</span> to Load
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                An outdated, slow, or non-mobile website doesn't just look bad —
                it actively drives customers to your competitors. We build sites
                that load fast, look stunning, and turn visitors into leads.
              </p>

              <div className="space-y-4">
                {[
                  { stat: "70%", desc: "of Indian consumers research online before buying" },
                  { stat: "88%", desc: "won't return after a bad mobile experience" },
                  { stat: "3x", desc: "more leads with a professional website vs. social media alone" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-lg">{item.stat}</span>
                    </div>
                    <p className="text-foreground font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl rotate-3 opacity-20 blur-xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="p-8 space-y-4">
                  <div className="h-4 bg-slate-100 rounded-full w-3/4 animate-pulse" />
                  <div className="h-4 bg-slate-100 rounded-full w-1/2 animate-pulse delay-100" />
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="h-24 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl animate-pulse" />
                    <div className="h-24 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl animate-pulse delay-100" />
                    <div className="h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl animate-pulse delay-200" />
                  </div>
                  <div className="h-32 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mt-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce">
                      <MousePointer className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES GRID === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Everything Your Website Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From pixel-perfect design to Google ranking — we handle the full
              stack.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PORTFOLIO SHOWCASE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Websites That Perform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real designs for real businesses. Every site is custom-built for
              the client's brand and goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <Monitor className="w-12 h-12 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">{item.name}</p>
                    <p className="text-white/80 text-sm">{item.tag}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Website Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing. No hidden costs. Pick what fits your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {websitePlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl border p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-indigo-500 bg-gradient-to-b from-indigo-50/50 to-white shadow-xl shadow-indigo-200/50 ring-1 ring-indigo-500/20 scale-105"
                    : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2 text-xs font-bold text-white shadow-lg">
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
                  <span className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm"> {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3.5 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02]"
                      : "border-2 border-slate-200 text-foreground hover:border-indigo-600 hover:text-indigo-600"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-6 py-3 rounded-full border border-slate-200 shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Domain, hosting & SSL included in all packages. AMC available.</span>
            </div>
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              How We Build Your Website
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven 5-step process from concept to launch.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-violet-500 hidden lg:block -translate-x-1/2" />

            <div className="space-y-12">
              {[
                { icon: MessageCircle, step: "01", title: "Discovery Call", desc: "We understand your business, goals, and competitors." },
                { icon: Palette , step: "02", title: "Design Mockup", desc: "Figma prototype for your approval before any code is written." },
                { icon: Code, step: "03", title: "Development", desc: "Clean, fast code with mobile-first responsive design." },
                { icon: Search, step: "04", title: "SEO & Testing", desc: "Google optimization, speed testing, and cross-device checks." },
                { icon: Rocket, step: "05", title: "Launch & Train", desc: "Go live with SSL, hosting, and a personal training session." },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 text-center ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Step {item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>

                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === TECH STACK === */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-balance">
            Built With Modern Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-200 hover:bg-white/10 hover:border-indigo-500/50 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUST === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why Businesses Choose CloudTech for Websites
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We don't outsource to cheap freelancers. Your website is designed and
            coded by our in-house team in India.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Custom Design",
                desc: "No templates. Every pixel is designed for your brand identity.",
              },
              {
                icon: BarChart3,
                title: "Data-Driven",
                desc: "We analyze your industry and build for conversion, not just looks.",
              },
              {
                icon: Users,
                title: "Human Support",
                desc: "Real developers and designers. Not chatbots. Not ticket queues.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Questions? Answered.
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before starting your project.
            </p>
          </div>

          <FAQAccordion items={WEBSITE_FAQ} />

          <div className="mt-12 text-center p-8 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Ready to launch your website?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Get a free design mockup and quote within 24 hours.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%2C%20I%20want%20to%20discuss%20my%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        title="Your Competitors Already Have a Website"
        subtitle="Don't let an outdated or missing website cost you customers. Let's build something that works for your business 24/7."
        primaryCta={{
          text: "Get Free Website Quote",
          href: "https://wa.me/917350247244?text=Hello%20Team%2C%20I%20want%20a%20free%20website%20quote.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}