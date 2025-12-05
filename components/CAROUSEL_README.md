# Swipeable Image Carousel

A professional, smooth, and fully-featured swipeable image carousel built with React, Next.js, and Framer Motion.

## ✨ Features

- **Smooth Animations**: Spring-based physics for natural, fluid transitions (300-500ms)
- **Bi-directional Sliding**: Smooth left-to-right and right-to-left slide animations
- **Touch & Drag Support**: 
  - Touch swipe gestures for mobile devices
  - Drag gestures for desktop/mouse
- **Direction Detection**: Automatically detects and animates based on swipe direction
- **Infinite Loop**: Seamlessly cycles through images
- **Auto Play**: Optional auto-advance with customizable interval
- **Navigation Controls**: Previous/Next buttons with hover effects
- **Indicators**: Visual dots showing current slide position
- **Fully Responsive**: Adapts to all screen sizes
- **Accessible**: ARIA labels and keyboard navigation support
- **Performance Optimized**: Uses Next.js Image component with lazy loading
- **Customizable**: Extensive props for customization

## 🎯 Demo

Visit `/carousel-demo` in your Next.js app to see live examples.

## 📦 Installation

The component requires:
- Next.js (already installed)
- Framer Motion (already installed)
- Lucide React icons (already installed)

## 🚀 Usage

### Basic Example

```tsx
import SwipeableCarousel from '@/components/SwipeableCarousel'

export default function MyPage() {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg'
  ]

  return (
    <div className="w-full h-[500px]">
      <SwipeableCarousel images={images} />
    </div>
  )
}
```

### With All Options

```tsx
<SwipeableCarousel
  images={['/img1.jpg', '/img2.jpg', '/img3.jpg']}
  autoPlay={true}
  autoPlayInterval={5000}
  showControls={true}
  showIndicators={true}
  className="rounded-xl shadow-2xl"
/>
```

## 📝 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | **Required** | Array of image URLs/paths |
| `autoPlay` | `boolean` | `false` | Enable auto-advance |
| `autoPlayInterval` | `number` | `5000` | Auto-advance interval in ms |
| `showControls` | `boolean` | `true` | Show prev/next buttons |
| `showIndicators` | `boolean` | `true` | Show dot indicators |
| `className` | `string` | `''` | Additional CSS classes |

## 🎨 Customization

### Styling

The component uses Tailwind CSS classes. You can customize by:

1. **Passing custom classes:**
```tsx
<SwipeableCarousel 
  images={images}
  className="rounded-2xl shadow-xl border-4 border-orange-500"
/>
```

2. **Modifying the component:**
Edit `components/SwipeableCarousel.tsx` to change:
- Button styles
- Indicator styles
- Animation timing
- Spring physics
- Colors and effects

### Animation Timing

To adjust animation speed, modify the `transition` object:

```tsx
const transition = {
  x: { type: 'spring', stiffness: 300, damping: 30 }, // Adjust these
  opacity: { duration: 0.2 } // Adjust fade duration
}
```

**Timing Guide:**
- `stiffness: 300` - How quickly the animation starts (higher = faster)
- `damping: 30` - How bouncy the animation is (lower = more bounce)
- `opacity: 0.2` - Fade in/out duration

### Swipe Sensitivity

Adjust `swipeConfidenceThreshold` for swipe sensitivity:

```tsx
const swipeConfidenceThreshold = 10000 // Lower = more sensitive
```

## 🎯 Use Cases

1. **Product Image Gallery**
```tsx
<div className="max-w-2xl mx-auto h-[600px]">
  <SwipeableCarousel images={productImages} />
</div>
```

2. **Hero Section Slider**
```tsx
<div className="w-full h-screen">
  <SwipeableCarousel 
    images={heroImages}
    autoPlay={true}
    autoPlayInterval={7000}
    showIndicators={false}
  />
</div>
```

3. **Testimonial Cards**
```tsx
<div className="max-w-4xl mx-auto h-[400px]">
  <SwipeableCarousel 
    images={testimonialImages}
    autoPlay={true}
    showControls={false}
  />
</div>
```

4. **Mobile-First Gallery**
```tsx
<div className="w-full h-[300px] sm:h-[500px]">
  <SwipeableCarousel 
    images={galleryImages}
    showControls={false}
  />
</div>
```

## 📱 Mobile Optimization

The carousel is fully optimized for mobile:
- Touch swipe with smooth physics
- Reduced button sizes on mobile
- Responsive height/width
- Optimized image loading
- Prevents text selection during swipe
- Prevents image drag

## ♿ Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Proper semantic HTML
- Focus indicators
- Screen reader friendly

## 🔧 Advanced Features

### Custom Variants

You can modify the animation variants for different effects:

```tsx
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000, // Slide distance
    opacity: 0, // Fade effect
    scale: 0.8 // Optional: Add scale effect
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8
  })
}
```

### Vertical Carousel

To make it vertical, change:
- `drag="x"` to `drag="y"`
- `offset.x` to `offset.y`
- `x` values in variants to `y`

## 🐛 Troubleshooting

### Images not loading
- Ensure image paths are correct
- Check Next.js image domains configuration
- Verify images exist in `/public` folder

### Animations not smooth
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser performance
- Reduce image sizes

### Swipe not working
- Ensure parent container has proper height
- Check if other elements are blocking touch events
- Verify `overflow: hidden` on parent

## 📄 License

MIT License - Feel free to use in any project!

## 🤝 Contributing

Contributions welcome! Feel free to submit issues or pull requests.

## 📞 Support

For issues or questions, please refer to the demo page at `/carousel-demo` or check the component source code.
