'use client'

import { useState } from 'react'

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Packages & Pricing', href: '/pricing' },
    {
      label: 'Industries',
      href: '#',
      dropdown: [
        { label: 'Health Tech', href: '/industries/health-tech' },
        { label: 'Healthcare Providers', href: '/industries/healthcare-providers' },
        { label: 'Non-Profits', href: '/industries/non-profits' },
      ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <ul className="flex items-center gap-6">
      {navItems.map((item) => (
        <li key={item.label} className="relative">
          {item.dropdown ? (
            <div
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                className={`transition-colors duration-300 hover:text-coral focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2 rounded font-body ${
                  isScrolled ? 'text-navy' : 'text-white'
                }`}
                aria-expanded={isIndustriesOpen}
                aria-haspopup="true"
              >
                {item.label} ▼
              </button>
              {isIndustriesOpen && (
                <ul
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50"
                  role="menu"
                >
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.label}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-navy hover:bg-cream hover:text-deep-teal transition-colors font-body"
                        role="menuitem"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <a
              href={item.href}
              className={`transition-colors duration-300 hover:text-coral focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2 rounded font-body ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
