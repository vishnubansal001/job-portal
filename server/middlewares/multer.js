const multer = require("multer");

const storage = multer.diskStorage({});

const imageFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image")) {
    cb("Supported only image files!", false);
  }
  cb(null, true);
};

const pdfFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("application/pdf")) {
    cb("Supported only PDF files!", false);
  }
  cb(null, true);
};

const upload = multer({ storage });

exports.uploadFields = upload.fields([
  { name: "picture", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]);

exports.imageFileFilter = imageFileFilter;
exports.pdfFileFilter = pdfFileFilter;
