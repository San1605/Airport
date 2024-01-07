const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");

function validateModelNUmber(req, res, next) {
    if (!req.body.modelNumber) {
        errorResponse.error = { explanation: "modelNUmber not found" };
        errorResponse.message = "Something went wrong"
        return res.status(StatusCodes.BAD_REQUEST)
            .json(errorResponse)
    }
    next();
}

module.exports = {
    validateModelNUmber
}