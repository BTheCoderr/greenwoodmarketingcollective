'use client'

import { useEffect, useRef } from 'react'

interface BlogPost {
  title: string
  date: string
  excerpt: string
  image?: string
}

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  const blogPosts: BlogPost[] = [
    {
      title: 'The Future of Fractional CMO Leadership',
      date: 'March 15, 2024',
      excerpt:
        'Exploring how fractional CMO services are transforming marketing leadership for scaling companies.',
    },
    {
      title: 'Product Marketing: From Vision to Market Success',
      date: 'February 28, 2024',
      excerpt:
        'Key strategies for positioning products effectively and driving market adoption.',
    },
    {
      title: 'Go-to-Market Excellence: A Strategic Framework',
      date: 'February 10, 2024',
      excerpt:
        'A comprehensive guide to building and executing successful go-to-market strategies.',
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
      className="section-padding bg-white"
      aria-label="Blog posts"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-dark text-center mb-12">
          Insights & Thought Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="blog-card bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 opacity-0"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary-dark/10" />
              <div className="p-6">
                <p className="text-sm text-text-light mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {post.title}
                </h3>
                <p className="text-text-tertiary leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href="/blog"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="/blog" className="btn-secondary">
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  )
}
