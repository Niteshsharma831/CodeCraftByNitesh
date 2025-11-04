require("dotenv").config();
const { Resend } = require("resend");

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Generate HTML template
const generateEmailHTML = ({ type, name, email, message }) => {
  if (type === "ownerNotification") {
    return `
      <h2>📩 New Hire Request</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <blockquote>${message}</blockquote>
    `;
  }

  if (type === "userThankYou") {
    return `
      <h2>Thank You, ${name}! 🎉</h2>
      <p>We received your message and appreciate you reaching out to <strong>CodeCraft By Nitesh</strong>.</p>
      <blockquote>${message}</blockquote>
      <p>We’ll get back to you soon.</p>
    `;
  }

  return "";
};

// Send mail function
const sendMail = async (to, subject, data) => {
  try {
    const html = generateEmailHTML(data);

    const response = await resend.emails.send({
      from: "CodeCraft By Nitesh <onboarding@resend.dev>", // temporary sender
      to: [to],
      subject,
      html,
    });

    console.log("✅ Full Resend Response:", response);

    if (response.error) {
      console.error("❌ Resend API Error:", response.error);
    } else {
      console.log(`✅ Email sent to ${to}: ${response.data?.id || "No ID returned"}`);
    }

    return response;
  } catch (error) {
    console.error("❌ Email send error:", error.message);
  }
};

module.exports = sendMail;
