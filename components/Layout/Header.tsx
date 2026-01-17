'use client'

import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import { siteConfig } from '@/config/site'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between h-20 md:h-20 lg:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-primary-dark' : 'text-white'
          }`}
          aria-label={`${siteConfig.name} - Home`}
        >
          {siteConfig.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Navigation isScrolled={isScrolled} />
          <a
            href="/contact"
            className={`btn-primary py-3 px-8 text-base ${
              isScrolled ? '' : 'bg-white text-primary-dark hover:bg-gray-100'
            }`}
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${
            isScrolled ? 'text-primary-dark' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
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
