import { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  title?: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-section-alt">
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-secondary text-balance max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridClass} gap-8`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-xl p-8 transition-smooth hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1 hover:border-accent"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-secondary text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}