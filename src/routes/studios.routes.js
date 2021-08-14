const express = require("express");
const controller = require("../controller/studios.controller");
const router = express.Router()

router.post("/add", controller.postStudio);

module.exports = router;