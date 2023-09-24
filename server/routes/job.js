const express = require("express");
const { uploadFields } = require("../middlewares/multer");
const { postData } = require("../controllers/jobs");
const router = express.Router();

router.post("/info-data", uploadFields, postData);

module.exports = router;
