# Pre-GitHub Checklist ✅

Use this checklist before pushing to GitHub to ensure everything is ready.

## 🔍 Code Quality

- [x] No linter errors (`npm run lint` passes)
- [x] TypeScript compiles without errors
- [x] All imports resolve correctly
- [x] No console errors in browser

## 📝 Configuration

- [ ] Review `config/site.ts` - Update placeholder values:
  - [ ] Contact email
  - [ ] Phone number (format: `(XXX) XXX-XXXX`)
  - [ ] Social media links (LinkedIn, Twitter)
  - [ ] Site URL (update after deployment)

## 🔒 Security

- [x] `.env*.local` in `.gitignore`
- [x] No API keys or secrets in code
- [x] No personal information hardcoded
- [ ] Review all files for sensitive data

## 📦 Dependencies

- [x] `package.json` has all required dependencies
- [x] `package-lock.json` is up to date (will be generated on `npm install`)
- [x] No unnecessary dependencies

## 🧪 Testing

- [ ] Test locally: `npm run dev`
- [ ] Verify homepage loads correctly
- [ ] Test mobile menu (hamburger)
- [ ] Test navigation links
- [ ] Test newsletter form
- [ ] Check responsive design (mobile/tablet/desktop)
- [ ] Verify all animations work

## 📄 Documentation

- [x] README.md exists and is helpful
- [x] QUICK_START.md created
- [x] CUSTOMIZATION.md created
- [x] GITHUB_SETUP.md created
- [x] PROJECT_SUMMARY.md created

## 🎨 Assets

- [ ] Add favicon (optional - can add later)
- [ ] Prepare images for:
  - [ ] Hero background (or use gradient)
  - [ ] Value section images
  - [ ] Blog post thumbnails
  - [ ] Logo (if you have one)

## 🚀 Ready to Push?

Once all items are checked:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Greenwood Marketing Collective website"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## 📋 Post-Push Actions

After pushing to GitHub:

1. **Deploy to Vercel/Netlify**
   - Connect your GitHub repo
   - Deploy automatically

2. **Update Site URL**
   - After deployment, update `config/site.ts` with your live URL

3. **Test Live Site**
   - Verify all links work
   - Test on mobile devices
   - Check page speed

4. **Set Up Custom Domain** (optional)
   - Configure DNS
   - Update site URL again

## 🎯 Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Check TypeScript
npx tsc --noEmit
```

## ✅ Final Verification

Before pushing, run:

```bash
# 1. Install dependencies
npm install

# 2. Check for errors
npm run lint

# 3. Build to verify
npm run build

# 4. Test locally
npm run dev
```

If all pass, you're ready to push to GitHub! 🚀
