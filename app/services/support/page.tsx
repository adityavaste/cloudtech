"use client";

import { useState, FormEvent } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Headphones,
  FileText,
  Search,
  CreditCard,
  RefreshCw,
  MapPin,
  AlertCircle,
  Send,
  User,
  HelpCircle,
  Zap,
  ThumbsUp,
} from "lucide-react";

const SUPPORT_FAQ = [
  {
    question: "How do I track my application status?",
    answer:
      "Once you submit documents, you get a dedicated tracking ID via WhatsApp and email. You can also message us anytime on WhatsApp for real-time updates. Most Trade License and Shop Act applications are trackable directly through municipal portals — we share those links too.",
  },
  {
    question: "I paid but haven't received my certificate. What now?",
    answer:
      "First, check your spam/junk folder for our emails. If nothing there, message us on WhatsApp with your registered phone number. 90% of delays are municipal processing holdups, not missing documents. We escalate directly with the concerned officer and update you within 24 hours.",
  },
  {
    question: "Can I get a refund if my application is rejected?",
    answer:
      "Yes. If your application is rejected due to eligibility issues (not document errors), we offer a 100% refund of our service fee within 7 working days. Municipal fees paid to government bodies are non-refundable as per government rules. We discuss this upfront before filing.",
  },
  {
    question: "How do I update my business details after registration?",
    answer:
      "For Udyam, GST, and Shop Act amendments, message us the changes needed. We handle Udyam upgrades (Micro to Small to Medium), GST address changes, and Shop Act employee count updates. Amendment fees start at ₹499 depending on complexity.",
  },
  {
    question: "Do you offer EMI or partial payment options?",
    answer:
      "Yes for packages above ₹3,999. You can pay 50% upfront and 50% on certificate delivery. For Business License Pack (₹6,999+), we also offer 3-month EMI via Razorpay. Ask your assigned manager or mention it on WhatsApp before payment.",
  },
  {
    question: "My municipal inspector is asking for a bribe. Can you help?",
    answer:
      "Absolutely. Never pay a bribe. Message us immediately with the officer's name and location. We have direct municipal liaison relationships and escalation channels. We handle inspector coordination as part of our service — that's exactly why clients hire us.",
  },
  {
    question: "How do I renew my Trade License or Shop Act?",
    answer:
      "We send renewal reminders 60 days before expiry via WhatsApp and email. Reply to the reminder and we handle the entire renewal process. Renewal fees are typically 20-30% lower than new registration. Never let your license lapse — penalties apply from day one of expiry.",
  },
];

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !message || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phoneNumber: phone,
          issueType,
          message,
          source: "support_page",
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

  const helpCategories = [
    { icon: FileText, label: "Document & Filing Help", desc: "Missing docs, formats, corrections" },
    { icon: Search, label: "Track My Application", desc: "Status updates & timelines" },
    { icon: CreditCard, label: "Payment & Refunds", desc: "Invoices, EMI, refund status" },
    { icon: RefreshCw, label: "Renewals & Updates", desc: "License renewal, amendments" },
    { icon: AlertCircle, label: "Urgent Escalation", desc: "Inspector issues, deadlines" },
    { icon: HelpCircle, label: "General Questions", desc: "Eligibility, pricing, process" },
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      value: "+91 73502 47244",
      action: "Chat Now",
      href: "https://wa.me/917350247244?text=Hello%20Support%2C%20I%20need%20help.",
      color: "bg-green-500 hover:bg-green-600",
      textColor: "text-green-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 73502 47244",
      action: "Call Now",
      href: "tel:+917350247244",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "support@cloudtech.com",
      action: "Send Email",
      href: "mailto:support@cloudtech.com",
      color: "bg-purple-600 hover:bg-purple-700",
      textColor: "text-purple-600",
    },
  ];

  return (
    <MainLayout>
      {/* === HERO === */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Headphones className="w-4 h-4 text-violet-200" />
                <span className="text-sm font-medium text-violet-100">
                  Average response time: 15 minutes
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-[1.1] tracking-tight">
                How Can We <span className="text-violet-400">Help You</span> Today?
              </h1>

              <p className="text-lg sm:text-xl text-violet-100 mb-8 text-balance leading-relaxed">
                Stuck with a document? Tracking an application? Need a refund
                update? Our support team is online and ready to resolve your
                issue — usually within 15 minutes on WhatsApp.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "WhatsApp response in 15 min",
                  "Call support 9 AM – 8 PM",
                  "Ticket tracking included",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-violet-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917350247244?text=Hello%20Support%2C%20I%20need%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-white font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Support
                </a>
                <a
                  href="tel:+917350247244"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right: Support Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Submit a Support Request
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Describe your issue and we will get back to you within 30
                    minutes. For faster help, use WhatsApp.
                  </p>

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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Issue Category
                      </label>
                      <select
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      >
                        <option value="">Select issue type</option>
                        <option value="track">Track My Application</option>
                        <option value="documents">Document Help</option>
                        <option value="payment">Payment / Refund</option>
                        <option value="renewal">Renewal / Amendment</option>
                        <option value="inspector">Inspector Issue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Describe Your Issue
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="I applied for Trade License 2 weeks ago and haven't received updates..."
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-violet-600 text-white font-bold shadow-lg hover:bg-violet-700 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Support Ticket"}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    For urgent issues, WhatsApp us for instant response.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Ticket Created!
                  </h3>
                  <p className="text-muted-foreground">
                    Your support request is logged. A manager will call you
                    within 30 minutes.
                  </p>
                  <a
                    href="https://wa.me/917350247244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
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

      {/* === SOCIAL PROOF BAR === */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 sm:gap-16 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-violet-600" />
            <span>
              <span className="font-bold text-foreground">15 min</span> avg
              response
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-5 h-5 text-violet-500" />
            <span>
              <span className="font-bold text-foreground">4.9/5</span> support
              rating
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>
              <span className="font-bold text-foreground">98%</span> issues
              resolved
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span>
              <span className="font-bold text-foreground">24/7</span> WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* === HELP CATEGORIES === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
              What Do You Need Help With?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick a category to get targeted support. Or just message us on
              WhatsApp — we handle everything.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((cat, i) => (
              <a
                key={i}
                href="https://wa.me/917350247244?text=Hello%20Support%2C%20I%20need%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-6 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors shrink-0">
                  <cat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cat.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTACT METHODS === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance tracking-tight">
              Reach Us Your Way
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three ways to get help. All lead to the same dedicated support
              team.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div
                  className={`w-14 h-14 ${method.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors`}
                >
                  <method.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {method.title}
                </h3>
                <p className={`text-sm font-medium ${method.textColor} mb-4`}>
                  {method.value}
                </p>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl ${method.color} text-white font-semibold transition-all`}
                >
                  {method.action}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-violet-50 rounded-2xl border border-violet-100">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-violet-600" />
              <span className="font-semibold text-foreground">
                Office Hours
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-1">
              Monday – Saturday: 9:00 AM – 8:00 PM IST
            </p>
            <p className="text-muted-foreground text-sm">
              WhatsApp available 24/7 for urgent issues
            </p>
          </div>
        </div>
      </section>

      {/* === RESPONSE PROMISE === */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Clock className="w-12 h-12 text-violet-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Our Support Promise
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We know government processes are stressful. That is why we built a
            support system that actually responds.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp in 15 Min",
                desc: "Message us anytime. Real humans reply, not bots. Average first response: 15 minutes.",
              },
              {
                icon: Phone,
                title: "Call Back Guarantee",
                desc: "Submit a ticket and we call back within 30 minutes during business hours.",
              },
              {
                icon: Shield,
                title: "Issue Resolution",
                desc: "98% of support tickets are fully resolved within 48 hours of first contact.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
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
              Common Support Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers before you reach out.
            </p>
          </div>

          <FAQAccordion items={SUPPORT_FAQ} />

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-foreground font-semibold mb-2">
              Still need help?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Our team is online now. Get a human response in under 15 minutes.
            </p>
            <a
              href="https://wa.me/917350247244?text=Hello%20Support%2C%20I%20couldn't%20find%20my%20answer."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTASection
        title="We Are Here When You Need Us"
        subtitle="Government paperwork is frustrating. Our support team makes it less so. Message us anytime — we actually reply."
        primaryCta={{
          text: "Get Support on WhatsApp",
          href: "https://wa.me/917350247244?text=Hello%20Support%2C%20I%20need%20help.",
        }}
        showForm={false}
      />
    </MainLayout>
  );
}