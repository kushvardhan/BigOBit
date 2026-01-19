const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const BadRequest = require("../errors/badRequest.error");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Problem controller is alive",
        error: {},
        data: {},
    });
}

async function addProblem(req, res, next) {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            throw new BadRequest("body", {
                reason: "Request body cannot be empty",
            });
        }

        const problem = await problemService.createProblem(req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: problem,
        });
    } catch (err) {
        next(err);
    }
}

async function getProblem(req, res, next) {
    try {
        const { id } = req.params;

        if (!id) {
            throw new BadRequest("id", {
                reason: "Problem id is required",
            });
        }

        const problem = await problemService.getProblem(id);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched the problem",
            error: {},
            data: problem,
        });
    } catch (err) {
        next(err);
    }
}

async function getProblems(req, res, next) {
    try {
        const problems = await problemService.getProblems();

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched all problems",
            error: {},
            data: problems,
        });
    } catch (err) {
        next(err);
    }
}

async function updateProblem(req, res, next) {
    try {
        const { id } = req.params;

        if (!id) {
            throw new BadRequest("id", {
                reason: "Problem id is required",
            });
        }

        if (!req.body || Object.keys(req.body).length === 0) {
            throw new BadRequest("body", {
                reason: "Update body cannot be empty",
            });
        }

        const updatedProblem =
            await problemService.updateProblem(id, req.body);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully updated the problem",
            error: {},
            data: updatedProblem,
        });
    } catch (err) {
        next(err);
    }
}

async function deleteProblem(req, res, next) {
    try {
        const { id } = req.params;

        if (!id) {
            throw new BadRequest("id", {
                reason: "Problem id is required",
            });
        }

        const deletedProblem =
            await problemService.deleteProblem(id);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully deleted the problem",
            error: {},
            data: deletedProblem,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
};
