const express = require("express");
const router = express.Router();
const { createHireRequest, getHireRequests } = require("../controllers/hireController");

// ✅ POST: Create Hire Request
router.post("/", createHireRequest);

// ✅ GET: Retrieve All Hire Requests
router.get("/", getHireRequests);

module.exports = router;