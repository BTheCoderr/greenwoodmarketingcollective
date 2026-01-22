import Hero from '@/components/Sections/Hero'
import Intro from '@/components/Sections/Intro'
import ServicesGrid from '@/components/Sections/ServicesGrid'
import PricingCards from '@/components/Sections/PricingCards'
import Carousel from '@/components/Sections/Carousel'
import BlogPreview from '@/components/Sections/BlogPreview'
import Newsletter from '@/components/Sections/Newsletter'

// Sample carousel items - replace with real data
const carouselItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
    title: 'HealthTech Innovation Launch',
    description: 'Increased qualified leads by 40% and closed Series A within 6 months with strategic go-to-market execution.',
    ctaText: 'Read Case Study',
    ctaHref: '/case-studies/healthtech',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
    title: 'SaaS Product Repositioning',
    description: 'Captured 25% more market share through strategic positioning and customer-centric messaging framework.',
    ctaText: 'Read Case Study',
    ctaHref: '/case-studies/saas',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
    title: 'Nonprofit Growth Strategy',
    description: 'Built scalable marketing team and processes that drove measurable growth and increased donor engagement.',
    ctaText: 'Read Case Study',
    ctaHref: '/case-studies/nonprofit',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a0d7?w=800&h=600&fit=crop&q=80',
    title: 'B2B Enterprise Launch',
    description: 'Delivered comprehensive fractional CMO partnership that accelerated market entry and revenue growth.',
    ctaText: 'Read Case Study',
    ctaHref: '/case-studies/enterprise',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <PricingCards />
      <Carousel items={carouselItems} autoplay={true} autoplayInterval={6000} />
      <BlogPreview />
      <Newsletter />
    </>
  )
}
