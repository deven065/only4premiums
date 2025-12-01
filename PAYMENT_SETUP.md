# Payment Integration Setup Guide

## Overview
The checkout flow now includes two payment options:
1. **UPI Payment** - For Indian customers (0% fees, instant)
2. **Crypto Payment** - For international customers (secure, global)

## Payment Flow

### Step 1: Customer Information
- Customer fills in their details (email, name, country, state, WhatsApp)
- Must be logged in to proceed

### Step 2: Payment Method Selection
- Customer chooses between UPI or Crypto
- **UPI**: Shows QR code for scanning
- **Crypto**: Shows wallet address with copy button

### Step 3: Payment Completion
- Customer completes payment in their app
- Clicks "Payment Complete" button

### Step 4: WhatsApp Confirmation
- Redirects to WhatsApp with order details
- Customer sends payment confirmation
- Owner verifies and provides product access

## Setup Instructions

### 1. UPI QR Code Setup

**Add your UPI QR code image:**
```
public/upi-qr-code.png
```

**How to get your QR code:**
1. Open your UPI app (Google Pay, PhonePe, Paytm, etc.)
2. Go to your profile/account
3. Find "QR Code" or "My QR"
4. Download or screenshot the QR code
5. Save it as `upi-qr-code.png` in the `public/` folder

**Alternative:** Generate a UPI QR code:
- Visit: https://www.bhimupi.org.in/qr-code-generator
- Enter your UPI ID
- Download the QR code
- Place in `public/` folder

### 2. Crypto Address Setup

**Add your crypto wallet address in `.env.local`:**
```env
NEXT_PUBLIC_CRYPTO_ADDRESS=your_wallet_address_here
```

**Supported cryptocurrencies:**
- Bitcoin (BTC)
- Ethereum (ETH)
- USDT (Tether)
- Any other crypto you accept

**Recommendation:** Use USDT (TRC-20) for:
- Low transaction fees
- Stable value (pegged to USD)
- Fast transactions
- Easy conversion

**Where to get a wallet:**
- Trust Wallet (mobile)
- MetaMask (browser/mobile)
- Binance (exchange wallet)
- Coinbase (exchange wallet)

### 3. Environment Variables

Update your `.env.local` file:

```env
# WhatsApp number for order confirmations
NEXT_PUBLIC_WHATSAPP_NUMBER=919833703389

# Crypto wallet address
NEXT_PUBLIC_CRYPTO_ADDRESS=TJDENmEofdsLy2bFLtzVaofo7KDDoqt1qP
```

## Payment Method Details

### UPI Payment (India Only)
**Advantages:**
- ✅ Zero transaction fees (no Razorpay 1% cut)
- ✅ Instant payment confirmation
- ✅ Most popular in India
- ✅ Works with all UPI apps

**How it works:**
1. Customer scans QR code with UPI app
2. Enters amount (₹{price})
3. Confirms payment
4. Proceeds to WhatsApp for confirmation

### Crypto Payment (International)
**Advantages:**
- ✅ Accepts global customers
- ✅ No currency conversion issues
- ✅ Secure and private
- ✅ No bank restrictions

**How it works:**
1. Customer copies crypto address
2. Opens crypto wallet app
3. Sends equivalent crypto amount
4. Proceeds to WhatsApp with transaction ID

## Testing

### Test UPI Flow:
1. Click "Buy Now" on any product
2. Fill in customer information
3. Choose "UPI Payment"
4. Verify QR code displays correctly
5. Click "Payment Complete"
6. Verify WhatsApp message includes payment method

### Test Crypto Flow:
1. Click "Buy Now" on any product
2. Fill in customer information
3. Choose "Cryptocurrency"
4. Verify address displays and copy works
5. Click "Payment Complete"
6. Verify WhatsApp message includes payment method

## WhatsApp Message Format

After payment, customer sends this message:

```
🛒 *New Order from Only4Premiums*

👤 *Customer Details:*
Name: John Doe
Email: john@example.com
Country: India
State: Maharashtra
WhatsApp: +919876543210

📦 *Product Details:*
Product: Premium Instagram Followers
Plan: Standard
Validity: 30 days
💰 Price: ₹999
💳 Payment Method: UPI Payment

I have completed the payment and want to confirm my purchase!
```

## Handling Orders

### For UPI Payments:
1. Check your UPI app for incoming payment
2. Verify amount matches order
3. Cross-check customer name/phone
4. Confirm in WhatsApp and provide product access

### For Crypto Payments:
1. Check your wallet for incoming transaction
2. Wait for blockchain confirmation (1-3 confirmations)
3. Ask customer for transaction hash if needed
4. Confirm in WhatsApp and provide product access

## Security Best Practices

### UPI:
- Never share UPI PIN
- Enable UPI transaction alerts
- Keep QR code secure (don't share online)
- Use dedicated business account if possible

### Crypto:
- Use hardware wallet for large amounts
- Never share private keys
- Double-check address before sharing
- Enable 2FA on exchange accounts
- Consider using a new address for each customer (optional)

## Price Conversion

### For Crypto Payments:
Customers need to convert INR to crypto. Suggest these sites:
- CoinMarketCap
- CoinGecko
- Binance Convert
- Google "X INR to USDT"

**Example:**
- Product price: ₹999
- Current rate: 1 USDT = ₹85
- Customer sends: ~11.75 USDT

**Tip:** Add a note in the crypto section showing approximate amount:
```
Amount: ₹999 (~11.75 USDT at current rate)
```

## Troubleshooting

### UPI QR Code Not Showing:
1. Check if `upi-qr-code.png` exists in `public/` folder
2. Verify image format (PNG, JPG, JPEG)
3. Check file size (should be < 1MB)
4. Clear browser cache and reload

### Crypto Address Not Displaying:
1. Check `.env.local` has `NEXT_PUBLIC_CRYPTO_ADDRESS`
2. Restart dev server after adding env variable
3. Verify address format is correct

### Payment Not Received:
- **UPI**: Check spam folder, verify bank account
- **Crypto**: Check blockchain explorer with transaction hash
- **Both**: Verify customer has correct details

## Advanced Features (Optional)

### Multiple Payment Options:
Add more payment methods by:
1. Adding state: `'upi' | 'crypto' | 'razorpay' | 'paypal'`
2. Creating new payment card in UI
3. Adding payment details section

### Automated Payment Verification:
- UPI: Integrate UPI APIs (Paytm, Razorpay)
- Crypto: Use blockchain APIs (Etherscan, Blockchain.com)
- Auto-confirm payments without WhatsApp

### Payment Gateway Integration:
If you want to add Razorpay/Stripe later:
1. Keep existing UPI/Crypto for 0% fee option
2. Add gateway as third option
3. Let customer choose based on convenience

## Support

For questions or issues:
- Check CHECKOUT_SETUP.md for form details
- Check AUTH_SETUP.md for authentication details
- Review error logs in browser console
- Test in incognito mode to verify functionality

## Files Modified

- `components/CheckoutModal.tsx` - Added payment step and UI
- `.env.local` - Added crypto address
- `.env.local.example` - Updated template
- `public/upi-qr-code.png` - Add your QR code here

## Next Steps

1. ✅ Add your UPI QR code to `public/upi-qr-code.png`
2. ✅ Update crypto address in `.env.local`
3. ✅ Test both payment flows
4. ✅ Process test orders
5. ✅ Go live!
