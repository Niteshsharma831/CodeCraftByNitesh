const HireRequest = require("../models/HireRequest");
const sendMail = require("../utils/mailer"); // import sendMail

// POST: create hire request
const createHireRequest = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to DB
    const hireRequest = new HireRequest({ name, email, message });
    await hireRequest.save();

    // 1️⃣ Email to portfolio owner
    try {
      await sendMail(process.env.EMAIL_USER, "New Hire Request", {
        type: "ownerNotification",
        name,
        email,
        message,
      });
      console.log("✅ Owner notification mail sent");
    } catch (err) {
      console.error("❌ Failed to send owner mail:", err);
    }

    // 2️⃣ Email to user
    try {
      await sendMail(email, "Thank You for Contacting Me!", {
        type: "userThankYou",
        name,
        message,
      });
      console.log("✅ Thank-you mail sent to user");
    } catch (err) {
      console.error("❌ Failed to send user mail:", err);
    }

    res.status(201).json({
      message: "Hire request submitted successfully",
      hireRequest,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
