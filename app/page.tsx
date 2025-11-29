'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductRating from '@/components/ProductRating'
import ProductPlanSelector from '@/components/ProductPlanSelector'
import ProductTrustBadges from '@/components/ProductTrustBadges'
import HowToBuy from '@/components/HowToBuy'
import ProductFAQ from '@/components/ProductFAQ'
import CustomerReviews from '@/components/CustomerReviews'
import LeaveReview from '@/components/LeaveReview'

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

  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [reviewImages, setReviewImages] = useState<string[]>([
    '/TradingView.png',
    '/TradingView.png',
    '/TradingView.png',
    '/TradingView.png',
    '/TradingView.png',
    '/TradingView.png',
    '/TradingView.png',
    '/TradingView.png'
  ])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const allImages = [product.image, ...product.screenshots]

  const handleNewReview = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev])
  }

  const handleAddPhoto = (photoUrl: string) => {
    setReviewImages(prev => [...prev, photoUrl])
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  // Handle touch events for swipe
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Trust Banner */}
      <div className="bg-gray-900 border-y border-gray-700 py-2.5 sm:py-3 mt-16 sm:mt-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm overflow-x-auto">
            <div className="flex items-center gap-1.5 text-white whitespace-nowrap">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <span className="font-medium">Secure</span>
            </div>
            <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 text-white whitespace-nowrap">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <span className="font-medium">Instant</span>
            </div>
            <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 text-white whitespace-nowrap">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                </svg>
              </div>
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      
      <main className="pt-4 sm:pt-8 pb-8 sm:pb-16">
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
              {/* Image container */}
              <div 
                className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] bg-white overflow-hidden border border-gray-300"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Image 
                  src={allImages[currentImageIndex]} 
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain transition-all duration-500"
                  priority
                />

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm z-40">
                  {currentImageIndex + 1} / {allImages.length}
                </div>

                {/* Arrow navigation */}
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
              <ProductPlanSelector plans={product.plans} />

              {/* Trust Badges */}
              <ProductTrustBadges />
            </div>
          </div>

          {/* How to Buy Section */}
          <HowToBuy />

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

      {/* Sticky Buy Now Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300 p-4 md:hidden">
        <button 
          onClick={() => {
            // Scroll to plan selector
            const planSelector = document.querySelector('.product-plan-selector')
            if (planSelector) {
              planSelector.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 font-bold text-lg transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
