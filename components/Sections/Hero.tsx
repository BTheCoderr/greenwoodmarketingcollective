'use client'

import Link from 'next/link'

export default function Hero() {
  const trustIndicators = [
    'Trusted by 50+ growth-stage companies',
    '15+ years of expertise',
    'Results-driven leadership',
  ]

  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Gradient - Cream + Mist Blue, low opacity */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cream/40 via-mist-blue/30 to-cream/40" />
      
      {/* Subtle Pattern Overlay (optional, very low opacity) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23223659\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-5">
        {/* Headline - Tenez Bold, ALL CAPS */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-navy uppercase mb-6 leading-tight tracking-tight animate-fade-in-up">
          EXECUTIVE MARKETING LEADERSHIP FOR GROWTH-FOCUSED COMPANIES
        </h1>
        
        {/* Subheadline - Montserrat Regular */}
        <p 
          className="text-lg md:text-xl lg:text-2xl text-navy/80 mb-10 max-w-3xl mx-auto font-body leading-relaxed animate-fade-in-up" 
          style={{ animationDelay: '0.2s' }}
        >
          Fractional CMO and product marketing strategy that bridges vision and execution. Turn ambitious goals into measurable market success.
        </p>

        {/* CTAs */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
          <Link href="/services" className="btn-secondary">
            View Our Services
          </Link>
        </div>

        {/* Trust Indicator Row */}
        <div 
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm md:text-base text-navy/70 font-body animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>{indicator}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
