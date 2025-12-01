interface LeadEmailTemplateProps {
  fullName: string
  email: string
  whatsappNumber: string
  state: string
  country: string
  productName: string
  plan?: string
  validity?: string
  price: number
  timestamp: string
}

export function LeadEmailTemplate({
  fullName,
  email,
  whatsappNumber,
  state,
  country,
  productName,
  plan,
  validity,
  price,
  timestamp
}: LeadEmailTemplateProps) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead - ${fullName}</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .badge {
            display: inline-block;
            background-color: #10b981;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            margin-top: 10px;
          }
          .section {
            margin-bottom: 25px;
          }
          .section-title {
            font-size: 18px;
            font-weight: bold;
            color: #f97316;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #f97316;
          }
          .info-row {
            display: flex;
            padding: 12px;
            background-color: #f9fafb;
            margin-bottom: 8px;
            border-radius: 6px;
          }
          .info-label {
            font-weight: 600;
            color: #6b7280;
            min-width: 140px;
          }
          .info-value {
            color: #111827;
            flex: 1;
          }
          .price-highlight {
            background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            font-size: 28px;
            font-weight: bold;
            margin: 20px 0;
          }
          .whatsapp-button {
            display: inline-block;
            background-color: #25D366;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 20px;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
          }
          .timestamp {
            background-color: #fef3c7;
            padding: 10px;
            border-radius: 6px;
            text-align: center;
            font-size: 14px;
            color: #92400e;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Lead Received!</h1>
            <span class="badge">HOT LEAD</span>
          </div>

          <div class="section">
            <div class="section-title">👤 Customer Information</div>
            <div class="info-row">
              <span class="info-label">Full Name:</span>
              <span class="info-value">${fullName}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="info-row">
              <span class="info-label">WhatsApp:</span>
              <span class="info-value"><a href="https://wa.me/${whatsappNumber}">${whatsappNumber}</a></span>
            </div>
            <div class="info-row">
              <span class="info-label">Location:</span>
              <span class="info-value">${state}, ${country}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">🛍️ Product Details</div>
            <div class="info-row">
              <span class="info-label">Product:</span>
              <span class="info-value">${productName}</span>
            </div>
            ${plan ? `
            <div class="info-row">
              <span class="info-label">Plan:</span>
              <span class="info-value">${plan}</span>
            </div>
            ` : ''}
            ${validity ? `
            <div class="info-row">
              <span class="info-label">Validity:</span>
              <span class="info-value">${validity}</span>
            </div>
            ` : ''}
          </div>

          <div class="price-highlight">
            ₹${price.toFixed(2)}
          </div>

          <div class="timestamp">
            📅 Lead received on: ${new Date(timestamp).toLocaleString('en-IN', {
              dateStyle: 'full',
              timeStyle: 'short',
              timeZone: 'Asia/Kolkata'
            })}
          </div>

          <div style="text-align: center;">
            <a href="https://wa.me/${whatsappNumber}" class="whatsapp-button">
              💬 Contact on WhatsApp
            </a>
          </div>

          <div class="footer">
            <p><strong>Only4Premiums</strong> - Lead Management System</p>
            <p>This is an automated notification. Please follow up with the customer as soon as possible.</p>
          </div>
        </div>
      </body>
    </html>
  `
}
