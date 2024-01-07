const express = require("express");
const Router = express.Router();
const v1Routes = require("./V1/index")

Router.use("/v1", v1Routes)
console.log("inside api routes")

module.exports = Router