'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Icon from '@/components/Icons/Icon'

interface Service {
  icon: string
  title: string
  description: string
  outcome: string
  href: string
}

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  const services: Service[] = [
    {
      icon: 'cmo',
      title: 'Fractional CMO Leadership',
      description: 'Drive revenue with executive-level strategy, team development, and performance accountability—without the full-time investment.',
      outcome: 'Scale your marketing leadership',
      href: '/services#fractional-cmo',
    },
    {
      icon: 'product',
      title: 'Product Marketing Excellence',
      description: 'Drive revenue with focused product launch strategy, competitive positioning, and customer-centric messaging.',
      outcome: 'Accelerate product success',
      href: '/services#product-marketing',
    },
    {
      icon: 'gtm',
      title: 'Go-To-Market Strategy & Execution',
      description: 'Drive revenue with comprehensive market entry strategies, launch sequencing, and multi-channel execution.',
      outcome: 'Capture market share from day one',
      href: '/services#go-to-market',
    },
    {
      icon: 'vision',
      title: 'Operationalizing Your Vision',
      description: 'Drive revenue by transforming strategic plans into actionable roadmaps with clear processes and measurable outcomes.',
      outcome: 'Turn vision into reality',
      href: '/services#operationalizing',
    },
    {
      icon: 'sales',
      title: 'Sales Enablement Support',
      description: 'Drive revenue with content, training, and tools that bridge marketing and sales for higher conversion rates.',
      outcome: 'Close more deals',
      href: '/services#sales-enablement',
    },
    {
      icon: 'brand',
      title: 'Brand Storytelling & Narrative Creation',
      description: 'Drive revenue with compelling narratives that capture your unique story and create emotional connections with customers.',
      outcome: 'Build memorable brand',
      href: '/services#brand-storytelling',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0')
                card.classList.add('animate-fade-in-up')
              }, index * 100)
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
      className="section-padding bg-cream"
      aria-label="Services"
    >
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-navy uppercase mb-4">
          DRIVE REVENUE WITH STRATEGIC MARKETING LEADERSHIP
        </h2>
        <p className="text-lg text-center text-text-secondary mb-12 max-w-2xl mx-auto font-body">
          Comprehensive marketing services designed for growth-stage companies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card card opacity-0"
            >
              {/* Icon */}
              <div className="mb-6">
                <Icon name={service.icon} className="w-12 h-12 text-deep-teal" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-bold text-navy uppercase mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base text-text-secondary leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              {/* Outcome Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-mist-blue/30 text-deep-teal text-sm font-semibold rounded-full">
                  {service.outcome}
                </span>
              </div>

              {/* Link */}
              <Link href={service.href} className="link">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            What can we help with?
          </Link>
        </div>
      </div>
    </section>
  )
}
