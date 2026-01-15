const {sanitizeMarkDownContent} = require("../utils");

class ProblemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try{
        problemData.description = sanitizeMarkDownContent(problemData.description);
        
        const problem = await this.problemRepository.createProblem(problemData);
        console.log("FROM service:",problem);
        return problem;
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async getProblem(problemId){
        try{
            const problem = await this.problemRepository.getProblem(problemId);
            console.log("FROM service:",problem);

            return problem;
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async getProblems(){
        try{
            const problems = await this.problemRepository.getProblems();
            console.log("FROM service:",problems);
            return problems;
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async deleteProblem(problemId) {
    try {
        const problem = await this.problemRepository.deleteProblem(problemId);
        console.log("FROM service:",problem);
        return problem;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


    async updateProblem(problemId, updateData) {
    try {
        if (updateData.description) {
            updateData.description = sanitizeMarkDownContent(updateData.description);
        }

        const updatedProblem =
            await this.problemRepository.updateProblem(problemId, updateData);
        console.log("FROM service:",updatedProblem);
        return updatedProblem;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

}

module.exports = ProblemService