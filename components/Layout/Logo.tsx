'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 transition-opacity duration-300 hover:opacity-80 ${className}`}
      aria-label={`${siteConfig.name} - Home`}
    >
      {/* Logo Image */}
      <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
        <Image
          src="/logo.png"
          alt={`${siteConfig.name} logo`}
          fill
          className="object-contain"
          sizes="48px"
          priority
        />
      </div>
      {/* Logo Text */}
      {showText && (
        <div className="hidden md:block">
          <div className="text-lg md:text-xl font-heading font-bold text-navy leading-tight">
            GREENWOOD
          </div>
          <div className="text-xs md:text-sm font-body text-navy/70 uppercase tracking-wider">
            MARKETING COLLECTIVE
          </div>
        </div>
      )}
    </Link>
  )
}
