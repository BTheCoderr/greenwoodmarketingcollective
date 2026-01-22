# Greenwood Marketing Collective — Premium Redesign Implementation Plan

## 📊 Before → After Improvement Plan

### Current State Issues
- ❌ Generic color palette not matching brand guide
- ❌ Typography not using brand fonts (Tenez Bold, Montserrat)
- ❌ Inconsistent spacing and vertical rhythm
- ❌ Basic carousel without proper UX controls
- ❌ Cards lack premium feel (shadows, hover states)
- ❌ Hero section lacks trust signals
- ❌ Buttons don't match brand color system
- ❌ Missing intentional whitespace

### After State Goals
- ✅ Brand-accurate color system (#2f535d, #e1dace, #b5c1d2, #ca9b2e, #223659, #df7464)
- ✅ Tenez Bold (ALL CAPS) for headings, Montserrat Regular for body
- ✅ Consistent 80px section padding, 24px vertical rhythm
- ✅ Premium carousel with arrows, dots, keyboard nav, autoplay
- ✅ Elevated cards with soft shadows, hover lift, brand-colored accents
- ✅ Hero with trust indicator row (logos or stats)
- ✅ Brand-colored buttons (Deep Teal primary, outline secondary)
- ✅ Generous whitespace, max-width 1200px containers

---

## 🎨 Design System

### Typography Scale

```css
/* Font Families */
--font-heading: 'Tenez', serif; /* Bold, ALL CAPS */
--font-body: 'Montserrat', sans-serif; /* Regular */

/* Type Scale */
--text-xs: 0.75rem;      /* 12px - Small labels */
--text-sm: 0.875rem;     /* 14px - Captions */
--text-base: 1rem;       /* 16px - Body text */
--text-lg: 1.125rem;     /* 18px - Large body */
--text-xl: 1.25rem;      /* 20px - Small headings */
--text-2xl: 1.5rem;      /* 24px - H4 */
--text-3xl: 1.875rem;    /* 30px - H3 */
--text-4xl: 2.25rem;     /* 36px - H2 */
--text-5xl: 3rem;        /* 48px - H1 */
--text-6xl: 3.75rem;     /* 60px - Hero H1 */
--text-7xl: 4.5rem;      /* 72px - Large Hero */

/* Typography Usage */
h1, .h1 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--text-6xl); /* 60px desktop */
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.02em; /* Tight but not cramped */
  color: var(--color-navy);
}

h2, .h2 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--text-5xl); /* 48px desktop */
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: var(--color-navy);
}

h3, .h3 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--text-3xl); /* 30px desktop */
  line-height: 1.3;
  text-transform: uppercase;
  color: var(--color-navy);
}

body, p {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--text-base); /* 16px */
  line-height: 1.6;
  color: var(--color-navy);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  h1, .h1 { font-size: var(--text-4xl); } /* 36px mobile */
  h2, .h2 { font-size: var(--text-3xl); } /* 30px mobile */
  h3, .h3 { font-size: var(--text-2xl); }  /* 24px mobile */
}
```

### Color System

```css
/* Brand Colors - Exact from Brand Guide */
--color-deep-teal: #2f535d;      /* Primary brand color */
--color-cream: #e1dace;          /* Backgrounds, button text */
--color-mist-blue: #b5c1d2;      /* Accents, backgrounds */
--color-gold: #ca9b2e;           /* Accents, highlights */
--color-navy: #223659;           /* Headings, dark text */
--color-coral: #df7464;          /* CTAs, accents */

/* Semantic Colors */
--color-primary: var(--color-deep-teal);
--color-primary-hover: var(--color-navy);
--color-secondary: var(--color-coral);
--color-accent: var(--color-gold);
--color-background: var(--color-cream);
--color-background-light: #f5f3f0; /* Slightly lighter cream */
--color-text-primary: var(--color-navy);
--color-text-secondary: #4a5568;   /* Muted navy */
--color-border: #e2e8f0;          /* Light border */

/* Usage Rules */
/* Deep Teal: Primary buttons, links, brand elements */
/* Cream: Button text on Deep Teal, backgrounds, cards */
/* Mist Blue: Subtle backgrounds, dividers, secondary elements */
/* Gold: Highlights, badges, "Most Popular" indicators */
/* Navy: All headings, primary text */
/* Coral: Secondary CTAs, hover states, accents */
```

### Spacing Scale

```css
/* Base Unit: 8px */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px - Base vertical rhythm */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px - Section padding */
--space-24: 6rem;     /* 96px */

/* Section Padding */
--section-padding-mobile: 3rem;   /* 48px */
--section-padding-tablet: 4rem;    /* 64px */
--section-padding-desktop: 5rem;  /* 80px */
```

### Border Radius

```css
--radius-sm: 0.375rem;   /* 6px - Small elements */
--radius-md: 0.5rem;    /* 8px - Default */
--radius-lg: 0.75rem;    /* 12px - Buttons, cards */
--radius-xl: 1rem;      /* 16px - Large cards */
--radius-2xl: 1.5rem;   /* 24px - Hero elements */
--radius-full: 9999px;  /* Pills, badges */
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(34, 54, 89, 0.05);
--shadow-md: 0 4px 6px -1px rgba(34, 54, 89, 0.1), 0 2px 4px -1px rgba(34, 54, 89, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(34, 54, 89, 0.1), 0 4px 6px -2px rgba(34, 54, 89, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(34, 54, 89, 0.1), 0 10px 10px -5px rgba(34, 54, 89, 0.04);
--shadow-card: 0 4px 12px rgba(34, 54, 89, 0.08);
--shadow-card-hover: 0 12px 24px rgba(34, 54, 89, 0.12);
```

### Button Styles

```css
/* Primary Button */
.btn-primary {
  background-color: var(--color-deep-teal);
  color: var(--color-cream);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  padding: 0.875rem 2rem; /* 14px 32px */
  border-radius: var(--radius-lg); /* 12px */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  background-color: var(--color-navy);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary Button */
.btn-secondary {
  background-color: transparent;
  color: var(--color-deep-teal);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-deep-teal);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--color-deep-teal);
  color: var(--color-cream);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Coral CTA Button */
.btn-coral {
  background-color: var(--color-coral);
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-lg);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.btn-coral:hover {
  background-color: #c85a4a;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### Card Styles

```css
.card {
  background-color: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl); /* 16px */
  padding: var(--space-8); /* 32px */
  box-shadow: var(--shadow-card);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-deep-teal);
}

/* Service Card */
.card-service {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-service .icon {
  width: 48px;
  height: 48px;
  margin-bottom: var(--space-6);
  color: var(--color-deep-teal);
}

.card-service h3 {
  margin-bottom: var(--space-4);
}

.card-service p {
  flex-grow: 1;
  margin-bottom: var(--space-6);
}

.card-service .link {
  color: var(--color-coral);
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: all 0.2s ease;
}

.card-service:hover .link {
  text-decoration: underline;
  transform: translateX(4px);
}

/* Package Card */
.card-package {
  position: relative;
}

.card-package.featured {
  border: 2px solid var(--color-gold);
  box-shadow: var(--shadow-xl);
}

.card-package .badge {
  position: absolute;
  top: -12px;
  right: var(--space-6);
  background-color: var(--color-gold);
  color: var(--color-navy);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 📐 Page Structure & Section Order

### Recommended Structure

1. **Sticky Header** (z-index: 100)
   - Logo (left)
   - Navigation (center)
   - "Get Started" CTA (right)
   - Mobile hamburger menu

2. **Hero Section** (min-height: 85vh)
   - Large headline (H1, ALL CAPS)
   - Short subheadline (18-20px)
   - Two CTAs (Primary + Secondary)
   - Trust indicator row (logos or stats)

3. **Intro Paragraph** (centered, max-width: 800px)
   - 2-3 sentences
   - Sets context

4. **Services Grid** (6 items, 3 columns desktop)
   - Icon + Title + Description + Link

5. **Process Mini-Section** (optional, 3 steps)
   - Visual icons
   - "Align → Build → Launch"

6. **Packages/Pricing** (3 tiers)
   - "Most Popular" badge on middle card
   - Feature lists
   - Pricing
   - CTAs

7. **Carousel Section** (Case Studies or Featured Insights)
   - 3 cards visible (desktop)
   - Arrows + dots
   - Autoplay

8. **Blog Preview** (3 recent posts)
   - Image + Title + Date + Excerpt
   - "View All Articles" link

9. **Newsletter Signup**
   - Centered form
   - Email input + Submit button

10. **Footer**
    - Contact info
    - Quick links
    - Social icons
    - Copyright

---

## 📝 Refined Copy

### Hero Section

**Headline (H1):**
```
EXECUTIVE MARKETING LEADERSHIP FOR GROWTH-FOCUSED COMPANIES
```

**Subheadline:**
```
Fractional CMO and product marketing strategy that bridges vision and execution. Turn ambitious goals into measurable market success.
```

**CTAs:**
- Primary: "Get Started"
- Secondary: "View Our Services"

**Trust Indicator Row:**
```
Trusted by 50+ growth-stage companies | 15+ years of expertise | Results-driven leadership
```

### Section Headers

**Services:**
```
DRIVE REVENUE WITH STRATEGIC MARKETING LEADERSHIP
```

**Packages:**
```
CHOOSE YOUR GROWTH PATH
```

**Carousel:**
```
PROVEN RESULTS FOR GROWTH-FOCUSED COMPANIES
```

**Blog:**
```
LATEST INSIGHTS & STRATEGY
```

**Newsletter:**
```
STAY IN THE LOOP
```

---

## 🧩 Component Breakdown

### 1. Header Component

```tsx
// components/Layout/Header.tsx
interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container-custom h-20 flex items-center justify-between">
        <Logo />
        <DesktopNav />
        <Button variant="primary">Get Started</Button>
        <MobileMenuButton />
      </nav>
    </header>
  );
};
```

**Props:**
- `isScrolled: boolean` - Controls background opacity

### 2. Hero Component

```tsx
// components/Sections/Hero.tsx
interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  trustIndicators: string[];
}

const Hero = ({ headline, subheadline, primaryCTA, secondaryCTA, trustIndicators }: HeroProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 container-custom text-center">
        <h1 className="text-6xl md:text-7xl font-heading font-bold text-navy uppercase mb-6">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl text-navy/80 mb-10 max-w-3xl mx-auto">
          {subheadline}
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <Button variant="primary" href={primaryCTA.href}>
            {primaryCTA.text}
          </Button>
          <Button variant="secondary" href={secondaryCTA.href}>
            {secondaryCTA.text}
          </Button>
        </div>
        <TrustIndicators items={trustIndicators} />
      </div>
    </section>
  );
};
```

### 3. Services Grid Component

```tsx
// components/Sections/ServicesGrid.tsx
interface Service {
  icon: string;
  title: string;
  description: string;
  href: string;
}

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <h2 className="text-5xl font-heading font-bold text-center text-navy uppercase mb-4">
          DRIVE REVENUE WITH STRATEGIC MARKETING LEADERSHIP
        </h2>
        <p className="text-lg text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Comprehensive marketing services designed for growth-stage companies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 4. Packages Component

```tsx
// components/Sections/PricingCards.tsx
interface Package {
  title: string;
  tagline: string;
  badge?: string;
  features: string[];
  timeline: string;
  perfectFor: string[];
  pricing: string;
  featured?: boolean;
  ctaText: string;
}

interface PricingCardsProps {
  packages: Package[];
}

const PricingCards = ({ packages }: PricingCardsProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-5xl font-heading font-bold text-center text-navy uppercase mb-4">
          CHOOSE YOUR GROWTH PATH
        </h2>
        <p className="text-lg text-center text-text-secondary mb-12">
          Three partnership levels designed to meet you where you are
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 5. Carousel Component (Premium)

```tsx
// components/Sections/Carousel.tsx
interface CarouselItem {
  id: string;
  image: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const Carousel = ({ items, autoplay = true, autoplayInterval = 6000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Autoplay logic
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, isPaused, autoplayInterval, items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
        setIsPaused(true);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsPaused(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length]);

  // Touch handlers
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
    setIsPaused(true);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsPaused(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsPaused(true);
  };

  return (
    <section className="section-padding bg-mist-blue/20">
      <div className="container-custom">
        <h2 className="text-5xl font-heading font-bold text-center text-navy uppercase mb-12">
          PROVEN RESULTS FOR GROWTH-FOCUSED COMPANIES
        </h2>
        
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Carousel"
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / getVisibleCards())}%)`,
              }}
            >
              {items.map((item) => (
                <CarouselCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Arrow Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-cream transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-6 h-6 text-deep-teal" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-cream transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-6 h-6 text-deep-teal" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8" role="tablist">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-deep-teal w-8'
                    : 'bg-mist-blue'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function for responsive visible cards
const getVisibleCards = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
  if (window.innerWidth >= 768) return 2;  // Tablet: 2 cards
  return 1; // Mobile: 1 card
};
```

**Carousel Card Component:**

```tsx
// components/Carousel/CarouselCard.tsx
interface CarouselCardProps {
  item: CarouselItem;
  width: string; // e.g., "33.333%" for 3 cards, "50%" for 2, "100%" for 1
}

const CarouselCard = ({ item, width }: CarouselCardProps) => {
  return (
    <div
      className="flex-shrink-0 px-4"
      style={{ width }}
    >
      <div className="card h-full">
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-heading font-bold text-navy uppercase mb-3">
          {item.title}
        </h3>
        <p className="text-base text-text-secondary mb-6 line-clamp-2">
          {item.description}
        </p>
        {item.ctaText && (
          <a
            href={item.ctaHref}
            className="text-coral font-semibold hover:underline inline-flex items-center gap-2"
          >
            {item.ctaText}
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
```

**Carousel Specifications:**

- **Desktop (≥1024px)**: 3 cards visible, partial peek of 4th card (10% visible)
- **Tablet (768px-1023px)**: 2 cards visible, partial peek of 3rd card
- **Mobile (<768px)**: 1 card, full width, swipeable
- **Transition**: 500ms ease-in-out
- **Autoplay**: 6 seconds (pauses on hover/interaction)
- **Controls**: 
  - Arrow buttons (left/right)
  - Pagination dots (active state: longer bar)
  - Keyboard arrows (left/right)
  - Touch swipe (mobile)
- **Accessibility**: ARIA labels, role="region", keyboard navigation

### 6. Blog Preview Component

```tsx
// components/Sections/BlogPreview.tsx
interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

interface BlogPreviewProps {
  posts: BlogPost[];
}

const BlogPreview = ({ posts }: BlogPreviewProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-heading font-bold text-navy uppercase">
            LATEST INSIGHTS & STRATEGY
          </h2>
          <Link href="/blog" className="text-coral font-semibold hover:underline">
            View All Articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 7. Newsletter Component

```tsx
// components/Sections/Newsletter.tsx
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Submit logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold text-navy uppercase mb-4">
          STAY IN THE LOOP
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          Sign up with your email address to receive news and updates.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-deep-teal"
            required
          />
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </form>
        {submitted && (
          <div className="mt-4 text-green-600">
            ✓ Successfully subscribed!
          </div>
        )}
      </div>
    </section>
  );
};
```

---

## 🎨 Tailwind Config Update

```js
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Brand Colors
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
      },
      // Typography
      fontFamily: {
        heading: ['Tenez', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.875rem', { lineHeight: '1.3' }],
      },
      // Spacing
      spacing: {
        'section': '5rem', // 80px
        'section-mobile': '3rem', // 48px
        'section-tablet': '4rem', // 64px
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
    },
  },
  plugins: [],
};
```

---

## 📦 Implementation Steps

### Step 1: Update Tailwind Config
- Add brand colors
- Add Tenez and Montserrat fonts
- Update container max-width to 1200px
- Add custom spacing and shadows

### Step 2: Update Global CSS
- Import Tenez Bold and Montserrat Regular fonts
- Add typography utilities
- Add button styles
- Add card styles

### Step 3: Update Header
- Use brand colors
- Add logo with proper spacing
- Update button styles

### Step 4: Redesign Hero
- Add gradient background (Cream + Mist Blue, low opacity)
- Update typography to Tenez Bold ALL CAPS
- Add trust indicator row
- Update button styles

### Step 5: Update Services Grid
- Redesign cards with new shadows and hover states
- Add icons in brand colors
- Update typography

### Step 6: Update Packages Section
- Add "Most Popular" badge with Gold color
- Update card styling
- Improve feature lists

### Step 7: Implement Premium Carousel
- Create Carousel component with all features
- Add responsive behavior
- Add accessibility features
- Test autoplay and interactions

### Step 8: Update Blog Preview
- Redesign cards
- Update typography

### Step 9: Update Newsletter
- Match brand colors
- Add micro-interactions

### Step 10: Final Polish
- Check spacing consistency
- Verify brand colors throughout
- Test responsive behavior
- Accessibility audit

---

## ✅ Quality Checklist

- [ ] All headings use Tenez Bold, ALL CAPS
- [ ] All body text uses Montserrat Regular
- [ ] Brand colors applied consistently
- [ ] Section padding: 80px desktop, 64px tablet, 48px mobile
- [ ] Container max-width: 1200px
- [ ] Buttons use brand colors (Deep Teal primary)
- [ ] Cards have soft shadows and hover lift
- [ ] Carousel has arrows, dots, keyboard nav, autoplay
- [ ] Logo has clear space, never stretched
- [ ] Brand pattern used subtly (low opacity)
- [ ] All CTAs are clear and prominent
- [ ] Mobile menu functions properly
- [ ] Accessibility: ARIA labels, keyboard nav, focus states
- [ ] Performance: Images optimized, lazy loading

---

**Document Version**: 1.0  
**Last Updated**: [Current Date]  
**Prepared For**: Greenwood Marketing Collective Premium Redesign
