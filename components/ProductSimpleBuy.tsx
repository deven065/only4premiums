'use client'

import { useEffect, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import CheckoutModal from './CheckoutModal'

interface ProductSimpleBuyProps {
  price: number
  originalPrice: number
  discount: number
  productName: string
}

export default function ProductSimpleBuy({ price, originalPrice, discount, productName }: ProductSimpleBuyProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Open checkout when global trigger is dispatched
  useEffect(() => {
    const onTrigger = () => setIsModalOpen(true)
    if (typeof window !== 'undefined') {
      window.addEventListener('trigger-buy-now', onTrigger as EventListener)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('trigger-buy-now', onTrigger as EventListener)
      }
    }
  }, [])

  return (
    <>
      <div className="bg-purple-50 rounded-2xl p-6 mb-8">
        <div className="flex items-baseline space-x-3 mb-2">
          <span className="text-5xl font-bold text-gray-900">
            ₹{price}
          </span>
          <span className="text-2xl text-gray-400 line-through">
            ₹{originalPrice}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {discount}% OFF
          </span>
          <span className="text-sm text-gray-600">
            You save ₹{originalPrice - price}
          </span>
        </div>
      </div>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 mb-6"
      >
        <ShoppingCart className="h-6 w-6" />
        <span>Buy Now</span>
      </button>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
        price={price}
      />
    </>
  )
}
