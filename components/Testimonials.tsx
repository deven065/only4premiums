'use client'

import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Day Trader',
      image: '👨‍💼',
      rating: 5,
      text: 'TradingView Premium from Only4Premiums has completely transformed my trading strategy. The price is unbeatable, and the service is instant. Highly recommended!',
      product: 'TradingView Premium'
    },
    {
      name: 'Priya Sharma',
      role: 'Graphic Designer',
      image: '👩‍🎨',
      rating: 5,
      text: 'Got Canva Pro at an amazing price! The team was super responsive and delivery was instant. This is a game-changer for my design business.',
      product: 'Canva Pro'
    },
    {
      name: 'Amit Patel',
      role: 'Crypto Trader',
      image: '👨‍💻',
      rating: 5,
      text: 'LuxAlgo Premium subscription helped me improve my trading accuracy significantly. Only4Premiums offers the best prices I&apos;ve found anywhere!',
      product: 'LuxAlgo Premium'
    },
    {
      name: 'Sneha Reddy',
      role: 'Content Creator',
      image: '👩‍🦰',
      rating: 5,
      text: 'Spotify Premium at this price is incredible! No more ads and I can download all my favorite playlists. Customer service was excellent too.',
      product: 'Spotify Premium'
    },
    {
      name: 'Vikram Singh',
      role: 'Financial Analyst',
      image: '👨‍🔬',
      rating: 5,
      text: 'The Trading Hub Course exceeded my expectations. Comprehensive content at an unbelievable price. Worth every rupee and more!',
      product: 'Trading Hub Course'
    },
    {
      name: 'Ananya Iyer',
      role: 'Marketing Manager',
      image: '👩‍💼',
      rating: 5,
      text: 'Been using their services for 6 months now. Always reliable, instant delivery, and the support team is available 24/7. Absolutely trustworthy!',
      product: 'Multiple Services'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">CLIENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Loved by Professionals Worldwide
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust Only4Premiums for their premium subscriptions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Product badge */}
              <div className="mb-6">
                <span className="inline-block text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {testimonial.product}
                </span>
              </div>

              {/* Author info */}
              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Trusted by 500+ professionals across India</span>
          </div>
        </div>
      </div>
    </section>
  )
}
