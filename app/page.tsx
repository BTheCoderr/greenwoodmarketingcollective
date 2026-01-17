import Hero from '@/components/Sections/Hero'
import Intro from '@/components/Sections/Intro'
import ServicesGrid from '@/components/Sections/ServicesGrid'
import PricingCards from '@/components/Sections/PricingCards'
import ValueSection from '@/components/Sections/ValueSection'
import BlogPreview from '@/components/Sections/BlogPreview'
import Newsletter from '@/components/Sections/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <PricingCards />
      <ValueSection
        headline="Ready to operationalize your vision?"
        content="Strategic implementation is where vision meets reality. We help you translate high-level goals into actionable marketing plans, clear processes, and measurable KPIs. Our fractional CMO approach ensures your marketing operations align with business objectives while maintaining flexibility for rapid iteration."
        ctaText="Level-Up Today"
        imageSide="right"
        background="white"
      />
      <ValueSection
        headline="Product Marketing Mastery"
        content="Effective product marketing goes beyond features—it's about positioning, buyer journeys, and market fit. We craft compelling narratives that resonate with your target audience, develop go-to-market strategies that drive adoption, and create sales enablement materials that convert. Our expertise spans from early-stage positioning to mature product launches."
        ctaText="Let's Chat"
        imageSide="left"
        background="light"
      />
      <BlogPreview />
      <Newsletter />
    </>
  )
}
