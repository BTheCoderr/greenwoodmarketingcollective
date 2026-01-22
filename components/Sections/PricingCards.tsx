'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

interface Package {
  title: string
  tagline: string
  badge?: string
  features: string[]
  timeline: string
  perfectFor: string[]
  pricing: string
  ctaText: string
  featured?: boolean
}

export default function PricingCards() {
  const sectionRef = useRef<HTMLElement>(null)

  const packages: Package[] = [
    {
      title: 'Strategic Foundation',
      tagline: 'Get clarity and direction',
      badge: undefined,
      features: [
        'Comprehensive marketing audit & competitive analysis',
        'Brand messaging framework development',
        'Customer journey mapping (2 key personas)',
        '90-day action plan with clear priorities',
        'Monthly strategy sessions for 3 months',
      ],
      timeline: '6-8 weeks + 3 months monthly check-ins',
      perfectFor: [
        'Early-stage companies',
        'Rebrands or pivots',
        'Marketing reset',
      ],
      pricing: 'Starting at $6,500',
      ctaText: 'Get Started',
      featured: false,
    },
    {
      title: 'Growth Accelerator',
      tagline: 'Strategy + execution + ongoing leadership',
      badge: 'Most Popular',
      features: [
        'Everything in Strategic Foundation',
        'Campaign creation & optimization (2 campaigns)',
        'Fractional CMO support (15 hours/month)',
        'Marketing team coaching & development',
        'Direct access via Slack for strategic questions',
        '6 months of hands-on partnership',
      ],
      timeline: '8-10 weeks + 6 months fractional support',
      perfectFor: [
        'Growing companies',
        'Product launches',
        'Scaling teams',
      ],
      pricing: 'Starting at $10,500',
      ctaText: 'Get Started',
      featured: true,
    },
    {
      title: 'Market Mastery',
      tagline: 'Full fractional CMO partnership',
      badge: undefined,
      features: [
        'Comprehensive fractional CMO partnership',
        'Full go-to-market launch management',
        'Advanced customer research & segmentation',
        'Multi-channel campaign development & execution',
        'Unlimited strategic consultation',
        'Custom scope based on your needs',
      ],
      timeline: 'Fully customized to business needs',
      perfectFor: [
        'Series A+ companies',
        'Complex markets',
        'Enterprise clients',
      ],
      pricing: 'Custom pricing',
      ctaText: "Let's Chat",
      featured: false,
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
      className="section-padding bg-white"
      aria-label="Pricing"
    >
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-navy uppercase mb-4">
          CHOOSE YOUR GROWTH PATH
        </h2>
        <p className="text-lg text-center text-text-secondary mb-12 font-body">
          Three partnership levels designed to meet you where you are
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className={`pricing-card card-package card opacity-0 ${
                pkg.featured ? 'featured' : ''
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 right-6 bg-gold text-navy px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                  {pkg.badge}
                </div>
              )}
              
              {/* Title */}
              <h3 className="text-2xl font-heading font-bold text-navy uppercase mb-2">
                {pkg.title}
              </h3>
              
              {/* Tagline */}
              <p className="text-base text-coral font-semibold mb-6 font-body">
                {pkg.tagline}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-navy uppercase mb-3 font-body">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-deep-teal mt-1 font-bold">✓</span>
                      <span className="text-text-secondary text-sm leading-relaxed font-body">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="text-sm font-semibold text-navy uppercase mb-2 font-body">
                  Timeline:
                </h4>
                <p className="text-text-secondary text-sm font-body">
                  {pkg.timeline}
                </p>
              </div>

              {/* Perfect For */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-navy uppercase mb-3 font-body">
                  Perfect for:
                </h4>
                <ul className="space-y-2">
                  {pkg.perfectFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
                      <span className="text-text-secondary text-sm leading-relaxed font-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <p className="text-2xl font-bold text-navy font-body">
                  {pkg.pricing}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`block text-center transition-all duration-300 ${
                  pkg.featured
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {pkg.ctaText}
              </Link>
            </article>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/pricing" className="btn-coral">
            Compare Packages & Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
