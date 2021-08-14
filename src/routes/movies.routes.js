const express = require("express");
const controller = require("../controller/movies.controller");
const router = express.Router()

router.get("/", controller.getAllMovies);
router.post("/add", controller.postMovie);



module.exports = router;