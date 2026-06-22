import Link from 'next/link'

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryCta: {
    text: string
    href: string
    target?: '_blank' | '_self'
  }
}

export function CTASection({ title, subtitle, primaryCta }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden gradient-blue-primary text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>

        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-balance">
          {title}
        </h2>

        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl opacity-95 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            {subtitle}
          </p>
        )}

        <Link
          href={primaryCta.href}
          className="inline-block w-full sm:w-auto bg-white text-primary px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-smooth"
        >
          {primaryCta.text}
        </Link>
      </div>
    </section>
  )
}