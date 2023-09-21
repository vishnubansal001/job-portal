const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/user");
const {
  userValidator,
  validate,
  signInValidator,
} = require("../middlewares/user");

router.post("/sign-up", userValidator, validate, signUp);
router.post("/sign-in", signInValidator, validate, signIn);

module.exports = router;
