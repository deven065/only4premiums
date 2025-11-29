import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">
            About us
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Hi, I&apos;m Sandeep, and welcome to Only4Premiums! I&apos;m committed to selling premium subscriptions affordable for all.. That&apos;s why I&apos;ve created this platform where you can unlock the full potential of your favorite subscriptions. Whether you&apos;re a student, a professional, or just someone who loves using a subscription, I&apos;ve got you covered with unbeatable deals on premium subscriptions. Explore Only4Premiums and experience the difference!
            </p>

            <div className="mt-8 sm:mt-10 md:mt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>
              <div className="flex items-center space-x-4 sm:space-x-6">
                <a 
                  href="mailto:contact@only4premiums.com"
                  className="flex items-center justify-center w-16 h-16 bg-white rounded-full hover:shadow-lg transition-all"
                  aria-label="Email"
                >
                  <svg className="h-10 w-10" viewBox="0 0 256 193" fill="none">
                    <path d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" fill="#4285F4"/>
                    <path d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798v99.91Z" fill="#34A853"/>
                    <path d="M58.182 93.14l-4.174-38.647 4.174-36.989L128 69.868l69.818-52.364 4.669 34.992-4.669 41.644L128 145.504z" fill="#EA4335"/>
                    <path d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" fill="#FBBC04"/>
                    <path d="M0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z" fill="#C5221F"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/only4premiums_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-[#0088cc] rounded-full hover:opacity-90 transition-opacity"
                  aria-label="Telegram"
                >
                  <svg className="h-9 w-9" viewBox="0 0 240 240" fill="none">
                    <path d="M94.9297 148.838L91.3906 195.273C96.5156 195.273 98.7656 193.023 101.516 190.273L123.141 169.398L167.766 202.023C176.391 206.773 182.641 204.398 185.016 193.898L215.891 64.3984L215.953 64.3359C218.703 51.2734 211.203 46.5234 202.828 49.8984L28.8281 118.148C16.2656 123.148 16.3281 130.523 26.9531 133.898L69.2031 147.648L173.516 84.6484C178.391 81.5234 182.891 83.3984 179.266 86.5234" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
