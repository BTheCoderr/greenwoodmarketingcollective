'use client'

import { useEffect, useRef } from 'react'

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="section-padding bg-primary-light"
      aria-label="Introduction"
    >
      <div className="container-custom max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-dark mb-8">
          Transform your marketing vision into measurable results.
        </h2>
        
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto">
          Growth-stage companies need marketing leadership that bridges strategy and execution. At{' '}
          <span className="font-semibold text-primary">Greenwood Marketing Collective</span>, we provide fractional CMO expertise and product marketing excellence that turns your product vision into market success. We partner with scaling organizations that need C-level marketing leadership without the full-time investment.
        </p>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-primary/20 mx-auto rounded-full" />
      </div>
    </section>
  )
}
