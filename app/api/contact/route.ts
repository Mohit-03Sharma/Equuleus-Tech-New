import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Only send emails if Resend API key is configured
    if (process.env.RESEND_API_KEY) {
      // Send notification email to company
      await resend.emails.send({
        from: "Contact Form <noreply@equuleustechnologies.com>",
        to: ["sats.mudgil@gmail.com"],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })

      // Send confirmation email to user
      await resend.emails.send({
        from: "Equuleus Technologies <noreply@equuleustechnologies.com>",
        to: [email],
        subject: "Thank you for contacting Equuleus Technologies",
        html: `
          <h2>Thank you for your inquiry!</h2>
          <p>Dear ${firstName},</p>
          <p>Thank you for reaching out to Equuleus Technologies. We have received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to explore our services and learn more about how we can help transform your business.</p>
          <p>Best regards,<br>The Equuleus Technologies Team</p>
          <hr>
          <p><small>This is an automated confirmation email. Please do not reply to this message.</small></p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
