const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ValidationError extends BaseError {
    constructor(details = {}) {
        super(
            "ValidationError",
            StatusCodes.UNPROCESSABLE_ENTITY,
            "Validation failed",
            details
        );
    }
}

module.exports = ValidationError;
