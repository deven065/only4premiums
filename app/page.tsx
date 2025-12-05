'use client'

import { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductRating from '@/components/ProductRating'
import SwipeableCarousel from '@/components/SwipeableCarousel'
import ProductPlanSelector from '@/components/ProductPlanSelector'
import ProductTrustBadges from '@/components/ProductTrustBadges'
import HowToBuy from '@/components/HowToBuy'
import ProductFAQ from '@/components/ProductFAQ'
import CustomerReviews from '@/components/CustomerReviews'
import LeaveReview from '@/components/LeaveReview'
import FloatingChatButton from '@/components/FloatingChatButton'
import ComparisonTable from '@/components/ComparisonTable'

interface Review {
  name: string
  location: string
  rating: number
  text: string
  date: string
  verified: boolean
  images?: string[]
}

export default function Home() {
  const router = useRouter()
  
  const product = {
    name: 'TradingView Premium',
    category: 'Trading & Finance',
    rating: 5.0,
    reviews: 76,
    originalPrice: 8900,
    price: 490,
    image: '/TradingView.png',
    features: [
      'Setup 2 step authentication in Yearly Membership',
      'Paid Premium Accounts, No Trial Plan',
      'Password changeable Account',
      '100% Legit & Safe Subscription',
      'Real time data available'
    ],
    description: 'Unlock professional trading tools with TradingView Premium at unbeatable prices. Access advanced charting, real-time data, multiple indicators, and custom alerts. Choose your perfect plan - Essential, Pro Plus, or Premium - and start trading smarter today with instant delivery and 24/7 support.',
    includes: ['Setup 2 step authentication', 'Paid Premium Accounts', 'Password changeable', '100% Legit & Safe', 'Real time data'],
    screenshots: ['/TR-1.webp', '/TR-2.webp', '/TR-3.webp', '/TR-4.jpg', '/TR-5.webp'],
    plans: [
      {
        name: 'Essential',
        price: 490,
        originalPrice: 1490,
        features: [
          'Instant, verified TradingView subscription for beginners',
          'Secure, ad-free charting: 2 windows per layout',
          'Up to 5 powerful indicators per chart',
          'Access to 10,000 historical data bars',
          'Receive 20 real-time price alerts'
        ]
      },
      {
        name: 'Pro Plus',
        price: 690,
        originalPrice: 3490,
        features: [
          'Optimized for active, intermediate traders',
          'Multi-chart layouts: 4 windows per screen',
          'Deploy up to 10 custom indicators',
          'Create and save custom timeframes',
          'Set 100 precise price alerts',
          'Organize watchlists for smarter trades'
        ]
      },
      {
        name: 'Premium',
        price: 900,
        originalPrice: 6090,
        features: [
          'Professional suite with priority support',
          'Advanced multi-chart: 8 windows per layout',
          'Access 25 premium indicators',
          'Receive up to 400 instant alerts',
          'Extended history: 20,000 data bars',
          '24/7 expert assistance & secure checkout'
        ]
      }
    ]
  }

  const initialReviews: Review[] = [
    {
      name: 'Rohan Mehta',
      location: 'INDIA',
      rating: 5,
      text: 'Pehle mujhe laga ye bhi scam hoga, isliye maine pehle demo account check kiya. Kyunki mere saath pehle 2-3 baar scam ho chuka hai, main ab har baar double-check karta hoon. Demo sahi tha, isliye maine payment kiya. Ab tak maine Premium plan 1-2 baar khareeda hai, aur ek bhi baar koi problem nahi aayi. Service bilkul genuine aur transparent hai. Agar aapko bhi doubt hai, demo try karke zaroor check karein. Highly recommend!',
      date: '30/06/2024 21:10',
      verified: true,
      images: []
    },
    {
      name: 'Amit Malhotra',
      location: 'INDIA',
      rating: 5,
      text: 'Absolutely trustworthy service. Fast activation and no hidden charges.',
      date: '03/12/2024 10:45',
      verified: true
    },
    {
      name: 'Nikita Kapoor',
      location: 'INDIA',
      rating: 4,
      text: 'Smooth process and clear instructions. A reliable service.',
      date: '06/12/2024 15:30',
      verified: true
    },
    {
      name: 'Sameer Ahmed',
      location: 'INDIA',
      rating: 5,
      text: 'Genuine product and great support team. No scams, highly recommend!',
      date: '07/12/2024 18:20',
      verified: true
    },
    {
      name: 'Ritika Khanna',
      location: 'INDIA',
      rating: 4,
      text: 'Quick delivery and helpful support team. Trustworthy platform.',
      date: '08/12/2024 09:50',
      verified: true
    },
    {
      name: 'Suraj Pandey',
      location: 'INDIA',
      rating: 5,
      text: 'यह साइट पूरी तरह भरोसेमंद है। कीमत नही है और सर्विस बेस्ट है।',
      date: '10/12/2024 16:15',
      verified: true
    },
    {
      name: 'Arjun Sharma',
      location: 'INDIA',
      rating: 5,
      text: 'A safe platform for TradingView plans. Highly recommended.',
      date: '11/12/2024 20:00',
      verified: true
    },
    {
      name: 'Manoj Kumar',
      location: 'INDIA',
      rating: 5,
      text: 'I was skeptical at first, but Only4Premiums delivered exactly what they promised. Genuine and trustworthy!',
      date: '12/12/2024 14:25',
      verified: true
    },
    {
      name: 'Sneha Rao',
      location: 'INDIA',
      rating: 5,
      text: 'Clear instructions and smooth activation. A trusted seller, no scams.',
      date: '13/12/2024 10:40',
      verified: true
    },
    {
      name: 'Ajay Khanna',
      location: 'INDIA',
      rating: 5,
      text: 'सेवा विश्वसनीय है, और प्लान पूरी तरह असली है। बहुत अच्छा अनुभव।',
      date: '14/12/2024 16:05',
      verified: true
    }
  ]

  const [reviews, setReviews] = useState<Review[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tradingview-reviews')
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          console.error('Failed to parse saved reviews', e)
        }
      }
    }
    return initialReviews
  })

  const [reviewImages, setReviewImages] = useState<string[]>(() => {
    const defaults = [
      '/review (1).jpeg',
      '/review (2).jpeg',
      '/review (3).jpeg',
      '/review (4).jpeg',
      '/review (5).jpeg',
      '/review (6).jpeg',
      '/review (7).jpeg',
      '/review (8).jpeg',
      '/review (9).jpeg',
      '/review (10).jpeg',
      '/review (11).jpeg'
    ]

    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tradingview-review-images')
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          console.error('Failed to parse saved images', e)
        }
      }
    }
    return defaults
  })

  const [canShowStickyBuy, setCanShowStickyBuy] = useState(false)

  const allImages = [product.image, ...product.screenshots]

  const handleNewReview = (newReview: Review) => {
    setReviews(prev => {
      const updated = [newReview, ...prev]
      localStorage.setItem('tradingview-reviews', JSON.stringify(updated))
      return updated
    })
  }

  const handleAddPhoto = (photoUrl: string) => {
    setReviewImages(prev => {
      const updated = [...prev, photoUrl]
      localStorage.setItem('tradingview-review-images', JSON.stringify(updated))
      return updated
    })
  }

  // Listen for plan+validity readiness to show sticky Buy Now
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<boolean>
      setCanShowStickyBuy(Boolean(custom.detail))
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('buy-ready', handler as EventListener)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('buy-ready', handler as EventListener)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Trust Banner - positioned directly under fixed header */}
      <div className="fixed top-[60px] sm:top-[68px] left-0 right-0 bg-gray-900 border-y border-gray-700 h-[26px] sm:h-[30px] py-0 scanline-wrapper marquee-container z-40">
        <div className="scanline" />
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-center h-full gap-3 sm:gap-4 text-xs sm:text-sm overflow-hidden whitespace-nowrap leading-none">
            <div className="flex items-center gap-1.5 sm:gap-1.5 text-white whitespace-nowrap">
              <div className="w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <span className="font-bold leading-none">100% Secure</span>
            </div>
            <div className="w-px h-4 sm:h-4 bg-gray-700"></div>
            <div className="flex items-center gap-1.5 sm:gap-1.5 text-white whitespace-nowrap">
              <div className="w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <span className="font-bold leading-none">Instant Delivery</span>
            </div>
            <div className="w-px h-4 sm:h-4 bg-gray-700"></div>
            <div className="flex items-center gap-1.5 sm:gap-1.5 text-white whitespace-nowrap">
              <div className="w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                </svg>
              </div>
              <span className="font-bold leading-none">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      
      <main className="pt-[94px] sm:pt-[106px] pb-8 sm:pb-16">
        <div className="container mx-auto px-4 lg:px-0">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8 lg:px-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-16">
            {/* Product Image Gallery */}
            <div className="relative lg:sticky lg:top-20 h-fit w-screen lg:w-full -mx-4 lg:mx-0">
              <div className="h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh]">
                <SwipeableCarousel 
                  images={allImages}
                  showControls={true}
                  showIndicators={true}
                  className="border border-gray-300"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6">
              {/* Category Badge */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700 font-medium px-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-2.5 sm:px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                  In Stock
                </span>
              </div>
              
              {/* Product Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <ProductRating rating={product.rating} reviews={product.reviews} />

              {/* Description */}
              <div className="bg-white p-4 sm:p-5 border-l-2 border-gray-400">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4 sm:my-0"></div>

              {/* Plan Selector */}
              <ProductPlanSelector plans={product.plans} productName={product.name} productImage={product.image} />

              {/* Trust Badges */}
              <ProductTrustBadges />
            </div>
          </div>

          {/* How to Buy Section */}
          <HowToBuy />

          {/* Comparison Table Section */}
          <ComparisonTable />

          {/* Customer Reviews Section */}
          <div className="-mx-4 sm:mx-0 mb-8 bg-white py-8 px-4 sm:px-8">
            <div className="container mx-auto">
              <CustomerReviews 
              rating={4.9}
              totalReviews={reviews.length}
              ratingBreakdown={{
                5: 72,
                4: 4,
                3: 0,
                2: 0,
                1: 0
              }}
              reviewImages={reviewImages}
              reviews={reviews}
            />
            </div>
          </div>

          {/* Leave a Review Section */}
          <div className="-mx-4 sm:mx-0 mb-16 bg-white py-8 px-4 sm:px-8">
            <div className="container mx-auto">
              <LeaveReview onSubmit={handleNewReview} onAddPhoto={handleAddPhoto} />
            </div>
          </div>

          {/* Explore More Premium Products Section */}
          <section className="mb-16 py-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Explore More <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Premium Products</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover other premium tools and services at unbeatable prices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* LuxAlgo Premium */}
              <div 
                onClick={() => router.push('/products/luxalgo-premium')}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 overflow-hidden">
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    83% OFF
                  </div>
                  <Image 
                    src="/luxAlgo.png" 
                    alt="LuxAlgo Premium"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                      Trading Tools
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-900">4.98</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    LuxAlgo Premium
                  </h3>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">₹999</span>
                    <span className="text-sm text-gray-400 line-through">₹6000</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* FxReplay Premium */}
              <div 
                onClick={() => router.push('/products/fxreplay-premium')}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative h-48 bg-white overflow-hidden">
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    75% OFF
                  </div>
                  <Image 
                    src="/FxReply.png" 
                    alt="FxReplay Premium"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                      Trading Practice
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-900">4.75</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    FxReplay Premium
                  </h3>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">₹199</span>
                    <span className="text-sm text-gray-400 line-through">₹799</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Trading Hub Course */}
              <div 
                onClick={() => router.push('/products/trading-hub-course')}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-900 to-slate-700 overflow-hidden">
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    97% OFF
                  </div>
                  <Image 
                    src="/TradingHub.png" 
                    alt="Trading Hub Course"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                      Education
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-900">5</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Trading Hub Course
                  </h3>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">₹299</span>
                    <span className="text-sm text-gray-400 line-through">₹10000</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <ProductFAQ faqs={[
            {
              question: 'What is the return policy?',
              answer: 'We provide a full warranty for your chosen plan. If you select a 30-day plan or a yearly plan and face any issues before the plan\'s validity ends, we will replace your account or refund your money. 😊'
            },
            {
              question: 'How can I trust your service for cheap TradingView plans?',
              answer: 'You can check customer reviews and proofs to see the feedback from those who\'ve already used our service. Plus, we offer a demo account so you can experience how our paid TradingView accounts work before committing. We\'re here to make sure you feel confident and comfortable with your choice! 😊'
            },
            {
              question: 'How will I receive my selected TradingView plan?',
              answer: 'If you\'ve chosen a monthly plan, we\'ll send you the email and password via WhatsApp, which you can use to log in to the TradingView website or app. For yearly plans, the plan will be activated directly on your Gmail account, allowing you to log in to the TradingView website or app with your own Gmail. Our process is simple and hassle-free! 😊'
            },
            {
              question: 'Can the plan I selected be activated on my existing TradingView account?',
              answer: 'No, we cannot activate the plan on your existing TradingView account. For yearly plans, we will activate it on a newly created Gmail account (one that hasn\'t been used to create a TradingView account before). You will receive a confirmation email from TradingView, and the plan will be active on this new Gmail account. This ensures a smooth and reliable setup! 😊'
            },
            {
              question: 'Are other payment methods available?',
              answer: 'Yes, we accept UPI, Crypto, Binance Pay or Perfect Money, Credit/Debit Cards and Net Banking. All payment methods are secure and encrypted. If these options don\'t work for you, please contact us on WhatsApp or Telegram for assistance with alternative payment solutions. We\'re here to help! 😊'
            }
          ]} />
        </div>
      </main>

      <Footer />

      {/* Floating Chat Button */}
      <FloatingChatButton />

      {/* Sticky Buy Now Button (only after plan + validity chosen) */}
      {canShowStickyBuy && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <div className="mx-4 mb-[max(env(safe-area-inset-bottom),1rem)] rounded-2xl backdrop-blur-xl bg-white/80 border border-gray-200 shadow-[0_-6px_20px_rgba(0,0,0,0.12)] p-3">
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new Event('trigger-buy-now'))
                }
              }}
              className="w-full py-3.5 sm:py-4 px-4 rounded-xl font-bold text-base sm:text-lg text-white 
              bg-orange-500 hover:bg-orange-600 
              shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-600/30 
              transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaCartShopping className="w-5 h-5" />
              <span>Buy Now</span>
            </button>
            <p className="mt-2 text-center text-xs text-gray-600">Complete your order securely</p>
          </div>
        </div>
      )}
    </div>
  )
}
