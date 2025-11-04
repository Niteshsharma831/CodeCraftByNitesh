require("dotenv").config();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

// 🎨 Modern Email UI Template
const generateEmailHTML = ({ type, name, email, message }) => {
  const headerColor = "#FACC15"; // yellow accent
  const bodyColor = "#f9fafb";
  const borderColor = "#e5e7eb";

  if (type === "ownerNotification") {
    return `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background:${bodyColor}; padding:30px;">
        <div style="max-width:600px; margin:auto; background:white; border:1px solid ${borderColor}; border-radius:10px; box-shadow:0 2px 6px rgba(0,0,0,0.05); overflow:hidden;">
          <div style="background:${headerColor}; color:#1f2937; padding:20px 25px; text-align:center;">
            <h2 style="margin:0;">📩 New Hire Request</h2>
          </div>
          <div style="padding:25px;">
            <p style="font-size:16px; color:#111827;">You’ve received a new hire request from your portfolio website.</p>
            <hr style="border:none; border-top:1px solid ${borderColor}; margin:15px 0;">
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background:${bodyColor}; padding:10px; border-radius:8px; border:1px solid ${borderColor}; margin-top:5px;">
              ${message}
            </div>
            
            <p style="font-size:12px; color:#6b7280; margin-top:25px;">Sent automatically from your CodeCraft By Nitesh portfolio site.</p>
          </div>
        </div>
      </div>
    `;
  }

  if (type === "userThankYou") {
    return `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background:${bodyColor}; padding:30px;">
        <div style="max-width:600px; margin:auto; background:white; border:1px solid ${borderColor}; border-radius:10px; box-shadow:0 2px 6px rgba(0,0,0,0.05); overflow:hidden;">
          <div style="background:#4CAF50; color:white; padding:20px 25px; text-align:center;">
            <h2 style="margin:0;">Thank You, ${name}! 🎉</h2>
          </div>
          <div style="padding:25px;">
            <p style="font-size:16px; color:#111827;">
              We’ve received your message and appreciate you reaching out to <strong>CodeCraft By Nitesh</strong>.
            </p>
            <p style="margin-top:10px;"><strong>Your Message:</strong></p>
            <div style="background:${bodyColor}; padding:10px; border-radius:8px; border:1px solid ${borderColor}; margin-top:5px;">
              ${message}
            </div>

            <p style="margin-top:20px; color:#374151;">We’ll get back to you soon.</p>
            <hr style="border:none; border-top:1px solid ${borderColor}; margin:25px 0;">

            <div style="text-align:center;">
              <p style="color:#6b7280; margin-bottom:10px;">Follow me on</p>
              <a href="https://facebook.com/codeandcreate" style="margin:0 8px; color:#3b5998; text-decoration:none;">Facebook</a> |
              <a href="https://linkedin.com/in/niteshkumarsharma831" style="margin:0 8px; color:#0A66C2; text-decoration:none;">LinkedIn</a> |
              <a href="https://instagram.com/codeandcreate" style="margin:0 8px; color:#E1306C; text-decoration:none;">Instagram</a>
            </div>

            <p style="font-size:12px; color:#9ca3af; margin-top:20px; text-align:center;">
              © ${new Date().getFullYear()} CodeCraft By Nitesh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  return "";
};

// ✅ Send Email Function using Resend
const sendMail = async (to, subject, data) => {
  try {
    const htmlContent = generateEmailHTML(data);

    const response = await resend.emails.send({
      from: "CodeCraft By Nitesh <noreply@resend.dev>", // You can replace with a custom verified domain later
      to: Array.isArray(to) ? to : [to],
      subject,
      html: htmlContent,
    });

    console.log(
      `✅ Email sent successfully to ${to}:`,
      response.id || response
    );
    return response;
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    if (error.response) console.error("Resend response:", error.response);
  }
};

module.exports = sendMail;
