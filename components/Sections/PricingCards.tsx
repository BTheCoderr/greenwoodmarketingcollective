'use client'

import { useEffect, useRef } from 'react'

interface Package {
  title: string
  badge?: string
  deliverables: string[]
  idealFor: string
  pricing: string
  ctaText: string
  featured?: boolean
}

export default function PricingCards() {
  const sectionRef = useRef<HTMLElement>(null)

  const packages: Package[] = [
    {
      title: 'Strategic Foundation',
      badge: undefined,
      deliverables: [
        'Comprehensive marketing audit & competitive analysis',
        'Brand messaging framework development',
        'Customer journey mapping (2 key personas)',
        '90-day action plan with clear priorities',
        'Monthly strategy sessions for 3 months',
      ],
      idealFor: 'Early-stage companies, rebrands, marketing reset',
      pricing: 'Choose Your Growth Path',
      ctaText: 'Get Started',
    },
    {
      title: 'Growth Accelerator',
      badge: 'Most Popular',
      deliverables: [
        'Everything in Strategic Foundation',
        'Campaign creation & optimization (2 campaigns)',
        'Fractional CMO support (15 hours/month)',
        'Marketing team coaching & development',
        'Direct access via Slack for strategic questions',
        '6 months of hands-on partnership',
      ],
      idealFor: 'Growing companies, product launches, scaling teams',
      pricing: 'Compare Packages & Pricing',
      ctaText: 'Get Started',
      featured: true,
    },
    {
      title: 'Market Mastery',
      badge: undefined,
      deliverables: [
        'Comprehensive fractional CMO partnership',
        'Full go-to-market launch management',
        'Advanced customer research & segmentation',
        'Multi-channel campaign development & execution',
        'And More…',
      ],
      idealFor: 'Series A+, complex markets, enterprise clients',
      pricing: 'Contact for pricing',
      ctaText: "Let's Chat",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pricing-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0')
                card.classList.add('animate-fade-in-up')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-beige-DEFAULT"
      aria-label="Pricing"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary text-center mb-4 uppercase">
          Choose Your Growth Path
        </h2>
        <p className="text-xl text-text-secondary text-center mb-12">
          Three partnership levels designed to meet you where you are
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className={`pricing-card bg-white rounded-xl p-8 md:p-10 hover:-translate-y-1 transition-all duration-300 opacity-0 ${
                pkg.featured
                  ? 'border-3 border-primary shadow-xl lg:scale-105'
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {pkg.badge && (
                <div
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                    pkg.featured
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-text-primary'
                  }`}
                >
                  {pkg.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                {pkg.title}
              </h3>

              <ul className="space-y-3 mb-6">
                {pkg.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <p className="text-text-secondary text-sm mb-2">Ideal for:</p>
                <p className="text-text-primary leading-relaxed">
                  {pkg.idealFor}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-primary-dark">
                  {pkg.pricing}
                </p>
              </div>

              <a
                href="/contact"
                className="block text-center bg-coral-DEFAULT text-white px-6 py-3 rounded-lg font-semibold hover:bg-coral-light transition-colors"
              >
                {pkg.ctaText}
              </a>
            </article>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/pricing"
            className="inline-block bg-coral-DEFAULT text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-light transition-colors"
          >
            Compare Packages & Pricing
          </a>
        </div>
      </div>
    </section>
  )
}
