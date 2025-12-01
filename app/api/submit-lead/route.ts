import { NextResponse } from 'next/server'
import { LeadEmailTemplate } from '@/lib/email-template'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const {
      email,
      fullName,
      country,
      state,
      whatsappNumber,
      productName,
      plan,
      validity,
      price,
      timestamp
    } = data

    // Log the lead information
    console.log('New Lead Received:', {
      email,
      fullName,
      country,
      state,
      whatsappNumber,
      productName,
      plan,
      validity,
      price,
      timestamp
    })

    // Send email notification to website owner
    // Method 1: Using Resend (Recommended for Next.js)
    if (process.env.RESEND_API_KEY) {
      try {
        // Dynamically import Resend only if API key is available
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        const emailHtml = LeadEmailTemplate({
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
        })

        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'leads@only4premiums.com',
          to: process.env.OWNER_EMAIL || 'owner@only4premiums.com',
          subject: `🎯 New Lead: ${fullName} - ${productName}`,
          html: emailHtml
        })

        console.log('Email sent successfully via Resend')
      } catch (emailError) {
        console.error('Error sending email via Resend:', emailError)
        // Continue even if email fails - don't block the user
      }
    }

    // Method 2: Using Nodemailer (Alternative)
    // Uncomment and configure if you prefer using Nodemailer with Gmail/SMTP
    /*
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      try {
        const nodemailer = await import('nodemailer')
        
        const transporter = nodemailer.createTransport({
          service: 'gmail', // or 'smtp'
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
          }
        })

        const emailHtml = LeadEmailTemplate({
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
        })

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.OWNER_EMAIL,
          subject: `🎯 New Lead: ${fullName} - ${productName}`,
          html: emailHtml
        })

        console.log('Email sent successfully via Nodemailer')
      } catch (emailError) {
        console.error('Error sending email via Nodemailer:', emailError)
      }
    }
    */

    // Optional: Save to database
    // Add your database logic here (MongoDB, PostgreSQL, Supabase, etc.)
    /*
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
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Lead information received successfully' 
    })
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process lead information' },
      { status: 500 }
    )
  }
}
