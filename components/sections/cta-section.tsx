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
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-blue-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl opacity-95 mb-10 text-balance max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <Link
          href={primaryCta.href}
          className="inline-block bg-white text-primary px-10 py-4 rounded-xl hover:bg-blue-50 transition-smooth font-bold shadow-xl hover:shadow-2xl hover:scale-105"
        >
          {primaryCta.text}
        </Link>
      </div>
    </section>
  )
}
