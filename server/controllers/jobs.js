const Applications = require("../models/applicationInformation");
const cloudinary = require("../cloud/cloudinary");
const { sendError } = require("../utils/utils");

exports.postData = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      number,
      street,
      state,
      city,
      zip,
      country,
      linkedIn,
      github,
    } = req.body;
    console.log(req.files);
    const picture = req.files["picture"][0];
    const resume = req.files["resume"][0];

    if (!picture || !resume) {
      return sendError(res, "No File Provided!", 500);
    }
    const pictureRes = await cloudinary.uploader.upload(picture.path);
    const pdfRes = await cloudinary.uploader.upload(resume.path);

    const pictureUrl = pictureRes.secure_url;
    const resumeUrl = pdfRes.secure_url;

    const data = new Applications({
      firstName,
      lastName,
      email,
      mobile:number,
      street,
      state,
      city,
      zip,
      country,
      linkedIn,
      github,
      photo: pictureUrl,
      resume: resumeUrl,
    });

    await data.save();

    return res.status(200).json({ message: "Info Data saved successfully" });
  } catch (error) {
    console.log(error);
    return sendError(res, "Server Error!", 500);
  }
};
