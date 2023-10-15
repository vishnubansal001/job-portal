const Applications = require("../models/applicationInformation");
const User = require("../models/user");
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
    const id = req.query.id;
    const user = await User.find({_id:id});
    
    if(!user){
      return sendError(res, "User Not Found", 404);
    }
    
    if(!user.isVerified || user.role!=="admin"){
      return sendError(res, "User Not Authorized", 401);
    }
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
    const { jobs,id } = req.body;

    const user = await User.find({_id:id});
    // console.log(req.body);

    if(!user){
      return sendError(res, "User Not Found", 404);
    }

    if(!user.isVerified || user.role!=="admin"){
      return sendError(res, "User Not Authorized", 401);
    }

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
    const { id } = req.body;

    const user = await User.find({_id:id});
    // console.log(req.body);

    if(!user){
      return sendError(res, "User Not Found", 404);
    }

    if(!user.isVerified || user.role!=="admin"){
      return sendError(res, "User Not Authorized", 401);
    }

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
    const fileName = "users.csv";
    fs.writeFileSync(`/tmp/${fileName}`, csv);

    const bucket = admin.storage().bucket();
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: "application/csv",
      },
    });

    fs.createReadStream('/tmp/users.csv')
      .on("error", (error) => {
        console.log(error);
      })
      .pipe(blobStream);
    blobStream.on("error", (error) => {
      console.log(error);
    });

    blobStream.on("finish", async () => {
      await blob
        .getSignedUrl({
          action: "read",
          expires: new Date().getTime() + 24 * 6000000 * 100,
        })
        .then(([url]) => {
          fs.unlink('/tmp/users.csv', () => {
            console.log("done");
          });
          return res.status(200).json({ url: url });
        });
    });
  } catch (error) {
    console.log(error);
    return sendError(res, error.message, 500);
  }
};
