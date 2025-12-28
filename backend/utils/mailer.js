const nodemailer = require("nodemailer");

// Create reusable transporter
const createTransporter = () => {
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
    // Validate inputs
    if (!name || !email || !message || !to) {
      console.error("Missing required fields for email:", {
        name,
        email,
        message,
        to,
      });
      throw new Error("Missing required fields for email");
    }

    const transporter = createTransporter();

    // Check if sending to owner or user
    const isNotificationToOwner = to !== email;

    // Professional subject lines
    const subject = isNotificationToOwner
      ? `🎯 New Contact Request: ${name} | Portfolio`
      : `✨ Thank You, ${name}! | Nitesh Kumar Sharma`;

    // Professional HTML templates
    const htmlContent = isNotificationToOwner
      ? `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Request</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #f8fafc; }
            .email-container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 48px 40px; text-align: center; color: white; position: relative; }
            .header::after { content: ''; position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); width: 40px; height: 40px; background: #6366f1; transform: rotate(45deg); }
            .header h1 { font-size: 32px; font-weight: 700; margin: 0 0 12px 0; letter-spacing: -0.5px; }
            .header p { font-size: 16px; opacity: 0.95; font-weight: 400; margin: 0; }
            .content { padding: 56px 40px; }
            .contact-info { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
            .info-card { background: #f8fafc; padding: 24px; border-radius: 16px; border-left: 4px solid #6366f1; transition: transform 0.2s ease; }
            .info-card:hover { transform: translateY(-2px); }
            .info-label { color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
            .info-value { color: #1e293b; font-size: 18px; font-weight: 600; margin: 0; }
            .message-container { background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 32px; border-radius: 16px; margin: 40px 0; }
            .message-label { color: #475569; font-size: 16px; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
            .message-label::before { content: '💬'; }
            .message-content { color: #334155; font-size: 16px; line-height: 1.8; white-space: pre-wrap; background: white; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0; }
            .action-btn { display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.25); transition: all 0.3s ease; }
            .action-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(16, 185, 129, 0.35); }
            .footer { background: #f8fafc; padding: 32px 40px; text-align: center; border-top: 1px solid #e2e8f0; }
            .footer-text { color: #64748b; font-size: 14px; line-height: 1.6; margin: 0; }
            .timestamp { color: #94a3b8; font-size: 13px; margin-top: 16px; }
            .badge { display: inline-flex; align-items: center; background: #fef3c7; color: #92400e; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-left: 12px; }
            .badge::before { content: '🆕'; margin-right: 6px; }
            @media (max-width: 640px) {
              .content, .header { padding: 40px 24px; }
              .contact-info { grid-template-columns: 1fr; }
              .header h1 { font-size: 28px; }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>New Contact Request</h1>
              <p>Someone reached out via your portfolio</p>
            </div>
            
            <div class="content">
              <div class="contact-info">
                <div class="info-card">
                  <div class="info-label">From</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-card">
                  <div class="info-label">Email</div>
                  <div class="info-value">${email}</div>
                </div>
              </div>
              
              <div class="message-container">
                <div class="message-label">Message <span class="badge">New</span></div>
                <div class="message-content">${message.replace(
                  /\n/g,
                  "<br>"
                )}</div>
              </div>
              
              <div style="text-align: center; margin-top: 48px;">
                <a href="mailto:${email}" class="action-btn">
                  ✉️ Reply to ${name.split(" ")[0]}
                </a>
              </div>
            </div>
            
            <div class="footer">
              <p class="footer-text">
                This notification was sent from your portfolio contact form
              </p>
              <p class="timestamp">
                ${new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })} • ${new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `
      : `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You Message</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #f8fafc; }
            .email-container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05); }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); padding: 60px 40px; text-align: center; color: white; position: relative; }
            .header h1 { font-size: 36px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.5px; }
            .header p { font-size: 18px; opacity: 0.95; font-weight: 400; margin: 0; }
            .content { padding: 56px 40px; }
            .greeting { text-align: center; margin-bottom: 40px; }
            .greeting h2 { color: #1e293b; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; }
            .greeting p { color: #475569; font-size: 18px; margin: 0; line-height: 1.7; }
            .message-card { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 32px; border-radius: 20px; margin: 40px 0; position: relative; overflow: hidden; }
            .message-card::before { content: ''; position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: linear-gradient(to bottom, #0ea5e9, #3b82f6); }
            .message-label { color: #0369a1; font-size: 16px; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
            .message-label::before { content: '📝'; }
            .message-excerpt { color: #1e293b; font-size: 17px; line-height: 1.8; font-style: italic; padding: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 12px; backdrop-filter: blur(10px); }
            .profile-section { background: #f8fafc; padding: 40px; border-radius: 20px; margin: 48px 0; text-align: center; }
            .avatar { width: 80px; height: 80px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 50%; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: 700; }
            .profile-name { color: #1e293b; font-size: 24px; font-weight: 700; margin: 0 0 8px 0; }
            .profile-title { color: #64748b; font-size: 16px; margin: 0 0 24px 0; }
            .contact-details { display: inline-flex; flex-direction: column; gap: 12px; text-align: left; }
            .contact-item { color: #475569; font-size: 15px; display: flex; align-items: center; gap: 10px; }
            .process-timeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 48px 0; }
            .process-step { text-align: center; padding: 24px; background: #f8fafc; border-radius: 16px; transition: transform 0.3s ease; }
            .process-step:hover { transform: translateY(-5px); background: #f1f5f9; }
            .step-number { width: 40px; height: 40px; background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-weight: 700; }
            .step-title { color: #1e293b; font-size: 16px; font-weight: 600; margin: 0 0 8px 0; }
            .step-desc { color: #64748b; font-size: 14px; margin: 0; }
            .social-links { display: flex; justify-content: center; gap: 16px; margin: 40px 0; }
            .social-icon { width: 44px; height: 44px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; transition: all 0.3s ease; font-weight: 600; }
            .social-icon:hover { transform: scale(1.1) rotate(5deg); box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3); }
            .footer { background: #f8fafc; padding: 32px 40px; text-align: center; border-top: 1px solid #e2e8f0; }
            .footer-text { color: #64748b; font-size: 14px; line-height: 1.6; margin: 0; }
            .highlight { color: #0ea5e9; font-weight: 600; }
            @media (max-width: 640px) {
              .content, .header { padding: 40px 24px; }
              .process-timeline { grid-template-columns: 1fr; }
              .header h1 { font-size: 32px; }
              .greeting h2 { font-size: 24px; }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
              <p>Your message has been received successfully</p>
            </div>
            
            <div class="content">
              <div class="greeting">
                <h2>Hello, ${name} 👋</h2>
                <p>Thank you for reaching out through my portfolio. I appreciate you taking the time to connect!</p>
              </div>
              
              <div class="message-card">
                <div class="message-label">Your Message</div>
                <div class="message-excerpt">
                  "${message.substring(0, 180)}${
          message.length > 180 ? "..." : ""
        }"
                </div>
              </div>
              
              <div class="process-timeline">
                <div class="process-step">
                  <div class="step-number">1</div>
                  <div class="step-title">Received</div>
                  <div class="step-desc">Message logged</div>
                </div>
                <div class="process-step">
                  <div class="step-number">2</div>
                  <div class="step-title">Reviewing</div>
                  <div class="step-desc">Analyzing request</div>
                </div>
                <div class="process-step">
                  <div class="step-number">3</div>
                  <div class="step-title">Response</div>
                  <div class="step-desc">Within 24 hours</div>
                </div>
              </div>
              
              <div class="profile-section">
                <div class="avatar">N</div>
                <div class="profile-name">Nitesh Kumar Sharma</div>
                <div class="profile-title">Full Stack Developer</div>
                <div class="contact-details">
                  <div class="contact-item">📧 ${
                    process.env.OWNER_EMAIL || "niteshkumarsharma9648@gmail.com"
                  }</div>
                  <div class="contact-item">🌐 Available for remote opportunities</div>
                </div>
              </div>
              
              <p style="text-align: center; color: #475569; font-size: 16px; line-height: 1.7; margin: 32px 0;">
                I'll review your message carefully and get back to you within <span class="highlight">24 hours</span>.
                In the meantime, feel free to explore more of my work on my portfolio.
              </p>
              
              <div class="social-links">
                <a href="https://github.com/niteshkumarsharma" class="social-icon" title="GitHub">GH</a>
                <a href="https://linkedin.com/in/niteshkumarsharma" class="social-icon" title="LinkedIn">IN</a>
                <a href="https://devcraftnitesh.vercel.app" class="social-icon" title="Portfolio">P</a>
              </div>
            </div>
            
            <div class="footer">
              <p class="footer-text">
                This is an automated confirmation email. Please don't reply to this message.<br>
                For direct inquiries, contact me at: ${
                  process.env.OWNER_EMAIL || "niteshkumarsharma9648@gmail.com"
                }
              </p>
              <p style="color: #94a3b8; font-size: 13px; margin-top: 20px;">
                Sent on ${new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })} at ${new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `;

    const mailOptions = {
      from: {
        name: isNotificationToOwner
          ? "Portfolio Notification"
          : "Nitesh Kumar Sharma",
        address: process.env.EMAIL_USER,
      },
      to: to,
      subject: subject,
      html: htmlContent,
      replyTo: isNotificationToOwner ? email : process.env.EMAIL_USER,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Professional email sent to ${to}`);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw error;
  }
};

module.exports = sendMail;
