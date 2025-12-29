const nodemailer = require("nodemailer");

// Create reusable transporter
// const createTransporter = () => {
//   return nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });
// };

const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
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
      ? `📬 New Contact Request: ${name}`
      : `✨ Thank You, ${name}! - Message Received`;

    // Get current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Professional HTML templates
    const htmlContent = isNotificationToOwner
      ? `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Request</title>
          <style>
            @media only screen and (min-width: 600px) {
              .container {
                max-width: 600px !important;
                margin: 20px auto !important;
                border-radius: 10px !important;
              }
              .header {
                padding: 60px 40px !important;
              }
              .content {
                padding: 40px !important;
              }
              .footer {
                padding: 40px !important;
              }
              .contact-grid {
                display: flex !important;
                gap: 20px !important;
              }
              .contact-card {
                flex: 1 !important;
                margin-bottom: 0 !important;
              }
              .social-icons {
                gap: 20px !important;
              }
              .social-icon {
                width: 45px !important;
                height: 45px !important;
                font-size: 18px !important;
              }
              .action-button {
                width: auto !important;
                padding: 18px 50px !important;
              }
            }
            
            @media only screen and (max-width: 599px) {
              .header h1 {
                font-size: 24px !important;
              }
              .header p {
                font-size: 15px !important;
              }
              .contact-card div:last-child {
                font-size: 18px !important;
              }
              .message-content {
                max-height: 250px !important;
              }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); line-height: 1.6; color: #333;">
          <!-- Main Container -->
          <div class="container" style="width: 100%; min-height: 100vh; background: white;">
            
            <!-- Header -->
            <div class="header" style="background: linear-gradient(135deg, #1a237e 0%, #283593 100%); padding: 50px 20px; text-align: center; color: white;">
              <div style="font-size: 48px; margin-bottom: 20px;">📨</div>
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; padding: 0 10px;">New Contact Request</h1>
              <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px; padding: 0 10px;">Someone has reached out via your portfolio website</p>
            </div>
            
            <!-- Content -->
            <div class="content" style="padding: 30px 20px;">
              
              <!-- Contact Info -->
              <div style="margin-bottom: 40px;">
                <div class="contact-grid" style="width: 100%;">
                  <div class="contact-card" style="background: #f8f9fa; padding: 25px; margin-bottom: 15px; border-left: 5px solid #667eea; border-radius: 0 8px 8px 0;">
                    <div style="color: #6c757d; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">👤 From</div>
                    <div style="color: #212529; font-size: 20px; font-weight: 600; word-break: break-word;">${name}</div>
                  </div>
                  <div class="contact-card" style="background: #f8f9fa; padding: 25px; border-left: 5px solid #764ba2; border-radius: 0 8px 8px 0;">
                    <div style="color: #6c757d; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">📧 Email Address</div>
                    <div style="color: #212529; font-size: 20px; font-weight: 600; word-break: break-all;">${email}</div>
                  </div>
                </div>
              </div>
              
              <!-- Message -->
              <div style="background: #f8f9fa; padding: 25px; margin: 40px 0; border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap;">
                  <div style="color: #495057; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
                    <span>💬</span> Message
                  </div>
                  <span style="background: #28a745; color: white; padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-top: 5px;">NEW</span>
                </div>
                <div class="message-content" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #dee2e6; color: #495057; line-height: 1.6; max-height: 300px; overflow-y: auto;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <!-- Action Button -->
              <div style="text-align: center; margin: 50px 0;">
                <a href="mailto:${email}" class="action-button" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 18px 40px; border-radius: 10px; font-weight: 600; font-size: 18px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); width: 100%; max-width: 300px;">
                  ✉️ Reply to ${name.split(" ")[0]}
                </a>
              </div>
              
              <!-- Social Links -->
              <div style="text-align: center; margin: 50px 0;">
                <div style="color: #6c757d; font-size: 16px; margin-bottom: 20px;">Connect with me:</div>
                <div class="social-icons" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                  <a href="https://www.linkedin.com/in/nitesh-kumar-sharma-2894a1185/" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #0077b5; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">in</a>
                  <a href="https://www.facebook.com/niteshsharma.sharma.796" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #1877f2; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">f</a>
                  <a href="https://www.instagram.com/niteshsharma_99/" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d); border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">ig</a>
                  <a href="https://github.com/niteshkumarsharma" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #333; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">gh</a>
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div class="footer" style="background: #f8f9fa; padding: 30px 20px; text-align: center; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0; padding: 0 10px;">
                This notification was automatically sent from your portfolio contact form.<br>
                The sender will be expecting your response within 24 hours.
              </p>
              <div style="color: #adb5bd; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
                <span>🕐</span>
                <span>${formattedDate} at ${formattedTime}</span>
              </div>
            </div>
            
          </div>
        </body>
        </html>
      `
      : `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You Message</title>
          <style>
            @media only screen and (min-width: 600px) {
              .container {
                max-width: 600px !important;
                margin: 20px auto !important;
                border-radius: 10px !important;
              }
              .header {
                padding: 60px 40px !important;
              }
              .content {
                padding: 40px !important;
              }
              .footer {
                padding: 40px !important;
              }
              .timeline {
                display: grid !important;
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 20px !important;
              }
              .timeline-step {
                margin-bottom: 0 !important;
              }
              .social-icons {
                gap: 20px !important;
              }
              .social-icon {
                width: 50px !important;
                height: 50px !important;
                font-size: 20px !important;
              }
              .profile-container {
                padding: 40px !important;
              }
            }
            
            @media only screen and (max-width: 599px) {
              .header h1 {
                font-size: 24px !important;
              }
              .header p {
                font-size: 15px !important;
              }
              .greeting h2 {
                font-size: 22px !important;
              }
              .timeline-step div:first-child {
                width: 45px !important;
                height: 45px !important;
                font-size: 18px !important;
              }
              .message-content {
                padding: 15px !important;
              }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); line-height: 1.6; color: #333;">
          <!-- Main Container -->
          <div class="container" style="width: 100%; min-height: 100vh; background: white;">
            
            <!-- Header -->
            <div class="header" style="background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); padding: 50px 20px; text-align: center; color: white;">
              <div style="font-size: 48px; margin-bottom: 20px;">✨</div>
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; padding: 0 10px;">Thank You, ${name}!</h1>
              <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px; padding: 0 10px;">Your message has been received successfully</p>
            </div>
            
            <!-- Content -->
            <div class="content" style="padding: 30px 20px;">
              
              <!-- Greeting -->
              <div class="greeting" style="text-align: center; margin-bottom: 40px;">
                <h2 style="color: #212529; font-size: 26px; font-weight: 700; margin: 0 0 15px 0;">Hello, ${name} 👋</h2>
                <p style="color: #495057; font-size: 17px; line-height: 1.6; margin: 0; padding: 0 10px;">
                  Thank you for reaching out through my portfolio. I sincerely appreciate you taking the time to connect with me!
                </p>
              </div>
              
              <!-- Message Card -->
              <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; margin: 40px 0; border-radius: 8px; border-left: 5px solid #0ea5e9;">
                <div style="color: #0369a1; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <span>📝</span> Your Message
                </div>
                <div class="message-content" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #bae6fd; color: #334155; line-height: 1.6; font-style: italic;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <!-- Process Timeline -->
              <div class="timeline" style="width: 100%; margin: 50px 0;">
                <div class="timeline-step" style="text-align: center; background: #f8f9fa; padding: 25px; margin-bottom: 15px; border-radius: 8px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px;">1</div>
                  <div style="color: #212529; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Received</div>
                  <div style="color: #6c757d; font-size: 15px;">Message logged</div>
                </div>
                <div class="timeline-step" style="text-align: center; background: #f8f9fa; padding: 25px; margin-bottom: 15px; border-radius: 8px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px;">2</div>
                  <div style="color: #212529; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Reviewing</div>
                  <div style="color: #6c757d; font-size: 15px;">Analyzing request</div>
                </div>
                <div class="timeline-step" style="text-align: center; background: #f8f9fa; padding: 25px; margin-bottom: 15px; border-radius: 8px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px;">3</div>
                  <div style="color: #212529; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Response</div>
                  <div style="color: #6c757d; font-size: 15px;">Within 24 hours</div>
                </div>
              </div>
              
              <!-- Profile Section -->
              <div class="profile-container" style="background: #f8f9fa; padding: 30px; margin: 50px 0; border-radius: 8px; text-align: center;">
                <div style="width: 90px; height: 90px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 36px; font-weight: 700;">N</div>
                <div style="color: #212529; font-size: 22px; font-weight: 700; margin-bottom: 8px;">Nitesh Kumar Sharma</div>
                <div style="color: #6c757d; font-size: 17px; margin-bottom: 30px;">Full Stack Developer</div>
                <div style="text-align: left; display: inline-block; width: 100%; max-width: 300px;">
                  <div style="color: #495057; font-size: 16px; display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                    <span style="font-size: 20px;">📧</span>
                    <span>${
                      process.env.OWNER_EMAIL ||
                      "niteshkumarsharma9648@gmail.com"
                    }</span>
                  </div>
                  <div style="color: #495057; font-size: 16px; display: flex; align-items: center; gap: 12px;">
                    <span style="font-size: 20px;">🌐</span>
                    <span>Available for remote opportunities</span>
                  </div>
                </div>
              </div>
              
              <!-- Response Message -->
              <div style="text-align: center; margin: 50px 0;">
                <p style="color: #495057; font-size: 17px; line-height: 1.6; padding: 0 10px;">
                  I'll review your message carefully and get back to you within 
                  <span style="color: #0ea5e9; font-weight: 600;"> 24 hours</span>.
                  In the meantime, feel free to explore more of my work on my portfolio.
                </p>
              </div>
              
              <!-- Social Links -->
              <div style="text-align: center; margin: 50px 0;">
                <div style="color: #6c757d; font-size: 16px; margin-bottom: 20px;">Connect with me:</div>
                <div class="social-icons" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                  <a href="https://www.linkedin.com/in/nitesh-kumar-sharma-2894a1185/" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #0077b5; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">in</a>
                  <a href="https://www.facebook.com/niteshsharma.sharma.796" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #1877f2; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">f</a>
                  <a href="https://www.instagram.com/niteshsharma_99/" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d); border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">ig</a>
                  <a href="https://github.com/niteshkumarsharma" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #333; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">gh</a>
                  <a href="https://devcraftnitesh.vercel.app" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">P</a>
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div class="footer" style="background: #f8f9fa; padding: 30px 20px; text-align: center; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0; padding: 0 10px;">
                This is an automated confirmation email. Please don't reply to this message.<br>
                For direct inquiries, contact me at: ${
                  process.env.OWNER_EMAIL || "niteshkumarsharma9648@gmail.com"
                }
              </p>
              <div style="color: #adb5bd; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
                <span>🕐</span>
                <span>${formattedDate} at ${formattedTime}</span>
              </div>
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
