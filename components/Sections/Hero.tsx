'use client'

export default function Hero() {
  const offerings = [
    { text: 'Go-to-Market' },
    { text: 'Product Marketing Excellence' },
    { text: 'Fractional CMO Leadership' },
    { text: 'Vision Implementation' },
  ]

  return (
    <section
      className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] z-0" />
      
      {/* Optional: Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container-custom px-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
          Fractional CMO & Product Marketing Leadership
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Bold Ideas. Authentic Connections. Results That Matter.
        </p>

        {/* Core Offerings */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {offerings.map((offering, index) => (
            <div
              key={offering.text}
              className="bg-white/15 backdrop-blur-sm rounded-lg px-5 py-3 flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <span className="text-base md:text-lg font-medium">{offering.text}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href="/contact"
            className="btn-primary bg-white text-primary-dark hover:bg-gray-100 animate-fade-in-up"
            style={{ animationDelay: '1.1s' }}
          >
            Get Started
          </a>
          <a
            href="#intro"
            className="text-white underline hover:text-gray-200 transition-colors animate-fade-in-up"
            style={{ animationDelay: '1.3s' }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
