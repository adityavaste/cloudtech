'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-md hover:border-accent transition-smooth"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 hover:bg-section-alt transition-colors text-left group"
          >
            <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{item.question}</span>
            <ChevronDown
              className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ml-4 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 py-6 bg-gradient-to-b from-blue-50 to-white border-t border-border animate-in">
              <p className="text-secondary text-base leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
