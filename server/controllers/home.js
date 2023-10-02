const Jobs = require("../models/jobs");

exports.getJobs = async (req, res) => {
  try {
    const firstJob = await Jobs.find();

    if (firstJob.length !== 0) {
      const result = firstJob[firstJob.length - 1]?.jobs?.map((item) => ({
        name: item.name,
        positions: item.positions,
      }));
      // console.log(result);
      return res.json({ jobs: result });
    } else {
      return res.json({ jobs: [] });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
