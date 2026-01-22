import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-navy text-cream section-padding brand-pattern-subtle"
      role="contentinfo"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 uppercase text-cream">
              {siteConfig.name}
            </h3>
            <p className="text-cream/80 mb-3 font-body leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-cream/60 text-sm font-body">
              Based in {siteConfig.contact.location}, {siteConfig.contact.workingArea.toLowerCase()}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-cream uppercase mb-4 text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Packages & Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-cream uppercase mb-4 text-sm tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-cream/80 hover:text-cream transition-colors font-body"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-cream/80 hover:text-cream transition-colors font-body"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/hourlysessions"
                  className="text-cream/80 hover:text-cream transition-colors font-body"
                >
                  Hourly Sessions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-cream uppercase mb-4 text-sm tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-cream/80 hover:text-cream transition-colors font-body break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}`}
                  className="text-cream/80 hover:text-cream transition-colors font-body"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-cream/80 hover:text-cream transition-transform hover:scale-125"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                {siteConfig.social.twitter && (
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-cream/80 hover:text-cream transition-transform hover:scale-125"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-cream/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm font-body">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-cream/60 hover:text-cream transition-colors font-body">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cream/60 hover:text-cream transition-colors font-body">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
