import { ShoppingCart } from 'lucide-react'

interface ProductSimpleBuyProps {
  price: number
  originalPrice: number
  discount: number
}

export default function ProductSimpleBuy({ price, originalPrice, discount }: ProductSimpleBuyProps) {
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

      <button className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 mb-6">
        <ShoppingCart className="h-6 w-6" />
        <span>Buy Now</span>
      </button>
    </>
  )
}
