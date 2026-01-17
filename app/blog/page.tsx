import BlogPreview from '@/components/Sections/BlogPreview'

export const metadata = {
  title: 'Marketing Insights & Thought Leadership | Greenwood Marketing Collective Blog',
  description: 'Expert insights on fractional CMO leadership, product marketing, go-to-market strategy, and marketing operations for scaling companies.',
}

export default function BlogPage() {
  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              Blog
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Insights, strategies, and thought leadership on marketing excellence
            </p>
          </div>
        </div>
      </div>
      <BlogPreview />
    </>
  )
}
