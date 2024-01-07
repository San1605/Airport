const express = require("express");
const { airplaneControllers } = require("../../controllers");
const airplaneRoutes = require("./airplaneRoutes")

const Router = express.Router();
console.log("inside v1 routes")

Router.use("/airplanes", airplaneRoutes)

module.exports = Router