const axios = require("axios");
const fs = require("fs");
const { PDFDocument, rgb } = require("pdf-lib");
const admin = require("firebase-admin");
const path = require("path");
const serviceAccount = require("../firebase.json");

async function addPageToExistingPDF({ imageUrl, user, date }) {
  // Load existing PDF
  const existingPdfBytes = fs.readFileSync(`/temp/resume-${date}.pdf`);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const imageResponse = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });

  const typeArr = imageUrl.split(".");
  const type = typeArr[typeArr.length - 1];
  const imageBytes = Buffer.from(imageResponse.data);
  let image;
  if (type == "jpg" || type == "jpeg") {
    image = await pdfDoc.embedJpg(imageBytes);
  } else if (type == "png") {
    image = await pdfDoc.embedPng(imageBytes);
  }
  // console.log(image)

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
  fs.writeFileSync(`/temp/modified-${date}.pdf`, modifiedPdfBytes);
  fs.unlink(`/temp/resume-${date}.pdf`, () => console.log("done"));
  const filePath = path.join(
    __dirname,
    "..",
    "download",
    `modified-${date}.pdf`
  );
  // console.log(filePath)
  const fileName = `modified-${date}.pdf`;
  const bucket = admin.storage().bucket();
  const blob = bucket.file(fileName);
  const blobStream = blob.createWriteStream({
    resumable: false,
    metadata: {
      contentType: "application/pdf",
    },
  });

  // console.log(blobStream)
  fs.createReadStream(filePath)
    .on("error", (error) => {
      console.log(error);
    })
    .pipe(blobStream);
  blobStream.on("error", (error) => {
    console.log(error);
  });

  blobStream.on("finish", () => {
    // console.log("sijdkx");
    console.log("done");
  });

  const uri = blob
    .getSignedUrl({
      action: "read",
      expires: new Date().getTime() + 24 * 6000000 * 100,
    })
    .then(([url]) => {
      // console.log(url);
      // fs.unlink(`./download/modified-${date}.pdf`, () => console.log("done"));
      return url;
    })
    .catch((err) => console.log(err));

  return uri;
}

module.exports = {
  addPageToExistingPDF,
};
