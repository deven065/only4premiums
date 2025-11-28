'use client'

import { useState } from 'react'

interface ProductPlan {
  name: string
  price: number
  originalPrice: number
  features: string[]
}

interface ProductPlanSelectorProps {
  plans: ProductPlan[]
}

export default function ProductPlanSelector({ plans }: ProductPlanSelectorProps) {
  const [selectedPlan, setSelectedPlan] = useState('')
  const [selectedValidity, setSelectedValidity] = useState('')

  return (
    <div className="mb-8">
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-bold mb-6 transition-all uppercase text-sm">
        Click Here : How to Buy and Use it ?
      </button>

      <h2 className="text-xl font-bold text-gray-900 mb-4">Select Plan</h2>
      <select 
        value={selectedPlan}
        onChange={(e) => setSelectedPlan(e.target.value)}
        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 text-gray-700 focus:border-purple-400 focus:outline-none"
      >
        <option value="">Choose an option</option>
        {plans.map((plan, idx) => (
          <option key={idx} value={plan.name}>
            {plan.name} - ₹{plan.price}
          </option>
        ))}
      </select>

      <h2 className="text-xl font-bold text-gray-900 mb-4">Select Validity</h2>
      <select 
        value={selectedValidity}
        onChange={(e) => setSelectedValidity(e.target.value)}
        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-6 text-gray-700 focus:border-purple-400 focus:outline-none"
      >
        <option value="">Choose an option</option>
        <option value="1-month">1 Month</option>
        <option value="3-months">3 Months</option>
        <option value="6-months">6 Months</option>
        <option value="1-year">1 Year</option>
      </select>

      <button className="w-full bg-pink-300 hover:bg-pink-400 text-white py-4 rounded-lg font-bold text-lg transition-all uppercase">
        Buy Now
      </button>
    </div>
  )
}
