const { StatusCodes } = require("http-status-codes")
const { airplaneServices } = require("../services")
const { errorResponse } = require("../utils/common/index");
const { successResponse } = require("../utils/common/index");

const createAirplane = async (req, res) => {
    try {
        const airplane = await airplaneServices.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        successResponse.data = airplane;
        return res.status(StatusCodes.CREATED)
            .json(successResponse)
    }
    catch (error) {
        errorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(errorResponse)
    }
}



module.exports = {
    createAirplane
}