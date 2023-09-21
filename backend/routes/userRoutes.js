const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

// one way of writing route
router.route("/").post(registerUser);

// //another way of writing route
router.post("/login", authUser);

module.exports = router;
