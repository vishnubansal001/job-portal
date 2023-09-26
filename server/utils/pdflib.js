const axios = require("axios");
const fs = require("fs");
const { PDFDocument, rgb } = require("pdf-lib");

async function addPageToExistingPDF(imageUrl, user) {
  // Load existing PDF
  const existingPdfBytes = fs.readFileSync("./uploads/resume.pdf");
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
    `Date: ${user.date}`,
    `Address: ${user.address}`,
    `Roll Number: ${user.roll}`,
    `Email: ${user.email}`,
    `Applied For: ${user.job}`,
    `Phone Number: ${user.mobile}`,
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
  fs.writeFileSync("./download/modified.pdf", modifiedPdfBytes);
  fs.unlink("./uploads/resume.pdf");
  const filePath = path.join(__dirname, "..", "download", "modified.pdf");
  const fileName = "modified.pdf";
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
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    console.log(publicUrl);
  });
}

module.exports = {
  addPageToExistingPDF,
};
