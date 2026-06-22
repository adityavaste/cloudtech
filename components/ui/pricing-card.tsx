import Link from 'next/link'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  isRecommended?: boolean
}

export function PricingCard({
  name,
  price,
  period = 'per month',
  description,
  features,
  ctaText,
  ctaHref,
  isRecommended = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl border transition-smooth flex flex-col h-full ${
        isRecommended
          ? 'border-accent bg-gradient-to-br from-white to-blue-50 shadow-xl shadow-blue-100/50 scale-105 ring-2 ring-blue-200'
          : 'border-border bg-white hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent hover:-translate-y-1'
      }`}
    >
      {isRecommended && (
        <div className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-4 py-3 rounded-t-xl text-center">
          Most Popular Choice
        </div>
      )}
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-foreground mb-3">{name}</h3>
        <p className="text-secondary text-base mb-8">{description}</p>
        
        <div className="mb-8">
          <span className="text-5xl font-bold text-foreground">{price}</span>
          <span className="text-secondary ml-3 text-lg">{period}</span>
        </div>

        <Link
          href={ctaHref}
          className={`text-center px-8 py-3 rounded-xl font-bold mb-8 transition-smooth ${
            isRecommended
              ? 'btn-gradient-primary shadow-lg'
              : 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg'
          }`}
        >
          {ctaText}
        </Link>

        <div className="space-y-4 flex-grow">
          <p className="font-bold text-foreground text-sm uppercase tracking-wide text-secondary">What's Included:</p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 font-bold" />
              <span className="text-secondary text-base leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
