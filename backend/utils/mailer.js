require("dotenv").config();
const { Resend } = require("resend");

// ✅ Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 🎨 Email Template (Modern UI)
const generateEmailHTML = ({ name, email, message }) => {
  const headerColor = "#FACC15";
  const bodyColor = "#f9fafb";
  const borderColor = "#e5e7eb";

  return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;background:${bodyColor};padding:30px;">
      <div style="max-width:600px;margin:auto;background:white;border:1px solid ${borderColor};border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.05);overflow:hidden;">
        
        <div style="background:${headerColor};color:#1f2937;padding:20px 25px;text-align:center;">
          <h2 style="margin:0;">📩 Thank You for Contacting!</h2>
        </div>
        
        <div style="padding:25px;">
          <p style="font-size:16px;color:#111827;">Hi <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to <strong>CodeCraft By Nitesh</strong>. We’ve received your message and will get back to you shortly.</p>
          
          <hr style="border:none;border-top:1px solid ${borderColor};margin:15px 0;">
          
          <p><strong>Your Details:</strong></p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background:${bodyColor};padding:10px;border-radius:8px;border:1px solid ${borderColor};margin-top:5px;">
            ${message}
          </div>
          
          <p style="margin-top:25px;">We appreciate your interest and look forward to connecting!</p>
          
          <hr style="border:none;border-top:1px solid ${borderColor};margin:25px 0;">
          
          <div style="text-align:center;">
            <p style="color:#6b7280;margin-bottom:10px;">Follow me on</p>
            <a href="https://facebook.com/codeandcreate" style="margin:0 8px;color:#3b5998;text-decoration:none;">Facebook</a> |
            <a href="https://linkedin.com/in/niteshkumarsharma831" style="margin:0 8px;color:#0A66C2;text-decoration:none;">LinkedIn</a> |
            <a href="https://instagram.com/codeandcreate" style="margin:0 8px;color:#E1306C;text-decoration:none;">Instagram</a>
          </div>

          <p style="font-size:12px;color:#9ca3af;margin-top:20px;text-align:center;">
            © ${new Date().getFullYear()} CodeCraft By Nitesh. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  `;
};

// ✅ Send Mail Function (Dynamic Receiver)
const sendMail = async ({ name, email, message, to }) => {
  try {
    const htmlContent = generateEmailHTML({ name, email, message });

    const response = await resend.emails.send({
      from: "CodeCraft By Nitesh <noreply@codecraftbynitesh.dev>", // ✅ Use a verified domain (recommended)
      to: [to], // 👈 Dynamic email from body (recipient)
      subject: `New message from ${name}`,
      html: htmlContent,
      reply_to: email, // 👈 Makes replies go to the user's email
    });

    console.log(`✅ Email sent to ${to}:`, response.id || response);
    return response;
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    if (error.response) console.error("Resend response:", error.response);
  }
};

module.exports = sendMail;
