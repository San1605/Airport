const express = require("express");
const { airplaneControllers } = require("../../controllers");
const { airplaneMiddlewares } = require("../../middlewares");

const Router = express.Router();
console.log("inside airplanes routes")
Router.post("/", airplaneMiddlewares.validateModelNUmber, airplaneControllers.createAirplane)

module.exports = Router 