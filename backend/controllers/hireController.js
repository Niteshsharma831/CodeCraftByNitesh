const HireRequest = require("../models/HireRequest");
const sendMail = require("../utils/mailer.js");

// ✅ POST: Create Hire Request
const createHireRequest = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Default recipient (your email from env)
    const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER || "niteshkumarsharma831@gmail.com";

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required: name, email, message",
      });
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address",
      });
    }

    // Validate message length
    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: "Message should be at least 10 characters",
      });
    }

    // ✅ Save the request in MongoDB
    const hireRequest = new HireRequest({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await hireRequest.save();

    // ✅ Respond to frontend immediately
    res.status(201).json({
      success: true,
      message: "Hire request received successfully! I'll get back to you soon.",
      data: {
        id: hireRequest._id,
        name: hireRequest.name,
        email: hireRequest.email,
        createdAt: hireRequest.createdAt,
      },
    });

    // ✅ Send emails in background (don't await for response)
    sendEmailsInBackground(hireRequest, ownerEmail);

  } catch (error) {
    console.error("❌ Error creating hire request:", error.message);

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
      error: "Internal Server Error",
    });
  }
};

// Background email sending function
const sendEmailsInBackground = async (hireRequest, ownerEmail) => {
  try {
    console.log("📧 Attempting to send emails...");
    
    // Send notification to owner
    await sendMail({ 
      name: hireRequest.name, 
      email: hireRequest.email, 
      message: hireRequest.message, 
      to: ownerEmail 
    });
    console.log(`✅ Notification sent to owner: ${ownerEmail}`);

    // Send confirmation to user
    await sendMail({
      name: hireRequest.name,
      email: hireRequest.email,
      message: hireRequest.message,
      to: hireRequest.email,
    });
    console.log(`✅ Thank-you email sent to: ${hireRequest.email}`);
    
  } catch (emailError) {
    console.error("❌ Email sending failed:", emailError.message);
    // Don't throw error - emails failing shouldn't affect the request
  }
};

// ✅ GET: Retrieve All Hire Requests
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
    console.error("❌ Error fetching hire requests:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to fetch hire requests",
    });
  }
};

module.exports = { createHireRequest, getHireRequests };