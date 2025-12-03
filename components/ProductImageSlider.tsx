'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImageSliderProps {
  images: string[]
  productName: string
}

export default function ProductImageSlider({ images, productName }: ProductImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideDir, setSlideDir] = useState<'left'|'right'|null>(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef<number | null>(null)
  const lastXRef = useRef<number>(0)
  const velocityRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  const goToPrevious = () => {
    if (isTransitioning || images.length <= 1) return
    setSlideDir('right')
    setIsTransitioning(true)
    setIsZoomed(false)
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    // run slide-out then swap index
    setTimeout(() => {
      setCurrentIndex(nextIndex)
      setSlideDir('right')
      setIsTransitioning(false)
    }, 280)
  }

  const goToNext = () => {
    if (isTransitioning || images.length <= 1) return
    setSlideDir('left')
    setIsTransitioning(true)
    setIsZoomed(false)
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setTimeout(() => {
      setCurrentIndex(nextIndex)
      setSlideDir('left')
      setIsTransitioning(false)
    }, 280)
  }

  const containerRef = useRef<HTMLDivElement | null>(null)

  const beginDrag = (clientX: number) => {
    startXRef.current = clientX
    lastXRef.current = clientX
    lastTimeRef.current = performance.now()
    velocityRef.current = 0
    setIsDragging(true)
    setIsZoomed(false)
  }

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    beginDrag(touch.clientX)
  }

  const handleMove = (clientX: number) => {
    if (startXRef.current == null) return
    const now = performance.now()
    const deltaX = clientX - lastXRef.current
    const dt = Math.max(now - lastTimeRef.current, 1)
    velocityRef.current = (deltaX / dt) * 1000 // px/sec
    lastTimeRef.current = now
    lastXRef.current = clientX
    const raw = clientX - startXRef.current
    const resistance = 0.85
    setDragX(raw * resistance)
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    handleMove(touch.clientX)
  }

  const endDrag = () => {
    const width = containerRef.current?.clientWidth ?? 320
    const threshold = Math.max(40, Math.floor(width * 0.15)) // adaptive
    const flickSpeed = Math.abs(velocityRef.current) > 800 // px/sec
    if (dragX > threshold || (flickSpeed && velocityRef.current > 0)) {
      goToPrevious()
    } else if (dragX < -threshold || (flickSpeed && velocityRef.current < 0)) {
      goToNext()
    }
    // animate snap back
    setIsDragging(false)
    setDragX(0)
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try { (navigator as any).vibrate(10) } catch {}
    }
  }

  const onTouchEnd = () => endDrag()
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    beginDrag(e.clientX)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }
  const onMouseMove = (e: MouseEvent) => handleMove(e.clientX)
  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    endDrag()
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
          className="relative h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden cursor-zoom-in select-none"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={containerRef}
        >
          {/* Parallax backdrop */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(1200px 300px at 20% 0%, rgba(255,165,0,0.08), transparent), radial-gradient(1200px 300px at 80% 100%, rgba(147,51,234,0.06), transparent)',
              transform: `translate3d(${dragX * -0.12}px, 0, 0)`,
              transition: isDragging ? 'none' : 'transform 320ms cubic-bezier(0.2, 0.6, 0.2, 1)'
            }}
          />
          {/* Sliding animation: two layers, current + ghost for directional slide */}
          <div className="absolute inset-0">
            <Image 
              key={`img-${currentIndex}`}
              src={images[currentIndex]} 
              alt={`${productName} screenshot ${currentIndex + 1}`}
              fill
              className="object-contain will-change-transform"
              style={{
                transform: `${isZoomed ? 'scale(2)' : 'scale(1)'} translate3d(${dragX + (isTransitioning ? (slideDir==='left'?-40:40) : 0)}px,0,0)`,
                transition: isDragging ? 'none' : 'transform 280ms cubic-bezier(0.18, 0.62, 0.22, 0.9)',
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
              }}
              priority={currentIndex === 0}
            />
            {slideDir && (
              <Image 
                key={`ghost-${currentIndex}-${slideDir}`}
                src={images[slideDir==='left' ? (currentIndex === images.length - 1 ? 0 : currentIndex + 1) : (currentIndex === 0 ? images.length - 1 : currentIndex - 1)]}
                alt={`${productName} next screenshot`}
                fill
                className="object-contain will-change-transform"
                style={{
                  transform: `translate3d(${slideDir==='left' ? 100 : -100}%,0,0)`,
                  opacity: 0.01
                }}
              />
            )}
          </div>
          {/* Swipe hint overlay */}
          {images.length > 1 && !isDragging && !isZoomed && (
            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs sm:text-sm text-gray-700 bg-white/80 backdrop-blur rounded-full px-3 py-1 shadow">
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400 animate-pulse" />
              <span>Swipe to see more</span>
            </div>
          )}
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
