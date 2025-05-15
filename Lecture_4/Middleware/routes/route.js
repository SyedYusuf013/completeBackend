const express = require("express");
const router = express.Router();

// middlewares

// auth middleware
const auth = function (req, res, next) {
  console.log("I am inside auth wala middleware");

  // tumhari sahayata ke liye ek user add kr rha hoon
  req.user = { userId: 1, role: "student" };

  if (req.user) {
    // if a valid user is rthere in req, then proceed to next middleware
    next();
  } else {
    // if not a valid user
    res.json({
      success: false,
      message: "not a valid user",
    });
  }
};

// student middleware
const isStudent = function (req, res, next) {
  console.log("I am inside the student wale middleware");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access Denied, this route only for students",
    });
  }
};

// admin middleware
const isAdmin = function (req, res, next) {
  console.log("I am inside the admin wale middleware");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access Denied, this route only for admins",
    });
  }
};

// routes
router.get("/student", auth, isStudent, (req, res) => {
    console.log("I am inside student router")
    res.send("Student specific page")
})

router.get("/admin", auth, isAdmin, (req, res) => {
    console.log("I am inside admin router")
    res.send("Admin specific page")
})

module.exports = router;
