# Netlify Deployment Guide

Your code is now on GitHub! Follow these steps to deploy to Netlify.

## 🚀 Quick Deployment Steps

### 1. Sign Up / Sign In to Netlify
- Go to [netlify.com](https://netlify.com)
- Sign in with your GitHub account (recommended for easy setup)

### 2. Create New Site
1. Click **"Add new site"** → **"Import an existing project"**
2. Select **"GitHub"** as your Git provider
3. Authorize Netlify to access your GitHub (if first time)
4. Find and select your repository: **`greenwoodmarketingcollective`**

### 3. Configure Build Settings
Netlify should auto-detect Next.js, but verify these settings:

**Build command:**
```
npm run build
```

**Publish directory:**
```
.next
```

**⚠️ Important**: For Next.js, you need to use the **Next.js Runtime**:
- Go to **Site settings** → **Build & deploy** → **Build settings**
- Under **Build command**, it should be: `npm run build`
- **Publish directory** should be: `.next` (or leave empty for Next.js runtime)

**Better Option**: Use Netlify's Next.js Runtime:
- In **Build settings**, click **"Edit settings"**
- Under **Build command**, use: `npm run build` 
- Under **Publish directory**, use: `.next`
- Or better: Install **@netlify/plugin-nextjs** (see below)

### 4. Install Next.js Plugin (Recommended)

For best Next.js support, add the Netlify Next.js plugin:

1. Go to **Site settings** → **Build & deploy** → **Plugins**
2. Click **"Add plugin"**
3. Search for **"@netlify/plugin-nextjs"**
4. Click **"Install"**

Or add it to your `package.json`:

```json
{
  "devDependencies": {
    "@netlify/plugin-nextjs": "^4.39.0"
  }
}
```

And create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 5. Environment Variables (Optional)
If you add environment variables later:
- Go to **Site settings** → **Environment variables**
- Add any variables you need (e.g., `NEXT_PUBLIC_SITE_URL`)

### 6. Deploy!
- Click **"Deploy site"**
- Netlify will build and deploy your site
- You'll get a URL like: `https://random-name-12345.netlify.app`

## ✅ Post-Deployment

### 1. Update Site URL
After deployment, update `config/site.ts`:

```typescript
url: 'https://your-site-name.netlify.app', // Your Netlify URL
```

Then commit and push:
```bash
git add config/site.ts
git commit -m "Update site URL"
git push
```

### 2. Set Up Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Update `config/site.ts` with your custom domain

### 3. Enable HTTPS
- Netlify automatically provides SSL certificates
- HTTPS is enabled by default
- No configuration needed!

## 🔄 Continuous Deployment

Once connected:
- ✅ Every push to `main` branch = automatic deployment
- ✅ Pull requests = preview deployments
- ✅ Build logs available in Netlify dashboard
- ✅ Rollback to previous deployments with one click

## 📊 Build Settings Summary

**For Next.js on Netlify:**

```
Build command: npm run build
Publish directory: .next
Node version: 18.x (or latest)
```

**Or use the Next.js plugin** (recommended) - it handles everything automatically!

## 🐛 Troubleshooting

### Build Fails?
1. Check build logs in Netlify dashboard
2. Verify Node.js version (18+ required)
3. Make sure `package.json` has all dependencies
4. Check that `npm run build` works locally

### Site Not Loading?
1. Verify publish directory is `.next`
2. Check that Next.js plugin is installed
3. Review build logs for errors
4. Ensure all environment variables are set

### Images Not Loading?
- Make sure images are in `public/` folder
- Use Next.js `Image` component for optimization
- Check image paths are correct

## 🎉 You're Live!

Once deployed, your site will be:
- ✅ Live on the internet
- ✅ Automatically updated on every push
- ✅ SSL secured (HTTPS)
- ✅ Fast with global CDN
- ✅ Ready for custom domain

## 📝 Next Steps

1. **Test your live site**
   - Check all pages load
   - Test mobile responsiveness
   - Verify forms work

2. **Update contact info**
   - Edit `config/site.ts`
   - Commit and push
   - Auto-deploys!

3. **Add custom domain** (optional)
   - Configure DNS
   - Update site URL

4. **Set up analytics** (optional)
   - Add Netlify Analytics
   - Or integrate Google Analytics

Your website is now live! 🚀
