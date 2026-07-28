import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, service, message } = body

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, phone, service, message }])

    if (dbError) {
      console.error('Supabase insert error:', dbError)
    }

    // Send email via Resend
    try {
      await resend.emails.send({
        from: 'ServeDubai Website <onboarding@resend.dev>',
        to: 'marbleprodxb@gmail.com',
        subject: `New Lead — ${service} | ServeDubai.ae`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9f6f1;border-radius:12px;">
            <div style="text-align:center;margin-bottom:24px;">
              <h2 style="margin:0 0 4px;font-size:22px;color:#1a1208;">New Client Request</h2>
              <p style="margin:0;font-size:14px;color:#c9a84c;font-weight:600;">from servedubai.ae</p>
            </div>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;color:#666;width:120px;font-size:14px;">Source</td>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;font-weight:700;color:#c9a84c;font-size:14px;">servedubai.ae</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;color:#666;font-size:14px;">Request Type</td>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;font-weight:600;color:#1a1208;font-size:14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;color:#666;font-size:14px;">Service</td>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;font-weight:600;color:#1a1208;font-size:14px;">${service}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;color:#666;font-size:14px;">Phone</td>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;font-weight:600;color:#1a1208;font-size:14px;">
                  <a href="tel:${phone}" style="color:#1a1208;text-decoration:none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;color:#666;font-size:14px;">Message</td>
                <td style="padding:12px 0;border-bottom:1px solid #e8e0d0;color:#1a1208;font-size:14px;">${message}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;color:#666;font-size:14px;">Time (Dubai)</td>
                <td style="padding:12px 0;color:#1a1208;font-size:14px;">${timestamp}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#1a1208;border-radius:8px;text-align:center;">
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color:#c9a84c;font-weight:600;text-decoration:none;font-size:14px;">Reply on WhatsApp</a>
              <span style="color:#555;margin:0 8px;">|</span>
              <a href="tel:${phone}" style="color:#c9a84c;font-weight:600;text-decoration:none;font-size:14px;">Call Back</a>
            </div>
            <p style="margin:20px 0 0;font-size:11px;color:#999;text-align:center;">
              This lead was submitted via servedubai.ae (Madinat Alhaya Cleaning Services)
            </p>
          </div>
        `,
      })
    } catch (emailErr) {
      console.error('Resend email error:', emailErr)
    }

    return NextResponse.json(
      { success: true },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
