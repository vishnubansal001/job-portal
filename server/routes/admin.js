const express = require("express");
const { getAllUsers, updatePosts, makeCsv } = require("../controllers/admin");
const router = express.Router();

router.get("/all-users/:userId", getAllUsers);
router.get("/get-csv/:userId",  makeCsv);
router.post("/update-posts",  updatePosts);

module.exports = router;
