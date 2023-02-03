const express = require("express");
const multer = require("multer");
const router = express.Router();

const { creat, get } = require("../controller/imgcontroller");

const upload = multer({ dest: "uploads/" });

router.route("/").post(upload.single("image"), creat);
// router.route("/").get(get);

module.exports = router;
