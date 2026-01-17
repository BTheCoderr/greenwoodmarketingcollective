export const metadata = {
  title: 'Healthcare Provider Marketing Services | Greenwood Marketing Collective',
  description: 'Marketing support for independent practices and healthcare organizations.',
}

export default function HealthcareProvidersPage() {
  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              Healthcare Providers
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Marketing support for independent practices and healthcare organizations
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Independent healthcare practices and organizations need marketing strategies that drive patient engagement while maintaining the trust and credibility essential in healthcare.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We help healthcare providers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
              <li>Develop patient acquisition and retention strategies</li>
              <li>Build brand awareness in local markets</li>
              <li>Create content that educates and engages</li>
              <li>Optimize digital presence and online reputation</li>
              <li>Navigate HIPAA and compliance considerations</li>
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
