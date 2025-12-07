'use client'

import { useEffect, useRef, useState } from 'react'

interface PaymentFlowProps {
  productName: string
  selectedPlan: string
  selectedValidity: string
  totalPrice: number
  whatsappNumber?: string
}

export default function PaymentFlow({ productName, selectedPlan, selectedValidity, totalPrice, whatsappNumber = 'your_number' }: PaymentFlowProps) {
  const whatsappNumberToUse = whatsappNumber === 'your_number'
    ? (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210')
    : whatsappNumber
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(2)
  const [selectedPayment, setSelectedPayment] = useState('')
  const [paymentProof, setPaymentProof] = useState<string | null>(null)
  const [verified, setVerified] = useState(false)
  const finishButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // ensure visible on mobile
    if (finishButtonRef.current) {
      finishButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [currentStep])

  const onSelectPayment = (method: string) => {
    setSelectedPayment(method)
    setCurrentStep(3)
    setTimeout(() => {
      const el = document.getElementById('upload-proof-area')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleProofUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (!file) {
      setPaymentProof(null)
      setVerified(false)
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setPaymentProof(reader.result as string)
      setVerified(true)
      setCurrentStep(4)
      if (finishButtonRef.current) finishButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    reader.readAsDataURL(file)
  }

  const handleFinish = () => {
    if (!verified) return
    const message = `Hi! I want to buy: ${productName}\nPlan: ${selectedPlan}\nValidity: ${selectedValidity}\nPayment Method: ${selectedPayment}\nTotal: ₹${totalPrice}\nProof: uploaded screenshot`
    const url = `https://wa.me/${whatsappNumberToUse}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="space-y-4">
      {/* Stepper */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
        <div className={`px-2 py-1 rounded ${true ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>1. Information</div>
        <span>→</span>
        <div className={`px-2 py-1 rounded ${currentStep >= 2 ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>2. Payment</div>
        <span>→</span>
        <div className={`px-2 py-1 rounded ${currentStep >= 3 ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>3. Upload Screenshot</div>
        <span>→</span>
        <div className={`px-2 py-1 rounded ${currentStep >= 4 ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>4. Finish</div>
      </div>

      {/* Payment Methods */}
      <h2 className="text-xl font-bold text-gray-900">Select Payment Method</h2>
      <div className="space-y-3">
        <button
          onClick={() => onSelectPayment('UPI')}
          className={`w-full py-4 px-6 rounded-lg border-2 transition-all flex items-center justify-between ${selectedPayment === 'UPI' ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-300'}`}
        >
          <span className="font-bold text-gray-900">UPI Payment</span>
          {selectedPayment === 'UPI' && (<span className="text-orange-600 font-bold">Selected</span>)}
        </button>

        <button
          onClick={() => onSelectPayment('Crypto')}
          className={`w-full py-4 px-6 rounded-lg border-2 transition-all flex items-center justify-between ${selectedPayment === 'Crypto' ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-400'}`}
        >
          <span className="font-bold text-gray-900">Cryptocurrency</span>
          {selectedPayment === 'Crypto' && (<span className="text-orange-600 font-bold">Selected</span>)}
        </button>
      </div>

      {/* Upload Proof */}
      <div id="upload-proof-area" className="border-2 border-gray-300 rounded-lg p-4">
        <h3 className="text-base font-bold text-gray-900 mb-2">Upload Payment Screenshot</h3>
        <p className="text-xs text-gray-600 mb-3">Upload the payment confirmation screenshot. We verify it instantly.</p>
        <input type="file" accept="image/*" onChange={handleProofUpload} className="block w-full text-sm text-gray-700" />
        {paymentProof && (
          <div className="mt-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={paymentProof} alt="Payment proof" className="h-24 rounded-md border border-gray-200 object-cover" />
          </div>
        )}
        <div className="mt-2 text-xs text-gray-600 flex items-center gap-2">
          <span className={`inline-block w-2 h-2 rounded-full ${verified ? 'bg-green-600' : 'bg-gray-300'}`}></span>
          <span>{verified ? 'Verified' : 'Awaiting upload'}</span>
        </div>
      </div>

      {/* Finish */}
      <button
        ref={finishButtonRef}
        onClick={handleFinish}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all uppercase ${verified ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        disabled={!verified}
      >
        Continue to WhatsApp
      </button>
    </div>
  )
}
