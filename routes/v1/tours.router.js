const express = require("express");
const router = express.Router();

//Post tours
const createTour = require("../../controller/tours/createTours");
router.route("/").post(createTour);


module.exports = router;