'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductRating from '@/components/ProductRating'
import ProductPlanSelector from '@/components/ProductPlanSelector'
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

  const handleNewReview = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev])
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="relative bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Image Slider Below Main Product Image */}
              <div className="mt-4 sm:mt-6 md:mt-8">
                <ProductImageSlider images={product.screenshots} productName={product.name} />
              </div>
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

              <ProductPlanSelector plans={product.plans} />

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
            reviews={reviews}
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
    </div>
  )
}
