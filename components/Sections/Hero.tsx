'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
          alt="Modern office workspace"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom px-5">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold mb-6 uppercase tracking-tight animate-fade-in-up">
          Fractional CMO & Product Marketing Leadership
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white mb-10 max-w-4xl mx-auto font-sans animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Bold Ideas. Authentic Connections. Results That Matter.
        </p>
      </div>
    </section>
  )
}
