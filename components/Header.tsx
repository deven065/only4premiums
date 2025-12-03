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

  return (
    <header className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-gray-200' 
        : 'bg-white/80 backdrop-blur-md shadow-sm border-gray-100'
    }`}>
      <nav className="container mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => router.push('/')} className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
            <Image 
              src="/only4premiums.png" 
              alt="Only4Premiums Logo" 
              width={32} 
              height={32}
              className="sm:w-10 sm:h-10 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Only4Premiums
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => router.push('/')} className="text-gray-700 hover:text-gray-900 transition-all duration-200 px-4 py-2 font-medium">
              Home
            </button>
            <button onClick={() => { router.push('/about'); setIsMenuOpen(false); }} className="text-gray-700 hover:text-gray-900 transition-all duration-200 px-4 py-2 font-medium">
              About
            </button>
            <button onClick={() => { router.push('/contact'); setIsMenuOpen(false); }} className="text-gray-700 hover:text-gray-900 transition-all duration-200 px-4 py-2 font-medium">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeInUp">
            <button onClick={() => { router.push('/'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 px-4 py-3 transition-all duration-200">
              Home
            </button>
            <button onClick={() => { router.push('/about'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 px-4 py-3 transition-all duration-200">
              About
            </button>
            <button onClick={() => { router.push('/contact'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 px-4 py-3 transition-all duration-200">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
