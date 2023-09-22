const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// one way of writing route
router.route("/").post(registerUser).get(protect, allUsers);
// router.route("/").get(allUsers);

// //another way of writing route
router.post("/login", authUser);

module.exports = router;
