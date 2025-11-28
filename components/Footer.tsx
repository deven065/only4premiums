import { Mail, Send } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/only4premiums.png" 
                alt="Only4Premiums Logo" 
                width={32} 
                height={32}
              />
              <h3 className="text-xl font-bold text-white">Only4Premiums</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Premium software subscriptions at unbeatable prices. Empowering professionals worldwide.
            </p>
            <div className="flex space-x-3">
              <a href="https://t.me/only4premiums_support" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-all">
                <Send className="h-4 w-4 text-white" />
              </a>
              <a href="mailto:contact@only4premioums.com" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-all">
                <Mail className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2.5">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Trading & Finance</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Design Tools</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Music & Entertainment</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Education</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1.5">Email</p>
                <a href="mailto:contact@only4premioums.com" className="text-purple-400 hover:text-purple-300 transition-colors text-sm block">
                  contact@only4premioums.com
                </a>
                <a href="mailto:info@only4premiums.com" className="text-purple-400 hover:text-purple-300 transition-colors text-sm block">
                  info@only4premiums.com
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1.5">Telegram</p>
                <a href="https://t.me/only4premiums_support" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                  @only4premiums_support
                </a>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-400">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Only4Premiums. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Refunds</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
