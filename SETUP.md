# Setup Guide

## Quick Start

1. **Navigate to project folder:**
   ```bash
   cd my-app
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to that URL

## What's Included

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

### ✅ Color Scheme
- Primary: **#EB9813** (used for all buttons and accents)
- Gradients: Orange to white for sections
- Clean white background with subtle orange tints

### ✅ Components Structure

**Global Reusable Components:**
- `Button.js` - Primary, secondary, and outline variants
- `Navbar.js` - Responsive navigation with mobile menu
- `Footer.js` - Multi-column footer with social links

**Page Sections:**
- `Hero.js` - Hero with blurred background image from Unsplash
- `WhoWeAre.js` - About section with stats
- `HowItWorks.js` - 3-step process
- `Services.js` - 4 service cards
- `TopMovers.js` - Featured moving companies
- `CTA.js` - Call-to-action with gradient background

### ✅ Features Implemented

1. **No Dark/Light Theme Toggle** - Light theme only as requested
2. **Blurred Hero Background** - Using Unsplash image with CSS blur
3. **Proper Container Spacing** - Responsive padding and margins
4. **#EB9813 Button Color** - Applied to all primary buttons
5. **Clean Folder Structure** - Organized components and pages
6. **Global Components** - Reusable across all pages

## Adding New Pages

1. Create a new file in `src/pages/`:
   ```javascript
   // src/pages/About.js
   import React from 'react';
   
   const About = () => {
     return <div>About Page</div>;
   };
   
   export default About;
   ```

2. Add route in `src/App.js`:
   ```javascript
   import About from './pages/About';
   
   <Route path="/about" element={<About />} />
   ```

## Customizing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#EB9813',        // Change this
  'primary-dark': '#d68710',  // And this
}
```

## Using the Button Component

```javascript
import Button from './components/Button';

// Primary button (orange)
<Button>Click Me</Button>

// Secondary button (white)
<Button variant="secondary">Click Me</Button>

// Outline button
<Button variant="outline">Click Me</Button>
```

## Container Usage

All sections use the container class:
```javascript
<div className="container mx-auto px-4">
  {/* Your content */}
</div>
```

This ensures consistent spacing across all screen sizes.

## Image Placeholders

Currently using Unsplash images. To replace:
1. Add your images to `public/images/`
2. Update image sources in components
3. Example: `src="/images/hero-bg.jpg"`

## Production Build

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## Troubleshooting

**Port already in use:**
```bash
# Kill the process on port 3000
npx kill-port 3000
npm start
```

**Tailwind not working:**
```bash
# Clear cache and restart
rm -rf node_modules/.cache
npm start
```

**Module not found:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```
