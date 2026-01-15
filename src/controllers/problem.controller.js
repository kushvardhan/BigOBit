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
        console.log("FROM Controller:",newProblem);
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

async function getProblem(req,res,next){
    try{
        const { id } = req.params;

        const problem = await problemService.getProblem(id);
        console.log("FROM Controller:",problem);

        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully fetched a problem",
            error:{},
            data : problem,
        }) 

    }catch(err){
        console.log("Error: ", err);
        next(err);
    }}

async function getProblems(req,res,next){
    try{
        const problems = await problemService.getProblems();
        console.log("FROM Controller:",problems);

        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully fetched all problems",
            error:{},
            data : problems,
        }) 

    }catch(err){
        console.log("Error: ", err);
        next(err);
    }}

async function updateProblem(req, res, next) {
    try {
        const { id } = req.params;

        if (!id) {
            throw new BadRequest("id", "Problem ID is required");
        }

        const updatedProblem = await problemService.updateProblem(id, req.body);
        console.log("FROM Controller:",updatedProblem);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully updated the problem",
            error: {},
            data: updatedProblem,
        });

    } catch (err) {
        console.log("Error: ", err);
        next(err);
    }
}


async function deleteProblem(req, res, next) {
    try {
        const problem = await problemService.deleteProblem(req.params.id);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully deleted a problem",
            error: {},
            data: problem,
        });
    } catch (err) {
        console.log("Error: ", err);
        next(err);
    }
}


module.exports={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}