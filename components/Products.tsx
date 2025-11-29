'use client'

import { Star, ShoppingCart, ArrowRight, Check, Zap, Shield, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Products() {
  const router = useRouter()
  
  const products = [
    {
      id: 'tradingview-premium',
      name: 'TradingView Premium',
      category: 'Trading & Finance',
      rating: 4.84,
      reviews: 125,
      originalPrice: 8900,
      price: 490,
      image: '/TradingView.png',
      features: ['Advanced Charts', 'Real-time Data', 'Multiple Indicators']
    },
    {
      id: 'trading-hub-course',
      name: 'Trading Hub Course',
      category: 'Education',
      rating: 5.0,
      reviews: 89,
      originalPrice: 10000,
      price: 299,
      image: '/TradingHub.png',
      features: ['Complete Course', 'Lifetime Access', 'Expert Support']
    },
    {
      id: 'luxalgo-premium',
      name: 'LuxAlgo Premium',
      category: 'Trading Tools',
      rating: 4.98,
      reviews: 156,
      originalPrice: 6000,
      price: 999,
      image: '/luxAlgo.png',
      features: ['Ultimate Plan', 'Lifetime Access', 'All Indicators']
    },
    {
      id: 'fxreplay-premium',
      name: 'FxReplay Premium',
      category: 'Trading Practice',
      rating: 4.75,
      reviews: 67,
      originalPrice: 799,
      price: 199,
      image: '/FxReply.png',
      features: ['Practice Tools', 'Historical Data', 'Strategy Testing']
    },
    {
      id: 'spotify-premium',
      name: 'Spotify Premium',
      category: 'Music',
      rating: 4.88,
      reviews: 312,
      originalPrice: 1200,
      price: 149,
      image: '/spotify.jpg',
      features: ['Ad-free Music', 'Offline Downloads', 'High Quality Audio']
    }
  ]

  const discount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <section id="products" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden min-h-screen">
      {/* Animated clean background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Clean header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 mb-4 opacity-0 animate-fadeInUp">
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-4 py-2 rounded-full uppercase tracking-wide">Premium Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 opacity-0 animate-fadeInUp animation-delay-200">
            Professional Tools at <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Unbeatable Prices</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed opacity-0 animate-fadeInUp animation-delay-400">
            Get instant access to premium software subscriptions. Verified authentic, lifetime support included.
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 opacity-0 animate-fadeInUp animation-delay-600">
            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Verified Authentic</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              <Zap className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-semibold text-gray-700">Instant Delivery</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              <Check className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">500+ Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              onClick={() => router.push(`/products/${product.id}`)}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border-2 border-gray-100 hover:border-purple-300 hover:-translate-y-3 hover:rotate-1 opacity-0 animate-scaleIn cursor-pointer"
              style={{ animationDelay: `${800 + index * 150}ms` }}
            >
              {/* Discount badge */}
              <div className="absolute top-4 right-4 bg-linear-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold z-20 shadow-lg animate-pulse-slow group-hover:scale-110 transition-transform">
                {discount(product.originalPrice, product.price)}% OFF
              </div>
              
              {/* Product Image/Icon */}
              <div className="relative bg-white overflow-hidden h-56 border-b border-gray-200">
                {product.image.startsWith('/') || product.image.startsWith('http') ? (
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {product.image}
                    </div>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm text-gray-900">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 leading-tight">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-500 mb-4">{product.reviews} verified reviews</p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="mb-5 pb-5 border-t border-gray-100 pt-4">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="text-xs text-green-600 font-semibold">
                    Save ₹{product.originalPrice - product.price}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 shine-effect group/btn">
                  <ShoppingCart className="h-5 w-5 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-300" />
                  <span>Buy Now</span>
                  <ArrowRight className="h-5 w-5 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl p-10 text-center text-white shadow-xl opacity-0 animate-fadeInUp animation-delay-600">
          <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-90 animate-spin-slow" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Need Something Else?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            We offer 50+ premium tools. Contact us for custom solutions.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3.5 rounded-full text-base font-bold hover:shadow-xl hover:scale-105 transition-all inline-flex items-center space-x-2 shine-effect group/cta">
            <span>Get in Touch</span>
            <ArrowRight className="h-5 w-5 group-hover/cta:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
