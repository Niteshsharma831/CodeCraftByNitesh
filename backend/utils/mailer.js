require("dotenv").config();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const generateEmailHTML = ({ name, email, message }) => {
  const headerColor = "#FACC15";
  const bodyColor = "#f9fafb";
  const borderColor = "#e5e7eb";

  return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;background:${bodyColor};padding:30px;">
      <div style="max-width:600px;margin:auto;background:white;border:1px solid ${borderColor};border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.05);overflow:hidden;">
        <div style="background:${headerColor};color:#1f2937;padding:20px 25px;text-align:center;">
          <h2 style="margin:0;">📩 New Message from ${name}</h2>
        </div>
        <div style="padding:25px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background:${bodyColor};padding:10px;border-radius:8px;border:1px solid ${borderColor};margin-top:5px;">
            ${message}
          </div>
        </div>
      </div>
    </div>
  `;
};

// ✅ Send Mail Function
const sendMail = async ({ name, email, message, to }) => {
  try {
    if (!to) throw new Error("Recipient email ('to') is missing");

    const htmlContent = generateEmailHTML({ name, email, message });

    const response = await resend.emails.send({
      from: "CodeCraft By Nitesh <onboarding@resend.dev>",
      to: String(to), // ensure it’s a string
      subject: `Message from ${name}`,
      html: htmlContent,
      reply_to: email,
    });

    console.log("✅ Resend API Response:", response);
    return response;
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    if (error.response) {
      console.error("📩 Resend error response:", error.response);
    }
  }
};

module.exports = sendMail;
