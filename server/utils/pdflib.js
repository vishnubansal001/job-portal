const axios = require("axios");
const fs = require("fs");
const { PDFDocument, rgb } = require("pdf-lib");
const admin = require("firebase-admin");
const path = require("path");
const serviceAccount = require("../firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://job-portal-2d63d.appspot.com",
});

async function addPageToExistingPDF({imageUrl, user, date}) {
  // Load existing PDF
  const existingPdfBytes = fs.readFileSync(`./uploads/resume-${date}.pdf`);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const imageResponse = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });

  const imageBytes = Buffer.from(imageResponse.data);
  const image = await pdfDoc.embedPng(imageBytes);

  // Create a new page
  const [width, height] = [600, 800];
  const newPage = pdfDoc.insertPage(0, [width, height]);

  // Add image to the new page
  newPage.drawImage(image, {
    x: width / 2,
    y: height / 2,
    width: 100,
    height: 100,
  });

  // Add text to the new page
  const textOptions = {
    size: 12,
    color: rgb(0, 0, 0),
  };

  const textLines = [
    `Name: ${user.name}`,
    `Roll Number: ${user.roll}`,
    `Email: ${user.email}`,
    `Phone Number: ${user.mobile}`,
    `Branch: ${user.branch}`,
    `Year: ${user.year}`,
    `Address: ${user.address}`,
    `Applied For: ${user.job}`,
    `Github: ${user.github}`,
    `LinkedIn: ${user.linkedIn}`,
  ];

  textLines.forEach((line, index) => {
    newPage.drawText(line, {
      x: 50,
      y: height - 50 - index * 20,
      ...textOptions,
    });
  });

  // Save the modified PDF
  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(`./download/modified-${date}.pdf`, modifiedPdfBytes);
  fs.unlink(`./uploads/resume-${date}.pdf`);
  const filePath = path.join(
    __dirname,
    "..",
    "download",
    `modified-${date}.pdf`
  );
  const fileName = `modified-${date}.pdf`;
  const bucket = admin.storage().bucket();
  const blob = bucket.file(fileName);
  const blobStream = blob.createWriteStream({
    resumable: false,
    metadata: {
      contentType: "application/pdf",
    },
  });
  fs.createReadStream(filePath)
    .on("error", (error) => {
      res.status(500).json({ error: "Unable to read the file." });
    })
    .pipe(blobStream);
  blobStream.on("error", (error) => {
    res.status(500).json({ error: "Unable to upload the file." });
  });

  blobStream.on("finish", async () => {
    await blob
      .getSignedUrl({
        action: "read",
        expires: new Date().getTime() + 24 * 6000000 * 100,
      })
      .then(([url]) => {
        fs.unlink(`./download/modified-${date}.pdf`);
        return url;
      });
  });
}

module.exports = {
  addPageToExistingPDF,
};
