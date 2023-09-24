const Applications = require("../models/applicationInformation");
const { sendError } = require("../utils/utils");

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await Applications.find();
    return res.json({ news: allUsers });
  } catch (error) {
    return sendError(res, "Internal Server Error", 500);
  }
};
