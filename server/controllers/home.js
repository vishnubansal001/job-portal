const Jobs = require("../models/jobs");

exports.getJobs = async (req, res) => {
  try {
    const firstJob = await Jobs.find();

    if (firstJob.length !== 0) {
      return res.json({ jobs: firstJob[0].jobs });
    } else {
      return res.json({ jobs: [] });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
