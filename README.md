# MyMoveAdvisor - Professional Moving Solutions

A modern, responsive React website for a moving company platform that connects customers with verified professional movers.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Clean and modern UI with Tailwind CSS
- ✅ Custom color scheme with primary color #EB9813
- ✅ Reusable components for scalability
- ✅ React Router for multi-page navigation
- ✅ Hero section with blurred background image
- ✅ Professional component structure

## Tech Stack

- React 19
- Tailwind CSS 3.3
- React Router DOM 7
- Unsplash images (placeholder)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer with links
│   ├── Button.js       # Global button component
│   ├── Hero.js         # Hero section with blur effect
│   ├── WhoWeAre.js     # About section
│   ├── HowItWorks.js   # Process steps
│   ├── Services.js     # Services grid
│   ├── TopMovers.js    # Featured movers
│   └── CTA.js          # Call-to-action section
├── pages/              # Page components
│   └── Home.js         # Home page
├── App.js              # Main app with routing
└── index.css           # Global styles
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

4. Run tests:
```bash
npm test
```

## Color Scheme

- Primary: #EB9813 (Orange)
- Primary Dark: #d68710
- Primary Light: #ffa726
- Background gradients: Orange to white

## Components

### Global Components
- **Button**: Reusable button with variants (primary, secondary, outline)
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Multi-column footer with links and social icons

### Page Sections
- **Hero**: Full-width hero with blurred background and stats
- **WhoWeAre**: About section with image and statistics
- **HowItWorks**: 3-step process explanation
- **Services**: Service cards grid
- **TopMovers**: Featured moving companies
- **CTA**: Call-to-action section

## Customization

To change colors, edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#EB9813',
  'primary-dark': '#d68710',
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project
