import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const content = (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      </div>
      <p className="text-secondary text-base flex-grow leading-relaxed">{description}</p>
      {href && (
        <div className="mt-6 pt-6 border-t border-border">
          <span className="text-primary font-semibold text-sm hover:text-secondary transition-colors inline-flex items-center gap-1">
            Learn more <span className="text-lg">→</span>
          </span>
        </div>
      )}
    </div>
  )

  const baseClasses = "bg-card border border-border rounded-xl p-8 h-full transition-smooth group cursor-pointer"
  const hoverClasses = "hover:border-accent hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1"

  if (href) {
    return (
      <Link href={href}>
        <div className={`${baseClasses} ${hoverClasses}`}>
          {content}
        </div>
      </Link>
    )
  }

  return (
    <div className={`${baseClasses} ${hoverClasses}`}>
      {content}
    </div>
  )
}
