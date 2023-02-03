const express = require("express");
const router = express.Router();
const ctrl = require("./mail.ctrl");

router.post("/", ctrl.mail.send);

module.exports = router;
