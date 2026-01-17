import PricingCards from '@/components/Sections/PricingCards'

export const metadata = {
  title: 'Packages & Pricing — Fractional CMO Services | Greenwood Marketing Collective',
  description: 'Three partnership levels designed to meet you where you are. Strategic Foundation, Growth Accelerator, and Market Mastery packages.',
}

export default function PricingPage() {
  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              Packages & Pricing
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Three partnership levels designed to meet you where you are
            </p>
          </div>
        </div>
      </div>
      <PricingCards />
      <div className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-dark mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Contact us to discuss which package is right for your business and get a customized proposal.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </>
  )
}
