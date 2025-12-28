require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const hireRoutes = require("./routes/hireRoutes");

const app = express();

// ✅ --- CORS MIDDLEWARE (MUST BE FIRST) ---
app.use((req, res, next) => {
  // Allow all origins during development
  // For production, replace '*' with your specific frontend URL
  const allowedOrigin = "*"; // Change to "https://devcraftnitesh.vercel.app" for production
  
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Max-Age", "86400"); // 24 hours
  
  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  next();
});

// ✅ --- Body Parsing Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ --- MongoDB Connection ---
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/PortFolioDb";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(`✅ MongoDB connected [${process.env.NODE_ENV || "dev"}]`))
.catch(err => {
  console.error("❌ MongoDB connection failed:", err.message);
  process.exit(1);
});

// ✅ --- Routes ---
app.use("/api/hirerequests", hireRoutes);

// ✅ --- Test Route (for debugging) ---
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "✅ Backend API is working!",
    timestamp: new Date().toISOString(),
    origin: req.headers.origin || "No origin header",
    cors: "Enabled",
    endpoints: {
      hireRequests: "POST /api/hirerequests",
      test: "GET /api/test",
    }
  });
});

// ✅ --- Simple POST test endpoint ---
app.post("/api/test-post", (req, res) => {
  res.json({
    success: true,
    message: "✅ POST request successful!",
    data: req.body,
    timestamp: new Date().toISOString()
  });
});

// ✅ --- Health Check ---
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "🚀 Portfolio API is running",
    timestamp: new Date().toISOString(),
    cors: "Enabled",
    environment: process.env.NODE_ENV || "development"
  });
});

// ✅ --- Error Handling ---
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({
    success: false,
    error: "Internal Server Error"
  });
});

// ✅ --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  🚀 Server running on port ${PORT}
  🌍 Environment: ${process.env.NODE_ENV || "development"}
  🔗 Local URL: http://localhost:${PORT}
  🔗 Test GET: http://localhost:${PORT}/api/test
  🔗 Test POST: http://localhost:${PORT}/api/test-post
  🔗 Hire Endpoint: http://localhost:${PORT}/api/hirerequests
  `);
});