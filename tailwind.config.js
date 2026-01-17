/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          dark: '#1a1a2e',
          light: '#F8F9FA',
          warm: '#F5F1EB',
          accent: '#D4A574',
        },
        text: {
          primary: '#1a1a2e',
          secondary: '#4a4a4a',
          tertiary: '#666666',
          light: '#999999',
        },
        background: {
          warm: '#F5F1EB',
          cream: '#FAF8F5',
          light: '#F8F9FA',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Merriweather', 'serif'],
        sans: ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '80px',
        'section-mobile': '40px',
      },
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
