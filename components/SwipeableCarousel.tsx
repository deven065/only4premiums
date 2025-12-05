'use client'

import { useState } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface SwipeableCarouselProps {
  images: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default function SwipeableCarousel({
  images,
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = ''
}: SwipeableCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below
  const imageIndex = ((page % images.length) + images.length) % images.length

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  const transition = {
    x: { type: 'spring' as const, stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  }

  // Auto play functionality
  useState(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      paginate(1)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  })

  return (
    <div className={`relative w-full h-full overflow-hidden bg-gray-900 rounded-lg ${className}`}>
      {/* Main Carousel */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full h-full">
              <Image
                src={images[imageIndex]}
                alt={`Slide ${imageIndex + 1}`}
                fill
                className="object-cover select-none pointer-events-none"
                draggable={false}
                priority={imageIndex === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Previous Button */}
      {showControls && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const newDirection = idx > imageIndex ? 1 : -1
                setPage([idx, newDirection])
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === imageIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Swipe Hint (Optional - fades after first interaction) */}
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm pointer-events-none"
      >
        ← Swipe to navigate →
      </motion.div>
    </div>
  )
}
