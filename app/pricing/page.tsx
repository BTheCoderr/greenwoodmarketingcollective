import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Packages & Pricing — Fractional CMO Services | Greenwood Marketing Collective',
  description: 'Three partnership levels designed to meet you where you are. Strategic Foundation, Growth Accelerator, and Market Mastery packages.',
}

interface Package {
  title: string
  subtitle: string
  icon: string
  included: string[]
  timeline: string
  perfectFor: string[]
  pricing: string
  featured?: boolean
}

const packages: Package[] = [
  {
    title: 'Strategic Foundation',
    subtitle: 'Get clarity and direction',
    icon: 'clipboard',
    included: [
      'Comprehensive marketing audit and competitive analysis',
      'Brand messaging framework development',
      'Go-to-market strategy blueprint',
      'Customer journey mapping (2 key personas)',
      '90-day action plan with priorities',
      'Monthly strategy sessions (2 hours each for 3 months)',
      'Competitor positioning analysis',
    ],
    timeline: '6-8 weeks + 3 months of monthly check-ins',
    perfectFor: [
      'Early-stage companies needing direction',
      'Businesses planning a rebrand or pivot',
      'Teams with limited marketing experience',
      'Organizations wanting to reset their strategy',
    ],
    pricing: 'Starting at $6,500',
  },
  {
    title: 'Growth Accelerator',
    subtitle: 'Most Popular Strategy + execution + ongoing leadership',
    icon: 'lightbulb',
    included: [
      'Everything in Strategic Foundation',
      'Campaign idea creation & strategy',
      'Content strategy and messaging templates',
      'Marketing team coaching and development',
      'Fractional CMO support (15 hours/month for 6 months)',
      'Quarterly business reviews and strategy adjustments',
      'Direct access via Slack/email for strategic questions',
    ],
    timeline: '8-10 weeks + 6 months fractional support',
    perfectFor: [
      'Growing companies ready to scale marketing',
      'Product launches requiring ongoing support',
      'Teams needing fractional leadership',
      'Businesses with 6-figure+ marketing budgets',
    ],
    pricing: 'Starting at $10,500',
    featured: true,
  },
  {
    title: 'Market Mastery',
    subtitle: 'Full fractional CMO partnership',
    icon: 'presentation',
    included: [
      'Comprehensive fractional CMO partnership',
      'Full go-to-market launch management',
      'Advanced customer research and segmentation',
      'Multi-channel campaign development and execution',
      'Unlimited strategic consultation and support',
      'Crisis communication and reputation management',
      'Partnership and co-marketing strategy',
      'Custom scope based on your specific needs',
    ],
    timeline: 'Fully customized to business needs',
    perfectFor: [
      'Series A & beyond companies with complex needs',
      'Major product launches or market expansion',
      'Organizations requiring board-level marketing leadership',
      'Businesses with significant growth targets',
    ],
    pricing: 'Custom pricing based on scope',
  },
]

function Icon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    clipboard: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    lightbulb: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    presentation: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  }
  return <div className="text-teal-dark">{icons[name] || null}</div>
}

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-20">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
              alt="Partnership packages"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 container-custom px-5 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white uppercase tracking-tight">
              Partnership Packages & Investment
            </h1>
          </div>
        </section>
      </div>

      {/* Packages Section */}
      <section className="section-padding bg-beige-DEFAULT">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`bg-white rounded-xl p-8 ${pkg.featured ? 'ring-2 ring-coral-DEFAULT' : ''}`}
              >
                <div className="mb-6">
                  <Icon name={pkg.icon} />
                </div>
                <h2 className="text-2xl font-bold text-teal-dark mb-2 uppercase">
                  {pkg.title}
                </h2>
                <p className="text-text-secondary text-sm mb-6">{pkg.subtitle}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-text-primary mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    {pkg.included.map((item, index) => (
                      <li key={index} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-coral-DEFAULT mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="font-semibold text-text-primary mb-2">Timeline:</h3>
                  <p className="text-text-secondary text-sm">{pkg.timeline}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-text-primary mb-3">Perfect for:</h3>
                  <ul className="space-y-2">
                    {pkg.perfectFor.map((item, index) => (
                      <li key={index} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-coral-DEFAULT mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-2xl font-bold text-teal-dark">{pkg.pricing}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-coral-DEFAULT text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-light transition-colors"
            >
              Ready to start?
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-teal-dark text-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coral-DEFAULT mb-12 uppercase text-center">
            Why Choose Greenwood Marketing Collective?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">15+ Years of Product Marketing Expertise</strong> across technology, healthcare, and mission-driven organizations
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">Proven Results</strong> with launches that make immediate impact and campaigns that drive meaningful engagement
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">Strategic Partnership</strong> approach - we're invested in your success, not just completing projects
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">Industry Specialization</strong> in Technology & SaaS, Healthcare & Life Sciences, and Nonprofit sectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hourly Sessions Section */}
      <section className="section-padding bg-coral-DEFAULT text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase">
                Hourly Sessions
              </h2>
              <div className="space-y-6">
                <p className="text-xl font-semibold">
                  Need clarity on your marketing - but not quite ready for a full project or retainer?
                </p>
                <p className="text-lg leading-relaxed">
                  Book a focused 1:1 session to tackle your biggest marketing questions, get expert insight, and walk away with next steps you can actually implement.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're navigating a rebrand, launching a new product, or just need an outside eye on your messaging - we'll use this time to get you unstuck and moving forward.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors mt-4"
                >
                  View our options & pricing
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
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

      {/* Meet Your CMO Section */}
      <section className="section-padding bg-teal-DEFAULT text-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 uppercase text-center">
            Meet Your Fractional CMO & Product Marketing Leader
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&q=80"
                alt="Courtney Greenwood"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Courtney Greenwood</h3>
                <p className="text-xl text-white/80">Founder & Owner</p>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Is your growth-stage company ready to scale its marketing impact? Do you need C-level marketing leadership, stronger market positioning, or help operationalizing an ambitious vision? That's exactly where <span className="text-coral-DEFAULT font-semibold">Greenwood Marketing Collective</span> delivers.
                </p>
                <p className="text-lg leading-relaxed">
                  We provide fractional CMO expertise and product marketing leadership that transforms marketing from a cost center into your primary growth engine. From strategic planning and team development to product positioning and sales enablement, we bring the executive-level thinking and hands-on execution to accelerate your market success.
                </p>
                <p className="text-lg leading-relaxed">
                  Backed by over 15+ years of product marketing and strategic leadership experience, with a proven track record of turning innovative visions into measurable business outcomes. No theoretical frameworks or generic playbooks —just strategic, results-driven marketing leadership with the operational excellence to make it happen.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  Let's transform your marketing vision into sustainable growth.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block border-2 border-coral-DEFAULT text-coral-DEFAULT px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-DEFAULT hover:text-white transition-colors mt-4"
              >
                Ready to Jump In?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Quote Section */}
      <section className="section-padding bg-gradient-to-br from-teal-dark via-teal-DEFAULT to-teal-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-coral-DEFAULT rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-beige-DEFAULT rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white italic max-w-4xl mx-auto">
            "Authenticity is the cornerstone of memorable brands. We help you express yours with confidence."
          </p>
        </div>
      </section>
    </>
  )
}
