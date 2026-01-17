'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section-padding bg-primary-light" aria-label="Newsletter">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-6">
          Stay in the loop
        </h2>
        
        <p className="text-text-secondary mb-8">
          Get marketing insights, tips, and updates delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-primary transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="btn-primary px-8 py-4 whitespace-nowrap"
          >
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-primary font-semibold">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  )
}
