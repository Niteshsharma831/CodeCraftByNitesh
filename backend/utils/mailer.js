// utils/mailer.js
require("dotenv").config();
const nodemailer = require("nodemailer");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

// 🧠 Auto HTML Template
const generateEmailHTML = ({ name, email, message }) => `
  <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 20px;">
    <div style="background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 20px;">
      <h2 style="color: #222;">📬 New Message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="background: #f3f4f6; padding: 10px; border-radius: 6px;">${message}</p>
    </div>
  </div>
`;

// 🌍 Auto Mailer
const sendMail = async (to, subject, { name, email, message }) => {
  const htmlContent = generateEmailHTML({ name, email, message });
  const isProduction = process.env.NODE_ENV === "production";

  try {
    if (isProduction) {
      // ✅ Use Resend in production (Render)
      const response = await resend.emails.send({
        from: "CodeCraft By Nitesh <support@sharmafurniturehouse.co.in>", // Must be verified domain
        to,
        subject,
        html: htmlContent,
        reply_to: email,
      });
      console.log("✅ Resend Response:", response);
      return response;
    } else {
      // ✅ Use Gmail (for localhost testing)
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: htmlContent,
      });

      console.log("✅ Gmail Response:", info.response);
      return info;
    }
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    if (error.response) console.error(error.response);
  }
};

module.exports = sendMail;
