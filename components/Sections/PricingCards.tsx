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
      badge: 'Starter',
      deliverables: [
        'Initial marketing assessment',
        'Strategic roadmap development',
        'Monthly fractional CMO consultation (8 hours/month)',
        'Quarterly strategy reviews',
        'Email support',
      ],
      idealFor: 'Early-stage companies establishing their marketing foundation and strategic direction.',
      pricing: 'Contact for pricing',
      ctaText: 'Get Started',
    },
    {
      title: 'Growth Accelerator',
      badge: 'Most Popular',
      deliverables: [
        'Comprehensive marketing strategy',
        'Fractional CMO leadership (16 hours/month)',
        'Product marketing execution',
        'Go-to-market planning',
        'Sales enablement materials',
        'Monthly team alignment sessions',
        'Priority support',
      ],
      idealFor: 'Scaling companies ready to accelerate growth with dedicated marketing leadership and execution support.',
      pricing: 'Contact for pricing',
      ctaText: 'Get Started',
      featured: true,
    },
    {
      title: 'Market Mastery',
      badge: 'Enterprise',
      deliverables: [
        'Full fractional CMO engagement (32+ hours/month)',
        'Custom marketing program design',
        'Dedicated product marketing leadership',
        'Brand storytelling & narrative development',
        'Complete go-to-market execution',
        'Ongoing strategic counsel',
        'Dedicated account management',
      ],
      idealFor: 'Established companies seeking comprehensive, fully-customized marketing leadership and execution.',
      pricing: 'Custom pricing',
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
      className="section-padding bg-primary-light"
      aria-label="Pricing"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-dark text-center mb-12">
          Three partnership levels designed to meet you where you are
        </h2>

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
                className={`block text-center ${
                  pkg.featured ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {pkg.ctaText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
