const express = require("express");
const { getAllUsers, updatePosts, makeCsv } = require("../controllers/admin");
const { isAdmin } = require("../middlewares/auth");
const router = express.Router();

router.get("/all-users/:userId", getAllUsers);
router.get("/get-csv/:userId",  makeCsv);
router.post("/update-post", isAdmin, updatePosts);

module.exports = router;
