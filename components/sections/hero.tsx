import Link from 'next/link'

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
    <section
      className={`relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        backgroundGradient ? 'gradient-blue-light' : 'bg-background'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>

        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-2 sm:px-4 md:px-6 lg:px-8 text-center">
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>

          <span className="text-xs sm:text-sm font-medium">
            AWS-Powered Websites
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-balance">
          {title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-secondary mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="btn-gradient-primary w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl text-center shadow-lg hover-lift"
            >
              {primaryCta.text}
            </Link>
          )}

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="w-full sm:w-auto border-2 border-primary text-primary px-6 sm:px-8 py-3 rounded-xl text-center font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}