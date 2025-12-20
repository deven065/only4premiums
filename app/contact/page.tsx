import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Clock, MapPin } from 'lucide-react'

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-600">We&apos;re Here to Help</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Contact</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us. We&apos;re here to help you 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Have questions about our products or services? Reach out to us through any of these channels and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 sm:space-y-6">
                {/* Gmail */}
                <a 
                  href="mailto:contact@only4premiums.com"
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shrink-0">
                    <svg className="h-7 w-7" viewBox="0 0 256 193" fill="none">
                      <path d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" fill="#4285F4"/>
                      <path d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798v99.91Z" fill="#34A853"/>
                      <path d="M58.182 93.14l-4.174-38.647 4.174-36.989L128 69.868l69.818-52.364 4.669 34.992-4.669 41.644L128 145.504z" fill="#EA4335"/>
                      <path d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" fill="#FBBC04"/>
                      <path d="M0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z" fill="#C5221F"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-lg">Email</h3>
                    <p className="text-gray-600 text-sm mb-2">Send an email anytime</p>
                    <p className="text-blue-600 font-medium">contact@only4premiums.com</p>
                  </div>
                </a>

                {/* Telegram */}
                <a 
                  href="https://t.me/only4premiums_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#0088cc] hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-[#0088cc] rounded-2xl shrink-0">
                    <svg className="h-7 w-7" viewBox="0 0 240 240" fill="none">
                      <path d="M94.9297 148.838L91.3906 195.273C96.5156 195.273 98.7656 193.023 101.516 190.273L123.141 169.398L167.766 202.023C176.391 206.773 182.641 204.398 185.016 193.898L215.891 64.3984L215.953 64.3359C218.703 51.2734 211.203 46.5234 202.828 49.8984L28.8281 118.148C16.2656 123.148 16.3281 130.523 26.9531 133.898L69.2031 147.648L173.516 84.6484C178.391 81.5234 182.891 83.3984 179.266 86.5234" fill="white"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0088cc] transition-colors text-lg">Chat on Telegram</h3>
                    <p className="text-gray-600 text-sm mb-2">Instant messaging support</p>
                    <p className="text-[#0088cc] font-medium">@only4premiums_support</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#25D366] hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-2xl shrink-0">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.256-2.986.74L7.04 3.061 3.712 7.8c-.52 1.364-.827 2.802-.827 4.3 0 5.517 4.484 10 10 10 1.499 0 2.931-.308 4.291-.817l3.71-1.635-4.771-3.35c.484-.905.74-1.922.74-2.986 0-3.314-2.686-6-6-6z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#25D366] transition-colors text-lg">Chat on WhatsApp</h3>
                    <p className="text-gray-600 text-sm mb-2">Quick messaging support</p>
                    <p className="text-[#25D366] font-medium">+91 9876543210</p>
                  </div>
                </a>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-sm border-2 border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Response Time</h4>
                    <p className="text-gray-600 text-sm">Within 10 min - 1 hour</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-sm border-2 border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600 text-sm">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form or Image */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border-2 border-gray-100 p-8 lg:p-12 flex flex-col justify-center items-center text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <svg className="h-12 w-12" viewBox="0 0 240 240" fill="white">
                    <path d="M94.9297 148.838L91.3906 195.273C96.5156 195.273 98.7656 193.023 101.516 190.273L123.141 169.398L167.766 202.023C176.391 206.773 182.641 204.398 185.016 193.898L215.891 64.3984L215.953 64.3359C218.703 51.2734 211.203 46.5234 202.828 49.8984L28.8281 118.148C16.2656 123.148 16.3281 130.523 26.9531 133.898L69.2031 147.648L173.516 84.6484C178.391 81.5234 182.891 83.3984 179.266 86.5234"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Quick Support
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Choose your preferred way to reach us. We&apos;re available 24/7 to assist you with any questions or concerns.
                </p>
              </div>

              <div className="space-y-4 w-full max-w-sm">
                <a 
                  href="mailto:contact@only4premiums.com"
                  className="block w-full bg-white text-gray-900 font-bold py-4 px-6 rounded-xl transition-all border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg"
                >
                  <Mail className="inline h-5 w-5 mr-2" />
                  Email Support
                </a>
                <a 
                  href="https://t.me/only4premiums_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#0088cc] to-[#0077b5] hover:from-[#0077b5] hover:to-[#006699] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="inline h-5 w-5 mr-2" viewBox="0 0 240 240" fill="white">
                    <path d="M94.9297 148.838L91.3906 195.273C96.5156 195.273 98.7656 193.023 101.516 190.273L123.141 169.398L167.766 202.023C176.391 206.773 182.641 204.398 185.016 193.898L215.891 64.3984L215.953 64.3359C218.703 51.2734 211.203 46.5234 202.828 49.8984L28.8281 118.148C16.2656 123.148 16.3281 130.523 26.9531 133.898L69.2031 147.648L173.516 84.6484C178.391 81.5234 182.891 83.3984 179.266 86.5234"/>
                  </svg>
                  Telegram Chat
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#0fa086] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="inline h-5 w-5 mr-2" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.256-2.986.74L7.04 3.061 3.712 7.8c-.52 1.364-.827 2.802-.827 4.3 0 5.517 4.484 10 10 10 1.499 0 2.931-.308 4.291-.817l3.71-1.635-4.771-3.35c.484-.905.74-1.922.74-2.986 0-3.314-2.686-6-6-6z"/>
                  </svg>
                  WhatsApp Chat
                </a>
              </div>

              <div className="mt-8 inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border-2 border-green-200">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-700 font-bold">We&apos;re online now!</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
