# Greenwood Marketing Collective — Website Specification

## Document Overview
This specification outlines the complete structure, design, content, and technical requirements for recreating the Greenwood Marketing Collective homepage and global layout outside of Squarespace. The implementation should be responsive, accessible, and optimized for modern web frameworks (React/Next.js or Webflow).

---

## 🎯 1. Site Foundation & Global Navigation

### Site Title
**Greenwood Marketing Collective**

### Navigation Structure

#### Desktop Navigation
- **Position**: Sticky header, top of viewport
- **Background**: Transparent initially, transitions to solid color (`#FFFFFF` or `#F8F9FA`) on scroll
- **Height**: 80px (desktop), 70px (tablet), 60px (mobile)
- **Items** (left-aligned):
  1. **Home** (active state on homepage)
  2. **Services**
  3. **Packages & Pricing**
  4. **Industries** (dropdown menu)
     - Health Tech
     - Healthcare Providers
     - Non-Profits
  5. **Blog**
  6. **About**
  7. **Contact**
- **CTA Button** (right-aligned): "Get Started" — Primary button style
- **Logo**: Left side, links to homepage

#### Mobile Navigation
- **Hamburger Menu**: Right side (3-line icon)
- **Behavior**: Slide-in overlay from right or dropdown from top
- **Items**: Same as desktop, stacked vertically
- **CTA**: "Get Started" button at bottom of menu
- **Close**: X icon or tap outside to close

### Header Behavior
- **Scroll Effect**: 
  - Initial state: Transparent background, white text/logo
  - After 100px scroll: Solid background (`#FFFFFF`), dark text/logo
  - Smooth transition (300ms ease-in-out)
- **Shadow**: Subtle box-shadow on scroll (0 2px 10px rgba(0,0,0,0.1))

### Accessibility
- **ARIA Labels**: 
  - `<nav aria-label="Main navigation">`
  - `<button aria-label="Toggle mobile menu">`
  - `<button aria-label="Close mobile menu">`
- **Keyboard Navigation**: Full tab support, Enter/Space to activate
- **Focus States**: Visible outline on all interactive elements

---

## 🧱 2. Hero / Above-The-Fold Section

### Purpose
Immediately communicate value proposition and core service offerings.

### Layout Structure
- **Full-width section** (100vw)
- **Min-height**: 90vh (desktop), 85vh (tablet), 80vh (mobile)
- **Background**: 
  - Option A: High-quality background image with gradient overlay (linear-gradient: rgba(0,0,0,0.4) to rgba(0,0,0,0.6))
  - Option B: Subtle gradient background (`#1a1a2e` to `#16213e` or brand colors)
- **Content**: Centered vertically and horizontally
- **Max-width container**: 1200px (desktop), 100% (mobile)

### Content Elements

#### Headline (H1)
**Text**: "Fractional CMO & Product Marketing Leadership"

**Styling**:
- **Font**: Bold modern serif (e.g., Playfair Display, Merriweather, or similar)
- **Size**: 64px (desktop), 48px (tablet), 36px (mobile)
- **Color**: `#FFFFFF`
- **Line-height**: 1.2
- **Margin-bottom**: 24px
- **Animation**: Fade-in from bottom (0.8s ease-out)

#### Sub-headline
**Text**: "Bold Ideas. Authentic Connections. Results That Matter."

**Styling**:
- **Font**: Humanist sans-serif (e.g., Inter, Open Sans, or similar)
- **Size**: 24px (desktop), 20px (tablet), 18px (mobile)
- **Color**: `#E8E8E8`
- **Line-height**: 1.5
- **Margin-bottom**: 40px
- **Animation**: Fade-in delay 0.3s (1s ease-out)

#### Core Offerings List
**Display**: Horizontal row (desktop) or vertical stack (mobile)

**Items** (with inline icons or small badges):
1. 🚀 Go-to-Market
2. 📊 Product Marketing Excellence
3. 👔 Fractional CMO Leadership
4. 🎯 Vision Implementation

**Styling**:
- **Container**: Flexbox row with gap 24px (desktop), column with gap 16px (mobile)
- **Badge Style**: 
  - Background: `rgba(255,255,255,0.15)`
  - Border-radius: 8px
  - Padding: 12px 20px
  - Font-size: 16px
  - Color: `#FFFFFF`
- **Icons**: 20px × 20px, inline with text
- **Animation**: Stagger fade-in (delay 0.5s, 0.7s, 0.9s, 1.1s)

#### Primary CTA Button
**Text**: "Get Started"

**Styling**:
- **Background**: Primary accent color (e.g., `#4CAF50` or brand color)
- **Color**: `#FFFFFF`
- **Padding**: 18px 40px
- **Border-radius**: 8px
- **Font-size**: 18px
- **Font-weight**: 600
- **Margin-top**: 32px
- **Hover**: 
  - Scale: 1.05
  - Background: Darker shade (10% darker)
  - Transition: 0.3s ease
- **Focus**: Visible outline (2px solid, offset 2px)

#### Secondary Link
**Text**: "Learn More"

**Styling**:
- **Color**: `#FFFFFF`
- **Text-decoration**: Underline on hover
- **Font-size**: 16px
- **Margin-left**: 24px (desktop), margin-top: 16px (mobile)
- **Behavior**: Smooth scroll anchor to Intro Section

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### Accessibility
- **H1**: Single H1 per page (SEO best practice)
- **Alt Text**: Background image must have descriptive alt text or be decorative (aria-hidden="true")
- **ARIA**: `<section aria-label="Hero section">`
- **Contrast**: Text meets WCAG AA (4.5:1 ratio minimum)

---

## 📌 3. Intro Section

### Goal
Introduce the firm's core promise and positioning.

### Layout
- **Max-width container**: 900px
- **Padding**: 80px 20px (desktop), 60px 20px (tablet), 40px 20px (mobile)
- **Text alignment**: Center
- **Background**: Light section (`#F8F9FA`)

### Content

#### Headline (H2)
**Text**: "Transform your marketing vision into measurable results."

**Styling**:
- **Font**: Bold serif (matches H1 style)
- **Size**: 42px (desktop), 32px (tablet), 28px (mobile)
- **Color**: `#1a1a2e` (dark neutral)
- **Line-height**: 1.3
- **Margin-bottom**: 32px

#### Body Copy
**Text**: 
"Growth-stage companies need marketing leadership that bridges strategy and execution. At Greenwood Marketing Collective, we provide fractional CMO expertise and product marketing excellence that turns your product vision into market success. We partner with scaling organizations that need C-level marketing leadership without the full-time investment."

**Styling**:
- **Font**: Humanist sans-serif (body font)
- **Size**: 18px (desktop), 16px (mobile)
- **Color**: `#4a4a4a`
- **Line-height**: 1.7
- **Max-width**: 800px
- **Margin**: 0 auto 40px

#### Brand Name Emphasis
**Text**: "Greenwood Marketing Collective"

**Styling**:
- **Font-weight**: 600
- **Color**: Primary accent color
- **Font-size**: Inherit

### Divider
- **Style**: Soft horizontal line
- **Width**: 100px
- **Height**: 2px
- **Background**: Primary accent color (20% opacity)
- **Margin**: 40px auto 0
- **Border-radius**: 2px

### Animation
- **Fade-in on scroll**: Trigger when section enters viewport (Intersection Observer)
- **Duration**: 0.8s ease-out

---

## 🧩 4. Services Summary Grid

### Section Title
**Text**: "The Collective Services"

**Styling**:
- **Font**: Bold serif (H2 style)
- **Size**: 38px (desktop), 30px (tablet), 26px (mobile)
- **Color**: `#1a1a2e`
- **Text-align**: Center
- **Margin-bottom**: 48px

### Grid Layout
- **Container**: Max-width 1200px, centered
- **Grid**: 
  - Desktop: 3 columns, gap 32px
  - Tablet: 2 columns, gap 24px
  - Mobile: 1 column, gap 20px
- **Padding**: 80px 20px (desktop), 60px 20px (tablet), 40px 20px (mobile)
- **Background**: White (`#FFFFFF`)

### Service Items

#### 1. Fractional CMO Leadership
**Icon**: 👔 (or custom SVG)
**Description**: "Strategic marketing leadership on a flexible, fractional basis. Get C-level expertise without the full-time commitment."

#### 2. Product Marketing Excellence
**Icon**: 📊 (or custom SVG)
**Description**: "Position your products for market success with data-driven strategies and compelling narratives that resonate."

#### 3. Operationalizing Your Vision
**Icon**: 🎯 (or custom SVG)
**Description**: "Turn your strategic vision into actionable marketing plans with clear roadmaps and measurable outcomes."

#### 4. Sales Enablement Support
**Icon**: 💼 (or custom SVG)
**Description**: "Empower your sales team with the tools, messaging, and materials they need to close more deals."

#### 5. Go-To-Market Strategy & Execution
**Icon**: 🚀 (or custom SVG)
**Description**: "Launch products successfully with comprehensive GTM strategies that align teams and drive market adoption."

#### 6. Brand Storytelling & Narrative Creation
**Icon**: ✍️ (or custom SVG)
**Description**: "Craft authentic brand stories that connect with your audience and differentiate you in competitive markets."

### Card Styling
- **Background**: `#FFFFFF`
- **Border**: 1px solid `#E0E0E0`
- **Border-radius**: 12px
- **Padding**: 32px 24px
- **Box-shadow**: 0 2px 8px rgba(0,0,0,0.05)
- **Transition**: 0.3s ease

### Hover Effect
- **Transform**: TranslateY(-4px)
- **Box-shadow**: 0 8px 24px rgba(0,0,0,0.12)
- **Border-color**: Primary accent color (20% opacity)

### Icon Styling
- **Size**: 48px × 48px
- **Margin-bottom**: 20px
- **Color**: Primary accent color

### Typography
- **Title**: 20px, bold, `#1a1a2e`, margin-bottom: 12px
- **Description**: 16px, `#666666`, line-height: 1.6

### Accessibility
- **Semantic HTML**: `<article>` for each service card
- **ARIA**: `<section aria-label="Services">`
- **Alt Text**: Icons must have descriptive alt text or be decorative

---

## 🪜 5. Partnership Paths (Pricing Cards)

### Section Headline
**Text**: "Three partnership levels designed to meet you where you are"

**Styling**:
- **Font**: Bold serif (H2 style)
- **Size**: 38px (desktop), 30px (tablet), 26px (mobile)
- **Color**: `#1a1a2e`
- **Text-align**: Center
- **Margin-bottom**: 48px

### Layout
- **Container**: Max-width 1200px, centered
- **Grid**: 
  - Desktop: 3 columns, gap 32px
  - Tablet: 2 columns (stack third), gap 24px
  - Mobile: 1 column, gap 20px
- **Padding**: 80px 20px (desktop), 60px 20px (tablet), 40px 20px (mobile)
- **Background**: Light section (`#F8F9FA`)

### Card 1: Strategic Foundation

#### Content
**Title**: "Strategic Foundation"

**Badge**: (Optional) "Starter"

**Deliverables** (Bullet list):
- Initial marketing assessment
- Strategic roadmap development
- Monthly fractional CMO consultation (8 hours/month)
- Quarterly strategy reviews
- Email support

**Ideal For**:
"Early-stage companies establishing their marketing foundation and strategic direction."

**Pricing**: "Contact for pricing" or "$X,XXX/month"

**CTA**: "Get Started" (secondary button style)

#### Styling
- **Background**: `#FFFFFF`
- **Border**: 2px solid `#E0E0E0`
- **Border-radius**: 12px
- **Padding**: 40px 32px
- **Box-shadow**: 0 2px 8px rgba(0,0,0,0.05)

### Card 2: Growth Accelerator — Most Popular

#### Content
**Title**: "Growth Accelerator"

**Badge**: "Most Popular" (highlighted)

**Deliverables** (Bullet list):
- Comprehensive marketing strategy
- Fractional CMO leadership (16 hours/month)
- Product marketing execution
- Go-to-market planning
- Sales enablement materials
- Monthly team alignment sessions
- Priority support

**Ideal For**:
"Scaling companies ready to accelerate growth with dedicated marketing leadership and execution support."

**Pricing**: "Contact for pricing" or "$X,XXX/month"

**CTA**: "Get Started" (primary button style)

#### Styling
- **Background**: `#FFFFFF`
- **Border**: 3px solid Primary accent color
- **Border-radius**: 12px
- **Padding**: 40px 32px
- **Box-shadow**: 0 8px 24px rgba(0,0,0,0.12)
- **Transform**: Scale(1.05) on desktop (optional)
- **Badge**: 
  - Background: Primary accent color
  - Color: `#FFFFFF`
  - Padding: 6px 16px
  - Border-radius: 20px
  - Font-size: 12px
  - Font-weight: 600
  - Position: Top-right corner or above title

### Card 3: Market Mastery — Fully Custom

#### Content
**Title**: "Market Mastery"

**Badge**: (Optional) "Enterprise"

**Deliverables** (Bullet list):
- Full fractional CMO engagement (32+ hours/month)
- Custom marketing program design
- Dedicated product marketing leadership
- Brand storytelling & narrative development
- Complete go-to-market execution
- Ongoing strategic counsel
- Dedicated account management

**Ideal For**:
"Established companies seeking comprehensive, fully-customized marketing leadership and execution."

**Pricing**: "Contact for pricing" or "Custom pricing"

**CTA**: "Let's Chat" (primary button style)

#### Styling
- **Background**: `#FFFFFF`
- **Border**: 2px solid `#E0E0E0`
- **Border-radius**: 12px
- **Padding**: 40px 32px
- **Box-shadow**: 0 2px 8px rgba(0,0,0,0.05)

### Common Card Elements

#### Checkmark Lists
- **Icon**: ✓ (checkmark) or custom SVG
- **Color**: Primary accent color
- **Font-size**: 16px
- **Line-height**: 1.8
- **Margin-bottom**: 8px per item

#### Button Styling
- **Primary**: Background primary color, white text, padding 14px 32px
- **Secondary**: Border 2px primary color, transparent background, primary color text
- **Hover**: Scale 1.05, transition 0.3s

### Hover Effect
- **Transform**: TranslateY(-4px)
- **Box-shadow**: Enhanced shadow
- **Transition**: 0.3s ease

---

## ⚙️ 6. Secondary Value Sections

### Section A: "Ready to operationalize your vision?"

#### Layout
- **Container**: Max-width 1200px, centered
- **Grid**: Split 50/50 (desktop), stacked (mobile)
- **Padding**: 80px 20px (desktop), 60px 20px (tablet), 40px 20px (mobile)
- **Background**: White (`#FFFFFF`)

#### Content Structure
**Left Side** (desktop) / **Top** (mobile):
- **Image**: 
  - Aspect ratio: 16:9 or 4:3
  - Border-radius: 12px
  - Object-fit: cover
  - Alt text: "Team collaboration and strategic planning"

**Right Side** (desktop) / **Bottom** (mobile):
- **Headline** (H2): "Ready to operationalize your vision?"
- **Paragraph**: 
  "Strategic implementation is where vision meets reality. We help you translate high-level goals into actionable marketing plans, clear processes, and measurable KPIs. Our fractional CMO approach ensures your marketing operations align with business objectives while maintaining flexibility for rapid iteration."
- **CTA Button**: "Level-Up Today" (primary style)

#### Styling
- **Headline**: 36px (desktop), 28px (mobile), bold serif, `#1a1a2e`
- **Paragraph**: 18px (desktop), 16px (mobile), `#4a4a4a`, line-height: 1.7
- **Image**: Full-width within container, max-height: 400px

### Section B: "Product Marketing Mastery"

#### Layout
- **Container**: Max-width 1200px, centered
- **Grid**: Split 50/50 (desktop), **reversed order** (text left, image right on desktop; text top, image bottom on mobile)
- **Padding**: 80px 20px (desktop), 60px 20px (tablet), 40px 20px (mobile)
- **Background**: Light section (`#F8F9FA`)

#### Content Structure
**Left Side** (desktop) / **Top** (mobile):
- **Headline** (H2): "Product Marketing Mastery"
- **Paragraph**: 
  "Effective product marketing goes beyond features—it's about positioning, buyer journeys, and market fit. We craft compelling narratives that resonate with your target audience, develop go-to-market strategies that drive adoption, and create sales enablement materials that convert. Our expertise spans from early-stage positioning to mature product launches."
- **CTA Button**: "Let's Chat" (primary style)

**Right Side** (desktop) / **Bottom** (mobile):
- **Image**: 
  - Aspect ratio: 16:9 or 4:3
  - Border-radius: 12px
  - Object-fit: cover
  - Alt text: "Product marketing strategy and market positioning"

#### Styling
- Same as Section A

### Responsive Behavior
- **Desktop**: Side-by-side layout
- **Tablet**: Side-by-side (narrower columns)
- **Mobile**: Stacked layout (text first, then image)

### Animation
- **Fade-in on scroll**: Trigger when section enters viewport
- **Stagger**: Text fades in first, then image (0.2s delay)

---

## 📚 7. Blog Preview / Thought Leadership

### Section Title
**Text**: "Insights & Thought Leadership"

**Styling**:
- **Font**: Bold serif (H2 style)
- **Size**: 38px (desktop), 30px (tablet), 26px (mobile)
- **Color**: `#1a1a2e`
- **Text-align**: Center
- **Margin-bottom**: 48px

### Layout
- **Container**: Max-width 1200px, centered
- **Display**: Horizontal scroll (mobile) or grid (desktop)
- **Grid**: 
  - Desktop: 3 columns, gap 32px
  - Tablet: 2 columns, gap 24px
  - Mobile: Horizontal scroll (snap points)
- **Padding**: 80px 20px (desktop), 60px 20px (tablet), 40px 20px (mobile)
- **Background**: White (`#FFFFFF`)

### Blog Post Cards (3-6 items)

#### Card Structure
Each card includes:

1. **Featured Image**:
   - Aspect ratio: 16:9
   - Border-radius: 8px (top corners)
   - Object-fit: cover
   - Alt text: Descriptive based on post title

2. **Title** (H3):
   - Font: Bold serif or sans-serif
   - Size: 22px (desktop), 20px (mobile)
   - Color: `#1a1a2e`
   - Margin: 16px 0 8px

3. **Date**:
   - Font: Sans-serif
   - Size: 14px
   - Color: `#999999`
   - Format: "Month Day, Year" (e.g., "March 15, 2024")

4. **Excerpt**:
   - Font: Body font
   - Size: 16px
   - Color: `#666666`
   - Line-height: 1.6
   - Max-lines: 3 (ellipsis overflow)

5. **Link**: 
   - Text: "Read More →"
   - Color: Primary accent color
   - Font-weight: 600
   - Hover: Underline

#### Card Styling
- **Background**: `#FFFFFF`
- **Border**: 1px solid `#E0E8E0`
- **Border-radius**: 12px
- **Overflow**: Hidden
- **Box-shadow**: 0 2px 8px rgba(0,0,0,0.05)
- **Transition**: 0.3s ease

#### Hover Effect
- **Transform**: TranslateY(-4px)
- **Box-shadow**: 0 8px 24px rgba(0,0,0,0.12)

### CTA at End
**Text**: "View All Blogs"

**Styling**:
- **Button**: Secondary style (outline)
- **Position**: Centered below grid
- **Margin-top**: 40px

### Mobile Horizontal Scroll
- **Scroll behavior**: Smooth snap points
- **Padding**: 20px on sides
- **Card width**: 85vw (mobile)
- **Gap**: 20px between cards

### Accessibility
- **Semantic HTML**: `<article>` for each blog post
- **ARIA**: `<section aria-label="Blog posts">`
- **Alt Text**: All images must have descriptive alt text

---

## ✉️ 8. Mailing List Sign-Up

### Section Title
**Text**: "Stay in the loop"

**Styling**:
- **Font**: Bold serif (H2 style)
- **Size**: 36px (desktop), 28px (mobile)
- **Color**: `#1a1a2e`
- **Text-align**: Center
- **Margin-bottom**: 24px

### Layout
- **Container**: Max-width 600px, centered
- **Padding**: 80px 20px (desktop), 60px 20px (tablet), 40px 20px (mobile)
- **Background**: Light section (`#F8F9FA`)

### Form Structure
- **Input Field**:
  - Type: Email
  - Placeholder: "Enter your email address"
  - Padding: 16px 20px
  - Border: 2px solid `#E0E0E0`
  - Border-radius: 8px
  - Font-size: 16px
  - Width: 100% (mobile), 70% (desktop)
  - Focus: Border color changes to primary accent

- **Subscribe Button**:
  - Text: "Subscribe"
  - Background: Primary accent color
  - Color: `#FFFFFF`
  - Padding: 16px 32px
  - Border-radius: 8px
  - Font-size: 16px
  - Font-weight: 600
  - Width: 100% (mobile), 28% (desktop)
  - Margin-left: 2% (desktop), margin-top: 12px (mobile)

### Form Layout
- **Desktop**: Flexbox row (input 70%, button 28%, gap 2%)
- **Mobile**: Stacked (input full-width, button full-width below)

### Optional Subtext
**Text**: "Get marketing insights, tips, and updates delivered to your inbox."

**Styling**:
- **Font**: Body font
- **Size**: 14px
- **Color**: `#666666`
- **Text-align**: Center
- **Margin-top**: 12px

### Accessibility
- **Label**: `<label for="email-input">` (visually hidden but accessible)
- **ARIA**: `<form aria-label="Email subscription">`
- **Error States**: Display validation errors clearly
- **Success State**: Confirmation message after submission

---

## 📍 9. Footer

### Layout
- **Background**: Dark neutral (`#1a1a2e` or `#2c3e50`)
- **Color**: `#FFFFFF` (text)
- **Padding**: 60px 20px 30px (desktop), 40px 20px 20px (mobile)

### Structure (4-column grid desktop, stacked mobile)

#### Column 1: Company Info
- **Logo**: Greenwood Marketing Collective (text or image)
- **Tagline**: "Bold Ideas. Authentic Connections. Results That Matter."
- **Location**: "Based in Massachusetts, working with clients anywhere."

#### Column 2: Quick Links
- **Title**: "Quick Links"
- **Links**:
  - Home
  - Services
  - Packages & Pricing
  - About
  - Contact

#### Column 3: Resources
- **Title**: "Resources"
- **Links**:
  - Blog
  - Industries
  - Case Studies (if applicable)

#### Column 4: Contact
- **Title**: "Get in Touch"
- **Email**: [email protected] (mailto link)
- **Phone**: (XXX) XXX-XXXX (tel link)
- **Social Icons**: 
  - LinkedIn
  - Twitter/X
  - (Other relevant platforms)
  - Icon size: 24px × 24px
  - Gap: 16px
  - Hover: Scale 1.2, primary accent color

### Footer Bottom
- **Border-top**: 1px solid rgba(255,255,255,0.1)
- **Padding-top**: 30px
- **Margin-top**: 40px
- **Layout**: Flexbox (space-between on desktop, stacked mobile)
- **Copyright**: "© 2024 Greenwood Marketing Collective. All rights reserved."
- **Legal Links**: Privacy Policy, Terms of Service (if applicable)

### Responsive
- **Desktop**: 4-column grid
- **Tablet**: 2-column grid
- **Mobile**: Stacked single column

### Accessibility
- **ARIA**: `<footer role="contentinfo">`
- **Links**: All links must have descriptive text
- **Contrast**: Text meets WCAG AA standards

---

## 🎨 Style & Interaction Guidelines

### Typography System

#### Headings
- **Font Family**: Bold modern serif (e.g., Playfair Display, Merriweather, Lora)
- **H1**: 64px (desktop), 48px (tablet), 36px (mobile) — Bold, line-height 1.2
- **H2**: 42px (desktop), 32px (tablet), 28px (mobile) — Bold, line-height 1.3
- **H3**: 28px (desktop), 24px (tablet), 22px (mobile) — Semi-bold, line-height 1.4
- **H4**: 22px (desktop), 20px (mobile) — Semi-bold, line-height 1.4

#### Body Text
- **Font Family**: Clear humanist sans-serif (e.g., Inter, Open Sans, Source Sans Pro)
- **Body**: 18px (desktop), 16px (mobile) — Regular, line-height 1.7
- **Small**: 14px — Regular, line-height 1.6
- **Minimum**: 16px for body text (accessibility requirement)

#### Font Loading
- **Strategy**: Preload critical fonts, use `font-display: swap`
- **Fallbacks**: System font stack as fallback

### Color Palette

#### Primary Colors
- **Primary Accent**: `#4CAF50` (Green) or `#2563EB` (Blue) — Choose based on brand
- **Primary Dark**: `#1a1a2e` (Dark navy/charcoal)
- **Primary Light**: `#F8F9FA` (Light gray)

#### Secondary Colors
- **Text Primary**: `#1a1a2e` (Dark neutral)
- **Text Secondary**: `#4a4a4a` (Medium gray)
- **Text Tertiary**: `#666666` (Light gray)
- **Text Light**: `#999999` (Very light gray)

#### Background Colors
- **White**: `#FFFFFF`
- **Light**: `#F8F9FA`
- **Dark**: `#1a1a2e`

#### Accent Colors (Optional)
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)
- **Info**: `#3B82F6` (Blue)

### Button Styles

#### Primary Button
- **Background**: Primary accent color
- **Color**: `#FFFFFF`
- **Padding**: 18px 40px (desktop), 16px 32px (mobile)
- **Border-radius**: 8px
- **Font-size**: 18px (desktop), 16px (mobile)
- **Font-weight**: 600
- **Border**: None
- **Hover**: 
  - Background: Darker shade (10% darker)
  - Transform: Scale(1.05)
  - Transition: 0.3s ease
- **Focus**: 
  - Outline: 2px solid primary color
  - Outline-offset: 2px
- **Active**: Scale(0.98)

#### Secondary Button
- **Background**: Transparent
- **Color**: Primary accent color
- **Padding**: 18px 40px (desktop), 16px 32px (mobile)
- **Border-radius**: 8px
- **Font-size**: 18px (desktop), 16px (mobile)
- **Font-weight**: 600
- **Border**: 2px solid primary accent color
- **Hover**: 
  - Background: Primary accent color (10% opacity)
  - Transform: Scale(1.05)
  - Transition: 0.3s ease
- **Focus**: Same as primary

#### Text Link
- **Color**: Primary accent color
- **Text-decoration**: None
- **Hover**: Underline
- **Focus**: Visible outline

### Spacing System
- **Base Unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px
- **Section Padding**: 80px vertical (desktop), 60px (tablet), 40px (mobile)
- **Container Max-width**: 1200px (desktop), 100% (mobile with 20px padding)

### Animations & Interactions

#### Scroll Animations
- **Fade-in**: Elements fade in as they enter viewport
- **Duration**: 0.8s ease-out
- **Trigger**: Intersection Observer API
- **Stagger**: 0.2s delay between elements

#### Hover Effects
- **Cards**: TranslateY(-4px), enhanced shadow
- **Buttons**: Scale(1.05)
- **Links**: Underline or color change
- **Transition**: 0.3s ease

#### Page Load
- **Hero**: Fade-in from bottom (0.8s)
- **Sub-headline**: Fade-in delay 0.3s (1s)
- **Badges**: Stagger fade-in (0.5s, 0.7s, 0.9s, 1.1s)

#### Micro-interactions
- **Form Inputs**: Border color change on focus
- **Checkboxes/Radio**: Smooth check animation
- **Loading States**: Skeleton screens or spinners

### Responsive Design Principles

#### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

#### Mobile-First Approach
- Start with mobile styles
- Use `min-width` media queries
- Progressive enhancement

#### Touch Targets
- **Minimum size**: 44px × 44px
- **Spacing**: 8px minimum between targets

#### Typography Scaling
- Use `clamp()` for fluid typography where possible
- Example: `font-size: clamp(18px, 2vw, 24px)`

---

## 📑 CMS Model + Reuse Blocks

### Content Collections

#### Blog Posts
**Collection Name**: `blog_posts`

**Fields**:
- `title` (Text, required)
- `slug` (Text, required, unique)
- `featured_image` (Image, required)
- `summary` (Text, 150-200 characters)
- `excerpt` (Rich text, 2-3 paragraphs)
- `content` (Rich text, full post)
- `author` (Reference to authors collection or text)
- `date` (Date, required)
- `category` (Select: Marketing, Strategy, Product, etc.)
- `tags` (Array of text)
- `meta_title` (Text, SEO)
- `meta_description` (Text, SEO, 150-160 characters)
- `published` (Boolean)

#### Services
**Collection Name**: `services`

**Fields**:
- `title` (Text, required)
- `slug` (Text, required, unique)
- `icon` (Image or icon reference)
- `description` (Text, 20-30 words)
- `full_description` (Rich text, optional)
- `order` (Number, for sorting)
- `featured` (Boolean)

#### Packages
**Collection Name**: `packages`

**Fields**:
- `title` (Text, required)
- `slug` (Text, required, unique)
- `badge` (Text, optional: "Most Popular", "Starter", etc.)
- `deliverables` (Array of text, bullet points)
- `ideal_for` (Text, description)
- `pricing` (Text: "Contact for pricing" or number)
- `cta_text` (Text: "Get Started", "Let's Chat", etc.)
- `cta_style` (Select: "primary", "secondary")
- `order` (Number, for sorting)
- `featured` (Boolean)

#### Navigation Items
**Collection Name**: `navigation`

**Fields**:
- `label` (Text, required)
- `url` (Text, required)
- `order` (Number, for sorting)
- `parent` (Reference to navigation, optional for dropdowns)
- `dropdown_items` (Array of references, optional)

#### Global Settings
**Collection Name**: `site_settings`

**Fields**:
- `site_title` (Text)
- `site_description` (Text)
- `contact_email` (Email)
- `contact_phone` (Text)
- `social_links` (Object: LinkedIn, Twitter, etc.)
- `footer_text` (Rich text)
- `hero_headline` (Text)
- `hero_subheadline` (Text)
- `hero_background_image` (Image)

### Reusable Blocks

#### Content Block
**Name**: `content_block`

**Fields**:
- `layout` (Select: "text_left_image_right", "text_right_image_left", "centered")
- `headline` (Text)
- `content` (Rich text)
- `image` (Image)
- `cta_text` (Text)
- `cta_url` (Text)
- `background_color` (Select: "white", "light", "dark")

#### Testimonial Block
**Name**: `testimonials`

**Fields**:
- `quote` (Text, required)
- `author_name` (Text, required)
- `author_title` (Text)
- `author_company` (Text)
- `author_image` (Image, optional)
- `featured` (Boolean)

#### CTA Block
**Name**: `cta_block`

**Fields**:
- `headline` (Text)
- `subheadline` (Text, optional)
- `cta_text` (Text)
- `cta_url` (Text)
- `style` (Select: "primary", "secondary")
- `background_color` (Select: "white", "light", "primary")

---

## 📌 SEO Meta Templates

### Homepage Meta

#### Meta Title
**Text**: "Fractional CMO & Product Marketing Leadership Services — Greenwood Marketing Collective"

**Guidelines**:
- Length: 50-60 characters (optimal)
- Include primary keyword: "Fractional CMO"
- Include brand name
- Use pipe (|) or em dash (—) separator

#### Meta Description
**Text**: "Strategic fractional CMO leadership, product marketing excellence, and go-to-market execution for scaling companies. Transform your vision into measurable growth."

**Guidelines**:
- Length: 150-160 characters
- Include primary keywords
- Clear value proposition
- Call to action (implicit)

### Additional SEO Elements

#### Open Graph Tags
```html
<meta property="og:title" content="Fractional CMO & Product Marketing Leadership Services — Greenwood Marketing Collective">
<meta property="og:description" content="Strategic fractional CMO leadership, product marketing excellence, and go-to-market execution for scaling companies.">
<meta property="og:image" content="[URL to featured image]">
<meta property="og:url" content="[Site URL]">
<meta property="og:type" content="website">
```

#### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Fractional CMO & Product Marketing Leadership Services">
<meta name="twitter:description" content="Strategic fractional CMO leadership and product marketing excellence for scaling companies.">
<meta name="twitter:image" content="[URL to featured image]">
```

#### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Greenwood Marketing Collective",
  "description": "Fractional CMO and product marketing services for scaling companies",
  "url": "[Site URL]",
  "telephone": "[Phone Number]",
  "email": "[Email]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Massachusetts",
    "addressCountry": "US"
  },
  "serviceType": "Marketing Consulting",
  "areaServed": "Worldwide"
}
```

### Page-Specific Meta Templates

#### Services Page
**Title**: "Marketing Services — Fractional CMO & Product Marketing | Greenwood Marketing Collective"
**Description**: "Comprehensive marketing services including fractional CMO leadership, product marketing, go-to-market strategy, and sales enablement for growth-stage companies."

#### Blog Page
**Title**: "Marketing Insights & Thought Leadership | Greenwood Marketing Collective Blog"
**Description**: "Expert insights on fractional CMO leadership, product marketing, go-to-market strategy, and marketing operations for scaling companies."

#### Contact Page
**Title**: "Contact Us — Get Started with Fractional CMO Services | Greenwood Marketing Collective"
**Description**: "Ready to transform your marketing? Contact Greenwood Marketing Collective to discuss fractional CMO and product marketing solutions for your company."

---

## 🏗️ Component Breakdown (React/Next.js)

### Recommended Component Structure

```
components/
  ├── Layout/
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   ├── Navigation.tsx
  │   └── MobileMenu.tsx
  ├── Sections/
  │   ├── Hero.tsx
  │   ├── Intro.tsx
  │   ├── ServicesGrid.tsx
  │   ├── PricingCards.tsx
  │   ├── ValueSection.tsx
  │   ├── BlogPreview.tsx
  │   └── Newsletter.tsx
  ├── UI/
  │   ├── Button.tsx
  │   ├── Card.tsx
  │   ├── Input.tsx
  │   └── Icon.tsx
  └── SEO/
      └── MetaTags.tsx
```

### Key Components

#### Header Component
- **Props**: `navigationItems`, `ctaText`, `logo`
- **State**: `isScrolled` (for background transition), `isMobileMenuOpen`
- **Features**: Sticky positioning, scroll detection, mobile menu toggle

#### Hero Component
- **Props**: `headline`, `subheadline`, `offerings`, `ctaText`, `backgroundImage`
- **Features**: Fade-in animations, responsive layout

#### ServicesGrid Component
- **Props**: `services` (array from CMS)
- **Features**: Grid layout, hover effects, responsive columns

#### PricingCards Component
- **Props**: `packages` (array from CMS)
- **Features**: Featured card highlighting, responsive grid

---

## 🌐 Webflow Implementation Notes

### CMS Collections Setup
1. Create collections matching the CMS model above
2. Set up relationships between collections
3. Configure dynamic pages for blog posts

### Interactions & Animations
- Use Webflow Interactions for scroll animations
- Set up hover states on buttons and cards
- Configure page transitions

### Responsive Design
- Use Webflow's responsive breakpoints
- Test on mobile, tablet, and desktop views
- Ensure touch targets meet accessibility standards

### SEO Settings
- Configure meta titles and descriptions in page settings
- Set up Open Graph and Twitter Card images
- Add structured data via custom code

---

## ✅ Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible on all links and buttons
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Semantic HTML structure (header, nav, main, section, footer)
- [ ] ARIA labels where appropriate
- [ ] Form labels are properly associated
- [ ] Skip to main content link (optional but recommended)
- [ ] Text is resizable up to 200% without loss of functionality
- [ ] No content relies solely on color to convey meaning

---

## 📱 Performance Considerations

- **Image Optimization**: Use WebP format, lazy loading, responsive images
- **Font Loading**: Preload critical fonts, use font-display: swap
- **Code Splitting**: Lazy load non-critical components
- **Minification**: Minify CSS and JavaScript
- **Caching**: Implement proper cache headers
- **CDN**: Use CDN for static assets
- **Core Web Vitals**: Optimize for LCP, FID, CLS

---

## 🎯 CTA Goals & Click Targets

### Primary CTAs
1. **"Get Started"** (Header, Hero, Pricing Cards)
   - **Goal**: Lead generation / Contact form submission
   - **Target**: Contact page or modal form
   - **Tracking**: Track clicks and conversions

2. **"Level-Up Today"** (Value Section A)
   - **Goal**: Service inquiry
   - **Target**: Contact page with pre-filled service interest

3. **"Let's Chat"** (Value Section B, Market Mastery card)
   - **Goal**: Consultation request
   - **Target**: Contact page or calendar booking

4. **"View All Blogs"** (Blog Preview)
   - **Goal**: Content engagement
   - **Target**: Blog listing page

5. **"Subscribe"** (Newsletter)
   - **Goal**: Email list growth
   - **Target**: Email capture and confirmation

### Secondary CTAs
- **"Learn More"** (Hero): Smooth scroll to Intro section
- **Navigation Links**: Page navigation and engagement
- **Social Icons**: External social media engagement
- **Blog Post Links**: Content consumption

### Conversion Tracking
- Set up analytics events for each CTA click
- Track form submissions
- Monitor scroll depth and engagement
- Measure time on page and bounce rate

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

### SEO Writing
- Include primary keywords naturally
- Use semantic HTML (H1, H2, H3 hierarchy)
- Write for humans first, search engines second
- Include internal links to relevant pages

---

## 🔄 Maintenance & Updates

### Regular Updates
- **Blog**: Publish new posts regularly (monthly minimum)
- **Services**: Update service descriptions as offerings evolve
- **Testimonials**: Add new client testimonials
- **Case Studies**: Add success stories (if applicable)

### Content Review
- Review and update copy quarterly
- Refresh images annually
- Update pricing/packages as needed
- Monitor and respond to analytics data

---

## 📞 Implementation Support

### Next Steps
1. Review and approve this specification
2. Select technology stack (React/Next.js or Webflow)
3. Set up CMS and content collections
4. Begin design mockups based on this spec
5. Develop components/sections incrementally
6. Test responsiveness and accessibility
7. Implement SEO optimizations
8. Launch and monitor performance

### Questions to Resolve
- Final color palette selection (primary accent color)
- Specific imagery requirements
- Integration with email marketing platform
- Analytics and tracking setup
- Hosting and domain configuration

---

**Document Version**: 1.0  
**Last Updated**: [Current Date]  
**Prepared For**: Greenwood Marketing Collective
