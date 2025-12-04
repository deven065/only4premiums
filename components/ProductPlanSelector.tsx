'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import PaymentFlow from './PaymentFlow'

interface ProductPlan {
  name: string
  price: number
  originalPrice: number
  features: string[]
}

interface ProductPlanSelectorProps {
  plans: ProductPlan[]
  productName: string
  productImage?: string
}

export default function ProductPlanSelector({ plans, productName, productImage }: ProductPlanSelectorProps) {
  // Check if this is LuxAlgo or FxReplay product
  const isLuxAlgo = productName.toLowerCase().includes('luxalgo')
  const isFxReplay = productName.toLowerCase().includes('fxreplay')
  
  const [selectedPlan, setSelectedPlan] = useState(isLuxAlgo ? 'Premium' : (plans[0]?.name || ''))
  const [selectedValidity, setSelectedValidity] = useState('')
  const [showPayment, setShowPayment] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState('')
  const [paymentProof, setPaymentProof] = useState<string | null>(null)
  const whatsappButtonRef = useRef<HTMLButtonElement>(null)

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

  // Auto-scroll to WhatsApp button when payment section is shown or payment selected
  useEffect(() => {
    if (showPayment && whatsappButtonRef.current) {
      whatsappButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [showPayment])

  useEffect(() => {
    if (selectedPayment && whatsappButtonRef.current) {
      whatsappButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [selectedPayment])

  const handleProofUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (!file) {
      setPaymentProof(null)
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      const imageUrl = reader.result as string
      setPaymentProof(imageUrl)
      // After proof upload, ensure WhatsApp button comes into view
      if (whatsappButtonRef.current) {
        whatsappButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
    reader.readAsDataURL(file)
  }

  const handleBuyNow = useCallback(() => {
    if (selectedPlan && selectedValidity && savingsData) {
      const checkoutUrl = `/checkout?product=${encodeURIComponent(productName)}&plan=${encodeURIComponent(selectedPlan)}&validity=${encodeURIComponent(savingsData.validityLabel)}&price=${savingsData.totalPrice}&image=${encodeURIComponent(productImage || '')}`
      // Open checkout page
      const win = window.open(checkoutUrl, '_blank')
      // Attempt to focus new window; if same tab, scroll to payment area
      setTimeout(() => {
        if (whatsappButtonRef.current) {
          whatsappButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollBy({ top: 400, behavior: 'smooth' })
        }
      }, 200)
      if (win) {
        win.focus()
      }
    } else {
      alert('Please select both plan and validity')
    }
  }, [selectedPlan, selectedValidity, savingsData, productName, productImage])

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
  }, [selectedPlan, selectedValidity, handleBuyNow])

  const handlePayment = () => {
    // Require a payment method
    if (!selectedPayment) {
      alert('Please select a payment method')
      return
    }
    // Require payment proof before redirecting to WhatsApp
    if (!paymentProof) {
      alert('Please upload the payment screenshot to continue')
      return
    }
    
    // Redirect to WhatsApp with order details
    const message = `Hi! I want to buy:\nPlan: ${selectedPlan}\nValidity: ${selectedValidity}\nPayment Method: ${selectedPayment}\nPayment Proof: attached screenshot`
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
        <PaymentFlow
          productName={productName}
          selectedPlan={selectedPlan}
          selectedValidity={savingsData?.validityLabel || selectedValidity}
          totalPrice={savingsData?.totalPrice || 0}
        />
      )}

    </div>
  )
}
