'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  title: string
  date: string
  excerpt: string
  image?: string
  slug: string
}

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  const blogPosts: BlogPost[] = [
    {
      title: 'From Fireside to Boardrooms: The Timeless Power of Storytelling',
      date: 'Aug 28, 2025',
      excerpt: 'Exploring how authentic narratives drive business success and create lasting customer connections.',
      slug: 'storytelling-power',
    },
    {
      title: 'The Ship Turner: Why Every Project Needs a Navigator Who Sees the Big Picture',
      date: 'Aug 17, 2025',
      excerpt: 'Strategic leadership that guides complex projects to successful outcomes.',
      slug: 'ship-turner-navigator',
    },
    {
      title: 'The Hidden Cost of Outdated Marketing for Independent Eye Care Practices',
      date: 'Jul 5, 2025',
      excerpt: 'How modern marketing strategies can transform healthcare practice growth.',
      slug: 'eye-care-marketing',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.blog-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0')
                card.classList.add('animate-fade-in-up')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white brand-pattern-subtle"
      aria-label="Blog posts"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy uppercase mb-4 md:mb-0">
            LATEST INSIGHTS & STRATEGY
          </h2>
          <Link 
            href="/blog" 
            className="text-coral font-semibold hover:underline inline-flex items-center gap-2 font-body transition-all duration-200 group"
          >
            View All Articles
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="blog-card card opacity-0"
            >
              {/* Image */}
              <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${
                    index === 0 
                      ? '1552664730-d307ca884978' 
                      : index === 1 
                      ? '1551434678-e076c223a0d7' 
                      : '1556761175-4b46a572b786'
                  }?w=600&h=400&fit=crop&q=80`}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-text-secondary mb-3 font-body">
                  {post.date}
                </p>
                <h3 className="text-xl font-heading font-bold text-navy uppercase mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3 font-body">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-coral font-semibold hover:underline inline-flex items-center gap-2 font-body transition-all duration-200 group"
                >
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-secondary">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}
