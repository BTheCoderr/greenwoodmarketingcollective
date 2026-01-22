import Hero from '@/components/Sections/Hero'
import Intro from '@/components/Sections/Intro'
import ServicesGrid from '@/components/Sections/ServicesGrid'
import PricingCards from '@/components/Sections/PricingCards'
import ClientLogos from '@/components/Sections/ClientLogos'
import Testimonials from '@/components/Sections/Testimonials'
import Carousel from '@/components/Sections/Carousel'
import BlogPreview from '@/components/Sections/BlogPreview'
import Newsletter from '@/components/Sections/Newsletter'

// Types
interface ClientLogo {
  id: string
  name: string
  logo: string
  alt: string
}

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

interface CarouselItem {
  id: string
  image: string
  title: string
  description: string
  ctaText: string
  ctaHref: string
}

// Sample carousel items - replace with real data
const carouselItems: CarouselItem[] = [
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

// Client logos - Add real logos when available
const clientLogos: ClientLogo[] = [
  // Placeholder - replace with actual client logos
  // {
  //   id: '1',
  //   name: 'Client Name',
  //   logo: '/logos/client-logo.png',
  //   alt: 'Client Name logo',
  // },
]

// Testimonials - Add more quotes when available
const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Greenwood Marketing Collective transformed our go-to-market strategy. Within 6 months, we saw a 40% increase in qualified leads and closed our Series A. Their fractional CMO approach gave us the leadership we needed without the overhead.',
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'HealthTech Innovations',
  },
  {
    id: '2',
    quote: "Courtney's product marketing expertise helped us reposition our solution and capture 25% more market share. The strategic framework she built continues to guide our marketing decisions today.",
    author: 'Michael Rodriguez',
    role: 'VP of Marketing',
    company: 'SaaS Solutions Inc.',
  },
  {
    id: '3',
    quote: 'Working with Greenwood Marketing Collective was like having a CMO on demand. They helped us build our marketing team, establish processes, and drive measurable growth. Best investment we made.',
    author: 'Jennifer Park',
    role: 'Founder',
    company: 'Mission-Driven Nonprofit',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos logos={clientLogos} />
      <Intro />
      <ServicesGrid />
      <PricingCards />
      <Testimonials testimonials={testimonials} autoplay={true} autoplayInterval={6000} />
      <Carousel items={carouselItems} autoplay={true} autoplayInterval={6000} />
      <BlogPreview />
      <Newsletter />
    </>
  )
}
