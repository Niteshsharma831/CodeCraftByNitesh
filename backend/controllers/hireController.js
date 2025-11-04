const HireRequest = require("../models/HireRequest");
const sendMail = require("../utils/mailer");

const createHireRequest = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save request to DB
    const hireRequest = new HireRequest({ name, email, message });
    await hireRequest.save();

    // ✅ Respond immediately
    res.status(201).json({
      message: "Hire request submitted successfully",
      hireRequest,
    });

    // 📧 Send emails in background (non-blocking)
    (async () => {
      try {
        await sendMail(process.env.EMAIL_USER, "New Hire Request", {
          type: "ownerNotification",
          name,
          email,
          message,
        });
        console.log("✅ Owner notification sent");
      } catch (err) {
        console.error("❌ Owner email failed:", err);
      }

      try {
        await sendMail(email, "Thank You for Contacting Me!", {
          type: "userThankYou",
          name,
          message,
        });
        console.log("✅ Thank-you mail sent");
      } catch (err) {
        console.error("❌ User email failed:", err);
      }
    })();

  } catch (error) {
    console.error("❌ Hire request error:", error);
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

module.exports = { createHireRequest };
