const express = require("express");
const router = express.Router();

//get all tours
const getAllTours = require("../../controller/tours/getAllTours");
//Post tours
const createTour = require("../../controller/tours/createTours");
router.route("/").get(getAllTours).post(createTour);


module.exports = router;