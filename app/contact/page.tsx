'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <div className="pt-20">
        <div className="section-padding bg-primary-light">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Ready to transform your marketing? Let's discuss how we can help.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-text-primary mb-1">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">Phone</p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">Location</p>
                  <p className="text-text-secondary">
                    {siteConfig.contact.location}
                  </p>
                  <p className="text-text-secondary text-sm mt-1">
                    {siteConfig.contact.workingArea}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
                {submitted && (
                  <p className="text-primary font-semibold text-center">
                    Thank you! We'll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
