<div align="center">
   <img src="public/only4premiums.png" alt="Only4Premiums Logo" width="120" height="120" />
  
   # Only4Premiums
  
   Premium subscriptions and courses at unbeatable prices
  
   [Live Demo](https://only4premiums.vercel.app) · [Issues](https://github.com/ffson3465-alt/only4premiums/issues)
</div>

---

## Overview

Only4Premiums is a Next.js 16 (App Router) storefront for digital subscriptions (TradingView, LuxAlgo, FxReplay, courses). It ships with swipeable carousels, multi-plan pricing, a checkout that opens in a new tab, and a review system that supports photo uploads with local persistence.

---

## Core Features

- Product detail pages with multi-tier pricing (Essential, Pro Plus, Premium)
- Swipeable image carousels (touch + drag, smooth LTR/RTL animations)
- Checkout opens in a dedicated tab with prefilled plan/price via query params
- Review system with photo upload; reviews and images persist via localStorage
- Trust/credibility sections: testimonials, proofs slider, trust badges
- Responsive layout with motion (Framer Motion + Tailwind transitions)

---

## Tech Stack

- Framework: Next.js 16.0.7 (App Router, Turbopack)
- Language: TypeScript 5
- UI: React 19, Tailwind CSS 4, Lucide icons
- Motion: Framer Motion
- Tooling: ESLint 9, PostCSS

---

## Project Structure

```
app/
   page.tsx              # Homepage (TradingView premium)
   products/page.tsx     # Products listing + featured course
   products/[id]/page.tsx# Dynamic product pages
   checkout/page.tsx     # Checkout in new tab
   carousel-demo/page.tsx# Carousel showcase
components/             # Reusable UI (carousels, pricing, reviews, trust badges)
hooks/                  # useScrollAnimation
public/                 # Logos, product assets
```

---

## Setup

Prerequisites: Node.js 22+, npm 11+

```bash
npm install
npm run dev   # http://localhost:3000

npm run lint  # ESLint
npm run build # Production build
```

Environment (`.env.local`):
- `RESEND_API_KEY` – transactional email
- `EMAIL_FROM`, `OWNER_EMAIL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_CRYPTO_ADDRESS`
- `AUTH_SECRET_KEY`
- `NEXT_PUBLIC_APP_URL`

---

## Key Implementation Details

- **SwipeableCarousel**: Framer Motion-based slider with spring transitions, touch/drag support, looping, and controls/indicators. Used across homepage, products listing, and product detail pages.
- **Checkout flow**: Buy actions open `/checkout` in a new tab with product/plan/price/image passed via URL params; form handles steps (information → payment → finish) with WhatsApp handoff.
- **Reviews**: `LeaveReview` + `CustomerReviews` enable rating, text, and photo uploads; data is persisted per-product via `localStorage` keys.
- **Animations**: Tailwind transitions plus Framer Motion for page/element motion; hardware-accelerated transforms for smoothness.

---

## Scripts

- `npm run dev` — start dev server (Turbopack)
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm start` — serve production build

---

## Deployment Notes

- Set required environment variables on Vercel.
- Ensure only one lockfile at the workspace root to silence Turbopack root warnings.

---

## Contact

- Email: contact@only4premiums.com
- Telegram: https://t.me/only4premiums
- Website: https://only4premiums.com

---

Enjoying the project? Please star the repo! 
