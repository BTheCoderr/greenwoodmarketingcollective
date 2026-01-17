# Quick Start Guide

## 🚀 Getting Your Website Running

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Next Steps

### Update Contact Information
1. Edit `components/Layout/Footer.tsx` - Update email and phone number
2. Edit `app/layout.tsx` - Update structured data with your contact info

### Customize Colors
Edit `tailwind.config.js` to change the primary color:
```js
primary: {
  DEFAULT: '#4CAF50',  // Change to your brand color
}
```

### Add Real Images
Replace placeholder images in:
- `components/Sections/ValueSection.tsx` - Add actual images
- `components/Sections/BlogPreview.tsx` - Add blog post images
- Hero section background (optional)

### Update Content
All content is in component files:
- `components/Sections/Hero.tsx` - Hero section content
- `components/Sections/Intro.tsx` - Introduction text
- `components/Sections/ServicesGrid.tsx` - Services list
- `components/Sections/PricingCards.tsx` - Pricing packages

### Deploy
1. Push to GitHub
2. Connect to Vercel (or your preferred hosting)
3. Deploy!

## 🎨 Design System

- **Primary Color**: Green (#4CAF50) - Change in `tailwind.config.js`
- **Fonts**: Playfair Display (headings), Inter (body)
- **Spacing**: 8px base unit
- **Breakpoints**: Mobile (<768px), Tablet (768-1199px), Desktop (1200px+)

## 📱 Testing Responsive Design

- Use browser DevTools to test different screen sizes
- Test on actual mobile devices
- Check touch targets (minimum 44x44px)

## ✅ Checklist Before Launch

- [ ] Update all contact information
- [ ] Replace placeholder images
- [ ] Update meta tags with your domain
- [ ] Test all links and CTAs
- [ ] Verify mobile menu works
- [ ] Check form submissions
- [ ] Test on multiple browsers
- [ ] Verify SEO meta tags
- [ ] Add Google Analytics (optional)
- [ ] Set up email service for newsletter

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Styles not loading?**
- Make sure Tailwind CSS is properly configured
- Check `postcss.config.js` exists
- Restart dev server

**Build errors?**
- Run `npm install` again
- Check Node.js version (18+)
- Clear `.next` folder and rebuild
