const { sanitizeMarkDownContent } = require("../utils");

const NotFoundError = require("../errors/notFound.error");
const ValidationError = require("../errors/validation.error");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        const errors = {};

        if (!problemData.title) {
            errors.title = "Title is required";
        }

        if (!problemData.description) {
            errors.description = "Description is required";
        }

        if (Object.keys(errors).length > 0) {
            throw new ValidationError(errors);
        }

        problemData.description =
            sanitizeMarkDownContent(problemData.description);

        return await this.problemRepository.createProblem(problemData);
    }

    async getProblem(problemId) {
        const problem =
            await this.problemRepository.getProblem(problemId);

        if (!problem) {
            throw new NotFoundError("Problem", {
                problemId,
            });
        }

        return problem;
    }

    async getProblems() {
        return await this.problemRepository.getProblems();
    }

    async updateProblem(problemId, updateData) {
        if (updateData.description) {
            updateData.description =
                sanitizeMarkDownContent(updateData.description);
        }

        const updatedProblem =
            await this.problemRepository.updateProblem(
                problemId,
                updateData
            );

        if (!updatedProblem) {
            throw new NotFoundError("Problem", {
                problemId,
            });
        }

        return updatedProblem;
    }

    async deleteProblem(problemId) {
        const deletedProblem =
            await this.problemRepository.deleteProblem(problemId);

        if (!deletedProblem) {
            throw new NotFoundError("Problem", {
                problemId,
            });
        }

        return deletedProblem;
    }
}

module.exports = ProblemService;
