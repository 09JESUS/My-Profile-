import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

// Handle POST requests (sending email)
export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    )
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.RECEIVING_EMAIL,
      subject: `[Portfolio Contact] ${subject}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    })

    return NextResponse.json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

// Optional GET handler to avoid 405 in browser
export async function GET() {
  return NextResponse.json(
    { message: 'This endpoint only accepts POST requests' },
    { status: 200 }
  )
}
