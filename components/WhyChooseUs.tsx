import { Zap, ShieldCheck, Lock, Tag, Headphones } from 'lucide-react'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Get access immediately after purchase'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Subscriptions',
      description: '100% genuine, no risk'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Encrypted transactions guaranteed'
    },
    {
      icon: Tag,
      title: 'Exclusive Savings',
      description: 'Best market prices & discounts'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Dedicated assistance 24/7'
    }
  ]

  return (
    <div className="mb-16 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
        Why Choose Only4Premiums TradingView Plans?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <benefit.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
