'use client'

import SwipeableCarousel from '@/components/SwipeableCarousel'

export default function CarouselDemo() {
  // Example images - replace with your actual image paths
  const images = [
    '/hero-bg.jpg',
    '/trust-badge.png',
    '/only4premiums.png',
    // Add more images as needed
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Swipeable Image Carousel
        </h1>

        <div className="space-y-12">
          {/* Full Featured Carousel */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Full Featured Carousel
            </h2>
            <div className="w-full h-[500px]">
              <SwipeableCarousel
                images={images}
                autoPlay={false}
                showControls={true}
                showIndicators={true}
              />
            </div>
          </div>

          {/* Auto Play Carousel */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Auto Play Carousel (5s interval)
            </h2>
            <div className="w-full h-[400px]">
              <SwipeableCarousel
                images={images}
                autoPlay={true}
                autoPlayInterval={5000}
                showControls={true}
                showIndicators={true}
              />
            </div>
          </div>

          {/* Minimal Carousel */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Minimal Carousel (No Controls/Indicators)
            </h2>
            <div className="w-full h-[400px]">
              <SwipeableCarousel
                images={images}
                showControls={false}
                showIndicators={false}
              />
            </div>
          </div>

          {/* Small Carousel */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Small Carousel
            </h2>
            <div className="w-full max-w-md mx-auto h-[300px]">
              <SwipeableCarousel
                images={images}
                showControls={true}
                showIndicators={true}
              />
            </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Features & Usage
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Swipe Gestures:</strong> Touch swipe on mobile, drag on desktop</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Smooth Animations:</strong> Spring physics for natural transitions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Direction Detection:</strong> Automatically detects swipe direction (LTR/RTL)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Infinite Loop:</strong> Seamlessly loops through all images</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Auto Play:</strong> Optional auto-advance with customizable interval</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Customizable:</strong> Toggle controls, indicators, and styling</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Responsive:</strong> Works perfectly on all screen sizes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Performance:</strong> Optimized with Next.js Image component</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Basic Usage:</h3>
            <pre className="text-sm bg-gray-900 text-white p-4 rounded overflow-x-auto">
{`import SwipeableCarousel from '@/components/SwipeableCarousel'

const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg']

<SwipeableCarousel
  images={images}
  autoPlay={false}
  autoPlayInterval={5000}
  showControls={true}
  showIndicators={true}
  className="custom-class"
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
