const express = require("express");
const { getAllUsers, updatePosts } = require("../controllers/admin");
const router = express.Router();

router.get("/all-users", getAllUsers);
router.post("/update-post", updatePosts);

module.exports = router;
