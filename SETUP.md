# Nicholas Ellis Portfolio - Setup & Deployment Guide

Welcome to your professional screenwriter portfolio! This guide will help you get everything up and running.

## 🚀 Quick Start

### Prerequisites

You need Node.js installed on your system. If you don't have it:

**For macOS (recommended):**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Alternative - Download directly:**
Visit [nodejs.org](https://nodejs.org/) and download the LTS version.

**Verify installation:**
```bash
node --version  # Should show v18 or higher
npm --version   # Should show v9 or higher
```

---

## 📦 Installation

### 1. Install Dependencies

From the project directory (`/Users/nicholasellis/Desktop/nickiswrite`):

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Icons

---

## 🎨 Customization

### Update Your Content

#### 1. **Personal Information**

**Navigation & Footer:**
- Edit your name in: `components/Navigation.tsx` (line 50)
- Edit footer info in: `components/Footer.tsx` (lines 31, 67)

**Home Page:**
- Update hero text in: `app/page.tsx` (lines 25-35)

**About Page:**
- Add your bio in: `app/about/page.tsx` (lines 77-95)

#### 2. **Add Your Photo**

- Add your professional headshot to: `public/images/headshot.jpg`
- Recommended size: 1200x1500px (4:5 ratio)
- Format: JPG or PNG
- Then uncomment lines 83-89 in `app/about/page.tsx`

#### 3. **Social Media Links**

**Instagram:**
Replace `your_instagram_handle` with your actual handle in:
- `components/Footer.tsx` (line 14)
- `app/page.tsx` (line 83)
- `app/contact/page.tsx` (line 90)

**Email:**
Replace `your.email@example.com` with your actual email in:
- `app/contact/page.tsx` (line 68)

#### 4. **Contact Form Setup**

The contact form is currently set to demo mode. To make it functional:

**Option A: Formspree (Recommended - Free)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. In `app/contact/page.tsx`, uncomment lines 49-62
5. Replace `YOUR_FORM_ID` with your Formspree form ID

**Option B: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their React integration guide
3. Update the form submission handler

**Option C: Custom API**
Build your own API endpoint using Next.js API routes.

#### 5. **SEO & Metadata**

Update metadata in `app/layout.tsx`:
- Title (line 23)
- Description (line 24)
- Keywords (line 25)

---

## 🏃 Running Locally

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

The site will auto-reload as you make changes.

### Build for Production

```bash
npm run build
```

This creates an optimized production build.

### Preview Production Build

```bash
npm run build
npm start
```

---

## 🚢 Deployment to Vercel (Recommended)

Vercel is the fastest way to deploy Next.js apps (made by the Next.js team).

### First Time Setup

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `nickiswrite-portfolio` (or your choice)
   - Directory? `./` (press Enter)
   - Override settings? **N**

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Automatic Deployments via GitHub

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Future Updates:**
   - Every push to `main` branch auto-deploys to production
   - Pull requests create preview deployments

### Custom Domain (Optional)

In Vercel dashboard:
1. Go to your project
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 🎯 GitHub Pages Alternative

If you prefer GitHub Pages:

1. **Update `next.config.js`:**
   - Uncomment line 9: `output: 'export',`

2. **Build static site:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   # Add to package.json scripts:
   "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"

   # Install gh-pages:
   npm install --save-dev gh-pages

   # Deploy:
   npm run deploy
   ```

4. **Configure GitHub:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`

---

## 📱 Image Optimization Tips

### Compress Images Before Upload

**For Photos:**
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target file size: < 500KB for headshots
- Format: WebP or JPG

**For Large Assets:**
- GitHub has a 100MB file size limit
- Use image CDN services like Cloudinary for very large images
- Next.js automatically optimizes images on the fly

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Fonts:** Google Fonts (Inter & Playfair Display)

---

## 🎨 Customizing Colors

Your site uses **Royal Blue (#4169E1)** as the primary color.

To change the theme color:

1. Edit `tailwind.config.ts` (lines 10-20)
2. Update the `primary` color values
3. Save and the site will auto-reload

---

## 📂 Project Structure

```
nickiswrite/
├── app/                    # Pages and routes
│   ├── layout.tsx         # Root layout with nav & footer
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── contact/page.tsx   # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header with hamburger menu
│   ├── Footer.tsx         # Site footer
│   └── AnimatedSection.tsx # Animation wrapper
├── public/                # Static assets
│   └── images/           # Your photos go here
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

---

## ❓ Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
```

### Styles Not Updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build Errors
```bash
# Check for TypeScript errors
npm run build

# Fix import paths if needed
```

---

## 📞 Support

If you encounter any issues:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Review error messages in the terminal
4. Check browser console for client-side errors

---

## 🎉 You're All Set!

Your professional screenwriter portfolio is ready to go. Remember to:

- [ ] Add your professional photo
- [ ] Update bio text
- [ ] Add your Instagram handle
- [ ] Add your email address
- [ ] Set up contact form integration
- [ ] Test on mobile devices
- [ ] Deploy to Vercel
- [ ] Share your portfolio URL!

**Next Steps:**
1. Run `npm install`
2. Customize your content
3. Run `npm run dev` to preview
4. Deploy to Vercel

Good luck with your screenwriting career! 🎬✨
