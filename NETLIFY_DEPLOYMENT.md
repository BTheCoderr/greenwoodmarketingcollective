# Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Go to [Netlify](https://netlify.com)** and sign in (or sign up with GitHub)

2. **Click "Add new site"** → **"Import an existing project"**

3. **Connect to GitHub**:
   - Authorize Netlify to access your GitHub
   - Select repository: `BTheCoderr/greenwoodmarketingcollective`

4. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 (or latest LTS)

5. **Click "Deploy site"**

6. **Wait for deployment** (usually 2-3 minutes)

7. **Your site is live!** 🎉

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## ⚙️ Build Configuration

Netlify will auto-detect Next.js, but you can create a `netlify.toml` for custom settings:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

## 🔧 Post-Deployment Steps

### 1. Update Site URL

After deployment, update `config/site.ts`:

```typescript
url: 'https://your-site-name.netlify.app', // or your custom domain
```

### 2. Set Up Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

### 3. Environment Variables

If you add environment variables later:

1. Go to **Site settings** → **Environment variables**
2. Add your variables
3. Redeploy site

## 📊 Netlify Features

- ✅ **Automatic deployments** on every push to `main`
- ✅ **Preview deployments** for pull requests
- ✅ **Free SSL** certificate
- ✅ **Global CDN**
- ✅ **Form handling** (if you add forms)
- ✅ **Analytics** (optional, paid)

## 🎯 Next.js on Netlify

Netlify has excellent Next.js support:
- Automatic image optimization
- Serverless functions support
- Edge functions
- Incremental Static Regeneration (ISR)

## 🔄 Continuous Deployment

Once connected:
- **Push to `main`** → Automatic production deployment
- **Create pull request** → Preview deployment
- **Merge PR** → Production deployment

## 🐛 Troubleshooting

### Build Fails?

1. Check build logs in Netlify dashboard
2. Verify Node.js version (18+)
3. Run `npm run build` locally to test
4. Check for missing dependencies

### Site Not Updating?

1. Check deployment logs
2. Verify GitHub connection
3. Trigger manual deploy if needed

### Custom Domain Issues?

1. Verify DNS settings
2. Wait for DNS propagation (up to 48 hours)
3. Check SSL certificate status
4. Contact Netlify support if needed

## 📝 Next Steps After Deployment

- [ ] Update site URL in `config/site.ts`
- [ ] Test all pages and links
- [ ] Set up custom domain (optional)
- [ ] Configure environment variables (if needed)
- [ ] Add Netlify Analytics (optional)
- [ ] Set up form handling (if adding contact form)

## 🎉 You're Live!

Your website is now deployed and accessible worldwide!

**Next**: Customize your content and add your images!
