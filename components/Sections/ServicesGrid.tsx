'use client'

import { useEffect, useRef } from 'react'

import Icon from '@/components/Icons/Icon'

interface Service {
  icon: string
  title: string
  description: string
}

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  const services: Service[] = [
    {
      icon: 'cmo',
      title: 'Fractional CMO Leadership',
      description: 'that provides executive-level strategy, team development, and performance accountability',
    },
    {
      icon: 'product',
      title: 'Product Marketing Excellence',
      description: 'that drives positioning, competitive differentiation, and customer-centric messaging',
    },
    {
      icon: 'vision',
      title: 'Operationalizing your Vision',
      description: 'to transform strategic plans into actionable roadmaps and measureable outcomes',
    },
    {
      icon: 'sales',
      title: 'Sales Enablement Support',
      description: 'that bridges marketing and sales with compelling narratives and conversion tools',
    },
    {
      icon: 'gtm',
      title: 'Go-To-Market Strategy & Execution',
      description: 'that accelerates market entry and revenue growth',
    },
    {
      icon: 'brand',
      title: 'Brand Storytelling & Narrative Creation',
      description: 'that captures your unique story and perspective',
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
      className="section-padding bg-teal-DEFAULT"
      aria-label="Services"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-beige-DEFAULT text-center mb-12 uppercase">
          The Collective Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card bg-transparent border-0 rounded-xl p-8 opacity-0"
            >
              <h3 className="text-xl font-bold text-beige-DEFAULT mb-3">
                {service.title}
              </h3>
              <p className="text-beige-DEFAULT/90 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-coral-DEFAULT text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-light transition-colors"
          >
            What can we help with?
          </a>
        </div>
      </div>
    </section>
  )
}
