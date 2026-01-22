/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Brand Colors - Exact from Brand Guide
      colors: {
        'deep-teal': '#2f535d',
        'cream': '#e1dace',
        'mist-blue': '#b5c1d2',
        'gold': '#ca9b2e',
        'navy': '#223659',
        'coral': '#df7464',
        // Semantic aliases
        primary: {
          DEFAULT: '#2f535d',
          hover: '#223659',
        },
        secondary: {
          DEFAULT: '#df7464',
        },
        accent: {
          DEFAULT: '#ca9b2e',
        },
        background: {
          DEFAULT: '#e1dace',
          light: '#f5f3f0',
        },
        text: {
          primary: '#223659',
          secondary: '#4a5568',
        },
        border: {
          DEFAULT: '#e2e8f0',
        },
        // Legacy support (will be phased out)
        teal: {
          DEFAULT: '#2f535d',
          dark: '#223659',
          light: '#b5c1d2',
        },
        beige: {
          DEFAULT: '#e1dace',
          light: '#f5f3f0',
        },
      },
      // Typography - Brand Fonts
      fontFamily: {
        heading: ['Tenez', 'serif'], // Bold, ALL CAPS
        body: ['Montserrat', 'sans-serif'], // Regular
        // Legacy support
        serif: ['Tenez', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.875rem', { lineHeight: '1.3' }],
      },
      // Spacing
      spacing: {
        'section': '5rem', // 80px desktop
        'section-mobile': '3rem', // 48px mobile
        'section-tablet': '4rem', // 64px tablet
      },
      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem', // 20px
          sm: '1.5rem', // 24px
          lg: '2rem', // 32px
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px', // Max width 1200px
        },
      },
      // Border Radius
      borderRadius: {
        'button': '0.75rem', // 12px
        'card': '1rem', // 16px
      },
      // Shadows
      boxShadow: {
        'card': '0 4px 12px rgba(34, 54, 89, 0.08)',
        'card-hover': '0 12px 24px rgba(34, 54, 89, 0.12)',
      },
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
