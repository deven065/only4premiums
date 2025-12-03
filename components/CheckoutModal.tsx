'use client'

import { useState, useEffect } from 'react'
import { X, Lock } from 'lucide-react'
import Image from 'next/image'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  plan?: string
  validity?: string
  price: number
  productImage?: string
}

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  productName, 
  plan, 
  validity, 
  price,
  productImage 
}: CheckoutModalProps) {
  const [step, setStep] = useState<'information' | 'payment' | 'finish'>('information')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'crypto' | null>(null)
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    country: '',
    state: '',
    whatsappNumber: ''
  })
  

  // No login/signup: do not manage user session

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'Germany', 'France', 'Italy', 'Spain', 'Netherlands',
    'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Finland',
    'Belgium', 'Austria', 'Ireland', 'Portugal', 'Greece',
    'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Bulgaria',
    'Japan', 'South Korea', 'Singapore', 'Malaysia', 'Thailand',
    'Indonesia', 'Philippines', 'Vietnam', 'Hong Kong', 'Taiwan',
    'China', 'Brazil', 'Argentina', 'Mexico', 'Chile',
    'Colombia', 'Peru', 'United Arab Emirates', 'Saudi Arabia', 'Qatar',
    'Kuwait', 'Israel', 'Turkey', 'Egypt', 'South Africa',
    'Nigeria', 'Kenya', 'New Zealand', 'Russia', 'Ukraine'
  ].sort()

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir',
    'Ladakh', 'Puducherry', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 
    'Lakshadweep', 'Andaman and Nicobar Islands'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Reset state when country changes
    if (name === 'country' && value !== 'India') {
      setFormData({
        ...formData,
        [name]: value,
        state: ''
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    if (!formData.email || !formData.fullName || !formData.country || !formData.whatsappNumber) {
      alert('Please fill in all required fields')
      return
    }
    
    // Validate state for India
    if (formData.country === 'India' && !formData.state) {
      alert('Please select a state')
      return
    }

    setIsSubmitting(true)

    try {
      // Send lead information to website owner
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productName,
          plan,
          validity,
          price,
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setStep('payment')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error submitting lead:', error)
      alert('There was an error submitting your information. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFinish = () => {
    const paymentMethodText = paymentMethod === 'upi' ? 'UPI Payment' : 'Crypto Payment'
    const message = `🛒 *New Order from Only4Premiums*\n\n` +
      `👤 *Customer Details:*\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Country: ${formData.country}\n` +
      `State: ${formData.state}\n` +
      `WhatsApp: ${formData.whatsappNumber}\n\n` +
      `📦 *Product Details:*\n` +
      `Product: ${productName}\n` +
      (plan ? `Plan: ${plan}\n` : '') +
      (validity ? `Validity: ${validity}\n` : '') +
      `💰 Price: ₹${price}\n` +
      `💳 Payment Method: ${paymentMethodText}\n\n` +
      `I have completed the payment and want to confirm my purchase!`

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  // No authentication flow: login/signup removed
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeInUp overflow-hidden">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] overflow-y-auto scrollbar-smooth overscroll-contain">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b sm:border-b-0 border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/only4premiums.png" 
                  alt="Only4Premiums Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-gray-900">Only4Premiums</span>
            </div>
            
            <div className="hidden sm:flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${step === 'information' ? 'text-orange-600' : 'text-gray-400'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  step === 'information' ? 'border-orange-600 bg-orange-600 text-white' : 'border-gray-300'
                }`}>
                  {step !== 'information' ? '✓' : '1'}
                </div>
                <span className="text-sm font-medium">Information</span>
              </div>
              
              <div className={`flex items-center space-x-2 ${step === 'payment' ? 'text-orange-600' : 'text-gray-400'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  step === 'payment' ? 'border-orange-600 bg-orange-600 text-white' : 'border-gray-300'
                }`}>
                  {step === 'finish' ? '✓' : '2'}
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>

              <div className={`flex items-center space-x-2 ${step === 'finish' ? 'text-orange-600' : 'text-gray-400'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  step === 'finish' ? 'border-orange-600 bg-orange-600 text-white' : 'border-gray-300'
                }`}>
                  3
                </div>
                <span className="text-sm font-medium">Finish</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-blue-600">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">Secured And Encrypted</span>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {step === 'information' ? (
          <form onSubmit={handleSubmit} className="p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Success Message */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                  <div className="shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-green-800">
                    <strong>&quot;{productName}&quot;</strong> has been added to your cart.
                    <button type="button" className="ml-2 text-green-600 hover:text-green-700 font-medium underline">
                      View cart
                    </button>
                  </p>
                </div>

                {/* Customer Information */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-2xl font-bold text-gray-900">Customer information</h2>
                    
                  </div>
                  
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Billing Details */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Billing details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                          Country / Region <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white text-gray-900"
                        >
                          <option value="" className="text-gray-400">Select a country</option>
                          {countries.map((country) => (
                            <option key={country} value={country} className="text-gray-900">{country}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                          State / Province {formData.country === 'India' && <span className="text-red-500">*</span>}
                        </label>
                        {formData.country === 'India' ? (
                          <select
                            id="state"
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white text-gray-900"
                          >
                            <option value="" className="text-gray-400">Select a state</option>
                            {indianStates.map((state) => (
                              <option key={state} value={state} className="text-gray-900">{state}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                            placeholder={formData.country ? "Enter your state/province (optional)" : "Select country first"}
                            disabled={!formData.country}
                          />
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="whatsappNumber"
                        name="whatsappNumber"
                        required
                        value={formData.whatsappNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                        placeholder="Enter your WhatsApp number"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Continue to Payment'}
                </button>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Your order</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-600">Product</span>
                      <span className="font-medium text-gray-600">Subtotal</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0 relative overflow-hidden">
                              {productImage && (
                                <Image 
                                  src={productImage} 
                                  alt={productName}
                                  fill
                                  className="object-cover"
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 text-sm">{productName}</p>
                              <p className="text-xs text-gray-500">× 1</p>
                            </div>
                          </div>
                          {plan && (
                            <div className="ml-14 space-y-1">
                              <p className="text-xs text-gray-600">
                                <span className="font-medium">Select Plan:</span> {plan}
                              </p>
                              {validity && (
                                <p className="text-xs text-gray-600">
                                  <span className="font-medium">Select Validity:</span> {validity}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                        <span className="font-bold text-gray-900">₹{price.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium text-gray-900">₹{price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total</span>
                        <span className="font-bold text-xl text-gray-900">₹{price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : step === 'payment' ? (
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 text-center">Choose Payment Method</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">Select your preferred payment method to complete your purchase</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-3 sm:mb-6">
                {/* UPI Payment Option */}
                <div 
                  onClick={() => setPaymentMethod('upi')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 sm:p-6 transition-all hover:shadow-xl ${
                    paymentMethod === 'upi' 
                      ? 'border-orange-500 bg-orange-50 shadow-lg' 
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-xl font-bold text-gray-900">UPI Payment</h3>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'upi' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
                    }`}>
                      {paymentMethod === 'upi' && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Pay directly via UPI - Google Pay, PhonePe, Paytm, or any UPI app
                  </p>
                  <div className="flex items-center space-x-2 text-green-600 text-sm font-medium">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant Payment • 0% Fee • Best for India</span>
                  </div>
                </div>

                {/* Crypto Payment Option */}
                <div 
                  onClick={() => setPaymentMethod('crypto')}
                  className={`cursor-pointer border-2 rounded-2xl p-4 sm:p-6 transition-all hover:shadow-xl ${
                    paymentMethod === 'crypto' 
                      ? 'border-orange-500 bg-orange-50 shadow-lg' 
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-xl font-bold text-gray-900">USDT (BEP-20)</h3>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'crypto' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
                    }`}>
                      {paymentMethod === 'crypto' && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Pay with USDT on Binance Smart Chain (BEP-20 network)
                  </p>
                  <div className="flex items-center space-x-2 text-blue-600 text-sm font-medium">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Stable • Low Fees • Best for International</span>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              {paymentMethod && (
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-200 rounded-2xl p-4 sm:p-8 mb-4 sm:mb-6 animate-fadeInUp">
                  {paymentMethod === 'upi' ? (
                    <div className="text-center">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-4">Scan QR Code or Use UPI ID</h3>
                      <div className="bg-white p-3 sm:p-6 rounded-2xl shadow-lg mb-4 sm:mb-6 max-w-sm mx-auto">
                        <div className="w-full max-w-[220px] sm:max-w-[280px] aspect-square bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                          <Image
                            src="/Sandeep-UPI-QR.jpeg"
                            alt="UPI QR Code"
                            width={280}
                            height={280}
                            className="rounded-xl object-contain w-full h-full"
                          />
                        </div>
                        <p className="text-sm font-bold text-gray-900 mb-3">Amount: ₹{price}</p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Or pay directly to UPI ID:</p>
                          <p className="font-mono text-sm font-bold text-blue-900 break-all" id="upi-id">firdos829@ptyes</p>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText('firdos829@ptyes')
                              alert('UPI ID copied to clipboard!')
                            }}
                            className="mt-2 text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center justify-center space-x-1 mx-auto"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>Copy UPI ID</span>
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2 sm:space-y-3 text-left max-w-md mx-auto">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">1</div>
                          <p className="text-xs sm:text-sm text-gray-700">Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">2</div>
                          <p className="text-xs sm:text-sm text-gray-700">Scan the QR code OR enter UPI ID: <strong>firdos829@ptyes</strong></p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">3</div>
                          <p className="text-xs sm:text-sm text-gray-700">Pay ₹{price} and complete the transaction</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">4</div>
                          <p className="text-xs sm:text-sm text-gray-700">Click &quot;Payment Complete&quot; button below</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-4">Pay with USDT (BEP-20)</h3>
                      <div className="bg-white p-3 sm:p-6 rounded-2xl shadow-lg mb-4 sm:mb-6 max-w-sm mx-auto">
                        <div className="w-full max-w-[220px] sm:max-w-[280px] aspect-square bg-white rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <Image
                            src="/Sandeep-Binance-QR.jpeg"
                            alt="USDT BEP-20 QR Code"
                            width={280}
                            height={280}
                            className="rounded-xl object-contain w-full h-full"
                          />
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                          <p className="text-sm font-bold text-blue-900">Network: BEP-20 (Binance Smart Chain)</p>
                          <p className="text-xs text-blue-700 mt-1">⚠️ Only send USDT on BEP-20 network</p>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 font-medium">Or manually copy address:</p>
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 border-2 border-gray-200">
                          <p className="font-mono text-xs text-gray-900 break-all" id="crypto-address">
                            {process.env.NEXT_PUBLIC_CRYPTO_ADDRESS || '0xA1426458889A2d7aCf9B7656EeE4c13C37AaED36'}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            const address = document.getElementById('crypto-address')?.innerText || ''
                            navigator.clipboard.writeText(address)
                            alert('Address copied to clipboard!')
                          }}
                          className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center justify-center space-x-2 mx-auto"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span>Copy Address</span>
                        </button>
                      </div>
                      <div className="space-y-2 sm:space-y-3 text-left max-w-md mx-auto">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 sm:p-3 mb-2 sm:mb-4">
                          <p className="text-xs sm:text-sm text-yellow-800">
                            <strong>Amount:</strong> ₹{price} (Convert to USDT equivalent)
                          </p>
                          <p className="text-xs text-yellow-700 mt-1">Example: ₹999 ≈ 11.75 USDT</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">1</div>
                          <p className="text-xs sm:text-sm text-gray-700">Open Binance app and scan the QR code OR copy the address</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">2</div>
                          <p className="text-xs sm:text-sm text-gray-700"><strong>Select USDT and BEP-20 network</strong> (Binance Smart Chain)</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">3</div>
                          <p className="text-xs sm:text-sm text-gray-700">Send the USDT amount and complete the transaction</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm">4</div>
                          <p className="text-xs sm:text-sm text-gray-700">Click &quot;Payment Complete&quot; button below</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sticky bottom-0 bg-white pt-3 sm:pt-4 pb-safe sm:pb-0 sm:static shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:shadow-none -mx-4 px-4 sm:mx-0 sm:px-0">
                <button
                  onClick={() => setStep('information')}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-50 transition-all text-sm sm:text-base"
                >
                  ← Back
                </button>
                <button
                  onClick={() => paymentMethod && setStep('finish')}
                  disabled={!paymentMethod}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 sm:py-4 rounded-lg font-bold hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                >
                  Payment Complete →
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 lg:p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Complete!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for your payment! Please confirm your purchase on WhatsApp to get instant access.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-bold text-gray-900 mb-2">Final Step:</h3>
                <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Click the WhatsApp button below</li>
                  <li>Send us the payment confirmation message</li>
                  <li>Receive instant access to <strong>{productName}</strong></li>
                </ol>
              </div>

              <button
                onClick={handleFinish}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center space-x-2 mb-4"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Continue to WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      
    </div>
  )
}
