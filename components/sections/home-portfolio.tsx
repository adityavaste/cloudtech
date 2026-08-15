"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";

interface PortfolioItem {
  title: string;
  description: string;
  result: string;
  category?: string;
  image?: string;
}

interface HomePortfolioProps {
  items: PortfolioItem[];
}

export function HomePortfolio({ items }: HomePortfolioProps) {
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

  const portfolioImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Businesses We Launched
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Real results from real clients. Not mockups.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className={`group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={portfolioImages[i] || portfolioImages[0]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">{item.category || "Business Launch"}</p>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-green-700 font-semibold text-sm bg-green-50 px-3 py-2 rounded-lg">
                  <TrendingUp className="w-4 h-4" />
                  {item.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "700ms" }}>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-semibold hover:scale-105"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}