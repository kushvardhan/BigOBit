const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base.error");

function errorHandler(err, req, res, next) {
    // Known / Custom errors
    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details || {},
            data: {}, // no data on error
        });
    }

    // Log unexpected errors (IMPORTANT)
    console.error("UNHANDLED ERROR:", err);

    // Unknown / system errors
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong !!",
        error: {},
        data: {}, // no data on error
    });
}

module.exports = errorHandler;
