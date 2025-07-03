import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, inquiry, message } = body

    // Validate required fields
    if (!name || !email || !inquiry || !message) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Send email notification to your inbox
    const emailResult = await resend.emails.send({
      from: "Contact Form <noreply@equuleustechnologies.com>",
      to: ["sats.mudgil@gmail.com"],
      subject: `New ${inquiry.replace("-", " ").toUpperCase()} Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e40af; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #2563eb; }
            .message-box { background: white; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🚀 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Equuleus Technologies Website</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Full Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email Address:</div>
                <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>
              
              ${
                phone
                  ? `
              <div class="field">
                <div class="label">📱 Phone Number:</div>
                <div class="value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></div>
              </div>
              `
                  : ""
              }
              
              ${
                company
                  ? `
              <div class="field">
                <div class="label">🏢 Company/Organization:</div>
                <div class="value">${company}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="label">🎯 Type of Inquiry:</div>
                <div class="value">${inquiry.replace("-", " ").toUpperCase()}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the Equuleus Technologies contact form.</p>
                <p>Received on: ${new Date().toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  dateStyle: "full",
                  timeStyle: "short",
                })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // Send auto-reply to the person who submitted the form
    await resend.emails.send({
      from: "Equuleus Technologies <noreply@equuleustechnologies.com>",
      to: [email],
      subject: "Thank you for contacting Equuleus Technologies",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You - Equuleus Technologies</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { color: #2563eb; font-weight: bold; }
            .contact-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🙏 Thank You, ${name}!</h1>
              <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">We've received your message</p>
            </div>
            
            <div class="content">
              <p>Dear <span class="highlight">${name}</span>,</p>
              
              <p>Thank you for reaching out to <strong>Equuleus Technologies</strong>! We have successfully received your inquiry regarding <span class="highlight">${inquiry.replace("-", " ")}</span>.</p>
              
              <p>Our team of experts will review your message and get back to you within <strong>24-48 hours</strong>. We're excited to learn more about your project and discuss how we can help you achieve your digital transformation goals.</p>
              
              <div class="contact-info">
                <h3 style="margin-top: 0; color: #2563eb;">📞 Need Immediate Assistance?</h3>
                <p><strong>Phone:</strong> <a href="tel:+919999398103" style="color: #2563eb;">+91 9999398103</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@equuleustechnologies.com" style="color: #2563eb;">info@equuleustechnologies.com</a></p>
                <p><strong>Office Hours:</strong> Monday to Friday, 9:30 AM – 6:30 PM IST</p>
              </div>
              
              <p>In the meantime, feel free to explore our services and learn more about how we can help transform your business:</p>
              
              <ul>
                <li><strong>Digital Transformation</strong> - Modernize your operations with cutting-edge technology</li>
                <li><strong>IT Managed Services</strong> - 24/7 support for your IT infrastructure</li>
                <li><strong>Digital Marketing</strong> - Data-driven strategies to grow your business</li>
                <li><strong>Staff Augmentation</strong> - Scale your team with skilled professionals</li>
              </ul>
              
              <div class="footer">
                <p><strong>Equuleus Technologies</strong></p>
                <p>Plot No. - A-57, Munchkin Tower, Ground Floor<br>
                Ryan Enclave, Sohna Road, Gurugram, Haryana, India</p>
                <p style="margin-top: 15px;">
                  <em>Empowering businesses to transform with confidence, operate with agility, and grow with purpose.</em>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    console.log("Email sent successfully:", emailResult)

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you within 24-48 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending your message. Please try again or contact us directly.",
      },
      { status: 500 },
    )
  }
}
