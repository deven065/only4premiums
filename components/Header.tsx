'use client'

import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateToProducts = () => {
    router.push('/products')
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-gray-200' 
        : 'bg-white/80 backdrop-blur-md shadow-sm border-gray-100'
    }`}>
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => router.push('/')} className="flex items-center space-x-3 group cursor-pointer">
            <Image 
              src="/only4premiums.png" 
              alt="Only4Premiums Logo" 
              width={40} 
              height={40}
              className="group-hover:scale-110 transition-all duration-300 group-hover:rotate-3"
            />
            <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Only4Premiums
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => router.push('/')} className="text-gray-700 hover:text-purple-600 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-purple-50 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={navigateToProducts} className="text-gray-700 hover:text-purple-600 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-purple-50 font-medium relative group">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => { router.push('/about'); setIsMenuOpen(false); }} className="text-gray-700 hover:text-purple-600 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-purple-50 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => { router.push('/contact'); setIsMenuOpen(false); }} className="text-gray-700 hover:text-purple-600 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-purple-50 font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={navigateToProducts}
              className="ml-4 bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 font-semibold active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-purple-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-purple-600" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeInUp">
            <button onClick={() => { router.push('/'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200">
              Home
            </button>
            <button onClick={navigateToProducts} className="block w-full text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200">
              Products
            </button>
            <button onClick={() => { router.push('/about'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200">
              About
            </button>
            <button onClick={() => { router.push('/contact'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-200">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
