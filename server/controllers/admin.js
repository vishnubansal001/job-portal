const Applications = require("../models/applicationInformation");
const Jobs = require("../models/jobs");
const { sendError } = require("../utils/utils");
const path = require("path");
const papaparse = require("papaparse");
const fs = require("fs");
const admin = require("firebase-admin");
const serviceAccount = require("../firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://job-portal-2d63d.appspot.com",
});

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await Applications.find();

    const data = allUsers.map((item) => ({
      name: item.firstName + " " + item.lastName,
      email: item.email,
      mobile: item.mobile,
      branch: item.branch,
      year: item.year,
      rollNumber: item.rollNumber,
      appliedFor: item.appliedFor,
      resume: item.resume,
    }));

    return res.json({ users: data });
  } catch (error) {
    console.log(error);
    return sendError(res, error.message, 500);
  }
};

exports.updatePosts = async (req, res) => {
  try {
    const { jobs } = req.body;
    // console.log(req.body);

    const newJobs = new Jobs({
      jobs: jobs,
    });

    await newJobs.save();

    return res.status(200).json({ message: "New Jobs Added Successfully" });
  } catch (error) {
    console.log(error);
    return sendError(res, error.message, 500);
  }
};

exports.makeCsv = async (req, res) => {
  try {
    const allUsers = await Applications.find();

    const data = allUsers.map((item) => ({
      name: item.firstName + " " + item.lastName,
      email: item.email,
      mobile: item.mobile,
      branch: item.branch,
      year: item.year,
      rollNumber: item.rollNumber,
      appliedFor: item.appliedFor,
      github: item.github,
      linkedIn: item.linkedIn,
      address:
        item.street +
        ", " +
        item.city +
        ", (" +
        item.zip +
        ") ," +
        item.state +
        ", " +
        item.country,
    }));

    const csv = papaparse.unparse(data);
    res.setHeader("Content-Disposition", "attachment; filename=users.csv");
    res.setHeader("Content-Type", "application/csv");
    res.status(200).send(csv);
  } catch (error) {
    console.log(error);
    return sendError(res, error.message, 500);
  }
};
