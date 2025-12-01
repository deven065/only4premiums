'use client'

import { Check, X } from 'lucide-react'

export default function ComparisonTable() {
  const comparisons = [
    {
      feature: 'Warranty Period',
      us: 'Full Warranty (Lifetime)',
      others: 'Only 10 Days',
      usHighlight: true
    },
    {
      feature: 'Customer Support',
      us: '24/7 Full Support',
      others: 'No Support',
      usHighlight: true
    },
    {
      feature: 'Multiple Charts Layout',
      us: 'Included',
      others: 'Limited/Not Available',
      usHighlight: true
    },
    {
      feature: 'Advanced Indicators',
      us: 'All Premium Indicators',
      others: 'Basic Only',
      usHighlight: true
    },
    {
      feature: 'Volume Profile',
      us: 'Full Access',
      others: 'Not Included',
      usHighlight: true
    },
    {
      feature: 'Custom Timeframes',
      us: 'Unlimited',
      others: 'Limited',
      usHighlight: true
    },
    {
      feature: 'Price Alerts',
      us: 'Unlimited Alerts',
      others: 'Limited Alerts',
      usHighlight: true
    },
    {
      feature: 'Chart Data Export',
      us: 'Included',
      others: 'Not Available',
      usHighlight: true
    },
    {
      feature: 'Pricing',
      us: '₹490 - ₹900',
      others: '₹2000+',
      usHighlight: true
    }
  ]

  return (
    <section className="py-8 sm:py-16 lg:py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose Only4Premiums?
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 mx-auto px-2">
            Compare our premium TradingView service with others and see the difference in value, support, and features.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-gray-50 border-b border-gray-200 p-3 sm:p-6 min-w-[320px]">
            <div className="text-xs sm:text-base font-semibold text-gray-700">
              Features
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center px-2 sm:px-4 py-1 sm:py-2 bg-orange-500 text-white rounded-md sm:rounded-lg text-xs sm:text-base font-bold">
                Only4Premiums
              </div>
            </div>
            <div className="text-center text-xs sm:text-base font-semibold text-gray-700">
              Others
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200 min-w-[320px]">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors"
              >
                {/* Feature Name */}
                <div className="flex items-center">
                  <span className="text-xs sm:text-base font-medium text-gray-900">
                    {item.feature}
                  </span>
                </div>

                {/* Our Service */}
                <div className="flex items-center justify-center">
                  <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 stroke-3" />
                  </div>
                </div>

                {/* Others */}
                <div className="flex items-center justify-center">
                  <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 stroke-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Details */}
        <div className="mt-6 sm:hidden bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-bold text-gray-900 mb-4 text-center">What You Get</h3>
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <div key={index} className="bg-white rounded-md p-3 border border-gray-200">
                <div className="font-semibold text-gray-900 mb-2 text-sm">{item.feature}</div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span className="text-gray-700"><span className="font-semibold">Only4Premiums:</span> {item.us}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold shrink-0">✗</span>
                    <span className="text-gray-500"><span className="font-semibold">Others:</span> {item.others}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-10 text-center px-2">
          <p className="text-base sm:text-xl font-semibold text-gray-900 mb-4">
            Get Premium Features at Unbeatable Prices
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-base text-gray-600">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 stroke-3" />
              </div>
              <span>100% Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-base text-gray-600">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 stroke-3" />
              </div>
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-base text-gray-600">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 stroke-3" />
              </div>
              <span>Lifetime Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
