'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  logo?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  autoplayInterval?: number
}

export default function Testimonials({ 
  testimonials, 
  autoplay = true, 
  autoplayInterval = 6000 
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!autoplay || isPaused || testimonials.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoplayInterval)
    
    return () => clearInterval(interval)
  }, [autoplay, isPaused, autoplayInterval, testimonials.length])

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-deep-teal text-white" aria-label="Client testimonials">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center uppercase mb-12">
          WHAT OUR CLIENTS SAY
        </h2>
        
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-coral" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl font-body leading-relaxed text-center mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {currentTestimonial.logo && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                  <Image
                    src={currentTestimonial.logo}
                    alt={currentTestimonial.company}
                    width={64}
                    height={64}
                    className="object-contain p-2"
                  />
                </div>
              )}
              <div className="text-center md:text-left">
                <p className="font-semibold text-lg font-body">
                  {currentTestimonial.author}
                </p>
                <p className="text-white/80 font-body">
                  {currentTestimonial.role}
                </p>
                <p className="text-coral font-semibold font-body">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8" role="tablist">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsPaused(true)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-deep-teal ${
                    index === currentIndex
                      ? 'bg-coral w-8'
                      : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  type="button"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
