import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-orange-600">About Only4Premiums</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for<br/>
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Premium Subscriptions</span>
            </h1>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8 border-2 border-gray-100">
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Hi, I&apos;m Sandeep</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Welcome to <strong>Only4Premiums</strong>! I&apos;m committed to making premium subscriptions affordable for everyone.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                That&apos;s why I&apos;ve created this platform where you can unlock the full potential of your favorite subscriptions. Whether you&apos;re a student, a professional, or just someone who loves using premium services, I&apos;ve got you covered with unbeatable deals on premium subscriptions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-700">Genuine Plans</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-700">Support</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-700">Happy Customers</div>
                </div>
              </div>

              <p className="text-xl font-semibold text-gray-900">
                Explore Only4Premiums and experience the difference! 🚀
              </p>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="mailto:contact@only4premiums.com"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
                aria-label="Email"
                >
                <svg className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 256 193" fill="none">
                  <path d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" fill="#4285F4"/>
                  <path d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798v99.91Z" fill="#34A853"/>
                  <path d="M58.182 93.14l-4.174-38.647 4.174-36.989L128 69.868l69.818-52.364 4.669 34.992-4.669 41.644L128 145.504z" fill="#EA4335"/>
                  <path d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" fill="#FBBC04"/>
                  <path d="M0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z" fill="#C5221F"/>
                </svg>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600">contact@only4premiums.com</p>
              </a>
              
              <a 
                href="https://t.me/only4premiums_support"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-[#0088cc] rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
                aria-label="Telegram"
              >
                <svg className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 240 240" fill="none">
                  <path d="M94.9297 148.838L91.3906 195.273C96.5156 195.273 98.7656 193.023 101.516 190.273L123.141 169.398L167.766 202.023C176.391 206.773 182.641 204.398 185.016 193.898L215.891 64.3984L215.953 64.3359C218.703 51.2734 211.203 46.5234 202.828 49.8984L28.8281 118.148C16.2656 123.148 16.3281 130.523 26.9531 133.898L69.2031 147.648L173.516 84.6484C178.391 81.5234 182.891 83.3984 179.266 86.5234" fill="white"/>
                </svg>
                <h3 className="font-bold text-white mb-2">Telegram</h3>
                <p className="text-sm text-blue-100">@only4premiums_support</p>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}