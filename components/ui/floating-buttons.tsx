"use client"

import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/7350247244"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+917350247244"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  )
}
