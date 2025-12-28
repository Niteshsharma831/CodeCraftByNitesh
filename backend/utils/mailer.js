const nodemailer = require("nodemailer");

// Create reusable transporter
const createTransporter = () => {
  // Use environment variables
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const sendMail = async ({ name, email, message, to }) => {
  try {
    // Validate inputs - all required
    if (!name || !email || !message || !to) {
      console.error("Missing required fields for email:", { name, email, message, to });
      throw new Error("Missing required fields for email");
    }

    const transporter = createTransporter();
    
    // Check if sending to owner or user
    const isNotificationToOwner = to !== email;
    
    // Set subject based on recipient
    const subject = isNotificationToOwner
      ? `📧 New Hire Request from ${name}`
      : `🙏 Thank you for contacting, ${name}!`;
    
    // HTML content based on recipient
    const htmlContent = isNotificationToOwner
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">🎯 New Hire Request!</h2>
          </div>
          <div style="padding: 25px;">
            <p><strong>👤 From:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📝 Message:</strong></p>
            <div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; margin: 15px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This email was sent from your portfolio contact form.
              </p>
              <p style="color: #999; font-size: 12px; margin: 10px 0 0 0;">
                Timestamp: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0;">✨ Thank You for Reaching Out!</h2>
          </div>
          <div style="padding: 25px; text-align: center;">
            <p style="font-size: 16px; color: #333;">
              Hello <strong>${name}</strong>,
            </p>
            <p style="font-size: 15px; color: #555; line-height: 1.6;">
              I've received your message and will get back to you as soon as possible.
              I typically respond within 24 hours.
            </p>
            <div style="background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #48c6ef; margin: 20px 0;">
              <p style="margin: 0 0 10px 0; color: #777; font-size: 14px;">
                <strong>Your Message:</strong>
              </p>
              <p style="margin: 0; color: #333; font-style: italic;">
                "${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"
              </p>
            </div>
            <div style="margin-top: 30px; padding: 15px; background: #e8f4fc; border-radius: 8px;">
              <p style="margin: 0; color: #2c5282; font-size: 14px;">
                <strong>📧 Contact:</strong> ${process.env.OWNER_EMAIL || "niteshkumarsharma9648@gmail.com"}
              </p>
            </div>
            <p style="margin-top: 25px; color: #666; font-size: 14px;">
              Best regards,<br>
              <strong style="color: #2d3748;">Nitesh Kumar Sharma</strong>
            </p>
          </div>
          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `;

    const mailOptions = {
      from: {
        name: isNotificationToOwner ? "Portfolio Contact Form" : "Nitesh Kumar Sharma",
        address: process.env.EMAIL_USER,
      },
      to: to,
      subject: subject,
      html: htmlContent,
      // Set reply-to for notification emails
      replyTo: isNotificationToOwner ? email : process.env.EMAIL_USER,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}: ${info.messageId}`);
    return info;
    
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    console.error("Error details:", error);
    throw error;
  }
};

module.exports = sendMail;