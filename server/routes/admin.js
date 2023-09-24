const express = require("express");
const { getAllUsers } = require("../controllers/admin");
const router = express.Router();

router.post("/all-users", getAllUsers);

module.exports = router;
