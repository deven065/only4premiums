'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 animate-bounce-slow shine-effect opacity-0 animate-fadeInUp">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 animate-spin-slow" />
            <span className="text-xs sm:text-sm font-medium">Trusted by 500+ professionals worldwide</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient opacity-0 animate-fadeInUp animation-delay-200 leading-tight">
            Enterprise-Grade Tools at Accessible Prices
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeInUp animation-delay-400 px-2">
            Empower your business with premium software subscriptions. Access industry-leading tools for trading, design, analytics, and more—without breaking the bank.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0 animate-scaleIn animation-delay-600">
            <button 
              onClick={() => router.push('/products')}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2 shine-effect"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-white text-gray-800 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all border-2 border-gray-200 hover:border-purple-300"
            >
              Why Choose Only4Premiums
            </button>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-purple-100 opacity-0 animate-fadeInLeft animation-delay-600 animate-float">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-1 sm:mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Active Clients</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">Across India</div>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-pink-100 opacity-0 animate-scaleIn animation-delay-800 animate-float animation-delay-2000">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent mb-1 sm:mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Enterprise Solutions</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">Premium Tools</div>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-blue-100 opacity-0 animate-fadeInRight animation-delay-600 animate-float animation-delay-4000">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1 sm:mb-2">4.9★</div>
              <div className="text-sm sm:text-base text-gray-600 font-semibold">Client Satisfaction</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">5-Star Rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
