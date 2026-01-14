const {StatusCodes} = require('http-status-codes');
const  {ProblemService} = require('../services');
const {ProblemRepository} = require("../repositories");
const NotImplementedError = require('../errors/notImplemented.error');
const BadRequest = require('../errors/badRequest.error');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
        return res.status(StatusCodes.ACCEPTED).json({msg:"FROM /api/v1/problems PINGPROBLEMCONTROLLER."});
}

async function addProblem(req,res,next){
    try{
        const newProblem = await problemService.createProblem(req.body);
        
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully created a new problem",
            error:{},
            data : newProblem,
        })
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