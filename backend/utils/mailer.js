require("dotenv").config();
const nodemailer = require("nodemailer");

// ✅ Create a single transporter instance (reuse for all emails)
const transporter = nodemailer.createTransport({
  service: "gmail", // simpler than host/port setup
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password (16 chars)
  },
  pool: true, // 🟢 enables connection pooling (reuses connections)
  maxConnections: 5,
  maxMessages: 100,
});

// Optional debug: verify connection once
if (process.env.NODE_ENV !== "production") {
  transporter.verify((err, success) => {
    if (err) {
      console.error("❌ SMTP Connection Error:", err.message);
    } else {
      console.log("✅ SMTP Server ready to send emails");
    }
  });
}

// ✅ Reusable HTML templates
const generateEmailHTML = ({ type, name, email, message }) => {
  const baseStyle =
    "font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border-radius:10px;";

  switch (type) {
    case "ownerNotification":
      return `
        <div style="${baseStyle}background:#f4f4f4;">
          <h2 style="color:#FACC15;">📨 New Hire Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="padding:10px;background:#fff;border-radius:5px;border:1px solid #ddd;">${message}</div>
          <hr>
          <p style="font-size:0.85em;color:#555;">Sent from your portfolio contact form</p>
        </div>
      `;

    case "userThankYou":
      return `
        <div style="${baseStyle}background:#f9f9f9;">
          <div style="text-align:center;">
            <img src="https://pngimg.com/d/thank_you_PNG87.png" alt="Thank You" style="max-width:150px;margin-bottom:20px;" />
          </div>
          <h2 style="color:#4CAF50;text-align:center;">Thank You, ${name}!</h2>
          <p>We received your message and appreciate you reaching out.</p>
          <p><strong>Your Message:</strong></p>
          <div style="padding:10px;background:#fff;border-radius:5px;border:1px solid #ddd;">${message}</div>
          <p>We’ll get back to you soon.</p>
          <hr>
          <div style="text-align:center;margin-top:20px;">
            <a href="https://facebook.com/codeandcreate" style="margin:0 5px;">Facebook</a>
            <a href="https://linkedin.com/in/niteshkumarsharma831" style="margin:0 5px;">LinkedIn</a>
            <a href="https://instagram.com/codeandcreate" style="margin:0 5px;">Instagram</a>
          </div>
        </div>
      `;

    default:
      return "";
  }
};

// ✅ Send mail function (non-blocking and reusable)
const sendMail = async (to, subject, data) => {
  try {
    const mailOptions = {
      from: `"CodeCraft By Nitesh" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: generateEmailHTML(data),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}: ${info.response}`);
    return info;
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    // Don’t throw — let caller handle without blocking
  }
};

module.exports = sendMail;
