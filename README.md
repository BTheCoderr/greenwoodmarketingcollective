# Greenwood Marketing Collective Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Sticky header with scroll effects
- ✅ Smooth animations and scroll-triggered effects
- ✅ SEO optimized with meta tags and structured data
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
greenWoodMarketingCollective/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with Header/Footer
│   └── page.tsx             # Homepage
├── components/
│   ├── Layout/
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Navigation.tsx   # Desktop navigation
│   │   ├── MobileMenu.tsx   # Mobile hamburger menu
│   │   └── Footer.tsx       # Footer component
│   └── Sections/
│       ├── Hero.tsx         # Hero section
│       ├── Intro.tsx        # Introduction section
│       ├── ServicesGrid.tsx # Services grid
│       ├── PricingCards.tsx # Pricing/packages section
│       ├── ValueSection.tsx # Value proposition sections
│       ├── BlogPreview.tsx  # Blog preview section
│       └── Newsletter.tsx   # Newsletter signup
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Customization

### Quick Start

1. **Update Site Configuration**: Edit `config/site.ts` to update:
   - Contact information (email, phone)
   - Social media links
   - Site URL
   - SEO metadata

2. **Customize Colors**: Edit `tailwind.config.js` to change the color palette

3. **Update Content**: Edit component files in `components/Sections/`

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed customization guide.

### Configuration File

All site-wide settings are in `config/site.ts`:
- Site name and tagline
- Contact information
- Social media links
- SEO settings

This makes it easy to update your site without digging through multiple files.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Greenwood Marketing Collective. All rights reserved.
