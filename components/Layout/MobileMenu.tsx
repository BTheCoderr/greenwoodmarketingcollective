'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Packages & Pricing', href: '/pricing' },
    {
      label: 'Industries',
      href: '/industries',
      submenu: [
        { label: 'Health Tech', href: '/industries/health-tech' },
        { label: 'Healthcare Providers', href: '/industries/healthcare-providers' },
        { label: 'Non-Profits', href: '/industries/non-profits' },
      ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu - Slide in from right */}
      <div 
        className={`fixed top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-[95] lg:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="p-6" aria-label="Mobile navigation">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-navy hover:text-coral transition-colors"
            aria-label="Close menu"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-2 mt-8">
            {navItems.map((item) => (
              <li key={item.label}>
                {'submenu' in item ? (
                  <div>
                    <Link
                      href={item.href}
                      className="block py-3 text-navy hover:text-coral transition-colors font-semibold font-body text-lg"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="block py-2 text-text-secondary hover:text-coral transition-colors font-body"
                            onClick={onClose}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-navy hover:text-coral transition-colors font-semibold font-body text-lg"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-8 pt-6 border-t border-border">
            <Link
              href="/contact"
              className="btn-primary w-full text-center block"
              onClick={onClose}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
