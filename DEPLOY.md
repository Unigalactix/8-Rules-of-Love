# Vercel Deployment Guide

## Quick Deploy to Vercel

1. **Prepare your project**
   - Make sure all files are in the `love-rules-website` folder
   - Push your code to a GitHub repository

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Build Settings** (Auto-detected)
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out` (for static export)
   - Install Command: `npm install`

4. **Environment Variables** (if needed)
   - No environment variables are required for this project

5. **Custom Domain** (optional)
   - Add your custom domain in the Vercel dashboard
   - Follow DNS setup instructions

## Manual Deploy Steps

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd love-rules-website
vercel

# Follow the prompts
```

## Build Output

This project is configured to generate static files for optimal performance:
- Static HTML/CSS/JS files
- Optimized images and assets  
- Fast global CDN distribution

## Performance Features

- ✅ Static generation for fast loading
- ✅ Optimized images and assets
- ✅ Minimal JavaScript bundle
- ✅ SEO-friendly meta tags
- ✅ Mobile responsive design

The site will be available at a URL like: `https://your-project-name.vercel.app`