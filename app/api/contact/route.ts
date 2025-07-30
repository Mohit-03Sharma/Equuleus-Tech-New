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

    // Only proceed with email if API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        // Email to you (notification)
        await resend.emails.send({
          from: "onboarding@resend.dev", // Using Resend's default - works immediately
          to: "sats.mudgil@gmail.com",
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              </div>
              
              <div style="padding: 30px; background: #f8fafc;">
                <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Name:</td>
                      <td style="padding: 8px 0; color: #1e293b;">${firstName} ${lastName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                      <td style="padding: 8px 0; color: #1e293b;">
                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                      <td style="padding: 8px 0; color: #1e293b;">${phone || "Not provided"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
                      <td style="padding: 8px 0; color: #1e293b;">${company || "Not provided"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
                      <td style="padding: 8px 0; color: #1e293b;">${service || "Not specified"}</td>
                    </tr>
                  </table>
                  
                  <h3 style="color: #1e293b; margin-top: 25px; margin-bottom: 15px;">Message:</h3>
                  <div style="background: #f1f5f9; padding: 20px; border-radius: 6px; border-left: 4px solid #2563eb;">
                    <p style="margin: 0; color: #334155; line-height: 1.6;">${message}</p>
                  </div>
                </div>
              </div>
              
              <div style="padding: 20px; text-align: center; background: #1e293b;">
                <p style="margin: 0; color: #94a3b8; font-size: 14px;">
                  Sent from Equuleus Technology website contact form
                </p>
              </div>
            </div>
          `,
        })

        // Confirmation email to user
        await resend.emails.send({
          from: "onboarding@resend.dev", // Using Resend's default - works immediately
          to: email,
          subject: "Thank you for contacting Equuleus Technology",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Your Message!</h1>
              </div>
              
              <div style="padding: 30px; background: #f8fafc;">
                <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-top: 0;">
                    Dear ${firstName},
                  </p>
                  
                  <p style="color: #475569; line-height: 1.6;">
                    Thank you for reaching out to Equuleus Technology! We have received your inquiry and our team will review it carefully.
                  </p>
                  
                  <p style="color: #475569; line-height: 1.6;">
                    <strong>What happens next?</strong>
                  </p>
                  
                  <ul style="color: #475569; line-height: 1.6; padding-left: 20px;">
                    <li>Our team will review your message within 24 hours</li>
                    <li>We'll prepare a tailored response based on your requirements</li>
                    <li>You'll receive a detailed reply from our experts</li>
                  </ul>
                  
                  <div style="background: #f1f5f9; padding: 20px; border-radius: 6px; margin: 20px 0;">
                    <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 15px;">Your Message:</h3>
                    <p style="margin: 0; color: #334155; line-height: 1.6; font-style: italic;">"${message}"</p>
                  </div>
                  
                  <p style="color: #475569; line-height: 1.6;">
                    If you have any urgent questions, feel free to call us at <strong>+91 9999398103</strong>.
                  </p>
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://equuleustechnology.com" 
                       style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                      Visit Our Website
                    </a>
                  </div>
                </div>
              </div>
              
              <div style="padding: 20px; text-align: center; background: #1e293b;">
                <p style="margin: 0 0 10px 0; color: white; font-weight: bold;">Equuleus Technology</p>
                <p style="margin: 0; color: #94a3b8; font-size: 14px;">
                  Plot no. A-10, First Floor, Sector - 34, Rohtak, Haryana, India<br>
                  📞 +91 9999398103 | ✉️ info@equuleustechnology.com
                </p>
              </div>
            </div>
          `,
        })

        console.log("Emails sent successfully to sats.mudgil@gmail.com")
      } catch (emailError) {
        console.error("Email sending failed:", emailError)
        // Continue execution - don't fail the form submission
      }
    }

    // Log the form submission (for development purposes)
    console.log("Contact form submission received:", {
      name: `${firstName} ${lastName}`,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      service: service || "Not specified",
      message,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We have received your inquiry and will get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
