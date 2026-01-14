const {StatusCodes} = require('http-status-codes');
const NotImplementedError = require('../errors/notImplemented.error');
const BadRequest = require('../errors/badRequest.error');

function pingProblemController(req,res){
        return res.status(StatusCodes.ACCEPTED).json({msg:"FROM /api/v1/problems PINGPROBLEMCONTROLLER."});
}

function addProblem(req,res,next){
    try{
        // Nothing is implemented Yet
        throw new BadRequest('Problem Name',{missing:["Problem Name"]});
    }catch(err){
        console.log("Error: ", err);
        next(err);
    }
}

function getProblem(req,res,next){
    try{
        // Nothing is implemented Yet
        throw new NotImplementedError("getProblem");
    }catch(err){
        console.log("Error: ", err);
        next(err);
    }}

function getProblems(req,res,next){
    try{
        // Nothing is implemented Yet
        throw new NotImplementedError("getProblems");
    }catch(err){
        console.log("Error: ", err);
        next(err);
    }}

function updateProblem(req,res,next){
    try{
        // Nothing is implemented Yet
        throw new NotImplementedError("updateProblem");
    }catch(err){
        console.log("Error: ", err);
        next(err);
    }}

function deleteProblem(req,res,next){
    try{
        // Nothing is implemented Yet
        throw new NotImplementedError("deleteProblem");
    }catch(err){
        console.log("Error: ", err);
        next(err);
    }}

module.exports={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}