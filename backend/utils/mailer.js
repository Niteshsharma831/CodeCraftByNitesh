// const nodemailer = require("nodemailer");

// // Create reusable transporter
// const createTransporter = () => {
//   return nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });
// };

// const sendMail = async ({ name, email, message, to }) => {
//   try {
//     // Validate inputs
//     if (!name || !email || !message || !to) {
//       console.error("Missing required fields for email:", {
//         name,
//         email,
//         message,
//         to,
//       });
//       throw new Error("Missing required fields for email");
//     }

//     const transporter = createTransporter();

//     // Check if sending to owner or user
//     const isNotificationToOwner = to !== email;

//     // Professional subject lines
//     const subject = isNotificationToOwner
//       ? `📬 New Contact Request: ${name}`
//       : `✨ Thank You, ${name}! - Message Received`;

//     // Get current date and time
//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleDateString("en-US", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//     const formattedTime = currentDate.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });

//     // Professional HTML templates
//     const htmlContent = isNotificationToOwner
//       ? `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>New Contact Request</title>
//           <style>
//             @media only screen and (min-width: 600px) {
//               .container {
//                 max-width: 600px !important;
//                 margin: 20px auto !important;
//                 border-radius: 10px !important;
//               }
//               .header {
//                 padding: 60px 40px !important;
//               }
//               .content {
//                 padding: 40px !important;
//               }
//               .footer {
//                 padding: 40px !important;
//               }
//               .contact-grid {
//                 display: flex !important;
//                 gap: 20px !important;
//               }
//               .contact-card {
//                 flex: 1 !important;
//                 margin-bottom: 0 !important;
//               }
//               .social-icons {
//                 gap: 20px !important;
//               }
//               .social-icon {
//                 width: 45px !important;
//                 height: 45px !important;
//                 font-size: 18px !important;
//               }
//               .action-button {
//                 width: auto !important;
//                 padding: 18px 50px !important;
//               }
//             }

//             @media only screen and (max-width: 599px) {
//               .header h1 {
//                 font-size: 24px !important;
//               }
//               .header p {
//                 font-size: 15px !important;
//               }
//               .contact-card div:last-child {
//                 font-size: 18px !important;
//               }
//               .message-content {
//                 max-height: 250px !important;
//               }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); line-height: 1.6; color: #333;">
//           <!-- Main Container -->
//           <div class="container" style="width: 100%; min-height: 100vh; background: white;">

//             <!-- Header -->
//             <div class="header" style="background: linear-gradient(135deg, #1a237e 0%, #283593 100%); padding: 50px 20px; text-align: center; color: white;">
//               <div style="font-size: 48px; margin-bottom: 20px;">📨</div>
//               <h1 style="margin: 0; font-size: 28px; font-weight: 700; padding: 0 10px;">New Contact Request</h1>
//               <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px; padding: 0 10px;">Someone has reached out via your portfolio website</p>
//             </div>

//             <!-- Content -->
//             <div class="content" style="padding: 30px 20px;">

//               <!-- Contact Info -->
//               <div style="margin-bottom: 40px;">
//                 <div class="contact-grid" style="width: 100%;">
//                   <div class="contact-card" style="background: #f8f9fa; padding: 25px; margin-bottom: 15px; border-left: 5px solid #667eea; border-radius: 0 8px 8px 0;">
//                     <div style="color: #6c757d; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">👤 From</div>
//                     <div style="color: #212529; font-size: 20px; font-weight: 600; word-break: break-word;">${name}</div>
//                   </div>
//                   <div class="contact-card" style="background: #f8f9fa; padding: 25px; border-left: 5px solid #764ba2; border-radius: 0 8px 8px 0;">
//                     <div style="color: #6c757d; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">📧 Email Address</div>
//                     <div style="color: #212529; font-size: 20px; font-weight: 600; word-break: break-all;">${email}</div>
//                   </div>
//                 </div>
//               </div>

//               <!-- Message -->
//               <div style="background: #f8f9fa; padding: 25px; margin: 40px 0; border-radius: 8px;">
//                 <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap;">
//                   <div style="color: #495057; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
//                     <span>💬</span> Message
//                   </div>
//                   <span style="background: #28a745; color: white; padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-top: 5px;">NEW</span>
//                 </div>
//                 <div class="message-content" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #dee2e6; color: #495057; line-height: 1.6; max-height: 300px; overflow-y: auto;">
//                   ${message.replace(/\n/g, "<br>")}
//                 </div>
//               </div>

//               <!-- Action Button -->
//               <div style="text-align: center; margin: 50px 0;">
//                 <a href="mailto:${email}" class="action-button" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 18px 40px; border-radius: 10px; font-weight: 600; font-size: 18px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); width: 100%; max-width: 300px;">
//                   ✉️ Reply to ${name.split(" ")[0]}
//                 </a>
//               </div>

//               <!-- Social Links -->
//               <div style="text-align: center; margin: 50px 0;">
//                 <div style="color: #6c757d; font-size: 16px; margin-bottom: 20px;">Connect with me:</div>
//                 <div class="social-icons" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
//                   <a href="https://www.linkedin.com/in/nitesh-kumar-sharma-2894a1185/" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #0077b5; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">in</a>
//                   <a href="https://www.facebook.com/niteshsharma.sharma.796" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #1877f2; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">f</a>
//                   <a href="https://www.instagram.com/niteshsharma_99/" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d); border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">ig</a>
//                   <a href="https://github.com/niteshkumarsharma" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #333; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">gh</a>
//                 </div>
//               </div>

//             </div>

//             <!-- Footer -->
//             <div class="footer" style="background: #f8f9fa; padding: 30px 20px; text-align: center; border-top: 1px solid #dee2e6;">
//               <p style="color: #6c757d; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0; padding: 0 10px;">
//                 This notification was automatically sent from your portfolio contact form.<br>
//                 The sender will be expecting your response within 24 hours.
//               </p>
//               <div style="color: #adb5bd; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
//                 <span>🕐</span>
//                 <span>${formattedDate} at ${formattedTime}</span>
//               </div>
//             </div>

//           </div>
//         </body>
//         </html>
//       `
//       : `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Thank You Message</title>
//           <style>
//             @media only screen and (min-width: 600px) {
//               .container {
//                 max-width: 600px !important;
//                 margin: 20px auto !important;
//                 border-radius: 10px !important;
//               }
//               .header {
//                 padding: 60px 40px !important;
//               }
//               .content {
//                 padding: 40px !important;
//               }
//               .footer {
//                 padding: 40px !important;
//               }
//               .timeline {
//                 display: grid !important;
//                 grid-template-columns: repeat(3, 1fr) !important;
//                 gap: 20px !important;
//               }
//               .timeline-step {
//                 margin-bottom: 0 !important;
//               }
//               .social-icons {
//                 gap: 20px !important;
//               }
//               .social-icon {
//                 width: 50px !important;
//                 height: 50px !important;
//                 font-size: 20px !important;
//               }
//               .profile-container {
//                 padding: 40px !important;
//               }
//             }

//             @media only screen and (max-width: 599px) {
//               .header h1 {
//                 font-size: 24px !important;
//               }
//               .header p {
//                 font-size: 15px !important;
//               }
//               .greeting h2 {
//                 font-size: 22px !important;
//               }
//               .timeline-step div:first-child {
//                 width: 45px !important;
//                 height: 45px !important;
//                 font-size: 18px !important;
//               }
//               .message-content {
//                 padding: 15px !important;
//               }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); line-height: 1.6; color: #333;">
//           <!-- Main Container -->
//           <div class="container" style="width: 100%; min-height: 100vh; background: white;">

//             <!-- Header -->
//             <div class="header" style="background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); padding: 50px 20px; text-align: center; color: white;">
//               <div style="font-size: 48px; margin-bottom: 20px;">✨</div>
//               <h1 style="margin: 0; font-size: 28px; font-weight: 700; padding: 0 10px;">Thank You, ${name}!</h1>
//               <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px; padding: 0 10px;">Your message has been received successfully</p>
//             </div>

//             <!-- Content -->
//             <div class="content" style="padding: 30px 20px;">

//               <!-- Greeting -->
//               <div class="greeting" style="text-align: center; margin-bottom: 40px;">
//                 <h2 style="color: #212529; font-size: 26px; font-weight: 700; margin: 0 0 15px 0;">Hello, ${name} 👋</h2>
//                 <p style="color: #495057; font-size: 17px; line-height: 1.6; margin: 0; padding: 0 10px;">
//                   Thank you for reaching out through my portfolio. I sincerely appreciate you taking the time to connect with me!
//                 </p>
//               </div>

//               <!-- Message Card -->
//               <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; margin: 40px 0; border-radius: 8px; border-left: 5px solid #0ea5e9;">
//                 <div style="color: #0369a1; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
//                   <span>📝</span> Your Message
//                 </div>
//                 <div class="message-content" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #bae6fd; color: #334155; line-height: 1.6; font-style: italic;">
//                   ${message.replace(/\n/g, "<br>")}
//                 </div>
//               </div>

//               <!-- Process Timeline -->
//               <div class="timeline" style="width: 100%; margin: 50px 0;">
//                 <div class="timeline-step" style="text-align: center; background: #f8f9fa; padding: 25px; margin-bottom: 15px; border-radius: 8px;">
//                   <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px;">1</div>
//                   <div style="color: #212529; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Received</div>
//                   <div style="color: #6c757d; font-size: 15px;">Message logged</div>
//                 </div>
//                 <div class="timeline-step" style="text-align: center; background: #f8f9fa; padding: 25px; margin-bottom: 15px; border-radius: 8px;">
//                   <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px;">2</div>
//                   <div style="color: #212529; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Reviewing</div>
//                   <div style="color: #6c757d; font-size: 15px;">Analyzing request</div>
//                 </div>
//                 <div class="timeline-step" style="text-align: center; background: #f8f9fa; padding: 25px; margin-bottom: 15px; border-radius: 8px;">
//                   <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0ea5e9, #3b82f6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px;">3</div>
//                   <div style="color: #212529; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Response</div>
//                   <div style="color: #6c757d; font-size: 15px;">Within 24 hours</div>
//                 </div>
//               </div>

//               <!-- Profile Section -->
//               <div class="profile-container" style="background: #f8f9fa; padding: 30px; margin: 50px 0; border-radius: 8px; text-align: center;">
//                 <div style="width: 90px; height: 90px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 36px; font-weight: 700;">N</div>
//                 <div style="color: #212529; font-size: 22px; font-weight: 700; margin-bottom: 8px;">Nitesh Kumar Sharma</div>
//                 <div style="color: #6c757d; font-size: 17px; margin-bottom: 30px;">Full Stack Developer</div>
//                 <div style="text-align: left; display: inline-block; width: 100%; max-width: 300px;">
//                   <div style="color: #495057; font-size: 16px; display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
//                     <span style="font-size: 20px;">📧</span>
//                     <span>${
//                       process.env.OWNER_EMAIL ||
//                       "niteshkumarsharma9648@gmail.com"
//                     }</span>
//                   </div>
//                   <div style="color: #495057; font-size: 16px; display: flex; align-items: center; gap: 12px;">
//                     <span style="font-size: 20px;">🌐</span>
//                     <span>Available for remote opportunities</span>
//                   </div>
//                 </div>
//               </div>

//               <!-- Response Message -->
//               <div style="text-align: center; margin: 50px 0;">
//                 <p style="color: #495057; font-size: 17px; line-height: 1.6; padding: 0 10px;">
//                   I'll review your message carefully and get back to you within
//                   <span style="color: #0ea5e9; font-weight: 600;"> 24 hours</span>.
//                   In the meantime, feel free to explore more of my work on my portfolio.
//                 </p>
//               </div>

//               <!-- Social Links -->
//               <div style="text-align: center; margin: 50px 0;">
//                 <div style="color: #6c757d; font-size: 16px; margin-bottom: 20px;">Connect with me:</div>
//                 <div class="social-icons" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
//                   <a href="https://www.linkedin.com/in/nitesh-kumar-sharma-2894a1185/" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #0077b5; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">in</a>
//                   <a href="https://www.facebook.com/niteshsharma.sharma.796" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #1877f2; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">f</a>
//                   <a href="https://www.instagram.com/niteshsharma_99/" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d); border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">ig</a>
//                   <a href="https://github.com/niteshkumarsharma" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: #333; border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">gh</a>
//                   <a href="https://devcraftnitesh.vercel.app" class="social-icon" style="display: inline-block; width: 50px; height: 50px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 50%; color: white; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">P</a>
//                 </div>
//               </div>

//             </div>

//             <!-- Footer -->
//             <div class="footer" style="background: #f8f9fa; padding: 30px 20px; text-align: center; border-top: 1px solid #dee2e6;">
//               <p style="color: #6c757d; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0; padding: 0 10px;">
//                 This is an automated confirmation email. Please don't reply to this message.<br>
//                 For direct inquiries, contact me at: ${
//                   process.env.OWNER_EMAIL || "niteshkumarsharma9648@gmail.com"
//                 }
//               </p>
//               <div style="color: #adb5bd; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
//                 <span>🕐</span>
//                 <span>${formattedDate} at ${formattedTime}</span>
//               </div>
//             </div>

//           </div>
//         </body>
//         </html>
//       `;

//     const mailOptions = {
//       from: {
//         name: isNotificationToOwner
//           ? "Portfolio Notification"
//           : "Nitesh Kumar Sharma",
//         address: process.env.EMAIL_USER,
//       },
//       to: to,
//       subject: subject,
//       html: htmlContent,
//       replyTo: isNotificationToOwner ? email : process.env.EMAIL_USER,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log(`✅ Professional email sent to ${to}`);
//     return info;
//   } catch (error) {
//     console.error("❌ Error sending email:", error.message);
//     throw error;
//   }
// };

// module.exports = sendMail;

// Production mailer disabled to prevent accidental emails during testing.
const nodemailer = require("nodemailer");

// Email service with debugging and multiple fallbacks
class EmailService {
  constructor() {
    this.transporter = null;
    this.isTestMode =
      process.env.NODE_ENV === "development" &&
      process.env.EMAIL_TEST_MODE === "true";
    this.init();
  }

  async init() {
    try {
      if (this.isTestMode) {
        console.log("🔧 Using TEST MODE - Emails will be logged to console");
        return;
      }

      console.log("🔧 Initializing email service...");

      // Check if we have email credentials
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("⚠️ Email credentials not found in environment variables");
        console.log("📝 To enable real emails, add to .env:");
        console.log("EMAIL_USER=your-email@gmail.com");
        console.log("EMAIL_PASS=your-app-password");
        console.log("⚠️ Using console output mode for emails");
        return;
      }

      // Try different configurations
      const configs = [
        {
          // Configuration 1: Gmail with App Password (Recommended)
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
        {
          // Configuration 2: Gmail with SSL
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        },
        {
          // Configuration 3: Gmail alternative settings
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        },
      ];

      // Try each configuration until one works
      for (let i = 0; i < configs.length; i++) {
        try {
          console.log(`🔄 Trying email configuration ${i + 1}...`);
          this.transporter = nodemailer.createTransport(configs[i]);

          // Test the connection
          await this.transporter.verify();
          console.log(`✅ Email configuration ${i + 1} successful!`);
          console.log(`📧 Connected as: ${process.env.EMAIL_USER}`);
          return;
        } catch (configError) {
          console.log(
            `❌ Configuration ${i + 1} failed: ${configError.message}`
          );

          // If all configurations fail, use test mode
          if (i === configs.length - 1) {
            console.error("❌ All email configurations failed");
            console.error("⚠️ Switching to console output mode");
            this.isTestMode = true;
          }
        }
      }
    } catch (error) {
      console.error("❌ Email service initialization failed:", error.message);
      console.log("⚠️ Using console output mode for emails");
      this.isTestMode = true;
    }
  }

  async sendMail({ name, email, message, to }) {
    try {
      console.log(`📧 Attempting to send email to: ${to}`);

      // Validate inputs
      if (!name || !email || !message || !to) {
        throw new Error(
          "Missing required fields: name, email, message, or recipient"
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error(`Invalid sender email: ${email}`);
      }
      if (!emailRegex.test(to)) {
        throw new Error(`Invalid recipient email: ${to}`);
      }

      // Check if sending to owner or user
      const isNotificationToOwner = to !== email;

      // Create subject
      const subject = isNotificationToOwner
        ? `📬 New Contact Request: ${name.substring(0, 20)}${
            name.length > 20 ? "..." : ""
          }`
        : `✨ Thank You, ${name.split(" ")[0]}! - Message Received`;

      // Create date/time
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

      // Create email content
      const emailContent = this.createEmailContent({
        isNotificationToOwner,
        name,
        email,
        message,
        formattedDate,
        formattedTime,
      });

      // If in test mode or no transporter, log to console
      if (this.isTestMode || !this.transporter) {
        return this.logEmailToConsole({
          to,
          subject,
          emailContent,
          isNotificationToOwner,
        });
      }

      // Send real email
      const mailOptions = {
        from: {
          name: isNotificationToOwner
            ? "Portfolio Notification"
            : "Nitesh Kumar Sharma",
          address: process.env.EMAIL_USER,
        },
        to: to,
        subject: subject,
        html: emailContent.html,
        text: emailContent.text,
        replyTo: isNotificationToOwner ? email : process.env.EMAIL_USER,
      };

      console.log(`📤 Sending email via SMTP to: ${to}`);
      const info = await this.transporter.sendMail(mailOptions);

      console.log(`✅ Email sent successfully to: ${to}`);
      console.log(`📫 Message ID: ${info.messageId}`);

      // In development, show preview URL if using test account
      if (
        process.env.NODE_ENV === "development" &&
        info.response.includes("ethereal.email")
      ) {
        console.log(`👁️ Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
      }

      return {
        success: true,
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info) || null,
        testMode: false,
      };
    } catch (error) {
      console.error("❌ Error in sendMail:", error.message);

      // Fallback to console logging
      console.log("🔄 Falling back to console output...");

      // Create a simple email content for console
      const isNotificationToOwner = to !== email;
      const emailContent = this.createEmailContent({
        isNotificationToOwner,
        name,
        email,
        message,
        formattedDate: new Date().toLocaleDateString(),
        formattedTime: new Date().toLocaleTimeString(),
      });

      return this.logEmailToConsole({
        to,
        subject: isNotificationToOwner
          ? "New Contact Request"
          : "Thank You Message",
        emailContent,
        isNotificationToOwner,
        error: error.message,
      });
    }
  }

  createEmailContent({
    isNotificationToOwner,
    name,
    email,
    message,
    formattedDate,
    formattedTime,
  }) {
    // Escape HTML to prevent XSS
    const escapeHtml = (text) => {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    if (isNotificationToOwner) {
      return {
        text: `NEW CONTACT REQUEST\n\nFrom: ${safeName}\nEmail: ${safeEmail}\nTime: ${formattedDate} at ${formattedTime}\n\nMessage:\n${safeMessage}\n\n---\nSent from portfolio contact form`,
        html: this.createOwnerNotificationHTML(
          safeName,
          safeEmail,
          safeMessage,
          formattedDate,
          formattedTime
        ),
      };
    } else {
      return {
        text: `THANK YOU FOR YOUR MESSAGE\n\nHello ${safeName},\n\nThank you for contacting me! I have received your message and will respond within 24 hours.\n\nYour message:\n${safeMessage}\n\nBest regards,\nNitesh Kumar Sharma`,
        html: this.createUserConfirmationHTML(
          safeName,
          safeMessage,
          formattedDate,
          formattedTime
        ),
      };
    }
  }

  createOwnerNotificationHTML(name, email, message, date, time) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
          .header { background: #4F46E5; color: white; padding: 30px 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .card { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          .button { background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>📬 New Contact Request</h1>
          <p>Someone reached out via your portfolio</p>
        </div>
        
        <div class="content">
          <div class="card">
            <h3>👤 Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${date} at ${time}</p>
          </div>
          
          <div class="card">
            <h3>💬 Message</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:${email}" class="button">✉️ Reply to ${
      name.split(" ")[0]
    }</a>
          </div>
        </div>
        
        <div class="footer">
          <p>This notification was automatically sent from your portfolio contact form.</p>
          <p>${date} at ${time}</p>
        </div>
      </body>
      </html>
    `;
  }

  createUserConfirmationHTML(name, message, date, time) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
          .header { background: #10B981; color: white; padding: 30px 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .card { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          .timeline { display: flex; justify-content: space-between; margin: 30px 0; }
          .step { text-align: center; flex: 1; padding: 15px; }
          .step-number { background: #10B981; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>✨ Thank You, ${name}!</h1>
          <p>Your message has been received successfully</p>
        </div>
        
        <div class="content">
          <div class="card">
            <h3>📝 Your Message</h3>
            <p><em>${message.replace(/\n/g, "<br>")}</em></p>
          </div>
          
          <div class="card">
            <h3>📋 What Happens Next</h3>
            <div class="timeline">
              <div class="step">
                <div class="step-number">1</div>
                <p><strong>Received</strong></p>
                <p style="font-size: 12px;">Message logged</p>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <p><strong>Reviewing</strong></p>
                <p style="font-size: 12px;">Analyzing request</p>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <p><strong>Response</strong></p>
                <p style="font-size: 12px;">Within 24 hours</p>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>👨‍💻 About Me</h3>
            <p><strong>Nitesh Kumar Sharma</strong></p>
            <p>Full Stack Developer</p>
            <p>Available for remote opportunities</p>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated confirmation email.</p>
          <p>${date} at ${time}</p>
        </div>
      </body>
      </html>
    `;
  }

  logEmailToConsole({
    to,
    subject,
    emailContent,
    isNotificationToOwner,
    error = null,
  }) {
    console.log("\n" + "=".repeat(60));
    console.log("📧 EMAIL LOG (Console Mode)");
    console.log("=".repeat(60));
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(
      `Type: ${
        isNotificationToOwner ? "Owner Notification" : "User Confirmation"
      }`
    );
    console.log(
      `Mode: ${error ? "Fallback (Error: " + error + ")" : "Test Mode"}`
    );
    console.log("-".repeat(60));
    console.log("TEXT VERSION:");
    console.log(emailContent.text);
    console.log("-".repeat(60));
    console.log("HTML version would be sent in production");
    console.log("=".repeat(60) + "\n");

    return {
      success: true,
      messageId: `console-${Date.now()}`,
      testMode: true,
      consoleOutput: emailContent.text,
      error: error,
    };
  }

  async sendContactEmails(contactData) {
    const { name, email, message } = contactData;

    console.log(`\n📧 Processing contact from: ${name} <${email}>`);

    try {
      // Validate
      if (!name || !email || !message) {
        throw new Error("Name, email, and message are required");
      }

      // Get owner email
      const ownerEmail =
        process.env.OWNER_EMAIL || process.env.EMAIL_USER || email;

      // Send both emails
      const [ownerResult, userResult] = await Promise.all([
        this.sendMail({
          name,
          email,
          message,
          to: ownerEmail,
        }),
        this.sendMail({
          name,
          email,
          message,
          to: email,
        }),
      ]);

      console.log(`✅ Contact processing complete`);
      console.log(
        `   Owner email: ${ownerResult.success ? "✓ Sent" : "✗ Failed"}`
      );
      console.log(
        `   User email: ${userResult.success ? "✓ Sent" : "✗ Failed"}`
      );

      return {
        success: true,
        ownerEmail: ownerResult,
        userEmail: userResult,
        testMode: ownerResult.testMode || userResult.testMode,
      };
    } catch (error) {
      console.error("❌ Failed to process contact:", error.message);
      throw error;
    }
  }

  // Test the email service
  async test() {
    console.log("\n🧪 Testing Email Service...");

    const testEmail = process.env.EMAIL_USER || "test@example.com";
    const testData = {
      name: "Test User",
      email: testEmail,
      message: "This is a test email from the portfolio contact system.",
    };

    try {
      const result = await this.sendContactEmails(testData);
      console.log("✅ Email service test completed");
      return result;
    } catch (error) {
      console.error("❌ Email service test failed:", error.message);
      throw error;
    }
  }
}

// Create singleton instance
const emailService = new EmailService();

// Export functions
module.exports = {
  // Singleton instance
  emailService,

  // Convenience functions
  sendMail: (params) => emailService.sendMail(params),
  sendContactEmails: (params) => emailService.sendContactEmails(params),
  testEmailService: () => emailService.test(),
};
