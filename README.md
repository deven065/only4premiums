<div align="center">
  <img src="public/only4premiums.png" alt="Only4Premiums Logo" width="120" height="120" />
  
  # 🌟 Only4Premiums
  
  ### Premium Subscriptions at Unbeatable Prices
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
  [Live Demo](https://only4premiums.vercel.app) · [Report Bug](https://github.com/deven065/only4premiums/issues) · [Request Feature](https://github.com/deven065/only4premiums/issues)
</div>

---

## ✨ Features

### 🎯 **Core Functionality**
- 🛍️ **Dynamic Product Pages** - Individual pages for each premium subscription
- 💳 **Multi-Tier Pricing** - Flexible pricing plans (Essential, Pro Plus, Premium)
- ⭐ **Review System** - Product-specific reviews with submission functionality
- 🖼️ **Image Galleries** - Zoom-on-hover product screenshots with sliders
- 📱 **Responsive Design** - Flawless experience across all devices

### 🎨 **Butter-Smooth Animations**
- 🌊 **Scroll-Based Animations** - Intersection Observer for fade-in effects
- 🔄 **Page Transitions** - Smooth route changes with Framer Motion
- ✨ **Micro-Interactions** - Ripple effects, hover transforms, and loading states
- ⚡ **Hardware Acceleration** - GPU-optimized rendering for 60fps performance
- 🎭 **3D Effects** - Subtle rotation and scale transforms on interactive elements

### 📄 **Pages & Components**
- 🏠 **Homepage** - Hero, Features, Stats, Trust Badges, Testimonials
- 🛒 **Products** - Grid layout with filtering and dynamic routing
- 📦 **Product Details** - Full-featured pages with reviews, FAQ, and pricing
- ℹ️ **About** - Company information and contact details
- 📞 **Contact** - Multiple contact methods (Email, Telegram)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 22.x or higher
- **npm** 11.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deven065/only4premiums.git
   cd only4premiums
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **[Next.js 16.0.5](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19.2.0](https://reactjs.org/)** - Latest stable release with concurrent features
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe development

### **Styling & Animation**
- **[TailwindCSS 4.x](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **Custom CSS Animations** - Hardware-accelerated keyframe animations

### **UI Components & Icons**
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons
- **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** - Optimized image loading

### **Development Tools**
- **[ESLint 9.x](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Git](https://git-scm.com/)** - Version control

---

## 📁 Project Structure

```
only4premiums/
├── app/
│   ├── (routes)/
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── products/        # Products listing
│   │   └── [id]/           # Dynamic product pages
│   ├── layout.tsx          # Root layout with transitions
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Header.tsx          # Navigation with scroll effects
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Homepage hero section
│   ├── Products.tsx        # Product grid
│   ├── CustomerReviews.tsx # Review display system
│   ├── LeaveReview.tsx     # Review submission form
│   ├── ProductImageSlider.tsx # Image carousel
│   └── ...                 # 20+ reusable components
├── hooks/
│   └── useScrollAnimation.ts # Intersection Observer hook
├── public/
│   ├── only4premiums.png   # Brand logo
│   └── ...                 # Product images
└── package.json            # Dependencies
```

---

## 🎨 Animation Features

### **Scroll Animations**
- Fade-in-up on element visibility
- Staggered animations with custom delays
- Intersection Observer for performance

### **Interactive Elements**
- Button ripple effects on click
- 3D card transforms on hover
- Smooth scale and rotation transitions
- Icon animations with elastic easing

### **Page Transitions**
- Fade and slide between routes
- Consistent 300ms timing
- Hardware-accelerated transforms

### **Performance Optimizations**
- `will-change` for GPU acceleration
- `transform: translateZ(0)` for compositing
- Debounced scroll listeners
- Lazy-loaded images

---

## 🌐 Products

| Product | Category | Price | Features |
|---------|----------|-------|----------|
| **TradingView Premium** | Trading & Finance | ₹490+ | 3 pricing tiers, Real-time data, Advanced charts |
| **Trading Hub Course** | Education | ₹299 | Complete course, Lifetime access, Expert support |
| **LuxAlgo Premium** | Trading Tools | ₹999 | Ultimate plan, All indicators, Lifetime access |
| **FxReplay Premium** | Trading Practice | ₹199 | Practice tools, Historical data, Strategy testing |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Sandeep** - Founder of Only4Premiums

- 📧 Email: [contact@only4premiums.com](mailto:contact@only4premiums.com)
- 💬 Telegram: [@only4premiums](https://t.me/only4premiums)
- 🌐 Website: [only4premiums.com](https://only4premiums.com)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Vercel](https://vercel.com/) - Deployment platform
- [TailwindCSS](https://tailwindcss.com/) - Styling framework
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/deven065">Deven</a></p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
