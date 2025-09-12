const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // 16-character App Password
  },
});

// HTML templates
const generateEmailHTML = ({ type, name, email, message }) => {
  if (type === "ownerNotification") {
    // Email for portfolio owner
    return `
      <div style="font-family: Arial,sans-serif; max-width:600px; margin:auto; padding:20px; background:#f4f4f4; border-radius:10px;">
        <h2 style="color:#FACC15;">📨 New Hire Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="padding:10px; background:#fff; border-radius:5px; border:1px solid #ddd;">${message}</div>
        <hr>
        <p style="font-size:0.85em; color:#555;">Sent from your portfolio contact form</p>
      </div>
    `;
  }

  if (type === "userThankYou") {
    // Email for the user
    return `
      <div style="font-family: Arial,sans-serif; max-width:600px; margin:auto; padding:20px; background:#f9f9f9; border-radius:10px;">
        <div style="text-align:center;">
          <img src="https://pngimg.com/d/thank_you_PNG87.png" alt="Thank You" style="max-width:150px; margin-bottom:20px;" />
        </div>
        <h2 style="color:#4CAF50; text-align:center;">Thank You, ${name}!</h2>
        <p>We received your message and appreciate you reaching out.</p>
        <p><strong>Your Message:</strong></p>
        <div style="padding:10px; background:#fff; border-radius:5px; border:1px solid #ddd;">${message}</div>
        <p>We will get back to you shortly.</p>
        <hr>
        <div style="text-align:center; margin-top:20px;">
          <a href="https://facebook.com/yourprofile" style="margin:0 5px;">Facebook</a>
          <a href="https://twitter.com/yourprofile" style="margin:0 5px;">Twitter</a>
          <a href="https://linkedin.com/in/yourprofile" style="margin:0 5px;">LinkedIn</a>
          <a href="https://instagram.com/yourprofile" style="margin:0 5px;">Instagram</a>
        </div>
      </div>
    `;
  }

  return "";
};

// send mail function
const sendMail = async (to, subject, data) => {
  try {
    const info = await transporter.sendMail({
      from: `"Nitesh Kumar Sharma" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: generateEmailHTML(data),
    });
    console.log("✅ Mail sent:", info.response);
  } catch (error) {
    console.error("❌ Mail send error:", error);
  }
};

module.exports = sendMail;
