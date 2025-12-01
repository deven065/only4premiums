# Checkout Form Setup Guide

This guide will help you set up the checkout form with email notifications.

## Features Implemented ✅

1. **Checkout Modal Form** with fields:
   - Email Address
   - Full Name
   - Country/Region (defaults to India)
   - State (all Indian states)
   - WhatsApp Number

2. **Email Notifications** to website owner with:
   - Customer information
   - Product details (name, plan, validity, price)
   - Timestamp
   - Direct WhatsApp contact link

3. **Two-step Process**:
   - Step 1: Information collection
   - Step 2: Finish & WhatsApp redirect

4. **UI Matching**: Form matches the design from your screenshot

## Setup Instructions

### 1. Install Dependencies (Choose ONE method)

#### Option A: Using Resend (Recommended for Next.js)
```bash
npm install resend
```

#### Option B: Using Nodemailer (Alternative)
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# For Resend (Option A)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
EMAIL_FROM=leads@only4premiums.com
OWNER_EMAIL=your-email@gmail.com

# For Nodemailer (Option B)
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASSWORD=your-app-specific-password

# WhatsApp Configuration (Required)
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

### 3. Email Service Setup

#### Option A: Resend (Recommended)

1. Go to [https://resend.com](https://resend.com)
2. Sign up and verify your account
3. Add and verify your domain (or use their test domain for development)
4. Get your API key from: [https://resend.com/api-keys](https://resend.com/api-keys)
5. Add the API key to `.env.local`

**Advantages:**
- Built for Next.js
- Simple setup
- Free tier: 3,000 emails/month
- Better deliverability

#### Option B: Nodemailer with Gmail

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the generated password
3. Update the API route to use Nodemailer (uncomment the Nodemailer section)

**Note:** For Gmail, you may need to allow "Less secure app access" or use App Passwords.

### 4. Update WhatsApp Number

Replace the WhatsApp number in `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```
Format: Country code + number (no + symbol)

### 5. Test the Implementation

1. Start your development server:
```bash
npm run dev
```

2. Visit a product page (e.g., `/products/tradingview-premium`)
3. Click "Buy Now"
4. Fill out the form
5. Submit and check:
   - Your owner email for the lead notification
   - The WhatsApp redirect functionality

## Files Created/Modified

### New Files:
- `components/CheckoutModal.tsx` - Main checkout form modal
- `app/api/submit-lead/route.ts` - API endpoint for form submission
- `lib/email-template.tsx` - Beautiful email template
- `.env.local.example` - Environment variables example

### Modified Files:
- `components/ProductSimpleBuy.tsx` - Added modal trigger
- `components/ProductPlanSelector.tsx` - Added modal trigger
- `app/products/[id]/page.tsx` - Passed productName prop

## Email Template Features

The email sent to the website owner includes:
- 🎉 Eye-catching header with "HOT LEAD" badge
- 👤 Complete customer information
- 🛍️ Product details with plan and validity
- 💰 Price highlight
- 📅 Timestamp in Indian timezone
- 💬 Direct WhatsApp contact button
- Beautiful responsive design

## Testing Tips

### Development Testing:
1. Use Resend's test mode for development
2. Check console logs for debugging
3. Test with different products and plans

### Production Checklist:
- [ ] Verify domain in Resend/email service
- [ ] Update OWNER_EMAIL to actual email
- [ ] Update NEXT_PUBLIC_WHATSAPP_NUMBER
- [ ] Test email delivery
- [ ] Test WhatsApp redirect
- [ ] Check mobile responsiveness
- [ ] Verify all form validations

## Troubleshooting

### Email not sending:
1. Check API key is correct
2. Verify EMAIL_FROM domain is verified in Resend
3. Check console for error messages
4. Ensure environment variables are loaded (restart dev server)

### WhatsApp not opening:
1. Verify NEXT_PUBLIC_WHATSAPP_NUMBER format (no + symbol)
2. Check browser allows window.open()
3. Test on mobile device

### Form not appearing:
1. Check browser console for errors
2. Verify all imports are correct
3. Clear browser cache

## Optional Enhancements

### Save leads to database:
Add database integration in `app/api/submit-lead/route.ts`:

```typescript
// Example with Prisma
await prisma.lead.create({
  data: {
    email,
    fullName,
    country,
    state,
    whatsappNumber,
    productName,
    plan,
    validity,
    price,
    timestamp: new Date(timestamp)
  }
})
```

### Add SMS notifications:
Use services like Twilio to send SMS alerts

### Add Slack/Discord webhooks:
Get instant notifications in your workspace

### Add analytics:
Track conversion rates with Google Analytics or similar

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables
3. Ensure dependencies are installed
4. Restart the development server

## Security Notes

- Never commit `.env.local` to version control
- Keep API keys secure
- Use HTTPS in production
- Validate and sanitize all form inputs
- Implement rate limiting for the API endpoint

---

**Need help?** Check the implementation in the files or contact support.
