export const metadata = {
  title: 'Non-Profit Marketing Services | Greenwood Marketing Collective',
  description: 'Marketing strategies for mission-driven organizations that amplify impact and drive meaningful change.',
}

export default function NonProfitsPage() {
  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              Non-Profits
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Marketing strategies for mission-driven organizations
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Non-profit organizations need marketing strategies that amplify their mission, engage supporters, and drive meaningful impact—all while maximizing limited resources.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We help non-profits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
              <li>Tell compelling stories that inspire action</li>
              <li>Build supporter engagement and donor relationships</li>
              <li>Develop fundraising campaigns that drive results</li>
              <li>Amplify impact through strategic communications</li>
              <li>Maximize marketing effectiveness with limited budgets</li>
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
