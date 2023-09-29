const Applications = require("../models/applicationInformation");
const cloudinary = require("../cloud/cloudinary");
const { sendError } = require("../utils/utils");
const { addPageToExistingPDF } = require("../utils/pdflib");

exports.postData = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      number,
      street,
      rollNumber,
      branch,
      year,
      state,
      city,
      zip,
      country,
      linkedIn,
      github,
      appliedFor,
    } = req.body;
    console.log(req);
    const picture = req.files["picture"][0];
    const resume = req.files["resume"][0];

    if (!picture || !resume) {
      return sendError(res, "No File Provided!", 500);
    }
    const pictureRes = await cloudinary.uploader.upload(picture.path);

    const userData = {
      name: firstName + " " + lastName,
      roll: rollNumber,
      email: email,
      mobile: number,
      address:
        street + ", " + city + ", (" + zip + ") ," + state + ", " + country,
      branch: branch,
      year: year,
      appliedFor: appliedFor,
      github: github,
      linkedIn: linkedIn,
    };

    const pictureUrl = pictureRes.secure_url;
    const date = Date.now();

    const resumeUrl = addPageToExistingPDF({
      imageUrl: pictureUrl,
      user: userData,
      date: date,
    });

    const data = new Applications({
      firstName,
      lastName,
      email,
      mobile: number,
      rollNumber,
      branch,
      year,
      street,
      state,
      city,
      zip,
      country,
      linkedIn,
      github,
      appliedFor,
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
