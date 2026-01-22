'use client'

import { useState, FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Handle newsletter subscription
    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    console.log('Subscribed:', email)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setSubmitted(true)
    setEmail('')
    setIsSubmitting(false)
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section-padding bg-cream brand-pattern-subtle" aria-label="Newsletter">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy uppercase mb-4">
          STAY IN THE LOOP
        </h2>
        
        <p className="text-lg text-text-secondary mb-8 font-body">
          Sign up with your email address to receive news and updates.
        </p>

        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-4"
          aria-label="Newsletter subscription"
        >
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
            disabled={isSubmitting}
            className="flex-1 px-5 py-3.5 border-2 border-border rounded-button text-base focus:outline-none focus:ring-2 focus:ring-deep-teal focus:border-deep-teal transition-colors font-body disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Email address"
            aria-required="true"
          />
          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className="btn-primary px-8 py-3.5 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : submitted ? 'Subscribed!' : 'Sign Up'}
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-deep-teal/10 border border-deep-teal/20 rounded-lg">
            <p className="text-deep-teal font-semibold font-body flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you for subscribing! Check your email to confirm.
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-text-secondary font-body">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  )
}
