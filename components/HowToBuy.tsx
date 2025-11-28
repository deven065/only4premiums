import { MessageCircle } from 'lucide-react'

export default function HowToBuy() {
  const steps = [
    {
      text: 'Click "Buy Now" – Select your plan and proceed.'
    },
    {
      text: 'Make Payment – Choose your payment method.'
    },
    {
      text: 'Get Service – Details will be sent to your WhatsApp.'
    }
  ]

  return (
    <div className="mb-16 bg-white rounded-3xl p-8 lg:p-12 border-2 border-gray-100">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
        How to Buy in <span className="relative">
          3 Easy Steps
          <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
            <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </span>
      </h2>

      <div className="max-w-2xl mx-auto mt-12 space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-3">
            <span className="text-gray-700 text-lg">•</span>
            <p className="text-lg text-gray-700">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-linear-to-r from-green-50 to-blue-50 px-6 py-3 rounded-full border border-gray-200">
          <MessageCircle className="h-5 w-5 text-gray-700" />
          <span className="text-gray-800 font-medium">Chat with us on WhatsApp or Telegram! 🚀</span>
        </div>
      </div>
    </div>
  )
}
