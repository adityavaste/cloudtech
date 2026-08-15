"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, TrendingUp, Shield, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Launch in 14 Days, Not 4 Months",
    description: "A fast, streamlined website launch using proven components and a focused delivery process.",
    outcome: "Your new site is live before your competitors finish their discovery call.",
    stat: "14-Day Delivery",
    checks: ["No scope creep", "Weekly progress demos", "Post-launch support"],
    cta: { text: "See how we ship fast", href: "#process" },
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert, Not Just Impress",
    description: "Conversion-focused design that turns more visitors into qualified leads and customers.",
    outcome: "Every section is engineered around a single goal: turning visitors into leads.",
    stat: "3x Avg. Conversion Lift",
    checks: ["Lead capture built-in", "Mobile-optimized CTAs", "Analytics setup"],
    cta: { text: "View case studies", href: "#portfolio" },
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Zero Maintenance Headaches",
    description: "Reliable hosting, security, backups, and ongoing updates handled for you.",
    outcome: "Updates, security patches, hosting, backups — we handle it all.",
    stat: "99.9% Uptime",
    checks: ["AWS hosting included", "SSL & security", "Monthly reports"],
    cta: { text: "What's included", href: "#pricing" },
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Clock,
    title: "Flat Fee, Zero Surprises",
    description: "Simple, predictable pricing with everything you need included from day one.",
    outcome: "One predictable monthly price covers everything from design to hosting to edits.",
    stat: "Fixed Pricing",
    checks: ["Unlimited minor edits", "No setup fees", "Cancel anytime"],
    cta: { text: "See pricing", href: "#pricing" },
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
];

export function HomeFeatures() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Stop bleeding money on a website that doesn't sell
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Most agency sites look pretty but convert poorly. We fix the three things that actually matter: speed, trust, and clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-100/30 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Gradient blob on hover */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />

              <div className="relative">
                <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text`} style={{ color: "inherit" }} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl`} />
                  <feature.icon className="w-7 h-7 text-foreground relative z-10" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-foreground mb-4 shadow-sm">
                  {feature.stat}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>

                <div className="bg-white rounded-xl p-4 border border-slate-100 mb-6 group-hover:border-blue-100 group-hover:shadow-sm transition-all">
                  <p className="text-sm text-foreground font-medium mb-3">{feature.outcome}</p>
                  <ul className="space-y-2">
                    {feature.checks.map((check, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={feature.cta.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all group/link"
                >
                  {feature.cta.text}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "600ms" }}>
          <Link
            href="https://wa.me/917350247244?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20conversion%20audit%20for%20my%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
          >
            Get Your Free Conversion Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">See exactly why your current site isn't converting</p>
        </div>
      </div>
    </section>
  );
}