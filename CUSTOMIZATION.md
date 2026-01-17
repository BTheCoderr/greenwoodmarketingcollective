# Customization Guide

This guide will help you customize the website for your needs.

## 🎨 Quick Customization Checklist

- [ ] Update contact information
- [ ] Add your social media links
- [ ] Replace placeholder images
- [ ] Update site URL
- [ ] Customize colors (if needed)
- [ ] Add your logo/favicon
- [ ] Update content copy

## 📝 Step-by-Step Customization

### 1. Update Site Configuration

Edit `config/site.ts` to update:
- Site name and tagline
- Contact email and phone
- Social media links
- Site URL
- SEO metadata

```typescript
export const siteConfig = {
  name: 'Your Company Name',
  contact: {
    email: 'your@email.com',
    phone: '(555) 123-4567',
    // ...
  },
  // ...
}
```

### 2. Replace Images

#### Hero Section Background
- Option 1: Add image to `public/hero-bg.jpg`
- Option 2: Update gradient colors in `components/Sections/Hero.tsx`

#### Value Section Images
- Add images to `public/` folder
- Update `components/Sections/ValueSection.tsx` to use Next.js Image component

#### Blog Post Images
- Add featured images for blog posts
- Update `components/Sections/BlogPreview.tsx`

### 3. Customize Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',  // Your brand color
    dark: '#1a1a2e',
    light: '#F8F9FA',
  },
}
```

### 4. Add Your Logo

1. Add logo files to `public/`:
   - `logo.svg` or `logo.png`
   - `favicon.ico`
   - `apple-touch-icon.png`

2. Update `components/Layout/Header.tsx`:
```tsx
<Image 
  src="/logo.svg" 
  alt="Your Company" 
  width={150} 
  height={40}
/>
```

### 5. Update Content

All content is in component files:
- **Hero**: `components/Sections/Hero.tsx`
- **Intro**: `components/Sections/Intro.tsx`
- **Services**: `components/Sections/ServicesGrid.tsx`
- **Pricing**: `components/Sections/PricingCards.tsx`
- **Blog**: `components/Sections/BlogPreview.tsx`

### 6. Set Up Newsletter Integration

Update `components/Sections/Newsletter.tsx` to connect to your email service:
- Mailchimp
- ConvertKit
- SendGrid
- Or your preferred service

### 7. Add Analytics

1. Create `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

2. Add Google Analytics script to `app/layout.tsx` (optional)

### 8. Update Navigation Links

Edit `components/Layout/Navigation.tsx` to:
- Add/remove navigation items
- Update dropdown menus
- Change link destinations

## 🖼️ Image Recommendations

### Image Sizes
- **Hero Background**: 1920x1080px (or larger)
- **Value Sections**: 800x600px
- **Blog Thumbnails**: 600x400px
- **Logo**: 200x60px (or SVG)

### Image Formats
- Use **WebP** for best performance
- **SVG** for logos and icons
- **JPG/PNG** as fallbacks

### Image Optimization
Next.js automatically optimizes images. Use the `Image` component:

```tsx
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-the-fold images
/>
```

## 🎯 SEO Customization

### Update Meta Tags
Edit `app/layout.tsx` to customize:
- Page titles
- Meta descriptions
- Open Graph images
- Twitter card images

### Add Structured Data
Update the JSON-LD schema in `app/layout.tsx` with your business information.

## 📧 Contact Form Integration

To add a contact form:
1. Use a service like Formspree, Netlify Forms, or your own API
2. Create `app/contact/page.tsx`
3. Add form handling logic

## 🚀 Deployment Checklist

Before deploying:
- [ ] Update all contact information
- [ ] Replace all placeholder images
- [ ] Test all links and CTAs
- [ ] Verify mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Test newsletter signup
- [ ] Add analytics (optional)
- [ ] Set up custom domain
- [ ] Configure environment variables

## 💡 Tips

- **Performance**: Optimize images before uploading
- **Accessibility**: Test with screen readers
- **Mobile**: Test on actual devices, not just browser DevTools
- **SEO**: Submit sitemap to Google Search Console
- **Analytics**: Set up conversion tracking for CTAs

## 🆘 Need Help?

- Check the [README.md](./README.md) for setup instructions
- Review [QUICK_START.md](./QUICK_START.md) for getting started
- See [WEBSITE_SPECIFICATION.md](./WEBSITE_SPECIFICATION.md) for design details
