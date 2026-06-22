import Link from 'next/link'
import { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundGradient?: boolean
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundGradient = true,
}: HeroProps) {
  return (
    <section className={`relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${backgroundGradient ? 'gradient-blue-light' : 'bg-background'}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-y-1/2 -translate-x-1/3"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent " />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-sm font-medium text-bold">
            AWS-Powered Websites
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-secondary mb-10 text-balance leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="btn-gradient-primary px-8 py-3 rounded-xl hover-lift w-full sm:w-auto text-center shadow-lg"
            >
              {primaryCta.text}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="border-2 border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold w-full sm:w-auto text-center"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
