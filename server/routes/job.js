const express = require("express");
const { uploadFields } = require("../middlewares/multer");
const { postData } = require("../controllers/jobs");
const {
  validateFormInput,
  validateFormInputMiddleware,
} = require("../middlewares/jobs");
const router = express.Router();

router.post(
  "/info-data",
  uploadFields,
  validateFormInput,
  validateFormInputMiddleware,
  postData
);

module.exports = router;
