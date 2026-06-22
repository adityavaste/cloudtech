'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border transition-smooth shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-15 h-9 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">AWS</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">CloudTech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="text-foreground hover:text-primary font-medium px-3 py-2 rounded-lg transition-smooth hover:bg-blue-50">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium px-3 py-2 rounded-lg transition-smooth hover:bg-blue-50">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-foreground hover:text-primary font-medium px-3 py-2 rounded-lg transition-smooth hover:bg-blue-50">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/services/business-registration" className="block px-5 py-3 hover:bg-blue-50 text-foreground rounded-t-xl font-medium text-sm">
                  Business Registration
                </Link>
                <Link href="/services/aws-hosting" className="block px-5 py-3 hover:bg-blue-50 text-foreground font-medium text-sm">
                  AWS Hosting
                </Link>
                <Link href="/services/data-management" className="block px-5 py-3 hover:bg-blue-50 text-foreground font-medium text-sm">
                  Data Management
                </Link>
                <Link href="/services" className="block px-5 py-3 hover:bg-blue-50 text-foreground rounded-b-xl border-t border-border font-medium text-sm">
                  All Services
                </Link>
              </div>
            </div>

            <Link href="/pricing" className="text-foreground hover:text-primary font-medium px-3 py-2 rounded-lg transition-smooth hover:bg-blue-50">
              Pricing
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary font-medium px-3 py-2 rounded-lg transition-smooth hover:bg-blue-50">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium px-3 py-2 rounded-lg transition-smooth hover:bg-blue-50">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
            <a
              href="https://wa.me/917350247244?text=Hi!%20%F0%9F%91%8B%20I%20would%20like%20to%20start%20my%20business%20journey%20and%20I'm%20interested%20in%20your%20business%20registration%20services.%20Please%20guide%20me%20through%20the%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-gradient-primary px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl"
            >
             Book Consultation
            </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-1 animate-in">
            <Link href="/" className="block px-4 py-3 text-foreground hover:bg-blue-50 rounded-lg font-medium">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-3 text-foreground hover:bg-blue-50 rounded-lg font-medium">
              About
            </Link>
            
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-4 py-3 text-foreground hover:bg-blue-50 rounded-lg flex items-center justify-between font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/services/business-registration" className="block px-4 py-2 text-foreground hover:bg-blue-50 rounded-lg text-sm">
                    Business Registration
                  </Link>
                  <Link href="/services/aws-hosting" className="block px-4 py-2 text-foreground hover:bg-blue-50 rounded-lg text-sm">
                    AWS Hosting
                  </Link>
                  <Link href="/services/data-management" className="block px-4 py-2 text-foreground hover:bg-blue-50 rounded-lg text-sm">
                    Data Management
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-foreground hover:bg-blue-50 rounded-lg text-sm">
                    All Services
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="block px-4 py-3 text-foreground hover:bg-blue-50 rounded-lg font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="block px-4 py-3 text-foreground hover:bg-blue-50 rounded-lg font-medium">
              Blog
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-foreground hover:bg-blue-50 rounded-lg font-medium">
              Contact
            </Link>
            <Link href="/contact" className="block px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-center font-bold mt-2">
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
