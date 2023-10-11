const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp/");
  },
  filename: function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, file.fieldname + "-" + Date.now() + `.${file.mimetype.split("/")[1]}`);
    } else {
      cb(null, file.fieldname + "-" + Date.now() + ".pdf");
    }
  },
});

const imageFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Unsupported file type"), false); // Reject the file
  }
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
