'use client'

import { useEffect, useRef } from 'react'

interface ValueSectionProps {
  headline: string
  content: string
  ctaText: string
  imageSide: 'left' | 'right'
  background?: 'white' | 'light'
}

export default function ValueSection({
  headline,
  content,
  ctaText,
  imageSide,
  background = 'white',
}: ValueSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-fade-in-up')
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

  const bgClass = background === 'light' ? 'bg-primary-light' : 'bg-white'

  return (
    <section ref={sectionRef} className={`section-padding ${bgClass} opacity-0`}>
      <div className="container-custom">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            imageSide === 'right' ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {/* Image */}
          <div
            className={`order-1 ${
              imageSide === 'right' ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="relative w-full h-64 md:h-96 lg:h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary-dark/20">
              {/* Placeholder for image - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-text-tertiary">
                <span className="text-6xl">📈</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`order-2 ${
              imageSide === 'right' ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-6">
              {headline}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {content}
            </p>
            <a href="/contact" className="btn-primary inline-block">
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
