// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const hireRoutes = require("./routes/hireRoutes");

const app = express();

// ✅ --- Middlewares ---
app.use(express.json());

// ✅ --- Optimized CORS Setup ---
const allowedOrigins = [
  "http://localhost:5173", // local vite
  "http://localhost:3000", // local CRA
  "https://codecraftbynitesh.onrender.com", // your backend on Render
  "https://devcraftnitesh.vercel.app", // your frontend live (update with your actual domain)
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// ✅ --- MongoDB Connection ---
const MONGO_URI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI
    : "mongodb://127.0.0.1:27017/PortFolioDb";

mongoose.set("strictQuery", false);

// Connect to DB once (avoid reconnecting per request)
mongoose
  .connect(MONGO_URI)
  .then(() =>
    console.log(
      `✅ MongoDB connected successfully [${process.env.NODE_ENV || "dev"}]`
    )
  )
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// ✅ --- Routes ---
app.use("/api/hirerequests", hireRoutes);

// ✅ --- Health Check Route ---
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "🚀 Portfolio API is running smoothly.",
  });
});

// ✅ --- Global Error Handler (Better Stability) ---
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ success: false, error: err.message });
});

// ✅ --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
