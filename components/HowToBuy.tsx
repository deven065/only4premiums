

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
        <div className="inline-flex items-center flex-wrap justify-center gap-3">
          <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full transition-all hover:scale-105 shadow-sm">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="font-medium">Chat on WhatsApp</span>
          </a>
          <a href="https://t.me/only4premiums_support" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-6 py-3 rounded-full transition-all hover:scale-105 shadow-sm">
            <svg className="h-5 w-5" viewBox="0 0 240 240" fill="white">
              <path d="M94.9297 148.838L91.3906 195.273C96.5156 195.273 98.7656 193.023 101.516 190.273L123.141 169.398L167.766 202.023C176.391 206.773 182.641 204.398 185.016 193.898L215.891 64.3984L215.953 64.3359C218.703 51.2734 211.203 46.5234 202.828 49.8984L28.8281 118.148C16.2656 123.148 16.3281 130.523 26.9531 133.898L69.2031 147.648L173.516 84.6484C178.391 81.5234 182.891 83.3984 179.266 86.5234"/>
            </svg>
            <span className="font-medium">Chat on Telegram</span>
          </a>
        </div>
      </div>
    </div>
  )
}
