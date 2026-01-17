export const metadata = {
  title: 'Industries We Serve — Greenwood Marketing Collective',
  description: 'We specialize in marketing for Health Tech, Healthcare Providers, and Non-Profit organizations.',
}

export default function IndustriesPage() {
  const industries = [
    {
      slug: 'health-tech',
      title: 'Health Tech',
      description: 'We help health technology companies navigate complex markets, position innovative solutions, and drive adoption among healthcare providers and patients.',
    },
    {
      slug: 'healthcare-providers',
      title: 'Healthcare Providers',
      description: 'Supporting independent practices and healthcare organizations with strategic marketing that drives patient engagement and practice growth.',
    },
    {
      slug: 'non-profits',
      title: 'Non-Profits',
      description: 'Empowering mission-driven organizations with marketing strategies that amplify impact, engage supporters, and drive meaningful change.',
    },
  ]

  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Specialized marketing expertise for industries we know best
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                className="border border-gray-200 rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-2xl font-serif font-bold text-primary-dark mb-4">
                  {industry.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {industry.description}
                </p>
                <a
                  href={`/industries/${industry.slug}`}
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
