const HireRequest = require("../models/HireRequest");
const sendMail = require("../utils/mailer.js");

// ✅ POST: Create Hire Request
const createHireRequest = async (req, res) => {
  try {
    // 🔥 SAFE BODY HANDLING (fixes your error)
    const { name, email, message } = req.body || {};

    console.log("📥 Incoming Body:", req.body);

    // Default recipient
    const ownerEmail =
      process.env.OWNER_EMAIL ||
      process.env.EMAIL_USER ||
      "niteshkumarsharma831@gmail.com";

    // ❌ Validate body exists
    if (!req.body) {
      return res.status(400).json({
        success: false,
        error: "Request body is missing",
      });
    }

    // ❌ Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required: name, email, message",
      });
    }

    // ❌ Validate email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address",
      });
    }

    // ❌ Validate message length
    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: "Message should be at least 10 characters",
      });
    }

    // ✅ Save to MongoDB
    console.log("💾 Saving to DB...");
    const hireRequest = new HireRequest({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await hireRequest.save();
    console.log("✅ Saved to DB");

    // ✅ Response to frontend
    res.status(201).json({
      success: true,
      message: "Hire request received successfully!",
      data: {
        id: hireRequest._id,
        name: hireRequest.name,
        email: hireRequest.email,
        createdAt: hireRequest.createdAt,
      },
    });

    // ✅ Send emails in background (non-blocking)
    sendEmailsInBackground(hireRequest, ownerEmail);
  } catch (error) {
    console.error("❌ FULL ERROR:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: Object.values(error.errors)
          .map((err) => err.message)
          .join(", "),
      });
    }

    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
};

// ✅ Background email sending
const sendEmailsInBackground = async (hireRequest, ownerEmail) => {
  try {
    console.log("📧 Attempting to send emails...");

    // Send to owner
    await sendMail({
      name: hireRequest.name,
      email: hireRequest.email,
      message: hireRequest.message,
      to: ownerEmail,
    });

    console.log(`✅ Notification sent to owner: ${ownerEmail}`);

    // Send to user
    await sendMail({
      name: hireRequest.name,
      email: hireRequest.email,
      message: hireRequest.message,
      to: hireRequest.email,
    });

    console.log(`✅ Thank-you email sent to: ${hireRequest.email}`);
  } catch (emailError) {
    console.error("❌ Email sending failed:", emailError.message);
  }
};

// ✅ GET: All Hire Requests
const getHireRequests = async (req, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const skip = (page - 1) * limit;

    const filter = {};
    if (status && ["pending", "read", "replied", "archived"].includes(status)) {
      filter.status = status;
    }

    const requests = await HireRequest.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select("-__v");

    const total = await HireRequest.countDocuments(filter);

    res.json({
      success: true,
      data: requests,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("❌ FULL ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createHireRequest, getHireRequests };
