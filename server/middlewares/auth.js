const User = require("../models/user");
const { sendError } = require("../utils/helper");
const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {

  const token = req.headers?.authorization;
  if (!token) return sendError(res, "Invalid Token!");
  
  const jwtToken = token.split("Bearer ")[1];
  if (!jwtToken) return sendError(res, "Inavlid Token");
  const decode = jwt.verify(jwtToken, process.env.JWT_SECRET);
  const { userId } = decode;
  const user = await User.findById(userId);
  if (!user) sendError(res, "Invalid Token: User Not Found", 404);
  req.user = user;
  next();
};

exports.isAdmin = (req, res, next) => {
  const { user } = req;
  if (user.role !== "admin") return sendError(res, "Unauthorized Access");
  next();
};
