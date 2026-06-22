import { Star } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  rating?: number
}

export function Testimonial({
  quote,
  author,
  role,
  company,
  rating = 5,
}: TestimonialProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg hover:shadow-blue-100/50 hover:border-accent transition-smooth hover:-translate-y-1">
      {/* Stars */}
      <div className="flex gap-1.5 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-6 text-lg leading-relaxed">"{quote}"</p>

      {/* Author Info */}
      <div className="pt-6 border-t border-border">
        <p className="font-bold text-foreground text-base">{author}</p>
        <p className="text-secondary text-sm mt-1">{role} at {company}</p>
      </div>
    </div>
  )
}
