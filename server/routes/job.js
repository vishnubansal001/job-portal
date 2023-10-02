const express = require("express");
const { uploadFields } = require("../middlewares/multer");
const { postData } = require("../controllers/jobs");
const { validate } = require("../models/jobs");
const router = express.Router();

router.post("/info-data", uploadFields, validate, postData);

module.exports = router;
