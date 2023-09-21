const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  forgetPassword,
  resetPassword,
  sendResetPasswordTokenStatus,
} = require("../controllers/user");
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
router.post("/resend-email-verification-token", resendEmailVerificationToken);
router.post(
  "/verify-pass-reset-token",
  isValidPassResetToken,
  sendResetPasswordTokenStatus
);

module.exports = router;
