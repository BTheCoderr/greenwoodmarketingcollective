import Hero from '@/components/Sections/Hero'
import ScrollingBanner from '@/components/Sections/ScrollingBanner'
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
      <ScrollingBanner />
      <Intro />
      <ServicesGrid />
      <PricingCards />
      <ValueSection
        headline="Ready to operationalize your vision?"
        content="Greenwood Marketing Collective specializes in taking your ambitious marketing vision and building the strategic framework, processes, and team capabilities to make it reality. We transform high-level concepts into executable plans that drive consistent, measurable growth."
        ctaText="Level-Up Today"
        imageSide="right"
        background="dark-blue"
      />
      <ValueSection
        headline="Product Marketing Mastery"
        subheadline="Positioning that captures market share"
        content="We architect comprehensive product marketing strategies that position your solution as the category leader. From market research and competitive analysis to messaging frameworks and sales enablement, we ensure your product story resonates with buyers and drives conversion at every stage of the customer journey."
        ctaText="Let's Chat"
        imageSide="left"
        background="dark-teal"
      />
      <BlogPreview />
      <Newsletter />
    </>
  )
}
