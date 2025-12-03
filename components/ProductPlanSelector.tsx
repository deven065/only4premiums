'use client'

import { useEffect, useState } from 'react'
import CheckoutModal from './CheckoutModal'

interface ProductPlan {
  name: string
  price: number
  originalPrice: number
  features: string[]
}

interface ProductPlanSelectorProps {
  plans: ProductPlan[]
  productName: string
}

export default function ProductPlanSelector({ plans, productName }: ProductPlanSelectorProps) {
  // Check if this is LuxAlgo or FxReplay product
  const isLuxAlgo = productName.toLowerCase().includes('luxalgo')
  const isFxReplay = productName.toLowerCase().includes('fxreplay')
  
  const [selectedPlan, setSelectedPlan] = useState(isLuxAlgo ? 'Premium' : (plans[0]?.name || ''))
  const [selectedValidity, setSelectedValidity] = useState('')
  const [showPayment, setShowPayment] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Notify page when selection is ready
  useEffect(() => {
    const ready = Boolean(selectedPlan) && Boolean(selectedValidity)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('buy-ready', { detail: ready }))
    }
  }, [selectedPlan, selectedValidity])

  // Calculate savings based on selected plan and validity
  const calculateSavings = () => {
    if (!selectedPlan || !selectedValidity) return null

    if (isLuxAlgo) {
      // For LuxAlgo, find the plan that matches both validity and plan type
      const validityKey = selectedValidity === '1-month' ? '1 Month' : 'Lifetime'
      const planKey = selectedPlan.toLowerCase().includes('ultimate') ? 'Ultimate' : 'Premium'
      const matchingPlan = plans.find(p => p.name.includes(validityKey) && p.name.includes(planKey))
      
      if (!matchingPlan) return null

      const savings = matchingPlan.originalPrice - matchingPlan.price
      const savingsPercentage = Math.round((savings / matchingPlan.originalPrice) * 100)

      return {
        totalPrice: matchingPlan.price,
        totalOriginalPrice: matchingPlan.originalPrice,
        savings,
        savingsPercentage,
        validityLabel: validityKey
      }
    } else if (isFxReplay) {
      // For FxReplay, find the plan that matches the validity
      const validityKey = selectedValidity === '5-days' ? '5 Days' : '1 Month'
      const matchingPlan = plans.find(p => p.name === validityKey)
      
      if (!matchingPlan) return null

      const savings = matchingPlan.originalPrice - matchingPlan.price
      const savingsPercentage = Math.round((savings / matchingPlan.originalPrice) * 100)

      return {
        totalPrice: matchingPlan.price,
        totalOriginalPrice: matchingPlan.originalPrice,
        savings,
        savingsPercentage,
        validityLabel: validityKey
      }
    } else {
      // For other products (TradingView)
      const plan = plans.find(p => p.name === selectedPlan)
      if (!plan) return null

      const validityMultiplier: { [key: string]: number } = {
        '1-month': 1,
        '3-months': 3,
        '6-months': 6,
        '1-year': 12
      }

      const multiplier = validityMultiplier[selectedValidity] || 1
      const totalPrice = plan.price * multiplier
      const totalOriginalPrice = plan.originalPrice * multiplier
      const savings = totalOriginalPrice - totalPrice
      const savingsPercentage = Math.round((savings / totalOriginalPrice) * 100)

      return {
        totalPrice,
        totalOriginalPrice,
        savings,
        savingsPercentage,
        validityLabel: selectedValidity.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
      }
    }
  }

  const savingsData = calculateSavings()

  const handleBuyNow = () => {
    if (selectedPlan && selectedValidity) {
      setIsModalOpen(true)
    } else {
      alert('Please select both plan and validity')
    }
  }

  // Listen for global trigger from floating button
  useEffect(() => {
    const onTrigger = () => {
      handleBuyNow()
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('trigger-buy-now', onTrigger as EventListener)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('trigger-buy-now', onTrigger as EventListener)
      }
    }
  }, [selectedPlan, selectedValidity])

  const handlePayment = () => {
    if (!selectedPayment) {
      alert('Please select a payment method')
      return
    }
    
    // Redirect to WhatsApp with order details
    const message = `Hi! I want to buy:\nPlan: ${selectedPlan}\nValidity: ${selectedValidity}\nPayment Method: ${selectedPayment}`
    const whatsappUrl = `https://wa.me/your_number?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="mb-8 product-plan-selector">
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-bold mb-6 transition-all uppercase text-sm">
        Click Here : How to Buy and Use it ?
      </button>

      {!isFxReplay && (
        <>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Select Plan</h2>
          <div className={`grid grid-cols-1 ${isLuxAlgo ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-3 mb-6`}>
            {isLuxAlgo ? (
              // For LuxAlgo, show only Premium and Ultimate options
              ['Premium', 'Ultimate'].map((planType, idx) => {
                const isSelected = selectedPlan === planType
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedPlan(planType)}
                    className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                      isSelected
                        ? 'border-orange-500 bg-orange-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    <div className="font-bold text-gray-900 text-sm sm:text-base mb-1">{planType}</div>
                    <div className="text-xs text-gray-600">Select validity to see price</div>
                  </button>
                )
              })
            ) : (
              // For other products, show all plans
              plans.map((plan, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                    selectedPlan === plan.name
                      ? 'border-orange-500 bg-orange-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                  }`}
                >
                  {selectedPlan === plan.name && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="font-bold text-gray-900 text-sm sm:text-base mb-1">{plan.name}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">₹{plan.price}</span>
                    {plan.originalPrice > plan.price && (
                      <span className="text-sm text-gray-400 line-through">₹{plan.originalPrice}</span>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </>
      )}

      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Select Validity</h2>
      <select 
        value={selectedValidity}
        onChange={(e) => setSelectedValidity(e.target.value)}
        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-700 font-medium focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
      >
        <option value="">Choose validity period</option>
        {isLuxAlgo ? (
          <>
            <option value="1-month">1 Month</option>
            <option value="lifetime">Lifetime</option>
          </>
        ) : isFxReplay ? (
          <>
            <option value="5-days">5 Days</option>
            <option value="1-month">1 Month</option>
          </>
        ) : (
          <>
            <option value="1-month">1 Month</option>
            <option value="3-months">3 Months</option>
            <option value="6-months">6 Months</option>
            <option value="1-year">1 Year</option>
          </>
        )}
      </select>

      {/* Savings Display */}
      {savingsData && (
        <div className="border border-gray-300 rounded-lg p-4 mb-6 bg-white">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <div>
              <p className="text-xs text-gray-500 mb-1">Total for {savingsData.validityLabel}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">₹{savingsData.totalPrice}</span>
                <span className="text-sm text-gray-400 line-through">₹{savingsData.totalOriginalPrice}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Save ₹{savingsData.savings}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {savingsData.savingsPercentage}% discount applied
          </p>
        </div>
      )}

      {!showPayment ? (
        <button 
          onClick={handleBuyNow}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg transition-all"
        >
          Buy Now
        </button>
      ) : (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Select Payment Method</h2>
          
          <button
            onClick={() => setSelectedPayment('UPI')}
            className={`w-full py-4 px-6 rounded-lg border-2 transition-all flex items-center justify-between ${
              selectedPayment === 'UPI' 
                ? 'border-orange-500 bg-orange-50' 
                : 'border-gray-300 hover:border-orange-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">UPI Payment</p>
                <p className="text-sm text-gray-600">Pay using UPI, PhonePe, GPay, Paytm</p>
              </div>
            </div>
            {selectedPayment === 'UPI' && (
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>

          <button
            onClick={() => setSelectedPayment('Crypto')}
            className={`w-full py-4 px-6 rounded-lg border-2 transition-all flex items-center justify-between ${
              selectedPayment === 'Crypto' 
                ? 'border-orange-500 bg-orange-50' 
                : 'border-gray-300 hover:border-orange-400'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Cryptocurrency</p>
                <p className="text-sm text-gray-600">Pay using Bitcoin, USDT, or other crypto</p>
              </div>
            </div>
            {selectedPayment === 'Crypto' && (
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>

          <button 
            onClick={handlePayment}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-all uppercase flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Proceed to WhatsApp</span>
          </button>

          <button 
            onClick={() => {
              setShowPayment(false)
              setSelectedPayment('')
            }}
            className="w-full text-gray-600 hover:text-gray-900 py-2 font-medium transition-colors"
          >
            ← Back to Selection
          </button>
        </div>
      )}

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
        plan={selectedPlan}
        validity={selectedValidity?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
        price={savingsData?.totalPrice || 0}
      />
    </div>
  )
}
