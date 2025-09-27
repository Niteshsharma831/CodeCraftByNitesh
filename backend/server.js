const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const hireRoutes = require("./routes/hireRoutes");

const app = express();

// ✅ CORS setup for both localhost & live site
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite
      "http://localhost:3000", // CRA
      "https://codecraftbynitesh.onrender.com", // Render backend
      "https://your-frontend-domain.com", // (optional: if you deploy frontend separately)
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ MongoDB connection
const MONGO_URI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI // live connection string from Render env
    : "mongodb://127.0.0.1:27017/PortFolioDb"; // local DB for dev

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`✅ MongoDB connected (${process.env.NODE_ENV || "dev"})`)
  )
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api/hirerequests", hireRoutes);

// ✅ Health route for testing/warming up
app.get("/", (req, res) => {
  res.send("🚀 Portfolio API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
