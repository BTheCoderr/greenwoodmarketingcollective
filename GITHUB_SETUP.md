# GitHub Setup Guide

Follow these steps to set up your GitHub repository and deploy your website.

## 📦 Initial Git Setup

### 1. Initialize Git Repository

```bash
# Navigate to your project directory
cd greenWoodMarketingCollective

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Greenwood Marketing Collective website"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Fill in:
   - **Repository name**: `greenwood-marketing-collective` (or your preferred name)
   - **Description**: "Modern marketing website for Greenwood Marketing Collective"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### 3. Connect Local Repository to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/greenwood-marketing-collective.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Go to [Vercel](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**
6. Your site will be live in minutes!

**Benefits:**
- Automatic deployments on every push
- Free SSL certificate
- Global CDN
- Preview deployments for pull requests

### Option 2: Netlify

1. Go to [Netlify](https://netlify.com) and sign in with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your GitHub repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **"Deploy site"**

### Option 3: GitHub Pages (Requires Static Export)

If you want to use GitHub Pages, you'll need to configure Next.js for static export:

1. Update `next.config.js`:
```js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

2. Update `package.json`:
```json
{
  "scripts": {
    "export": "next build"
  }
}
```

3. Deploy to GitHub Pages using GitHub Actions or manually

## 🔧 Post-Deployment Steps

### 1. Update Site URL

After deployment, update your site URL in `config/site.ts`:

```typescript
url: 'https://your-domain.vercel.app', // or your custom domain
```

### 2. Set Up Custom Domain (Optional)

**Vercel:**
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

**Netlify:**
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS records

### 3. Environment Variables

If you add environment variables later:
1. Add them in your hosting platform's dashboard
2. Update `.env.example` with placeholder values
3. Never commit `.env.local` to Git

## 📝 GitHub Best Practices

### Branch Strategy

```bash
# Create a branch for new features
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push branch
git push origin feature/your-feature-name

# Create pull request on GitHub
```

### Commit Messages

Use clear, descriptive commit messages:
- ✅ `feat: Add newsletter signup form`
- ✅ `fix: Update contact phone number`
- ✅ `style: Improve mobile navigation`
- ❌ `update stuff`
- ❌ `fix`

### .gitignore

Your `.gitignore` already includes:
- `node_modules/`
- `.next/`
- `.env*.local`
- Build artifacts

**Never commit:**
- `.env.local` files
- API keys
- Personal information
- Build directories

## 🔄 Continuous Deployment

Once connected to Vercel/Netlify:
- Every push to `main` branch = automatic production deployment
- Pull requests = preview deployments
- No manual deployment needed!

## 📊 GitHub Actions

A CI workflow is already set up (`.github/workflows/ci.yml`) that will:
- Run linter on every push
- Build the project to catch errors
- Ensure code quality

## 🆘 Troubleshooting

### Push Rejected?

```bash
# Pull latest changes first
git pull origin main --rebase

# Then push again
git push origin main
```

### Build Fails?

1. Check build logs in your hosting platform
2. Run `npm run build` locally to test
3. Ensure all dependencies are in `package.json`
4. Check Node.js version (18+ required)

### Domain Not Working?

1. Verify DNS settings
2. Wait for DNS propagation (can take up to 48 hours)
3. Check SSL certificate status
4. Clear browser cache

## ✅ Pre-Push Checklist

Before pushing to GitHub:

- [ ] All sensitive data removed from code
- [ ] `.env.local` is in `.gitignore`
- [ ] Site configuration updated in `config/site.ts`
- [ ] Code builds successfully (`npm run build`)
- [ ] No linter errors (`npm run lint`)
- [ ] README.md is up to date

## 🎉 You're Ready!

Your website is now:
- ✅ Version controlled with Git
- ✅ Hosted on GitHub
- ✅ Ready to deploy
- ✅ Set up for continuous deployment

Happy coding! 🚀
