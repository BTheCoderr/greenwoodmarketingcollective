import ServicesGrid from '@/components/Sections/ServicesGrid'
import Intro from '@/components/Sections/Intro'

export const metadata = {
  title: 'Marketing Services — Fractional CMO & Product Marketing | Greenwood Marketing Collective',
  description: 'Comprehensive marketing services including fractional CMO leadership, product marketing, go-to-market strategy, and sales enablement for growth-stage companies.',
}

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              Our Services
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive marketing solutions designed to drive growth and market success for scaling companies.
            </p>
          </div>
        </div>
      </div>
      <ServicesGrid />
      <div className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-dark mb-6">
            What can we help with?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Whether you need strategic leadership, product marketing expertise, or complete go-to-market execution, we partner with you to deliver measurable results.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Get Started
          </a>
        </div>
      </div>
    </>
  )
}
