const express = require("express");
require("express-async-errors");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.js");
const jobRouter = require("./routes/job.js");
const adminRouter = require("./routes/admin.js");
const homeRouter = require("./routes/home.js");
const nodemailer = require("nodemailer");

const app = express();
require("dotenv").config();
const port = 8000;
app.use(
  express.urlencoded({
    extended: true,
  })
);

const mongoUrl = process.env.MONGO_URI;
mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(port, () => console.log(`Server is listening on port ${port}!`));
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/jobs", jobRouter);
app.use("/admin", adminRouter);
app.use("/home", homeRouter);

app.get("/", (req, res) => {
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "vickykumar50786@gmail.com",
  //     pass: "lwreaffjccutdbes",
  //   },
  // });

  // var mailOptions = {
  //   from: "vickykumar50786@gmail.com",
  //   to: "vishnu1549.be21@chitkara.edu.in",
  //   subject: "wkesjfiesdhjm",
  //   text: "lskejhdtoerlkshvteishjiterk,smxhv ehri tekrdjt khersdi hsi h",
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     res.send(error);
  //   } else {
  //     res.send(info);
  //   }
  // });
  res.send(`Heyy`);
});
