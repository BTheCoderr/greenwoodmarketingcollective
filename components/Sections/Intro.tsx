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
      className="section-padding bg-cream brand-pattern-subtle"
      aria-label="Introduction"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headline */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-0 uppercase leading-tight">
              Transform Your<br />
              Marketing Vision<br />
              Into Measurable<br />
              Results
            </h2>
          </div>
          
          {/* Right Column - Text - More Approachable & Warm */}
          <div>
            <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-6 font-body">
              Growth-stage companies need marketing leadership that bridges strategy and execution. At{' '}
              <span className="font-semibold text-deep-teal">Greenwood Marketing Collective</span>, we provide fractional CMO expertise and product marketing excellence that turns your product vision into market success.
            </p>
            <p className="text-lg md:text-xl text-text-primary leading-relaxed font-body">
              We partner with scaling organizations that need C-level marketing leadership without the full-time investment. Think of us as your strategic partner—someone you can truly break bread with while we help make your marketing dreams happen. Our approach combines strategic oversight with hands-on execution, ensuring your product finds its market, your messaging resonates, and your go-to-market efforts drive sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
