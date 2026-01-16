import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Section - Brand, Contact & Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3">
              <Image 
                src="/only4premiums.png" 
                alt="Only4Premiums Logo" 
                width={32} 
                height={32}
              />
              <h3 className="text-xl font-bold text-white">Only4Premiums</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Premium software subscriptions at unbeatable prices. Empowering professionals worldwide with 24/7 support.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-400">Available Now</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:pl-8">
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1.5">Telegram Support</p>
                <a 
                  href="https://t.me/only4premiums_support" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0088cc] hover:text-[#0077b5] transition-colors text-sm font-medium inline-flex items-center space-x-1"
                >
                  <span>@only4premiums_support</span>
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1.5">Email</p>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:contact@only4premioums.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                    contact@only4premioums.com
                  </a>
                  <a href="mailto:info@only4premiums.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                    info@only4premiums.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <a 
                href="https://t.me/only4premiums_support" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#0088cc] hover:bg-[#0077b5] rounded-lg flex items-center justify-center transition-colors" 
                aria-label="Telegram"
              >
                <svg className="h-5 w-5" viewBox="0 0 240 240" fill="white">
                  <path d="M94.9297 148.838L91.3906 195.273C96.5156 195.273 98.7656 193.023 101.516 190.273L123.141 169.398L167.766 202.023C176.391 206.773 182.641 204.398 185.016 193.898L215.891 64.3984L215.953 64.3359C218.703 51.2734 211.203 46.5234 202.828 49.8984L28.8281 118.148C16.2656 123.148 16.3281 130.523 26.9531 133.898L69.2031 147.648L173.516 84.6484C178.391 81.5234 182.891 83.3984 179.266 86.5234"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@only4premioums.com" 
                className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors" 
                aria-label="Gmail"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-8">
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Only4Premiums. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
