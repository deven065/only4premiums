'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import confetti from 'canvas-confetti'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [showConfetti, setShowConfetti] = useState(true)

  const orderId = searchParams.get('orderId') || ''
  const productName = searchParams.get('product') || ''
  const plan = searchParams.get('plan') || ''
  const validity = searchParams.get('validity') || ''
  const price = searchParams.get('price') || '0'
  const paymentMethod = searchParams.get('paymentMethod') || ''
  const customerName = searchParams.get('name') || ''
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'

  useEffect(() => {
    // Confetti animation
    if (showConfetti) {
      const duration = 5000
      const end = Date.now() + duration

      const colors = ['#FF6B35', '#F7931E', '#FBB03B', '#4ECDC4', '#44A08D']

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        })
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }
      frame()
      
      setTimeout(() => setShowConfetti(false), duration)
    }
  }, [showConfetti])

  if (!orderId || !productName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Access</h1>
          <p className="text-gray-600 mb-6">No order information found</p>
          <button
            onClick={() => router.push('/')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    )
  }

  const getPaymentMethodDisplay = () => {
    if (paymentMethod === 'upi') return 'UPI Payment'
    if (paymentMethod === 'crypto') return 'USDT (BEP-20)'
    return paymentMethod
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-scaleIn">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-checkmark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 animate-slideInDown">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                🎉 Thank You{customerName ? `, ${customerName}` : ''}! 🎉
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold mb-3 animate-fadeIn animation-delay-500">
              Your payment has been received successfully!
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn animation-delay-1000">
              We're thrilled to have you on board! Your order is being processed and you'll receive access details shortly.
            </p>
          </div>

          {/* Order Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 mb-8 animate-slideInUp border-4 border-orange-200">
            <div className="flex items-center justify-center mb-6 space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Order Confirmed!</h2>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 mb-6 border-2 border-orange-200">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600 mb-2">Order ID</p>
                <p className="text-3xl font-bold font-mono bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  #{orderId}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Product</p>
                  <p className="font-semibold text-gray-900">{productName}</p>
                </div>
                {plan && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-500 mb-1">Plan</p>
                    <p className="font-semibold text-gray-900">{plan}</p>
                  </div>
                )}
                {validity && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-500 mb-1">Validity</p>
                    <p className="font-semibold text-gray-900">{validity}</p>
                  </div>
                )}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Amount Paid</p>
                  <p className="font-bold text-green-600 text-lg">₹{price}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Payment Method</p>
                  <p className="font-semibold text-gray-900">{getPaymentMethodDisplay()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-500 mb-1">Status</p>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="font-semibold text-green-600">Processing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border-2 border-blue-200">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                What Happens Next?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Payment Verification</p>
                    <p className="text-sm text-gray-600">Our team is verifying your payment proof right now</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email Confirmation</p>
                    <p className="text-sm text-gray-600">Check your inbox for order confirmation with all details</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Instant Access</p>
                    <p className="text-sm text-gray-600">You'll receive login credentials via WhatsApp within 10 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => {
                  const message = `Hello! I just completed my payment for "${productName}" (Order ID: #${orderId}). I'm excited to get started! Could you please confirm and provide my access details? Thank you! 😊`
                  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}
                className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 group"
              >
                <svg className="w-7 h-7 group-hover:animate-bounce" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Get Instant Support on WhatsApp</span>
              </button>

              <button
                onClick={() => router.push('/')}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 py-4 px-8 rounded-2xl font-semibold text-base border-2 border-gray-200 transition-all hover:shadow-lg"
              >
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-3 animate-fadeIn animation-delay-2000">
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full border-2 border-green-300">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-700 font-bold text-sm">We're Online & Ready to Help!</span>
            </div>
            
            <p className="text-gray-600 text-sm">
              <strong>📧 Email:</strong> contact@only4premiums.com | 
              <strong> ⏱️ Avg. Response:</strong> 10 minutes
            </p>
            
            <p className="text-gray-500 text-xs">
              Need help? Our support team is available 24/7 to assist you
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out;
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
        .animate-checkmark {
          stroke-dasharray: 100;
          animation: checkmark 0.8s ease-out 0.3s forwards;
        }
        .animate-fadeIn {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
