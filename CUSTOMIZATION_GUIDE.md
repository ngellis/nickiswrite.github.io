# Quick Customization Guide

This guide shows you exactly where to update your personal information.

## 🎯 Essential Updates

### 1. Your Professional Photo

**Location:** `public/images/headshot.jpg`

**Steps:**
1. Add your professional headshot to this location
2. Recommended specs:
   - Size: 1200 x 1500 pixels (4:5 ratio)
   - Format: JPG or PNG
   - File size: Under 500KB (compress at [tinypng.com](https://tinypng.com))

3. Then edit `app/about/page.tsx`:
   - Find lines 83-89
   - Delete the placeholder div (lines 51-76)
   - Uncomment the Image component

### 2. Instagram Handle

Update your Instagram handle in **3 files**:

**File 1:** `components/Footer.tsx`
- Line 14: Replace `your_instagram_handle`

**File 2:** `app/page.tsx`
- Line 83: Replace `your_instagram_handle`

**File 3:** `app/contact/page.tsx`
- Line 90: Replace `your_instagram_handle`
- Line 98: Replace `@your_instagram_handle`

**Find & Replace:**
```
Find: your_instagram_handle
Replace: YOUR_ACTUAL_HANDLE
```

### 3. Email Address

**File:** `app/contact/page.tsx`
- Line 68: Replace `your.email@example.com` with your actual email

### 4. Bio Text

**File:** `app/about/page.tsx`
- Lines 77-95: Replace the placeholder paragraphs with your actual bio

**Suggested structure:**
- Paragraph 1: Your background and experience
- Paragraph 2: Your approach and specialties
- Paragraph 3: What you offer clients

### 5. Hero Tagline

**File:** `app/page.tsx`
- Line 35: Update the tagline if desired
  - Current: "Crafting compelling stories that captivate audiences and bring visions to life on screen"

---

## 🎨 Theme Customization

### Change Primary Color

**File:** `tailwind.config.ts`
- Lines 10-20: Modify the `primary` color values
- Current: Royal Blue (#4169E1)

**Color generator:** Use [uicolors.app](https://uicolors.app) to generate a full palette

### Change Fonts

**File:** `app/layout.tsx`
- Lines 8-15: Change the Google Fonts
- Current fonts:
  - Body: Inter
  - Headings: Playfair Display

**Browse fonts:** [fonts.google.com](https://fonts.google.com)

---

## 📧 Contact Form Setup

**File:** `app/contact/page.tsx`

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form
3. Copy your form ID (looks like: `abc123xyz`)
4. In `app/contact/page.tsx`:
   - Uncomment lines 49-62
   - Replace `YOUR_FORM_ID` with your actual form ID

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their Next.js integration docs
3. Replace the handleSubmit function

---

## 📝 Content Updates by Page

### Home Page (`app/page.tsx`)

**Hero Section:**
- Line 25: Your name
- Line 35: Tagline/subtitle
- Line 42: Description paragraph

**Services Section:**
- Lines 68-76: Feature Film description
- Lines 82-90: Television description
- Lines 96-104: Script Consulting description

**CTA Section:**
- Line 115: Call-to-action heading
- Line 119: CTA description

### About Page (`app/about/page.tsx`)

**Photo & Bio:**
- Lines 51-76: Photo placeholder (replace with actual photo)
- Lines 77-95: Your bio paragraphs
- Line 100: Personal quote

**Values Section:**
- Lines 124-158: Update the three value cards if desired
  - Creativity
  - Excellence
  - Collaboration

### Contact Page (`app/contact/page.tsx`)

**Contact Info:**
- Line 58: Update opening paragraph
- Line 68: Your email address
- Line 90: Your Instagram handle
- Line 117: Availability status

---

## 🔧 Advanced Customizations

### Add a New Page

1. Create `app/newpage/page.tsx`
2. Add to navigation in `components/Navigation.tsx` (line 9)
3. Add to footer in `components/Footer.tsx` (lines 37-51)

### Modify Animations

**File:** `components/AnimatedSection.tsx`
- Adjust animation duration, delay, or easing

**File:** `tailwind.config.ts`
- Lines 22-34: Modify animation keyframes

### Change Layout

**File:** `app/layout.tsx`
- Modify the root layout structure
- Add/remove global components

---

## 📊 SEO & Metadata

**File:** `app/layout.tsx` (Lines 23-31)

Update:
- `title`: Your page title
- `description`: Site description for search engines
- `keywords`: Relevant keywords (screenwriter, your specialties)
- `authors`: Your name

**Advanced:** Add Open Graph images for social sharing:
- Add an image to `public/og-image.jpg` (1200x630px)
- Update `openGraph` section in metadata

---

## 🖼️ Adding More Images

1. Add images to `public/images/`
2. Use the Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

**Benefits:**
- Automatic optimization
- Lazy loading
- Responsive images

---

## 🎬 Adding Video Content

If you want to embed video (showreel, etc.):

```tsx
<video className="w-full rounded-lg" controls>
  <source src="/videos/showreel.mp4" type="video/mp4" />
</video>
```

Or embed from YouTube/Vimeo:

```tsx
<iframe
  className="w-full aspect-video rounded-lg"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowFullScreen
/>
```

---

## ✅ Pre-Launch Checklist

Before deploying, check:

- [ ] Professional photo added
- [ ] All bio text updated
- [ ] Instagram handle updated (all 3 locations)
- [ ] Email address updated
- [ ] Contact form configured
- [ ] Tested on mobile device
- [ ] Tested contact form submission
- [ ] Checked all links work
- [ ] Updated metadata/SEO
- [ ] Reviewed all pages for placeholder text

---

## 🚀 Deploy

When ready:

```bash
# Test the production build locally
npm run build
npm start

# If everything looks good, deploy:
vercel --prod
```

---

## 💡 Tips

1. **Keep it simple** - Less is more for a portfolio
2. **High-quality images** - Compress but keep quality high
3. **Test on mobile** - Most visitors will view on phones
4. **Regular updates** - Keep your portfolio current
5. **Analytics** - Consider adding Google Analytics to track visitors

---

Need help? Check [SETUP.md](SETUP.md) for detailed technical documentation.
