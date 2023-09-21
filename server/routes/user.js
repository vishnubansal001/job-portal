const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  forgetPassword,
  resetPassword,
  sendResetPasswordTokenStatus,
  resendEmailVerificationToken,
  verifyEmail,
} = require("../controllers/user");
const {
  userValidator,
  validate,
  signInValidator,
  validatePassword,
} = require("../middlewares/user");
const { isValidPassResetToken } = require("../middlewares/validatePass");
const { isAuth } = require("../middlewares/auth");

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
router.post("/verify-email", verifyEmail);
router.post("/resend-email-verification-token", resendEmailVerificationToken);
router.post(
  "/verify-pass-reset-token",
  isValidPassResetToken,
  sendResetPasswordTokenStatus
);
router.get("/is-auth", isAuth, (req, res) => {
  const { user } = req;
  res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      isVerified: user.isVerified,
      role: user.role,
    },
  });
});

module.exports = router;
