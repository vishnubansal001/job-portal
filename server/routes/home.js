const { getJobs } = require("../controllers/home");
const express = require("express");
const router = express.Router();

router.get("/get-jobs", getJobs);

module.exports = router;