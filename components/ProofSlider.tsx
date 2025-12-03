'use client'

import { useRef, useState } from 'react'

export default function ProofSlider() {
  // Array of proof images - you can replace these URLs with actual proof images
  const proofImages = [
    { id: 1, alt: 'Customer Proof 1', emoji: '✅' },
    { id: 2, alt: 'Customer Proof 2', emoji: '⭐' },
    { id: 3, alt: 'Customer Proof 3', emoji: '💯' },
    { id: 4, alt: 'Customer Proof 4', emoji: '🎯' },
    { id: 5, alt: 'Customer Proof 5', emoji: '🏆' },
    { id: 6, alt: 'Customer Proof 6', emoji: '✨' },
    { id: 7, alt: 'Customer Proof 7', emoji: '🎉' },
    { id: 8, alt: 'Customer Proof 8', emoji: '💎' },
    { id: 9, alt: 'Customer Proof 9', emoji: '🚀' },
    { id: 10, alt: 'Customer Proof 10', emoji: '🌟' },
    { id: 11, alt: 'Customer Proof 11', emoji: '💪' },
    { id: 12, alt: 'Customer Proof 12', emoji: '🔥' },
    { id: 13, alt: 'Customer Proof 13', emoji: '👑' },
    { id: 14, alt: 'Customer Proof 14', emoji: '⚡' },
    { id: 15, alt: 'Customer Proof 15', emoji: '🎊' }
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedImages = [...proofImages, ...proofImages]

  // Drag state to allow manual swipe and pause auto-scroll
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef<number | null>(null)
  const lastXRef = useRef<number>(0)
  const velocityRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  const beginDrag = (clientX: number) => {
    startXRef.current = clientX
    lastXRef.current = clientX
    lastTimeRef.current = performance.now()
    velocityRef.current = 0
    setIsDragging(true)
  }
  const handleMove = (clientX: number) => {
    if (startXRef.current == null) return
    const now = performance.now()
    const deltaX = clientX - lastXRef.current
    const dt = Math.max(now - lastTimeRef.current, 1)
    velocityRef.current = (deltaX / dt) * 1000
    lastTimeRef.current = now
    lastXRef.current = clientX
    setDragX(clientX - (startXRef.current ?? clientX))
  }
  const endDrag = () => {
    setIsDragging(false)
    // apply inertial flick: nudge a bit based on velocity
    const inertia = Math.max(-120, Math.min(120, velocityRef.current * 0.1))
    setDragX((prev) => {
      const next = prev + inertia
      return Math.abs(next) < 12 ? 0 : next
    })
    // snap back gently after inertial nudge
    setTimeout(() => setDragX(0), 160)
  }

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">VERIFIED PURCHASES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Real Results from Real Customers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See what our customers are saying about their premium subscriptions
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative select-none">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10"></div>

        {/* Scrolling wrapper */}
        <div className="overflow-hidden">
          <div
            className={`flex ${isDragging ? '' : 'animate-scroll-infinite'}`}
            style={{
              transform: `translate3d(${dragX}px,0,0)`,
              transition: isDragging ? 'none' : 'transform 240ms ease-out'
            }}
            onMouseDown={(e) => { e.preventDefault(); beginDrag(e.clientX) }}
            onMouseMove={(e) => isDragging && handleMove(e.clientX)}
            onMouseUp={endDrag}
            onMouseLeave={() => isDragging && endDrag()}
            onTouchStart={(e) => beginDrag(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={endDrag}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="shrink-0 mx-4 w-80 h-96"
              >
                <div className="relative w-full h-full bg-linear-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-gray-200 hover:border-purple-300">
                  {/* Proof image placeholder - Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">{image.emoji}</div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">Customer Proof #{image.id}</div>
                      <div className="text-sm text-gray-600 px-4">Verified Purchase Screenshot</div>
                    </div>
                  </div>
                  
                  {/* Verified badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <span className="mr-1">✓</span>
                    VERIFIED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
          <p className="text-lg md:text-xl mb-6 text-purple-100">
            Experience premium quality at unbeatable prices with instant delivery
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('products')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all inline-flex items-center space-x-2"
          >
            <span>Browse Our Products</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
