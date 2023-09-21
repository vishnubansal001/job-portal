const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const { sendError } = require("../utils/utils");

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

  // const jwtToken = jwt.sign({ userId: _id }, process.env.JWT_SECRET);

  res.json({
    user: { id: _id, name, email, role },
  });
};
