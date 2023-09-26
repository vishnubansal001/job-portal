const Applications = require("../models/applicationInformation");
const Jobs = require("../models/jobs");
const { sendError } = require("../utils/utils");
const path = require("path");
const papaparse = require("papaparse");
const fs = require("fs");
// const jobs = require("../models/jobs");

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await Applications.find();

    const data = allUsers.map((item, index) => ({
      index: index + 1,
      name: item.firstName + " " + item.lastName,
      email: item.email,
      mobile: item.mobile,
      address: `${item.street} (${item.zip}), ${item.city}, ${item.state}, ${item.country}`,
      linkedIn: item.linkedIn,
      github: item.github,
    }));
    const csv = papaparse.unparse(data);
    const fileName = "users.csv";
    const filePath = path.join(__dirname, "..", "uploads", fileName);

    fs.writeFileSync(filePath, csv);

    return res.json({ news: allUsers });
  } catch (error) {
    console.log(error);
    return sendError(res, "Internal Server Error", 500);
  }
};

exports.updatePosts = async (req, res) => {
  try {
    const { jobs } = req.body;
    await Jobs.countDocuments({})
      .then((count) => {
        if (count > 0) {
          Jobs.deleteMany({});
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const newJobs = new Jobs({
      jobs: jobs,
    });

    await newJobs.save();

    return res.status(200).json({ message: "New Jobs Added Successfully" });
  } catch (error) {
    console.log(error);
    return sendError(res, "Server Error!", 500);
  }
};
