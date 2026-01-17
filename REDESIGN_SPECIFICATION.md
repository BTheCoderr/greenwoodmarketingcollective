# Greenwood Marketing Collective — Complete Website Redesign Specification

## 📋 Executive Summary

### Redesign Goals
Transform the Greenwood Marketing Collective website into a modern, high-end marketing agency platform that:

1. **Establishes Premium Aesthetic**
   - Clean, intentional whitespace
   - Sophisticated typography hierarchy
   - Consistent brand accent colors
   - Professional visual polish

2. **Prioritizes Marketing Outcomes**
   - Clear service value propositions
   - Prominent, strategic CTAs
   - Trust signals and social proof
   - Intuitive navigation flow

3. **Modernizes Visual Experience**
   - Tasteful micro-animations
   - Subtle depth effects (glassmorphism, gradients)
   - Performance-optimized visuals
   - Engaging but non-distracting interactions

4. **Optimizes for Conversion**
   - User-centric experience design
   - Clear conversion paths
   - Accessibility compliance (WCAG AA)
   - Mobile-first responsive design

### Current State Analysis
- **Strengths**: Clear service offerings, professional content, established brand
- **Opportunities**: Enhanced visual hierarchy, improved CTAs, modern interactions, better mobile experience
- **Target**: Increase engagement, improve conversion rates, establish premium brand positioning

---

## 🎨 Visual Identity & Design System

### Color Palette

#### Primary Colors
```css
/* Primary Accent - Coral/Salmon */
--color-primary: #E07A5F;
--color-primary-light: #F4A261;
--color-primary-dark: #C85A3F;

/* Secondary - Teal */
--color-teal: #3D6B6B;
--color-teal-dark: #253746;
--color-teal-light: #5A8A8A;

/* Neutral Base */
--color-beige: #F5F1EB;
--color-beige-light: #FAF8F5;
--color-cream: #FFFBF5;
```

#### Text Colors
```css
--color-text-primary: #1A1A2E;
--color-text-secondary: #4A4A4A;
--color-text-tertiary: #666666;
--color-text-light: #999999;
--color-text-white: #FFFFFF;
```

#### Background Colors
```css
--color-bg-white: #FFFFFF;
--color-bg-light: #F8F9FA;
--color-bg-beige: #F5F1EB;
--color-bg-cream: #FAF8F5;
```

### Typography System

#### Font Stack
```css
/* Headings - Serif (Elegant, Premium) */
font-family: 'Playfair Display', 'Merriweather', 'Georgia', serif;

/* Body - Sans Serif (Clean, Modern) */
font-family: 'Inter', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Type Scale
```css
/* Desktop */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
--text-7xl: 4.5rem;    /* 72px */

/* Mobile (reduced by ~20%) */
--text-hero-mobile: clamp(2.5rem, 5vw, 4rem);
--text-h1-mobile: clamp(2rem, 4vw, 3rem);
--text-h2-mobile: clamp(1.75rem, 3.5vw, 2.5rem);
```

#### Typography Usage
- **H1 (Hero)**: 72px desktop / 48px mobile, serif, bold, uppercase, tracking-wide
- **H2 (Section Headers)**: 48px desktop / 36px mobile, serif, bold, uppercase
- **H3 (Subsection)**: 30px desktop / 24px mobile, serif, semi-bold
- **Body Large**: 18px, sans-serif, regular, line-height 1.7
- **Body**: 16px, sans-serif, regular, line-height 1.6
- **Small**: 14px, sans-serif, regular, line-height 1.5

### Spacing System
```css
/* Base Unit: 8px */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */

/* Section Padding */
--section-padding-mobile: 3rem;  /* 48px */
--section-padding-tablet: 4rem; /* 64px */
--section-padding-desktop: 5rem; /* 80px */
```

### Design Tokens (Figma/Design System)

```json
{
  "colors": {
    "primary": {
      "50": "#FDF2F0",
      "100": "#FCE4E0",
      "200": "#F9C9C1",
      "300": "#F4A261",
      "400": "#E07A5F",
      "500": "#C85A3F",
      "600": "#A84835",
      "700": "#88362A"
    },
    "teal": {
      "50": "#F0F5F5",
      "100": "#D1E3E3",
      "200": "#A3C7C7",
      "300": "#5A8A8A",
      "400": "#3D6B6B",
      "500": "#253746",
      "600": "#1E2D38"
    }
  },
  "typography": {
    "fontFamilies": {
      "serif": ["Playfair Display", "Merriweather", "serif"],
      "sans": ["Inter", "Open Sans", "sans-serif"]
    },
    "fontSizes": {
      "hero": "4.5rem",
      "h1": "3rem",
      "h2": "2.25rem",
      "h3": "1.875rem",
      "body": "1rem"
    }
  },
  "spacing": {
    "scale": [4, 8, 12, 16, 24, 32, 48, 64, 80, 96]
  },
  "shadows": {
    "sm": "0 1px 2px rgba(0,0,0,0.05)",
    "md": "0 4px 6px rgba(0,0,0,0.1)",
    "lg": "0 10px 15px rgba(0,0,0,0.1)",
    "xl": "0 20px 25px rgba(0,0,0,0.15)"
  },
  "borderRadius": {
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "0.75rem",
    "xl": "1rem",
    "2xl": "1.5rem",
    "full": "9999px"
  }
}
```

---

## 🧱 1. Global Navigation & Header

### Design Specifications

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ [Logo]  Home | Services | Industries | Blog | About | Contact  [Get Started] [Contact] │
└─────────────────────────────────────────────────────────┘
```

#### Desktop Navigation
- **Height**: 80px (sticky)
- **Background**: 
  - Initial: Transparent
  - Scrolled: White with backdrop blur (glassmorphism effect)
- **Logo**: Left-aligned, 40px height
- **Nav Links**: 
  - Font: Sans-serif, 16px, medium weight
  - Spacing: 32px between items
  - Color: Dark teal (#253746) when scrolled, white when transparent
  - Hover: Coral accent (#E07A5F) with underline animation
- **CTAs**: 
  - "Get Started": Primary button (coral background, white text)
  - "Contact": Secondary button (outline, coral border)
  - Both: 12px padding vertical, 24px horizontal, rounded-lg

#### Mobile Navigation
- **Hamburger Menu**: Right-aligned, 24px × 24px icon
- **Slide-out Panel**: 
  - Width: 320px
  - Background: White with backdrop blur
  - Animation: Slide from right, 0.3s ease
- **Mobile CTA**: Full-width button at bottom of menu

#### Scroll Behavior
```css
.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
```

### Component Structure (React/Next.js)

```tsx
// components/Layout/Header.tsx
interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-5 h-20 flex items-center justify-between">
        <Logo />
        <DesktopNav isScrolled={isScrolled} />
        <CTAs />
        <MobileMenuButton />
      </nav>
      <MobileMenu />
    </header>
  );
};
```

### Design Rationale
- **Clear Navigation**: Reduces cognitive load, improves usability (Contentsquare research)
- **Prominent CTAs**: Increases conversion potential (Mannix Marketing best practices)
- **Sticky Header**: Ensures navigation always accessible
- **Glassmorphism**: Modern, premium aesthetic without heavy visuals

---

## 📌 2. Hero / Above-The-Fold Section

### Design Specifications

#### Layout
- **Height**: 90vh (desktop), 85vh (tablet), 80vh (mobile)
- **Background Options**:
  1. **Gradient**: Subtle teal-to-coral gradient with animated particles
  2. **Image**: High-quality office/team image with overlay
  3. **Video**: Subtle looped background video (optional, performance-conscious)

#### Content Structure
```
┌─────────────────────────────────────────┐
│                                         │
│     [Animated Background]                │
│                                         │
│     Executive Marketing Leadership      │
│     for Growth-Focused Companies        │
│                                         │
│     Fractional CMO + Product Marketing  │
│     Strategy that bridges vision &      │
│     execution.                          │
│                                         │
│     [Book a Strategy Call] [Learn More] │
│                                         │
└─────────────────────────────────────────┘
```

#### Typography
- **Headline**: 72px desktop, serif, bold, uppercase, white, tracking-wide
- **Subheadline**: 24px desktop, sans-serif, regular, white/light gray, line-height 1.5
- **CTAs**: 18px, bold, rounded-lg buttons

#### Copy Examples

**Option A (Outcome-Focused)**
```
Headline: "Executive Marketing Leadership for Growth-Focused Companies"
Subheadline: "Fractional CMO + Product Marketing Strategy that bridges vision & execution. Turn your ambitious goals into measurable market success."
CTA Primary: "Book a Strategy Call"
CTA Secondary: "Learn More"
```

**Option B (Problem-Solution)**
```
Headline: "Scale Your Marketing Without Scaling Your Team"
Subheadline: "Get C-level marketing leadership, strategic positioning, and go-to-market execution—without the full-time investment."
CTA Primary: "Get Started"
CTA Secondary: "View Our Services"
```

**Option C (Authority-Focused)**
```
Headline: "15+ Years of Product Marketing Excellence"
Subheadline: "We help growth-stage companies transform marketing from a cost center into their primary growth engine."
CTA Primary: "Schedule a Consultation"
CTA Secondary: "See Our Work"
```

### Animation Specifications

#### Background Animation (Optional)
```css
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-background {
  background: linear-gradient(-45deg, #253746, #3D6B6B, #E07A5F, #F4A261);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
```

#### Content Animation
- **Headline**: Fade in + slide up (0.8s delay)
- **Subheadline**: Fade in + slide up (1s delay)
- **CTAs**: Fade in + scale (1.2s delay)
- **Stagger**: 0.2s between elements

### Component Structure

```tsx
// components/Sections/Hero.tsx
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-5 text-center">
        <h1 className="text-7xl font-serif font-bold text-white uppercase mb-6 animate-fade-in-up">
          Executive Marketing Leadership for Growth-Focused Companies
        </h1>
        <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-300">
          Fractional CMO + Product Marketing Strategy that bridges vision & execution.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in-up delay-500">
          <Button variant="primary">Book a Strategy Call</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
};
```

### Design Rationale
- **Strong Hero**: Immediately communicates value proposition (Uxcel best practices)
- **Clear CTAs**: Multiple conversion paths
- **Outcome-Focused Copy**: Speaks to business results, not just services
- **Visual Impact**: Creates memorable first impression

---

## 🧩 3. Services Section

### Design Specifications

#### Layout
- **Grid**: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Card Style**: 
  - White background
  - Rounded-xl corners
  - Subtle shadow (elevates on hover)
  - Padding: 32px
  - Border: 1px solid #E5E5E5

#### Card Structure
```
┌─────────────────────┐
│   [Icon]            │
│                     │
│   Service Name      │
│   (H3, Bold)        │
│                     │
│   Short description │
│   (Body text)       │
│                     │
│   Learn More →      │
│   (Link, Coral)     │
└─────────────────────┘
```

#### Service Cards Content

**1. Fractional CMO Leadership**
- **Icon**: Executive/leadership icon
- **Headline**: "Fractional CMO Leadership"
- **Description**: "Drive revenue with executive-level strategy, team development, and performance accountability—without the full-time investment."
- **Outcome**: "Scale your marketing leadership"

**2. Product Marketing Excellence**
- **Icon**: Product/positioning icon
- **Headline**: "Product Marketing Excellence"
- **Description**: "Drive revenue with focused product launch strategy, competitive positioning, and customer-centric messaging."
- **Outcome**: "Accelerate product success"

**3. Go-To-Market Strategy**
- **Icon**: Launch/rocket icon
- **Headline**: "Go-To-Market Strategy & Execution"
- **Description**: "Drive revenue with comprehensive market entry strategies, launch sequencing, and multi-channel execution."
- **Outcome**: "Capture market share from day one"

**4. Sales Enablement**
- **Icon**: Sales/chart icon
- **Headline**: "Sales Enablement Support"
- **Description**: "Drive revenue with content, training, and tools that bridge marketing and sales for higher conversion rates."
- **Outcome**: "Close more deals"

**5. Vision Implementation**
- **Icon**: Strategy/roadmap icon
- **Headline**: "Operationalizing Your Vision"
- **Description**: "Drive revenue by transforming strategic plans into actionable roadmaps with clear processes and measurable outcomes."
- **Outcome**: "Turn vision into reality"

**6. Brand Storytelling**
- **Icon**: Story/narrative icon
- **Headline**: "Brand Storytelling & Narrative Creation"
- **Description**: "Drive revenue with compelling narratives that capture your unique story and create emotional connections with customers."
- **Outcome**: "Build memorable brand"

### Hover Interactions

```css
.service-card {
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--color-primary);
}

.service-card:hover .service-link {
  color: var(--color-primary);
  transform: translateX(4px);
}
```

### Component Structure

```tsx
// components/Sections/ServicesGrid.tsx
interface Service {
  icon: string;
  title: string;
  description: string;
  outcome: string;
  href: string;
}

const ServicesGrid = () => {
  const services: Service[] = [...];
  
  return (
    <section className="section-padding bg-beige">
      <div className="container mx-auto">
        <h2 className="text-5xl font-serif font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-xl text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Drive revenue with strategic marketing leadership
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

---

## 💼 4. Packages & Pricing

### Design Specifications

#### Layout
- **3 Column Grid**: Equal width cards
- **Featured Card**: Slightly larger scale (1.05x), highlighted border
- **Comparison Table**: Optional, below cards

#### Card Structure
```
┌─────────────────────────────┐
│ [Badge: "Most Popular"]     │
│                             │
│ STRATEGIC FOUNDATION        │
│ Get clarity and direction   │
│                             │
│ ✓ Feature 1                 │
│ ✓ Feature 2                 │
│ ✓ Feature 3                 │
│ ...                         │
│                             │
│ Timeline: 6-8 weeks          │
│                             │
│ Perfect for:                │
│ • Early-stage companies     │
│ • Rebrands                  │
│                             │
│ Starting at $6,500          │
│                             │
│ [Get Started Button]        │
└─────────────────────────────┘
```

#### Package Cards

**Strategic Foundation**
- **Badge**: None
- **Title**: "Strategic Foundation"
- **Tagline**: "Get clarity and direction"
- **Price**: "Starting at $6,500"
- **Timeline**: "6-8 weeks + 3 months monthly check-ins"
- **Features**: [List from current site]
- **Perfect For**: Early-stage companies, rebrands, marketing reset

**Growth Accelerator** (Featured)
- **Badge**: "Most Popular" (coral background)
- **Title**: "Growth Accelerator"
- **Tagline**: "Strategy + execution + ongoing leadership"
- **Price**: "Starting at $10,500"
- **Timeline**: "8-10 weeks + 6 months fractional support"
- **Features**: [List from current site]
- **Perfect For**: Growing companies, product launches, scaling teams

**Market Mastery**
- **Badge**: None
- **Title**: "Market Mastery"
- **Tagline**: "Full fractional CMO partnership"
- **Price**: "Custom pricing based on scope"
- **Timeline**: "Fully customized to business needs"
- **Features**: [List from current site]
- **Perfect For**: Series A+, complex markets, enterprise clients

### Visual Enhancements

```css
.package-card-featured {
  border: 3px solid var(--color-primary);
  box-shadow: 0 20px 60px rgba(224, 122, 95, 0.2);
  transform: scale(1.05);
}

.package-badge {
  background: var(--color-primary);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

### Comparison Table (Optional)

| Feature | Strategic Foundation | Growth Accelerator | Market Mastery |
|---------|---------------------|-------------------|----------------|
| Marketing Audit | ✓ | ✓ | ✓ |
| Strategy Sessions | 3 months | 6 months | Ongoing |
| Fractional CMO Hours | - | 15hrs/month | Custom |
| Campaign Creation | - | ✓ | ✓ |
| Custom Scope | - | - | ✓ |

### Component Structure

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
}

const PricingCards = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-serif font-bold text-center mb-4">
          Choose Your Growth Path
        </h2>
        <p className="text-xl text-center mb-12">
          Three partnership levels designed to meet you where you are
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} package={pkg} />
          ))}
        </div>
        <ComparisonTable packages={packages} />
      </div>
    </section>
  );
};
```

### Design Rationale
- **Clear Pricing**: Helps users self-qualify (Mannix Marketing best practices)
- **Featured Package**: Guides users to recommended option
- **Comparison**: Makes decision-making easier
- **Outcome-Focused**: Each package tied to business results

---

## 📈 5. Trust & Social Proof

### Design Specifications

#### Testimonials Carousel

**Layout**:
- **Desktop**: 2-3 testimonials visible
- **Mobile**: 1 testimonial, swipeable
- **Auto-rotate**: Every 5 seconds (optional)
- **Navigation**: Dots + arrows

**Testimonial Card Structure**:
```
┌─────────────────────────────┐
│ "Quote text here that        │
│  highlights results and      │
│  experience."                │
│                             │
│ — Name, Title                │
│   Company Name               │
│                             │
│ [Company Logo]               │
└─────────────────────────────┘
```

#### Testimonial Examples

**Testimonial 1**
```
Quote: "Greenwood Marketing Collective transformed our go-to-market strategy. Within 6 months, we saw a 40% increase in qualified leads and closed our Series A. Their fractional CMO approach gave us the leadership we needed without the overhead."

Attribution: "Sarah Chen, CEO"
Company: "HealthTech Innovations"
Logo: [Company logo]
```

**Testimonial 2**
```
Quote: "Courtney's product marketing expertise helped us reposition our solution and capture 25% more market share. The strategic framework she built continues to guide our marketing decisions today."

Attribution: "Michael Rodriguez, VP of Marketing"
Company: "SaaS Solutions Inc."
Logo: [Company logo]
```

**Testimonial 3**
```
Quote: "Working with Greenwood Marketing Collective was like having a CMO on demand. They helped us build our marketing team, establish processes, and drive measurable growth. Best investment we made."

Attribution: "Jennifer Park, Founder"
Company: "Mission-Driven Nonprofit"
Logo: [Company logo]
```

#### Case Studies Section

**Case Study Card Structure**:
```
┌─────────────────────────────┐
│ [Featured Image]            │
│                             │
│ Case Study Title            │
│ Industry: Healthcare        │
│                             │
│ Challenge: [Brief]          │
│ Solution: [Brief]           │
│                             │
│ Results:                    │
│ • 40% increase in leads     │
│ • 25% improvement in MQL    │
│ • 6-month timeline          │
│                             │
│ [Read Case Study →]        │
└─────────────────────────────┘
```

### Component Structure

```tsx
// components/Sections/Testimonials.tsx
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo?: string;
}

const Testimonials = () => {
  return (
    <section className="section-padding bg-teal-dark text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-serif font-bold text-center mb-12">
          Trusted by Growth-Focused Companies
        </h2>
        <TestimonialCarousel testimonials={testimonials} />
        <ClientLogos logos={clientLogos} />
      </div>
    </section>
  );
};
```

---

## 🛠 6. Blog / Resources Preview

### Design Specifications

#### Layout
- **Grid**: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Card Style**: Image + title + excerpt + date + "Read More"

#### Blog Card Structure
```
┌─────────────────────────────┐
│ [Featured Image]            │
│                             │
│ Blog Post Title             │
│ (H3, Bold, 2 lines max)    │
│                             │
│ Date: March 15, 2024        │
│                             │
│ Excerpt text here that      │
│ gives a preview of the      │
│ content...                   │
│                             │
│ Read More →                 │
└─────────────────────────────┘
```

#### Blog Post Examples

**Post 1**
- **Title**: "From Fireside to Boardrooms: The Timeless Power of Storytelling"
- **Date**: "Aug 28, 2025"
- **Excerpt**: "Exploring how authentic narratives drive business success and create lasting customer connections."
- **Image**: Book with string lights

**Post 2**
- **Title**: "The Ship Turner: Why Every Project Needs a Navigator Who Sees the Big Picture"
- **Date**: "Aug 17, 2025"
- **Excerpt**: "Strategic leadership that guides complex projects to successful outcomes."
- **Image**: Sailing ship

**Post 3**
- **Title**: "The Hidden Cost of Outdated Marketing for Independent Eye Care Practices"
- **Date**: "Jul 5, 2025"
- **Excerpt**: "How modern marketing strategies can transform healthcare practice growth."
- **Image**: Eyeglasses

### Component Structure

```tsx
// components/Sections/BlogPreview.tsx
interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

const BlogPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-serif font-bold">
            Latest Insights
          </h2>
          <Link href="/blog" className="text-coral font-semibold">
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

---

## ✉️ 7. Newsletter / Lead Magnet Section

### Design Specifications

#### Layout
- **Background**: Light beige or coral accent
- **Layout**: Centered, max-width 600px
- **Form**: Email input + submit button inline

#### Form Structure
```
┌─────────────────────────────────────┐
│ Stay in the Loop                   │
│                                     │
│ Sign up with your email address    │
│ to receive news and updates.        │
│                                     │
│ [Email Input Field] [Sign Up]      │
│                                     │
│ ✓ No spam, unsubscribe anytime     │
└─────────────────────────────────────┘
```

#### Micro-Interactions

**Input States**:
```css
.email-input {
  transition: all 0.3s ease;
}

.email-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(224, 122, 95, 0.1);
  outline: none;
}

.email-input:invalid:not(:placeholder-shown) {
  border-color: #EF4444;
}
```

**Button States**:
```css
.submit-button {
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(224, 122, 95, 0.3);
}

.submit-button:active {
  transform: translateY(0);
}

.submit-button.success {
  background: #10B981;
  animation: successPulse 0.5s ease;
}
```

**Confirmation Toast**:
- Appears above form
- Green background, white text
- Auto-dismisses after 3 seconds
- Slide-down animation

### Component Structure

```tsx
// components/Sections/Newsletter.tsx
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <section className="section-padding bg-beige">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">
          Stay in the Loop
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
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral"
          />
          <button
            type="submit"
            className="bg-coral text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral-dark transition-colors"
          >
            Sign Up
          </button>
        </form>
        {submitted && <SuccessToast />}
      </div>
    </section>
  );
};
```

---

## 🎨 8. Visual & Interaction Upgrades

### Micro-Animations

#### Scroll Animations
```tsx
// Using Framer Motion or Intersection Observer
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
```

#### Button Hover Effects
```css
.btn-primary {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-primary:hover::before {
  width: 300px;
  height: 300px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(224, 122, 95, 0.3);
}
```

#### Card Hover Effects
```css
.service-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}
```

### Glassmorphism Effects

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### Gradient Overlays

```css
.gradient-overlay {
  background: linear-gradient(
    135deg,
    rgba(37, 55, 70, 0.9) 0%,
    rgba(61, 107, 107, 0.8) 50%,
    rgba(224, 122, 95, 0.7) 100%
  );
}
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base: Mobile (< 640px) */
.container { padding: 1rem; }

/* Tablet */
@media (min-width: 640px) {
  .container { padding: 1.5rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { padding: 2rem; max-width: 1280px; }
}

/* Large Desktop */
@media (min-width: 1536px) {
  .container { max-width: 1536px; }
}
```

---

## 📐 9. Accessibility & Performance

### Accessibility Checklist

#### ARIA Labels
```tsx
<nav aria-label="Main navigation">
  <button aria-label="Toggle mobile menu" aria-expanded={isOpen}>
    <MenuIcon />
  </button>
</nav>

<form aria-label="Newsletter subscription">
  <label htmlFor="email">Email Address</label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby="email-error"
  />
</form>
```

#### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators (2px outline, offset)
- Tab order logical
- Skip to main content link

#### Color Contrast
- Text on background: Minimum 4.5:1 (WCAG AA)
- Large text: Minimum 3:1
- Interactive elements: Minimum 3:1

### Performance Optimizations

#### Image Optimization
```tsx
<Image
  src="/hero-image.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  loading="lazy" // For below-the-fold images
  placeholder="blur"
  quality={85}
/>
```

#### Code Splitting
```tsx
// Lazy load components
const BlogPreview = dynamic(() => import('@/components/Sections/BlogPreview'), {
  loading: () => <Skeleton />,
});
```

#### CSS Optimization
- Critical CSS inlined
- Non-critical CSS loaded asynchronously
- Purge unused Tailwind classes
- Minify production CSS

#### Performance Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 600ms

---

## 🧾 10. SEO & Copy Enhancements

### Meta Tags

#### Homepage
```html
<title>Fractional CMO & Product Marketing Leadership | Greenwood Marketing Collective</title>
<meta name="description" content="Executive marketing leadership for growth-focused companies. Fractional CMO services, product marketing strategy, and go-to-market execution that drives measurable results.">
<meta name="keywords" content="fractional CMO, product marketing, go-to-market strategy, marketing leadership, growth marketing">
```

#### Services Page
```html
<title>Marketing Services — Fractional CMO & Product Marketing | Greenwood Marketing Collective</title>
<meta name="description" content="Comprehensive marketing services including fractional CMO leadership, product marketing excellence, go-to-market strategy, and sales enablement for scaling companies.">
```

#### Pricing Page
```html
<title>Packages & Pricing — Fractional CMO Services | Greenwood Marketing Collective</title>
<meta name="description" content="Three partnership levels designed to meet you where you are. Strategic Foundation ($6,500+), Growth Accelerator ($10,500+), and Market Mastery (custom pricing).">
```

### Focus Keywords

**Primary Keywords**:
- Fractional CMO
- Product marketing strategy
- Go-to-market execution
- Marketing leadership
- Growth marketing

**Long-Tail Keywords**:
- Fractional CMO for startups
- Product marketing consultant
- Healthcare marketing strategy
- Nonprofit marketing services
- B2B go-to-market strategy

### Copywriting Principles

#### Outcome-Focused Language
❌ **Avoid**: "We offer fractional CMO services"
✅ **Use**: "Drive revenue with executive-level marketing leadership"

❌ **Avoid**: "Product marketing expertise"
✅ **Use**: "Accelerate product success with strategic positioning"

#### Benefit-Driven Headlines
- "Scale Your Marketing Without Scaling Your Team"
- "Turn Your Vision Into Measurable Market Success"
- "Get C-Level Marketing Leadership Without the Full-Time Investment"

#### Social Proof Integration
- "Trusted by 50+ growth-stage companies"
- "15+ years of product marketing excellence"
- "40% average increase in qualified leads"

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Greenwood Marketing Collective",
  "description": "Fractional CMO and product marketing services",
  "url": "https://greenwoodmarketingcollective.com",
  "telephone": "860-682-4172",
  "email": "courtney@greenwoodmarketingcollective.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Massachusetts",
    "addressCountry": "US"
  },
  "priceRange": "$6,500 - Custom",
  "areaServed": "Worldwide",
  "serviceType": [
    "Fractional CMO",
    "Product Marketing",
    "Go-to-Market Strategy"
  ]
}
```

---

## 💡 Implementation Guide

### React/Next.js Component Architecture

```
components/
├── Layout/
│   ├── Header.tsx          # Global navigation
│   ├── Footer.tsx          # Site footer
│   └── MobileMenu.tsx      # Mobile navigation
├── Sections/
│   ├── Hero.tsx            # Hero section
│   ├── ServicesGrid.tsx    # Services showcase
│   ├── PricingCards.tsx    # Packages & pricing
│   ├── Testimonials.tsx    # Social proof
│   ├── BlogPreview.tsx     # Latest blog posts
│   ├── Newsletter.tsx      # Email signup
│   └── CTASection.tsx      # Call-to-action blocks
├── UI/
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Card wrapper
│   ├── Input.tsx           # Form inputs
│   └── Icon.tsx            # SVG icons
└── Animations/
    ├── ScrollReveal.tsx    # Scroll animations
    └── FadeIn.tsx          # Fade animations
```

### Component Props Examples

```tsx
// Button Component
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

// Service Card Component
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  outcome: string;
  href: string;
}

// Package Card Component
interface PackageCardProps {
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
```

### Webflow Style Guide

#### Class Naming Convention
```
.section-hero
.section-services
.section-pricing
.card-service
.card-package
.card-package-featured
.btn-primary
.btn-secondary
.text-hero
.text-h1
.text-h2
```

#### Utility Classes
```
.spacing-section        /* Section padding */
.container-max          /* Max-width container */
.text-gradient-coral    /* Coral gradient text */
.bg-glass              /* Glassmorphism effect */
.animate-fade-in        /* Fade in animation */
.hover-lift            /* Hover lift effect */
```

### Motion Specs (Framer Motion)

```tsx
// Page Transition
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Card Hover
const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -8 }
};

// Stagger Children
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

---

## 📊 Conversion Optimization

### CTA Placement Strategy

1. **Above the Fold**: Primary CTA in hero
2. **After Value Prop**: Secondary CTA after intro
3. **After Services**: "Get Started" after services grid
4. **After Pricing**: "Book a Call" after packages
5. **Sticky Footer**: Always-visible CTA bar
6. **Exit Intent**: Popup on exit (optional, use sparingly)

### A/B Testing Opportunities

1. **Hero Headline**: Test outcome vs. problem-solution
2. **CTA Copy**: "Get Started" vs. "Book a Strategy Call"
3. **Pricing Display**: Show vs. hide pricing
4. **Testimonial Format**: Carousel vs. grid
5. **Form Length**: Short vs. detailed contact form

### Conversion Funnels

```
Homepage Visit
    ↓
Hero CTA Click → Contact Form
    ↓
Services Page → Package Selection
    ↓
Pricing Page → Contact Form
    ↓
Blog Engagement → Newsletter Signup
    ↓
Newsletter → Nurture Sequence → Conversion
```

---

## 🚀 Implementation Priority

### Phase 1: Foundation (Week 1-2)
- [ ] Design system & tokens
- [ ] Global navigation & header
- [ ] Hero section redesign
- [ ] Typography & color implementation

### Phase 2: Core Sections (Week 3-4)
- [ ] Services grid redesign
- [ ] Pricing cards enhancement
- [ ] Trust & testimonials section
- [ ] Blog preview section

### Phase 3: Enhancements (Week 5-6)
- [ ] Animations & interactions
- [ ] Newsletter form
- [ ] Mobile optimization
- [ ] Performance optimization

### Phase 4: Polish & Launch (Week 7-8)
- [ ] SEO optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Analytics setup
- [ ] Launch & monitor

---

## 📝 Content Guidelines

### Tone & Voice
- **Professional yet approachable**
- **Confident and results-oriented**
- **Clear and concise**
- **Authentic and trustworthy**

### Writing Style
- Use active voice
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Clear headings and subheadings
- Avoid jargon; explain technical terms

### Content Hierarchy
1. **Headline**: Capture attention, communicate value
2. **Subheadline**: Expand on headline, add context
3. **Body**: Provide details, build trust
4. **CTA**: Clear next step

---

## ✅ Quality Checklist

### Design
- [ ] Consistent spacing system
- [ ] Typography hierarchy clear
- [ ] Color palette applied consistently
- [ ] Images optimized and relevant
- [ ] Icons consistent style

### Functionality
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Mobile menu functions
- [ ] Animations smooth
- [ ] No console errors

### Performance
- [ ] Page load < 3 seconds
- [ ] Images optimized
- [ ] Code minified
- [ ] Lazy loading implemented
- [ ] Core Web Vitals pass

### Accessibility
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] Alt text on images
- [ ] Focus states visible

### SEO
- [ ] Meta tags complete
- [ ] Structured data added
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Internal linking structure

---

**Document Version**: 1.0  
**Last Updated**: [Current Date]  
**Prepared For**: Greenwood Marketing Collective Website Redesign
