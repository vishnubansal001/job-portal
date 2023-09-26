const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  jobs: [],
});

module.exports = mongoose.model("Jobs", jobsSchema);
