const express = require("express");
const { uploadFields } = require("../middlewares/multer");
const router = express.Router();

router.post("/info-data", uploadFields);

module.exports = router;
