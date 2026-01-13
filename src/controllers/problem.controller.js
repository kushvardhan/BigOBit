const {StatusCodes} = require('http-status-codes');

function pingProblemController(req,res){
        return res.status(StatusCodes.ACCEPTED).json({msg:"FROM /api/v1/problems PINGPROBLEMCONTROLLER."});
}

function addProblem(req,res){
        return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"FROM /api/v1/problems ROUTE"});
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"FROM /api/v1/problems ROUTE"});
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"FROM /api/v1/problems ROUTE"});
}

function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"FROM /api/v1/problems ROUTE"});
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"FROM /api/v1/problems ROUTE"});
}

module.exports={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}