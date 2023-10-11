const Applications = require("../models/applicationInformation");
const cloudinary = require("../cloud/cloudinary");
const { sendError } = require("../utils/utils");
const { addPageToExistingPDF } = require("../utils/pdflib");
const { validationResult } = require("express-validator");

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

    const date = resume.filename.split("-")[1].split(".")[0];

    const url = await addPageToExistingPDF({
      imageUrl: pictureUrl,
      user: userData,
      date,
    });
    // console.log("URL:", ));

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
      resume: url,
    });
    data.save();
    return res.status(200).json({ message: "Info Data saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: error });
  }
};
