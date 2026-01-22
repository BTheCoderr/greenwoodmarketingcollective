'use client'

import Image from 'next/image'

interface ClientLogo {
  id: string
  name: string
  logo: string
  alt: string
}

interface ClientLogosProps {
  logos: ClientLogo[]
}

export default function ClientLogos({ logos }: ClientLogosProps) {
  if (!logos || logos.length === 0) {
    // Placeholder for when logos are added
    return (
      <section className="section-padding bg-cream/50">
        <div className="container-custom">
          <p className="text-center text-text-secondary font-body italic">
            Client logos coming soon...
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-cream/50 brand-pattern-subtle" aria-label="Trusted by">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-navy uppercase mb-12">
          TRUSTED BY GROWTH-FOCUSED COMPANIES
        </h2>
        
        {/* Logos Grid - Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center w-full h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={client.logo}
                alt={client.alt || `${client.name} logo`}
                width={150}
                height={60}
                className="object-contain max-w-full max-h-full"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
