const express = require("express");
const router = express.Router();
const { signUp, signIn, forgetPassword } = require("../controllers/user");
const {
  userValidator,
  validate,
  signInValidator,
  validatePassword,
} = require("../middlewares/user");
const { isValidPassResetToken } = require("../middlewares/validatePass");

router.post("/sign-up", userValidator, validate, signUp);
router.post("/sign-in", signInValidator, validate, signIn);
router.post("/forget-password", forgetPassword);
router.post(
  "/reset-password",
  validatePassword,
  validate,
  isValidPassResetToken,
  resetPassword
);

module.exports = router;
