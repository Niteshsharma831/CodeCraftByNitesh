require("dotenv").config();
const sendMail = require("./utils/mailer");

(async () => {
  try {
    await sendMail(
      "nr671682@gmail.com", // your email to test
      "Test Email from Portfolio",
      "This is a test email to check SMTP"
    );
    console.log("Mail sent successfully");
  } catch (err) {
    console.error("Mail failed:", err);
  }
})();
