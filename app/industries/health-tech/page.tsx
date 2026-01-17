export const metadata = {
  title: 'Health Tech Marketing Services | Greenwood Marketing Collective',
  description: 'Marketing expertise for health technology companies. We help navigate complex markets and drive adoption.',
}

export default function HealthTechPage() {
  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              Health Tech
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Marketing expertise for innovative health technology companies
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Health technology companies face unique marketing challenges. From navigating complex regulatory environments to building trust with healthcare providers and patients, success requires specialized expertise and strategic positioning.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We help health tech companies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
              <li>Position innovative solutions in competitive markets</li>
              <li>Develop messaging that resonates with healthcare providers</li>
              <li>Create go-to-market strategies that drive adoption</li>
              <li>Build brand awareness and thought leadership</li>
              <li>Navigate regulatory and compliance considerations</li>
            </ul>
            <div className="mt-12 text-center">
              <a href="/contact" className="btn-primary inline-block">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
