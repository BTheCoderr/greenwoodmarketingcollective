'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface ValueSectionProps {
  headline: string
  content: string
  ctaText: string
  imageSide: 'left' | 'right'
  background?: 'white' | 'light' | 'cream' | 'warm'
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

  const getBgClass = () => {
    switch (background) {
      case 'light':
        return 'bg-primary-light'
      case 'cream':
        return 'bg-background-cream'
      case 'warm':
        return 'bg-background-warm'
      default:
        return 'bg-white'
    }
  }
  
  const bgClass = getBgClass()

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
