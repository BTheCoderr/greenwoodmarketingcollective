export const metadata = {
  title: 'About Us — Greenwood Marketing Collective',
  description: 'Learn about Greenwood Marketing Collective and our mission to provide fractional CMO and product marketing excellence for scaling companies.',
}

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              About Greenwood Marketing Collective
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Bold Ideas. Authentic Connections. Results That Matter.
            </p>
          </div>
        </div>
      </div>
      
      <div className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary-dark mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Growth-stage companies need marketing leadership that bridges strategy and execution. At Greenwood Marketing Collective, we provide fractional CMO expertise and product marketing excellence that turns your product vision into market success.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We partner with scaling organizations that need C-level marketing leadership without the full-time investment. Our approach combines strategic oversight with hands-on execution, ensuring your product finds its market, your messaging resonates, and your go-to-market efforts drive sustainable growth.
            </p>
            
            <h2 className="text-3xl font-serif font-bold text-primary-dark mb-6 mt-12">
              Our Approach
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We believe in authentic connections and measurable results. Every engagement is tailored to your unique needs, combining deep industry expertise with practical, actionable strategies that drive growth.
            </p>
            
            <div className="mt-12 text-center">
              <a href="/contact" className="btn-primary inline-block">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
