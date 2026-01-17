'use client'

import { useEffect, useRef } from 'react'

interface Service {
  icon: string
  title: string
  description: string
}

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  const services: Service[] = [
    {
      icon: '👔',
      title: 'Fractional CMO Leadership',
      description: 'Strategic marketing leadership on a flexible, fractional basis. Get C-level expertise without the full-time commitment.',
    },
    {
      icon: '📊',
      title: 'Product Marketing Excellence',
      description: 'Position your products for market success with data-driven strategies and compelling narratives that resonate.',
    },
    {
      icon: '🎯',
      title: 'Operationalizing Your Vision',
      description: 'Turn your strategic vision into actionable marketing plans with clear roadmaps and measurable outcomes.',
    },
    {
      icon: '💼',
      title: 'Sales Enablement Support',
      description: 'Empower your sales team with the tools, messaging, and materials they need to close more deals.',
    },
    {
      icon: '🚀',
      title: 'Go-To-Market Strategy & Execution',
      description: 'Launch products successfully with comprehensive GTM strategies that align teams and drive market adoption.',
    },
    {
      icon: '✍️',
      title: 'Brand Storytelling & Narrative Creation',
      description: 'Craft authentic brand stories that connect with your audience and differentiate you in competitive markets.',
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
      className="section-padding bg-white"
      aria-label="Services"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-dark text-center mb-12">
          The Collective Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card bg-white border border-gray-200 rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 opacity-0"
            >
              <div className="text-5xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {service.title}
              </h3>
              <p className="text-text-tertiary leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
