const express = require("express");
const router = express.Router();
const User = require("./models/User");

// Register Route
router.post("/register", (req, res) => {
  // handle registration logic
});

// Login Route
router.post("/login", (req, res) => {
  // handle login logic
});

// Logout Route
router.get("/logout", (req, res) => {
  // handle logout logic
});

// Profile Route
router.get("/profile", (req, res) => {
  // handle profile logic
});

module.exports = router;
