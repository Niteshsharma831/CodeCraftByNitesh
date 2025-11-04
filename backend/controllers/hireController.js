const HireRequest = require("../models/HireRequest");
const sendMail = require("../utils/mailer.js");

// POST: create hire request (optimized for speed)
const createHireRequest = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Save request in MongoDB
    const hireRequest = new HireRequest({ name, email, message });
    await hireRequest.save();

    // ✅ Respond immediately (non-blocking)
    res.status(201).json({
      success: true,
      message: "Hire request received successfully!",
    });

    // ✅ Send emails in background (non-blocking)
    // Owner Notification
    sendMail(process.env.EMAIL_USER, "New Hire Request", {
      type: "ownerNotification",
      name,
      email,
      message,
    })
      .then(() => console.log("✅ Owner notification mail sent"))
      .catch((err) => console.error("❌ Failed to send owner mail:", err));

    // User Thank-You Mail
    sendMail(email, "Thank You for Contacting Me!", {
      type: "userThankYou",
      name,
      message,
    })
      .then(() => console.log("✅ Thank-you mail sent to user"))
      .catch((err) => console.error("❌ Failed to send user mail:", err));
  } catch (error) {
    console.error("❌ Error creating hire request:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// GET: retrieve all hire requests
const getHireRequests = async (req, res) => {
  try {
    const requests = await HireRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createHireRequest, getHireRequests };
