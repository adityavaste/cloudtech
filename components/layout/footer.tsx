import Link from "next/link";
import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

      {/* Background blur orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      <div className="relative bg-white/80 backdrop-blur-xl border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="py-14 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-shadow">
                    <span className="text-white font-bold text-sm">AWS</span>
                  </div>
                </div>
                <div className="leading-none">
                  <span className="text-xl font-bold text-slate-900 tracking-tight">
                    Cloud<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Tech</span>
                  </span>
                  <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">
                    Business Solutions
                  </span>
                </div>
              </Link>
              
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Empowering businesses with professional web development, AWS hosting, and seamless business registration services.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a href="https://twitter.com" className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/60 hover:border-blue-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-blue-600/10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/60 hover:border-blue-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-blue-600/10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://wa.me/917350247244" className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-green-50 border border-slate-200/60 hover:border-green-200 flex items-center justify-center text-slate-400 hover:text-green-600 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-green-600/10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "/services/business-registration", label: "Business Registration" },
                  { href: "/services/aws-hosting", label: "AWS Hosting" },
                  { href: "/services/data-management", label: "Data Management" },
                  { href: "/services/support", label: "Support & Maintenance" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="group flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200">
                      <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/blog", label: "Blog" },
                  { href: "/careers", label: "Careers" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="group flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200">
                      <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <a href="mailto:cloudtechenquiry@gmail.com" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Email us</p>
                    <p className="text-sm text-slate-600 font-medium group-hover:text-blue-600 transition-colors break-all">cloudtechenquiry@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+917350247244" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Call us</p>
                    <p className="text-sm text-slate-600 font-medium group-hover:text-indigo-600 transition-colors">+91 73502 47244</p>
                  </div>
                </a>
                
                <a href="https://wa.me/917350247244" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">WhatsApp</p>
                    <p className="text-sm text-slate-600 font-medium group-hover:text-green-600 transition-colors">Chat on WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="relative mb-10 sm:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-violet-600/5 rounded-2xl" />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl border border-slate-200/60" />
            <div className="relative rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Ready to Launch Your Business?
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  Get started with a free consultation — no obligations, expert guidance.
                </p>
              </div>
              <a
                href="https://wa.me/917350247244?text=Hi!%20%F0%9F%91%8B%20I%20would%20like%20to%20start%20my%20business%20journey%20and%20I'm%20interested%20in%20your%20business%20registration%20services.%20Please%20guide%20me%20through%20the%20process."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Start Your Journey
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-200/60 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400 font-medium text-center sm:text-left">
                &copy; {currentYear} CloudTech Business Solutions. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="text-xs text-slate-400 hover:text-blue-600 font-medium transition-colors">Privacy Policy</Link>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <Link href="/terms" className="text-xs text-slate-400 hover:text-blue-600 font-medium transition-colors">Terms of Service</Link>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <Link href="/sitemap" className="text-xs text-slate-400 hover:text-blue-600 font-medium transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}