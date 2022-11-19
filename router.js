const express = require("express");
var bodyparser = require("body-parser");
const router = express.Router();

const { getMessage } = require("./controllers/messageController");
const { showMessage } = require("./controllers/showmsgController");

const fs = require("fs");

// router.get("/", getCV);
// router.get("/formdata", editCV);
router.get("/message", getMessage);
router.post("/message", showMessage);

module.exports = router;
