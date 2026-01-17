import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Hourly Sessions — Marketing Consulting | Greenwood Marketing Collective',
  description: 'Book a focused 1:1 session to tackle your biggest marketing questions, get expert insight, and walk away with next steps you can actually implement.',
}

const sessionTypes = [
  {
    title: 'Strategy Session',
    duration: '90 minutes',
    price: '$450',
    description: 'Deep dive into your marketing strategy, positioning, or go-to-market planning. Walk away with a clear action plan and next steps.',
    includes: [
      'Pre-session questionnaire',
      '90-minute focused consultation',
      'Strategic recommendations',
      'Action plan document',
      'Follow-up email with resources',
    ],
  },
  {
    title: 'Messaging & Positioning Review',
    duration: '60 minutes',
    price: '$350',
    description: 'Get expert feedback on your messaging, positioning, or brand narrative. Refine your story to better resonate with your audience.',
    includes: [
      'Pre-session materials review',
      '60-minute consultation',
      'Messaging framework recommendations',
      'Written feedback document',
      'Quick-win action items',
    ],
  },
  {
    title: 'Marketing Audit & Assessment',
    duration: '2 hours',
    price: '$650',
    description: 'Comprehensive review of your current marketing efforts, identification of gaps, and prioritized recommendations for improvement.',
    includes: [
      'Pre-session audit of your materials',
      '2-hour deep-dive consultation',
      'Comprehensive audit report',
      'Prioritized recommendations',
      '30-day follow-up check-in',
    ],
  },
  {
    title: 'Team Coaching Session',
    duration: '90 minutes',
    price: '$500',
    description: 'Work directly with your marketing team to develop skills, align on strategy, or tackle specific challenges together.',
    includes: [
      'Pre-session team assessment',
      '90-minute team session',
      'Skill development plan',
      'Team action items',
      'Resource recommendations',
    ],
  },
]

export default function HourlySessionsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-20">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-coral-DEFAULT">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80"
              alt="Collaborative work"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 container-custom px-5 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white uppercase tracking-tight mb-6">
              Hourly Sessions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get expert marketing guidance without the commitment of a full project or retainer
            </p>
          </div>
        </section>
      </div>

      {/* Intro Section */}
      <section className="section-padding bg-beige-DEFAULT">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-dark mb-6">
              Need Clarity on Your Marketing?
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4">
              Not quite ready for a full project or retainer? Book a focused 1:1 session to tackle your biggest marketing questions, get expert insight, and walk away with next steps you can actually implement.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Whether you're navigating a rebrand, launching a new product, or just need an outside eye on your messaging - we'll use this time to get you unstuck and moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-dark text-center mb-12 uppercase">
            Session Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sessionTypes.map((session) => (
              <div
                key={session.title}
                className="bg-beige-DEFAULT rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-teal-dark">{session.title}</h3>
                  <span className="text-coral-DEFAULT font-bold text-xl">{session.price}</span>
                </div>
                <p className="text-text-secondary mb-2 font-semibold">{session.duration}</p>
                <p className="text-text-secondary mb-6 leading-relaxed">{session.description}</p>
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {session.includes.map((item, index) => (
                      <li key={index} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-coral-DEFAULT mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-beige-DEFAULT">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-dark text-center mb-12 uppercase">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-DEFAULT rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-teal-dark mb-3">Book Your Session</h3>
              <p className="text-text-secondary">
                Choose the session type that fits your needs and schedule a time that works for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-DEFAULT rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-teal-dark mb-3">Prepare & Connect</h3>
              <p className="text-text-secondary">
                Complete a brief pre-session questionnaire and share any relevant materials. Then we'll meet via video call.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-DEFAULT rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-teal-dark mb-3">Get Results</h3>
              <p className="text-text-secondary">
                Walk away with clear next steps, actionable recommendations, and a plan to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-teal-DEFAULT text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your session today and get the marketing clarity you need to move forward with confidence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-coral-DEFAULT text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-light transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </>
  )
}
