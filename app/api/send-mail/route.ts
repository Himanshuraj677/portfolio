import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_TO,
    subject: "New Contact Form Submission",
    text: message,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Error sending email" }, { status: 500 })
  }
}
