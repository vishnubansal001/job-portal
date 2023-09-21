const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const { sendError, generateRandomByte } = require("../utils/utils");
const PasswordResetToken = require("../models/passwordResetToken");
const EmailVerificationToken = require("../models/emailVerificationToken");
const { isValidObjectId } = require("mongoose");

exports.signUp = async (req, res) => {
  //   console.log("abc");
  const { name, email, password, confirmPassword } = req.body;
  //   console.log(req.body);
  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return sendError(res, "This email is already in use!");
  }
  if (password.trim() !== confirmPassword.trim()) {
    return sendError(res, "Confirm password and password don't match");
  }

  const emailDomain = email?.split("@")[1];

  if (emailDomain !== "chitkara.edu.in") {
    return sendError(res, "Please Enter Chitkara email address");
  }

  const newUser = new User({ name, email, password });
  await newUser.save();

  let OTP = generateOTP();

  const newEmailVerificationToken = new EmailVerificationToken({
    owner: newUser._id,
    token: OTP,
  });

  await newEmailVerificationToken.save();

  res.status(201).json({
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  });
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "Email/Password mismatch!");

  const matched = await user.comparePassword(password);
  if (!matched) return sendError(res, "Email/Password mismatch!");

  const { _id, name, role } = user;

  const jwtToken = jwt.sign({ userId: _id }, process.env.JWT_SECRET);

  res.json({
    user: { id: _id, name, token: jwtToken, email, role },
  });
};

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) return sendError(res, "email is missing!");

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "User not found!", 404);

  const alreadyHasToken = await PasswordResetToken.findOne({ owner: user._id });
  if (alreadyHasToken)
    return sendError(
      res,
      "Only after one hour you can request for another token!"
    );

  const token = await generateRandomByte();
  const newPasswordResetToken = await PasswordResetToken({
    owner: user._id,
    token,
  });
  await newPasswordResetToken.save();

  // const resetPasswordUrl = `http://localhost:3000/auth/reset-password?token=${token}&id=${user._id}`;

  // const transport = generateMailTransporter();

  // transport.sendMail({
  //   from: "security@reviewapp.com",
  //   to: user.email,
  //   subject: "Reset Password Link",
  //   html: `
  //     <p>Click here to reset password</p>
  //     <a href='${resetPasswordUrl}'>Change Password</a>
  //   `,
  // });

  res.json({ message: "Link sent to your email!" });
};

exports.resetPassword = async (req, res) => {
  const { newPassword, userId } = req.body;

  const user = await User.findById(userId);
  const matched = await user.comparePassword(newPassword);
  if (matched)
    return sendError(
      res,
      "The new password must be different from the old one!"
    );

  user.password = newPassword;
  await user.save();

  await PasswordResetToken.findByIdAndDelete(req.resetToken._id);

  // const transport = generateMailTransporter();

  // transport.sendMail({
  //   from: "security@reviewapp.com",
  //   to: user.email,
  //   subject: "Password Reset Successfully",
  //   html: `
  //     <h1>Password Reset Successfully</h1>
  //     <p>Now you can use new password.</p>

  //   `,
  // });

  res.json({
    message: "Password reset successfully, now you can use new password.",
  });
};

exports.sendResetPasswordTokenStatus = (req, res) => {
  res.json({ valid: true });
};

exports.verifyEmail = async (req, res) => {
  const { userId, OTP } = req.body;

  if (!isValidObjectId(userId)) return sendError(res, "Invalid user!");

  const user = await User.findById(userId);
  if (!user) return sendError(res, "user not found!", 404);

  if (user.isVerified) return sendError(res, "user is already verified!");

  const token = await EmailVerificationToken.findOne({ owner: userId });
  if (!token) return sendError(res, "token not found!");

  const isMatched = await token.compareToken(OTP);
  if (!isMatched) return sendError(res, "Please submit a valid OTP!");

  user.isVerified = true;
  await user.save();

  await EmailVerificationToken.findByIdAndDelete(token._id);

  //   var transport = generateMailTransporter();

  //   transport.sendMail({
  //     from: "verification@reviewapp.com",
  //     to: user.email,
  //     subject: "Welcome Email",
  //     html: "<h1>Welcome to our app and thanks for choosing us.</h1>",
  //   });
  const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      token: jwtToken,
      isVerified: user.isVerified,
      role: user.role,
    },
    message: "Your email is verified.",
  });
};
