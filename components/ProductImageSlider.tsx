'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImageSliderProps {
  images: string[]
  productName: string
}

export default function ProductImageSlider({ images, productName }: ProductImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setIsZoomed(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setIsZoomed(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  if (!images || images.length === 0) return null

  return (
    <div className="mb-8 sm:mb-10 md:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Product Screenshots</h2>
      
      <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200">
        {/* Main Image */}
        <div 
          className="relative h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden cursor-zoom-in"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <Image 
            src={images[currentIndex]} 
            alt={`${productName} screenshot ${currentIndex + 1}`}
            fill
            className="object-contain transition-transform duration-200 ease-out"
            style={{
              transform: isZoomed ? 'scale(2)' : 'scale(1)',
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
            }}
            priority={currentIndex === 0}
          />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-800" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-800" />
            </button>
          </>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-6 sm:w-8 bg-purple-600' 
                    : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="mt-3 sm:mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 sm:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-purple-600 ring-2 ring-purple-200' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <Image 
                src={image} 
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
