"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Shield, Zap, Eye, Rocket } from "lucide-react";

const steps = [
  { day: "Day 1-2", title: "Discovery & Document Collection", desc: "We audit your business needs, collect KYC documents, and file your first registrations (GST/Shop Act).", icon: Users, color: "bg-blue-500" },
  { day: "Day 3-5", title: "Registration Filing", desc: "All applications submitted through official portals. You get tracking IDs for every filing. Website design begins in parallel.", icon: Shield, color: "bg-indigo-500" },
  { day: "Day 6-10", title: "Website Build & Content", desc: "Your custom site takes shape. We write your copy, set up contact forms, and integrate Google Business.", icon: Zap, color: "bg-violet-500" },
  { day: "Day 11-12", title: "Review & Revisions", desc: "You see the live site. We make unlimited revisions until you're 100% satisfied. Registrations start getting approved.", icon: Eye, color: "bg-purple-500" },
  { day: "Day 13-14", title: "Launch & Handover", desc: "Site goes live on your domain. All certificates delivered. Training call included. You're open for business.", icon: Rocket, color: "bg-emerald-500" },
];

export function HomeProcess() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            From Idea to Live in 14 Days
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Most businesses take 3-6 months to get registered and online. We cut that to 2 weeks with a battle-tested process.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-indigo-300 to-emerald-300 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="flex items-center gap-4 md:w-48 shrink-0">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg shadow-blue-500/20 z-10 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="md:hidden font-bold text-blue-600">{step.day}</span>
                </div>
                <div className="md:pt-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex-1">
                  <span className="hidden md:inline-block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-blue-50">{step.day}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "800ms" }}>
          <a
            href="https://wa.me/917350247244?text=Hi%2C%20I%27d%20like%20to%20get%20my%2014-day%20launch%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105"
          >
            Get My 14-Day Launch Plan
            <Rocket className="w-4 h-4" />
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Free. No commitment. Get your plan on WhatsApp in 5 minutes.</p>
        </div>
      </div>
    </section>
  );
}