import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Marketing Services — Fractional CMO & Product Marketing | Greenwood Marketing Collective',
  description: 'Comprehensive marketing services including fractional CMO leadership, product marketing, go-to-market strategy, and sales enablement for growth-stage companies.',
}

const services = [
  {
    title: 'Fractional CMO Leadership',
    subtitle: 'Executive-level strategy, team development, and performance accountability',
    description: 'Provide C-level marketing leadership without the full-time investment. Includes strategic planning, marketing budget optimization, team development, performance measurement, and board-level reporting. Bridge the gap between vision and execution while building scalable marketing capabilities for growth-stage companies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
    imageSide: 'left' as const,
  },
  {
    title: 'Product Marketing Excellence',
    subtitle: 'Positioning, competitive differentiation, and customer-centric messaging',
    description: 'Drive market success through strategic product positioning, competitive analysis, and go-to-market planning. Develop buyer personas, create messaging frameworks, conduct market research, and build sales enablement materials that connect your product\'s value with customer needs and market opportunities.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a0d7?w=800&h=600&fit=crop&q=80',
    imageSide: 'right' as const,
  },
  {
    title: 'Go-To-Market Strategy & Execution',
    subtitle: 'Comprehensive market entry and revenue acceleration',
    description: 'Architect complete go-to-market strategies from market analysis to launch execution. Includes competitive positioning, channel strategy, pricing frameworks, launch sequencing, and performance measurement. Ensure your product captures market share from day one with coordinated messaging and execution across all touchpoints.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&q=80',
    imageSide: 'left' as const,
  },
  {
    title: 'Operationalizing Your Vision',
    subtitle: 'Transform strategic plans into actionable roadmaps and measurable outcomes',
    description: 'Convert high-level marketing vision into executable strategies with clear processes, timelines, and accountability measures. Translate abstract concepts into measurable, repeatable activities that drive consistent growth. Bridge the gap between ambitious goals and day-to-day marketing operations.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
    imageSide: 'right' as const,
  },
  {
    title: 'Sales Enablement Support',
    subtitle: 'Content, training, and tools that bridge marketing and sales',
    description: 'Create comprehensive sales support systems including content development, training programs, and process alignment. Develop sales collateral, competitive battlecards, objection handling guides, and buyer journey materials that empower sales teams to have knowledge-based interactions with prospects and close more deals.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
    imageSide: 'left' as const,
  },
  {
    title: 'Brand Storytelling & Narrative Creation',
    subtitle: 'Compelling narratives that capture your unique story and perspective',
    description: 'Uncover and articulate the authentic narrative that makes your business unique. Transform your company\'s history, values, and vision into coherent stories that resonate with your audience, create emotional connections with customers, differentiate you from competitors, and provide clear direction for all marketing efforts.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
    imageSide: 'right' as const,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-20">
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&q=80"
              alt="Modern city buildings"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative z-10 container-custom px-5 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white uppercase tracking-wide">
              SOLUTIONS FOR SUCCESS
            </h1>
          </div>
          {/* Organic Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-24">
              <path d="M0,100 C200,80 400,60 600,70 C800,80 1000,90 1200,85 C1300,82.5 1400,85 1440,90 L1440,100 L0,100 Z" fill="#e1dace"/>
            </svg>
          </div>
        </section>
      </div>

      {/* Services Sections */}
      <section className="section-padding bg-cream brand-pattern-subtle">
        <div className="container-custom">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`mb-16 md:mb-24 last:mb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className={`relative h-72 md:h-96 w-full ${index % 2 === 0 ? 'organic-shape' : 'organic-shape-alt'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mb-3 uppercase leading-tight">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-coral italic mb-4 font-body">
                  {service.subtitle}
                </p>
                <p className="text-base md:text-lg text-text-primary leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hourly Sessions Section */}
      <section className="section-padding bg-coral text-white relative overflow-hidden">
        {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 right-0 -mt-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0 C200,20 400,40 600,35 C800,30 1000,20 1200,25 C1300,27.5 1400,25 1440,30 L1440,0 L0,0 Z" fill="#e1dace"/>
          </svg>
        </div>
        <div className="container-custom pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 uppercase">
                HOURLY SESSIONS
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-lg md:text-xl font-semibold font-body">
                  Need clarity on your marketing - but not quite ready for a full project or retainer?
                </p>
                <p className="text-base md:text-lg leading-relaxed font-body">
                  Book a focused 1:1 session to tackle your biggest marketing questions, get expert insight, and walk away with next steps you can actually implement.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-body">
                  Whether you're navigating a rebrand, launching a new product, or just need an outside eye on your messaging - we'll use this time to get you unstuck and moving forward.
                </p>
                <Link
                  href="/hourlysessions"
                  className="btn-coral inline-block mt-4"
                >
                  View our options & pricing
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80"
                alt="Collaborative work session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Quote Section */}
      <section className="section-padding bg-gradient-to-br from-navy via-deep-teal to-mist-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-64 h-64 bg-coral rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white italic leading-relaxed">
            "Authenticity is the cornerstone of memorable brands. We help you express yours with confidence."
          </p>
        </div>
      </section>

      {/* Meet Your CMO Section */}
      <section className="section-padding bg-deep-teal text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-12 uppercase text-center leading-tight">
            MEET YOUR FRACTIONAL CMO & PRODUCT MARKETING LEADER
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&q=80"
                alt="Courtney Greenwood"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">COURTNEY GREENWOOD</h3>
                <p className="text-lg md:text-xl text-white/80 font-body">Founder & Owner</p>
              </div>
              <div className="space-y-4">
                <p className="text-base md:text-lg leading-relaxed font-body">
                  Is your growth-stage company ready to scale its marketing impact? Perhaps you need C-level marketing leadership without the full-time investment. Maybe your product needs stronger market positioning and go-to-market execution. Or maybe you have an ambitious vision that needs to be operationalized into measurable results. That's exactly where <span className="text-coral font-semibold">Greenwood Marketing Collective</span> delivers.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-body">
                  We provide fractional CMO expertise and product marketing leadership that transforms marketing from a cost center into your primary growth engine. From strategic planning and team development to product positioning and sales enablement, we bring the executive-level thinking and hands-on execution to accelerate your market success.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-body">
                  Backed by over 15+ years of product marketing and strategic leadership experience, with a proven track record of turning innovative visions into measurable business outcomes. No theoretical frameworks or generic playbooks—just strategic, results-driven marketing leadership with the operational excellence to make it happen.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-semibold font-body">
                  Let's transform your marketing vision into sustainable growth.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-secondary border-cream text-cream hover:bg-cream hover:text-deep-teal inline-block mt-4"
              >
                Ready to Jump In?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
