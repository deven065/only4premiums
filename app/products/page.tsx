'use client'

import { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductRating from '@/components/ProductRating'
import ProductPlanSelector from '@/components/ProductPlanSelector'
import ProductTrustBadges from '@/components/ProductTrustBadges'
import HowToBuy from '@/components/HowToBuy'
import ProductFAQ from '@/components/ProductFAQ'
import CustomerReviews from '@/components/CustomerReviews'
import LeaveReview from '@/components/LeaveReview'
import FloatingChatButton from '@/components/FloatingChatButton'
import ComparisonTable from '@/components/ComparisonTable'
import { useRouter } from 'next/navigation'

interface Review {
  name: string
  location: string
  rating: number
  text: string
  date: string
  verified: boolean
  images?: string[]
}

export default function ProductsPage() {
  const router = useRouter()
  
  // Featured Product (Trading Hub Course)
  const featuredProduct = {
    id: 'trading-hub-course',
    name: 'Trading Hub Course',
    category: 'Education',
    rating: 5.0,
    reviews: 89,
    originalPrice: 10000,
    price: 299,
    image: '/TradingHub.png',
    features: [
      'Complete Trading Course Access',
      'Lifetime Access to All Materials',
      'Expert Support & Guidance',
      '100% Practical Strategies',
      'Live Trading Sessions'
    ],
    description: 'Master the art of trading with our comprehensive Trading Hub Course. Learn from experienced traders, access lifetime materials, and join live sessions. Perfect for beginners and intermediate traders looking to enhance their skills with proven strategies.',
    includes: ['Complete Course Access', 'Lifetime Updates', 'Community Access', 'Certificate of Completion'],
    screenshots: ['/TradingHub.png', '/TradingHub.png', '/TradingHub.png'],
    plans: [
      {
        name: 'Full Course',
        price: 299,
        originalPrice: 10000,
        features: [
          'Complete trading education from basics to advanced',
          'Lifetime access to all video lessons',
          'Downloadable resources and PDFs',
          'Access to private trading community',
          'Weekly live Q&A sessions',
          'Certificate of completion'
        ]
      }
    ]
  }

  // Other Products
  const otherProducts = [
    {
      id: 'tradingview-premium',
      name: 'TradingView Premium',
      category: 'Trading & Finance',
      rating: 5.0,
      reviews: 76,
      originalPrice: 8900,
      price: 490,
      image: '/TradingView.png',
      features: ['Advanced Charts', 'Real-time Data', 'Multiple Indicators']
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

  const initialReviews: Review[] = [
    {
      name: 'Priya Sharma',
      location: 'INDIA',
      rating: 5,
      text: 'Best trading course I have taken! The content is comprehensive and easy to understand. Highly recommend for anyone serious about trading.',
      date: '15/11/2024 14:30',
      verified: true,
      images: []
    },
    {
      name: 'Vikash Kumar',
      location: 'INDIA',
      rating: 5,
      text: 'बहुत अच्छा कोर्स है। सब कुछ detail में समझाया गया है। Worth every penny!',
      date: '18/11/2024 10:15',
      verified: true
    },
    {
      name: 'Rahul Verma',
      location: 'INDIA',
      rating: 5,
      text: 'Excellent course with lifetime access. The live sessions are very helpful. Great value for money!',
      date: '20/11/2024 16:45',
      verified: true
    },
    {
      name: 'Anita Desai',
      location: 'INDIA',
      rating: 4,
      text: 'Very informative and well-structured course. Support team is responsive and helpful.',
      date: '22/11/2024 09:20',
      verified: true
    }
  ]

  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [reviewImages] = useState<string[]>([
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
  ])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [canShowStickyBuy, setCanShowStickyBuy] = useState(false)

  const allImages = [featuredProduct.image, ...featuredProduct.screenshots]

  const handleNewReview = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev])
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }

    setTouchStart(0)
    setTouchEnd(0)
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

  const discount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Trust Banner - positioned directly under fixed header */}
      <div className="fixed top-[60px] sm:top-[68px] left-0 right-0 bg-gray-900 border-y border-gray-700 h-[26px] sm:h-[30px] py-0 scanline-wrapper marquee-container z-40">
        <div className="scanline" />
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-center h-full gap-1.5 sm:gap-2.5 text-[9px] sm:text-[11px] overflow-hidden whitespace-nowrap leading-none">
            <div className="flex items-center gap-0.5 sm:gap-1 text-white whitespace-nowrap">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <span className="font-medium">Secure</span>
            </div>
            <div className="w-px h-2.5 sm:h-3 bg-gray-700"></div>
            <div className="flex items-center gap-0.5 sm:gap-1 text-white whitespace-nowrap">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <span className="font-medium">Instant</span>
            </div>
            <div className="w-px h-2.5 sm:h-3 bg-gray-700"></div>
            <div className="flex items-center gap-0.5 sm:gap-1 text-white whitespace-nowrap">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                </svg>
              </div>
              <span className="font-medium">Support</span>
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
            <span className="text-gray-900 font-medium">Products</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{featuredProduct.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-16">
            {/* Product Image Gallery */}
            <div className="relative lg:sticky lg:top-20 h-fit w-screen lg:w-full -mx-4 lg:mx-0">
              <div 
                className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] bg-white overflow-hidden border border-gray-300"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Image 
                  src={allImages[currentImageIndex]} 
                  alt={`${featuredProduct.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain transition-all duration-500"
                  priority
                />

                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm z-40">
                  {currentImageIndex + 1} / {allImages.length}
                </div>

                {allImages.length > 1 && (
                  <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-between px-3">
                    <button
                      onClick={prevImage}
                      aria-label="Previous"
                      className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:scale-105 transition-transform"
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                    </button>

                    <button
                      onClick={nextImage}
                      aria-label="Next"
                      className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:scale-105 transition-transform"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700 font-medium px-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                  {featuredProduct.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-2.5 sm:px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {featuredProduct.name}
              </h1>

              <ProductRating rating={featuredProduct.rating} reviews={featuredProduct.reviews} />

              <div className="bg-white p-4 sm:p-5 border-l-2 border-gray-400">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {featuredProduct.description}
                </p>
              </div>

              <div className="border-t border-gray-200 my-4 sm:my-0"></div>

              <ProductPlanSelector plans={featuredProduct.plans} productName={featuredProduct.name} productImage={featuredProduct.image} />

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
                  5: 85,
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
              <LeaveReview onSubmit={handleNewReview} onAddPhoto={() => {}} />
            </div>
          </div>

          {/* FAQ Section */}
          <ProductFAQ faqs={[
            {
              question: 'What is the return policy?',
              answer: 'We provide a full warranty for your chosen plan. If you face any issues, we will provide support or refund your money. 😊'
            },
            {
              question: 'How can I trust your service?',
              answer: 'You can check customer reviews and proofs to see the feedback from those who\'ve already used our service. We\'re here to make sure you feel confident and comfortable with your choice! 😊'
            },
            {
              question: 'How will I receive my course?',
              answer: 'After payment, you\'ll receive instant access to the course materials via email and WhatsApp. All materials are available on our secure platform with lifetime access. 😊'
            },
            {
              question: 'Is this course suitable for beginners?',
              answer: 'Yes! The course is designed for all levels - from beginners to intermediate traders. We start with basics and gradually move to advanced strategies. 😊'
            },
            {
              question: 'Are other payment methods available?',
              answer: 'Yes, we accept UPI, Crypto, Binance Pay or Perfect Money, Credit/Debit Cards and Net Banking. All payment methods are secure and encrypted. 😊'
            }
          ]} />

          {/* Other Products Section */}
          <div className="mt-24 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Explore More <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Premium Products</span>
              </h2>
              <p className="text-lg text-gray-600">
                Discover other premium tools and services at unbeatable prices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProducts.map((product, index) => (
                <div 
                  key={index}
                  onClick={() => router.push(`/products/${product.id}`)}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border-2 border-gray-100 hover:border-purple-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="absolute top-4 right-4 bg-linear-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold z-20 shadow-lg">
                    {discount(product.originalPrice, product.price)}% OFF
                  </div>
                  
                  <div className="relative bg-white overflow-hidden h-48 border-b border-gray-200">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-sm text-gray-900">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-gray-900 leading-tight">
                      {product.name}
                    </h3>

                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    <button className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
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
