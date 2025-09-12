// routes/hireRoutes.js
const express = require("express");
const {
  createHireRequest,
  getHireRequests,
} = require("../controllers/hireController");

const router = express.Router();
router.post("/", createHireRequest);
router.get("/", getHireRequests);

module.exports = router;
