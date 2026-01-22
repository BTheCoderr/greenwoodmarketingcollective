'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import { siteConfig } from '@/config/site'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-heading font-bold text-navy transition-colors duration-300 hover:text-deep-teal"
          aria-label={`${siteConfig.name} - Home`}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Navigation isScrolled={true} />
          <Link
            href="/contact"
            className="btn-primary"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy hover:text-coral transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}
