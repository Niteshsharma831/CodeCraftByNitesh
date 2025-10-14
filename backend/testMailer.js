require("dotenv").config();
const sendMail = require("./utils/mailer");

(async () => {
  try {
    await sendMail("niteshkumarsharma831@gmail.com", "Test Mail", {
      type: "userThankYou",
      name: "Test User",
      message: "This is a test message",
    });
    console.log("✅ Test mail sent successfully");
  } catch (err) {
    console.error("❌ Test mail failed:", err);
  }
})();
