# Pricing Page Documentation

## Overview
The pricing page has been created with three subscription tiers and a premium leads marketplace section.

## Components Created

### 1. PricingPlans.js (`src/components/PricingPlans.js`)
Main pricing component with:
- **3 Pricing Tiers**: Starter ($99), Professional ($249), Enterprise ($599)
- **Premium Leads Marketplace**: Special section for on-demand lead purchases
- **Hover Effects**: 3D shadows and scale animations
- **Most Popular Badge**: Blue badge on Professional plan

### 2. Pricing.js (`src/pages/Pricing.js`)
Full pricing page with:
- Hero section
- Pricing plans component
- FAQ section

## Features

### Pricing Cards
- **Starter Plan**: $99/month
  - Up to 20 leads per month
  - Basic features
  - White "Get Started" button

- **Professional Plan**: $249/month (Most Popular)
  - Up to 75 leads per month
  - Advanced features
  - Blue "Get Started" button
  - Blue border highlight

- **Enterprise Plan**: $599/month
  - Unlimited leads
  - Premium features
  - "Contact Sales" button

### Premium Leads Section
- Yellow/orange gradient background
- Star icon
- Three pricing tiers:
  - Local Moves: $15-$25
  - Long Distance: $35-$50
  - Commercial Moves: $50-$100
- "Browse Premium Leads" button

## Color Scheme

### Pricing Cards
- Background: White (#FFFFFF)
- Border: Gray (#E5E7EB) / Blue (#3B82F6 for popular)
- Text: Gray-800 (#1F2937)
- Checkmarks: Green (#10B981)

### Premium Section
- Background: Orange-50 to Yellow-50 gradient
- Border: Orange-200 (#FED7AA)
- Icon: Yellow-400 to Orange-400 gradient
- Button: Primary orange (#EB9813)

### Buttons
- Primary: #EB9813 (Orange)
- Blue: #2563EB (Blue-600)
- Secondary: White with gray border

## Animations

All cards include:
- Hover scale: 105%
- Hover lift: -12px translate
- Shadow transition: Light to dramatic
- Duration: 500ms smooth

## Navigation

Access the pricing page at:
- Route: `/pricing`
- Link from navbar: "Pricing"

## Usage

```javascript
import Pricing from './pages/Pricing';

// In your router
<Route path="/pricing" element={<Pricing />} />
```

## Customization

To modify pricing:
1. Edit the `plans` array in `PricingPlans.js`
2. Update prices, features, or add new tiers
3. Adjust premium leads pricing in the marketplace section

## Responsive Design

- Desktop: 3 columns
- Tablet: 2 columns (Professional wraps)
- Mobile: 1 column stacked

All spacing and text sizes adjust automatically.
