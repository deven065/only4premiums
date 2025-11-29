

export default function HowToBuy() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Plan',
      text: 'Select from Essential, Pro Plus, or Premium plans and pick your validity period.',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '02',
      title: 'Select Payment Method',
      text: 'Choose between UPI or Cryptocurrency - both are secure and instant.',
      icon: '💳',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '03',
      title: 'Get Instant Access',
      text: 'Receive your credentials via WhatsApp within 10 minutes to 1 hour.',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="-mx-4 sm:mx-0 mb-16 bg-white py-12 lg:py-16 px-4 sm:px-8 border-t border-b border-gray-200">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">
          How to Buy in <span className="text-orange-600">3 Easy Steps</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg">Simple, fast, and secure process</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-full">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            {/* Connector Line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-linear-to-r from-purple-300 to-transparent z-0" />
            )}
            
            <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 z-10">
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Telegram Group Section */}
      <div className="mt-12 bg-linear-to-br from-blue-50 to-cyan-50 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stay Updated!</h3>
          <p className="text-gray-600 text-lg mb-8">Join our Telegram channel to get daily updates and exclusive insights</p>
          <a href="https://t.me/only4premiums_support" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 bg-[#0088cc] hover:bg-[#0077b5] text-white px-10 py-5 transition-all transform hover:scale-105 text-lg font-bold">
            <svg className="h-7 w-7" viewBox="0 0 240 240" fill="white">
              <path d="M94.9297 148.838L91.3906 195.273C96.5156 195.273 98.7656 193.023 101.516 190.273L123.141 169.398L167.766 202.023C176.391 206.773 182.641 204.398 185.016 193.898L215.891 64.3984L215.953 64.3359C218.703 51.2734 211.203 46.5234 202.828 49.8984L28.8281 118.148C16.2656 123.148 16.3281 130.523 26.9531 133.898L69.2031 147.648L173.516 84.6484C178.391 81.5234 182.891 83.3984 179.266 86.5234"/>
            </svg>
            <span>Join Telegram Now</span>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}
