const express = require("express");
require("express-async-errors");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
const port = 8000;
// app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGO_URI;
mongoose.connect(mongoUrl);

app.get("/", (req, res) => {
  res.send(`Heyy`);
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
