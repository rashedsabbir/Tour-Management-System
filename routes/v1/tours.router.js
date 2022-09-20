const express = require("express");
const router = express.Router();

//get all tours
const getAllTours = require("../../controller/tours/getAllTours");

//Post tours
const createTour = require("../../controller/tours/createTours");
router.route("/").get(getAllTours).post(createTour);

//get trending tour
const getTrending = require("../../controller/tours/getTrending");
router.route("/trending").get(getTrending);

//get cheapest tour
const getCheapest = require("../../controller/tours/getCheapest");
router.route("/cheapest").get(getCheapest);

//get one tour by id
const getOneTourById = require("../../controller/tours/getOneTourById");
router.route("/:id").get(getOneTourById);

module.exports = router;