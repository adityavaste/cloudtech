"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Pause,
  Star,
  TrendingUp,
  Sparkles,
  MousePointer,
  Zap,
  Shield,
  Clock,
  Users,
} from "lucide-react";

interface HomeHeroProps {
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

export function HomeHero({ title, subtitle, primaryCta, secondaryCta }: HomeHeroProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hero-animate-in");
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero_section", page: window.location.pathname }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes hero-float { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(1deg)} }
        @keyframes hero-float-reverse { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-15px) rotate(-1deg)} }
        @keyframes hero-float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-25px)} }
        @keyframes hero-pulse-glow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.6;transform:scale(1.08)} }
        @keyframes hero-slide-up { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes hero-scale-in { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }
        @keyframes hero-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .hero-animate-in .hero-slide-1 { animation: hero-slide-up .8s ease-out .1s both }
        .hero-animate-in .hero-slide-2 { animation: hero-slide-up .8s ease-out .25s both }
        .hero-animate-in .hero-slide-3 { animation: hero-slide-up .8s ease-out .4s both }
        .hero-animate-in .hero-slide-4 { animation: hero-slide-up .8s ease-out .55s both }
        .hero-animate-in .hero-scale-1 { animation: hero-scale-in .7s ease-out .3s both }
        .hero-animate-in .hero-scale-2 { animation: hero-scale-in .7s ease-out .5s both }
        .hero-animate-in .hero-scale-3 { animation: hero-scale-in .7s ease-out .7s both }
        .hero-animate-in .hero-scale-4 { animation: hero-scale-in .7s ease-out .9s both }
        .hero-float { animation: hero-float 6s ease-in-out infinite }
        .hero-float-delayed { animation: hero-float-reverse 7s ease-in-out infinite 1.5s }
        .hero-float-slow { animation: hero-float-slow 8s ease-in-out infinite .5s }
        .hero-shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #818cf8 25%, #c084fc 50%, #818cf8 75%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hero-shimmer 4s linear infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-screen py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          >
            <source
              src="hero-section-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-indigo-950/70 to-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50" />
        </div>

        {/* Ambient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 hero-float pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-violet-600 rounded-full mix-blend-screen filter blur-[150px] opacity-15 hero-float-delayed pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-overlay filter blur-[200px] opacity-10 animate-[hero-pulse-glow_4s_ease-in-out_infinite] pointer-events-none" />

        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "48px 48px" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="hero-slide-1 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-indigo-100">Only 3 spots left for September builds</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>

              <h1 className="hero-slide-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 text-balance leading-[1.05] tracking-tight">
                Launch Your Business in{" "}
                <span className="hero-shimmer-text">14 Days</span> — From
                Paperwork to Website
              </h1>

              <p className="hero-slide-3 text-lg sm:text-xl text-indigo-100/80 mb-8 text-balance leading-relaxed max-w-xl mx-auto lg:mx-0">
                {subtitle}
              </p>

              <div className="hero-slide-3 flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 mb-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg"
                      style={{ background: `linear-gradient(135deg, hsl(${220 + i * 20}, 70%, 60%), hsl(${260 + i * 15}, 70%, 50%))` }}
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-white font-semibold">127+ businesses launched</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-indigo-200 text-xs ml-1">4.9/5 rating</span>
                  </div>
                </div>
              </div>

              <div className="hero-slide-4 max-w-md mx-auto lg:mx-0 mb-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your business email"
                        required
                        className="w-full px-5 py-4 pl-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-xl text-base transition-all hover:bg-white/10"
                      />
                      <MousePointer className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? "Sending..." : primaryCta.text}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6 text-center">
                    <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                    <p className="text-emerald-100 font-bold text-lg">Audit request received!</p>
                    <p className="text-emerald-200/70 text-sm mt-1">Check your inbox in the next 5 minutes.</p>
                  </div>
                )}
                <p className="text-xs text-white/30 mt-3 text-center lg:text-left">Free. No credit card required.</p>
              </div>

              <div className="hero-slide-4 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
                {[
                  { icon: Zap, text: "14-Day Delivery", color: "text-amber-400" },
                  { icon: Shield, text: "99.9% Uptime", color: "text-emerald-400" },
                  { icon: Clock, text: "24/7 Support", color: "text-blue-400" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-sm text-indigo-200/70">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <badge.icon className={`w-4 h-4 ${badge.color}`} />
                    </div>
                    <span className="font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Floating Mockups */}
            <div className="relative hidden lg:block h-[600px]">
              {/* Main Browser Mockup */}
              <div className="hero-scale-1 absolute top-10 right-0 w-[500px] bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden hero-float">
                <div className="h-10 bg-slate-800/80 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-slate-700/50 rounded-md flex items-center px-3">
                      <span className="text-xs text-slate-400">yourbusiness.com</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-32 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl flex items-center justify-center border border-white/5">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl mx-auto mb-2 flex items-center justify-center shadow-lg">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white/60 text-xs">Hero Section</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-white/5 rounded-lg animate-pulse" />
                    <div className="h-20 bg-white/5 rounded-lg animate-pulse delay-100" />
                    <div className="h-20 bg-white/5 rounded-lg animate-pulse delay-200" />
                  </div>
                  <div className="h-24 bg-white/5 rounded-xl flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-white/40 text-sm">Analytics Dashboard</span>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="hero-scale-2 absolute bottom-20 left-0 w-[180px] bg-slate-900/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border-4 border-slate-700/50 overflow-hidden hero-float-delayed">
                <div className="h-6 bg-slate-800 flex items-center justify-center">
                  <div className="w-16 h-4 bg-slate-700 rounded-full" />
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-20 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl" />
                  <div className="h-3 bg-white/10 rounded-full w-3/4" />
                  <div className="h-3 bg-white/10 rounded-full w-1/2" />
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-10 bg-white/5 rounded-lg" />
                    <div className="h-10 bg-white/5 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="hero-scale-3 absolute top-40 left-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl hero-float-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">+147%</p>
                    <p className="text-white/50 text-xs">Conversion Rate</p>
                  </div>
                </div>
                <div className="h-10 flex items-end gap-1">
                  {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="hero-scale-4 absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl max-w-[220px] hero-float">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">RS</div>
                  <div>
                    <p className="text-white text-xs font-semibold">Rahul S.</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">"CloudTech rebuilt our site and leads increased 3x in the first month."</p>
              </div>

              {/* Video Toggle */}
              <button
                onClick={toggleVideo}
                className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
              >
                {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
            </div>
          </div>

          {/* Bottom City Strip */}
          <div className="hero-slide-4 mt-16 pt-10 border-t border-white/5">
            <p className="text-center text-white/30 text-sm mb-6 uppercase tracking-widest font-medium">Trusted by businesses across India</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-40 hover:opacity-70 transition-all duration-500">
              {["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune"].map((city) => (
                <div key={city} className="flex items-center gap-2 text-white/80 font-semibold text-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}