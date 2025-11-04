const HireRequest = require("../models/HireRequest");
const sendMail = require("../utils/mailer.js");

// ✅ POST: Create Hire Request
const createHireRequest = async (req, res) => {
  try {
    const { name, email, message, to } = req.body;

    // Validate required fields
    if (!name || !email || !message || !to) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Save the request in MongoDB
    const hireRequest = new HireRequest({ name, email, message });
    await hireRequest.save();

    // ✅ Respond to frontend immediately
    res.status(201).json({
      success: true,
      message: "Hire request received successfully!",
    });

    // ✅ Send notification email to dynamic recipient (from body)
    sendMail(to, "New Hire Request Received", {
      type: "ownerNotification",
      name,
      email,
      message,
    })
      .then(() => console.log("✅ Notification mail sent to:", to))
      .catch((err) => console.error("❌ Failed to send owner mail:", err));

    // ✅ Send thank-you email to the user
    sendMail(email, "Thank You for Contacting Me!", {
      type: "userThankYou",
      name,
      message,
    })
      .then(() => console.log("✅ Thank-you mail sent to user:", email))
      .catch((err) => console.error("❌ Failed to send user mail:", err));
  } catch (error) {
    console.error("❌ Error creating hire request:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// ✅ GET: Retrieve All Hire Requests
const getHireRequests = async (req, res) => {
  try {
    const requests = await HireRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createHireRequest, getHireRequests };
