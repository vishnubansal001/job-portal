const express = require("express");
const { getAllUsers, updatePosts, makeCsv } = require("../controllers/admin");
const router = express.Router();

router.get("/all-users", getAllUsers);
router.get("/get-csv", makeCsv);
router.post("/update-post", updatePosts);

module.exports = router;
