# Logo Setup Instructions

## Adding Your Logo

1. **Place your logo file in the `/public` folder:**
   - File name: `logo.png` (or `logo.svg`, `logo.jpg`)
   - Recommended formats: PNG (with transparency) or SVG
   - Recommended size: At least 200x200px for high-quality display

2. **Logo file options:**
   - `logo.png` - Full color logo (preferred)
   - `logo.svg` - Vector logo (best for scaling)
   - `GMC-Full-Color-Logo-Green.png` - If you have this file, rename it to `logo.png` or update the path in `components/Layout/Header.tsx`

## Current Logo Display

The logo is displayed in:
- **Header** (top navigation) - Shows logo + text on desktop, logo only on mobile
- **Footer** (optional) - Can be added if needed

## Logo Specifications (from Brand Guide)

- **Clear space**: Logo should have breathing room (minimum 20px padding)
- **Never stretch**: Logo maintains aspect ratio
- **Full color on light backgrounds**: Use full-color logo on white/cream backgrounds
- **Simplified/mono variant**: Use simplified version on dark backgrounds if needed

## File Structure

```
public/
  └── logo.png  ← Place your logo file here
```

## Updating Logo Path

If your logo file has a different name, update the path in:
- `components/Layout/Header.tsx` (line ~45)
- Change `src="/logo.png"` to your file name

## Testing

After adding the logo:
1. The logo should appear in the header
2. On desktop: Logo + "GREENWOOD MARKETING COLLECTIVE" text
3. On mobile: Logo only (text hidden to save space)
4. Logo should maintain aspect ratio and not stretch
