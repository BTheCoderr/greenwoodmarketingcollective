'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface ValueSectionProps {
  headline: string
  subheadline?: string
  content: string
  ctaText: string
  imageSide: 'left' | 'right'
  background?: 'white' | 'light' | 'cream' | 'warm' | 'dark-blue' | 'dark-teal'
}

export default function ValueSection({
  headline,
  subheadline,
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

  const getBgClass = () => {
    switch (background) {
      case 'light':
        return 'bg-primary-light'
      case 'cream':
        return 'bg-background-cream'
      case 'warm':
        return 'bg-background-warm'
      case 'dark-blue':
        return 'bg-teal-dark'
      case 'dark-teal':
        return 'bg-teal-DEFAULT'
      default:
        return 'bg-white'
    }
  }
  
  const bgClass = getBgClass()
  const isDark = background === 'dark-blue' || background === 'dark-teal'

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
            <div className="relative w-full h-64 md:h-96 lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src={imageSide === 'right' 
                  ? 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80'
                  : 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80'
                }
                alt={imageSide === 'right' ? 'Team collaboration and strategic planning' : 'Product marketing strategy and market positioning'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`order-2 ${
              imageSide === 'right' ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            {subheadline && (
              <p className={`text-sm uppercase tracking-wide mb-2 ${isDark ? 'text-coral-DEFAULT' : 'text-coral-DEFAULT'}`}>
                {subheadline}
              </p>
            )}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 uppercase ${isDark ? 'text-white' : 'text-primary-dark'}`}>
              {headline}
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-white' : 'text-text-secondary'}`}>
              {content}
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-coral-DEFAULT text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-light transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
