const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class UnAuthorized extends BaseError{
    constructor(details){
        super("UnAuthorizedError", StatusCodes.UNAUTHORIZED, `You are not allowed to excess this page`, {details});
    }
}


module.exports= UnAuthorized;