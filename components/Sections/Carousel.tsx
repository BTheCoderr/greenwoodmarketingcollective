'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CarouselItem {
  id: string
  image: string
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
}

interface CarouselProps {
  items: CarouselItem[]
  autoplay?: boolean
  autoplayInterval?: number
}

// Chevron Icons
const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

// Helper function for responsive visible cards
const getVisibleCards = (): number => {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth >= 1024) return 3 // Desktop: 3 cards
  if (window.innerWidth >= 768) return 2  // Tablet: 2 cards
  return 1 // Mobile: 1 card
}

export default function Carousel({ 
  items, 
  autoplay = true, 
  autoplayInterval = 6000 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [visibleCards, setVisibleCards] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Update visible cards on resize
  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards())
    }
    
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  // Autoplay logic
  useEffect(() => {
    if (!autoplay || isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoplayInterval)
    
    return () => clearInterval(interval)
  }, [autoplay, isPaused, autoplayInterval, items.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
        setIsPaused(true)
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % items.length)
        setIsPaused(true)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [items.length])

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    }
    setIsPaused(true)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
    setIsPaused(true)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    setIsPaused(true)
  }

  // Calculate card width percentage
  const cardWidth = 100 / visibleCards

  return (
    <section className="section-padding bg-mist-blue/20" aria-label="Featured case studies">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-navy uppercase mb-12">
          PROVEN RESULTS FOR GROWTH-FOCUSED COMPANIES
        </h2>
        
        <div
          ref={carouselRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Carousel"
          tabIndex={0}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}%)`,
              }}
            >
              {items.map((item) => (
                <CarouselCard 
                  key={item.id} 
                  item={item} 
                  width={`${cardWidth}%`}
                />
              ))}
            </div>
          </div>

          {/* Arrow Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-cream transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2"
            aria-label="Previous slide"
            type="button"
          >
            <ChevronLeftIcon className="w-6 h-6 text-deep-teal" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-cream transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2"
            aria-label="Next slide"
            type="button"
          >
            <ChevronRightIcon className="w-6 h-6 text-deep-teal" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Carousel pagination">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2 ${
                  index === currentIndex
                    ? 'bg-deep-teal w-8'
                    : 'bg-mist-blue w-2 hover:bg-deep-teal/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={index === currentIndex}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Carousel Card Component
function CarouselCard({ item, width }: { item: CarouselItem; width: string }) {
  return (
    <div
      className="flex-shrink-0 px-4"
      style={{ width }}
    >
      <div className="card h-full">
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-2xl font-heading font-bold text-navy uppercase mb-3">
          {item.title}
        </h3>
        <p className="text-base text-text-secondary mb-6 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        {item.ctaText && (
          <Link
            href={item.ctaHref || '#'}
            className="text-coral font-semibold hover:underline inline-flex items-center gap-2 transition-all duration-200 group"
          >
            {item.ctaText}
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  )
}
