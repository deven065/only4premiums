import { ShoppingCart, CreditCard, Zap } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Choose Your Product',
      description: 'Browse our collection of 4 premium products and select what you need',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Pay securely via UPI, Cards, or Crypto - your choice, fully encrypted',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Get Instant Access',
      description: 'Receive credentials via WhatsApp in 10 min - 1 hour, start using immediately',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in 3 simple steps. No complexity, just premium quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gray-200 z-0" />
              )}
              
              <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-all hover:shadow-xl z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
