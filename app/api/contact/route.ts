import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
            New Message from All Nepali News Contact Form
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151; width: 100px;">Name:</td>
              <td style="padding: 8px; color: #111827;">${name}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px; color: #111827;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Message:</p>
            <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb; color: #111827; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            This message was sent via the contact form on allnepalinews.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }
}
