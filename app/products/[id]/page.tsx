'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductRating from '@/components/ProductRating'
import ProductPlanSelector from '@/components/ProductPlanSelector'
import ProductSimpleBuy from '@/components/ProductSimpleBuy'
import ProductTrustBadges from '@/components/ProductTrustBadges'
import ProductFeaturesList from '@/components/ProductFeaturesList'
import ProductDeliveryInfo from '@/components/ProductDeliveryInfo'
import ProductImageSlider from '@/components/ProductImageSlider'
import WhyChooseUs from '@/components/WhyChooseUs'
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

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string

  interface ProductPlan {
    name: string
    price: number
    originalPrice: number
    features: string[]
  }

  interface ProductType {
    name: string
    category: string
    rating: number
    reviews: number
    originalPrice: number
    price: number
    image: string
    features: string[]
    description: string
    includes: string[]
    plans?: ProductPlan[]
    screenshots?: string[]
  }

  const products: Record<string, ProductType> = {
    'tradingview-premium': {
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
      description: 'Get TradingView Premium Account at the Lowest Price in India. Choose from Essential, Pro Plus, or Premium plans with instant verification and lifetime support.',
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
    },
    'trading-hub-course': {
      name: 'Trading Hub Course',
      category: 'Education',
      rating: 5.0,
      reviews: 89,
      originalPrice: 10000,
      price: 299,
      image: '/TradingHub.png',
      features: ['Complete Course', 'Lifetime Access', 'Expert Support', 'Video Lessons', 'Trading Strategies', 'Live Sessions'],
      description: 'Comprehensive trading course covering everything from basics to advanced strategies. Learn from experienced traders and gain lifetime access to all course materials.',
      includes: ['Full Course Access', 'Lifetime Updates', 'Community Access', 'Certificate of Completion'],
      screenshots: ['/TradingHub.png', '/TradingHub.png', '/TradingHub.png']
    },
    'luxalgo-premium': {
      name: 'LuxAlgo Premium',
      category: 'Trading Tools',
      rating: 4.98,
      reviews: 156,
      originalPrice: 6000,
      price: 999,
      image: '/luxAlgo.png',
      features: ['Ultimate Plan', 'Lifetime Access', 'All Indicators', 'Smart Money Concepts', 'Price Action Tools', 'Auto Signals'],
      description: 'LuxAlgo Premium provides advanced algorithmic trading indicators and tools. Get access to all premium indicators with lifetime support.',
      includes: ['All Premium Indicators', 'Lifetime License', 'Priority Support', 'Regular Updates'],
      screenshots: ['/luxAlgo.png', '/luxAlgo.png', '/luxAlgo.png']
    },
    'fxreplay-premium': {
      name: 'FxReplay Premium',
      category: 'Trading Practice',
      rating: 4.75,
      reviews: 67,
      originalPrice: 799,
      price: 199,
      image: '/FxReply.png',
      features: ['Practice Tools', 'Historical Data', 'Strategy Testing', 'Multiple Timeframes', 'Export Reports', 'Custom Sessions'],
      description: 'Practice forex trading with historical market data. Perfect for testing strategies and improving your trading skills without risk.',
      includes: ['Premium Access', 'Full Historical Data', 'Lifetime Support', 'Strategy Analyzer'],
      screenshots: ['/FxReply.png', '/FxReply.png', '/FxReply.png']
    },
    'spotify-premium': {
      name: 'Spotify Premium',
      category: 'Music',
      rating: 4.88,
      reviews: 312,
      originalPrice: 1200,
      price: 149,
      image: '/spotify.jpg',
      features: ['Ad-free Music', 'Offline Downloads', 'High Quality Audio', 'Unlimited Skips', 'On-Demand Playback', 'Cross-Device Sync'],
      description: 'Enjoy unlimited music streaming without ads. Download songs for offline listening and experience high-quality audio on all your devices.',
      includes: ['Premium Account', 'Instant Activation', 'Account Warranty', 'Customer Support'],
      screenshots: ['/spotify.jpg', '/spotify.jpg', '/spotify.jpg']
    }
  }

  const initialReviews: Record<string, Review[]> = {
    'tradingview-premium': [
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
  }

  const [productReviews, setProductReviews] = useState<Record<string, Review[]>>(initialReviews)

  const handleNewReview = (newReview: Review) => {
    setProductReviews(prev => ({
      ...prev,
      [productId]: [newReview, ...(prev[productId] || [])]
    }))
  }

  const product = products[productId]

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button onClick={() => router.push('/products')} className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Products
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <button 
            onClick={() => router.push('/products')}
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Products</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[500px] border border-gray-200">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Image Slider Below Main Product Image */}
              {product.screenshots && product.screenshots.length > 0 && (
                <div className="mt-4 sm:mt-6 md:mt-8">
                  <ProductImageSlider images={product.screenshots} productName={product.name} />
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block text-xs sm:text-sm text-purple-600 font-semibold bg-purple-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                {product.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {product.name}
              </h1>

              <ProductRating rating={product.rating} reviews={product.reviews} />

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                {product.description}
              </p>

              <ProductDeliveryInfo />

              {product.plans ? (
                <ProductPlanSelector plans={product.plans} productName={product.name} />
              ) : (
                <ProductSimpleBuy 
                  price={product.price} 
                  originalPrice={product.originalPrice} 
                  discount={discount}
                  productName={product.name}
                />
              )}

              <ProductTrustBadges />
            </div>
          </div>

          {/* Features & Includes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ProductFeaturesList 
              title="Features" 
              features={product.features}
              bgColor="white"
            />

            <ProductFeaturesList 
              title="What's Included" 
              features={product.includes}
              bgColor="purple"
            />
          </div>

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* How to Buy Section */}
          <HowToBuy />

          {/* Customer Reviews Section */}
          <CustomerReviews 
            rating={4.9}
            totalReviews={76}
            ratingBreakdown={{
              5: 72,
              4: 4,
              3: 0,
              2: 0,
              1: 0
            }}
            reviewImages={[
              '/TradingView.png',
              '/TradingView.png',
              '/TradingView.png',
              '/TradingView.png',
              '/TradingView.png',
              '/TradingView.png',
              '/TradingView.png',
              '/TradingView.png'
            ]}
            reviews={productReviews[productId] || [
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
            ]}
          />

          {/* Leave a Review Section */}
          <LeaveReview onSubmit={handleNewReview} />

          {/* FAQ Section */}
          <ProductFAQ faqs={[
            {
              question: 'What is the return policy?',
              answer: 'We provide a full warranty for your chosen plan. If you select a 30-day plan or a yearly plan and face any issues before the plan\'s validity ends, we will replace your account or refund your money. 😊'
            },
            {
              question: 'How can I trust your service for cheap TradingView plans?',
              answer: 'You can check customer reviews and proofs to see the feedback from those who’ve already used our service. Plus, we offer a demo account so you can experience how our paid TradingView accounts work before committing. We’re here to make sure you feel confident and comfortable with your choice! 😊'
            },
            {
              question: 'How will I receive my selected TradingView plan?',
              answer: 'If you’ve chosen a monthly plan, we’ll send you the email and password via WhatsApp, which you can use to log in to the TradingView website or app. For yearly plans, the plan will be activated directly on your Gmail account, allowing you to log in to the TradingView website or app with your own Gmail. Our process is simple and hassle-free! 😊'
            },
            {
              question: 'Can the plan I selected be activated on my existing TradingView account?',
              answer: 'No, we cannot activate the plan on your existing TradingView account. For yearly plans, we will activate it on a newly created Gmail account (one that hasn’t been used to create a TradingView account before). You will receive a confirmation email from TradingView, and the plan will be active on this new Gmail account. This ensures a smooth and reliable setup! 😊'
            },
            {
              question: 'Are other payment methods available?',
              answer: 'Yes, we accept UPI, Crypto, Binance Pay or Perfect Money, Credit/Debit Cards and Net Banking. All payment methods are secure and encrypted. If these options don’t work for you, please contact us on WhatsApp or Telegram for assistance with alternative payment solutions. We’re here to help! 😊'
            }
          ]} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
