const {Problem} = require("../models");

class ProblemRepository{

    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title:problemData.title,
                description:problemData.description,
                testCases : (problemData.testCases) ? problemData.testCases : []
            });
            console.log("FROM REPO:",problem);
            return problem;
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async getProblem(problemId){
        try{
            const problem = await Problem.findById(problemId);
            console.log("FROM REPO:",problem);
            return problem;
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async getProblems(){
        try{
            const problems = await Problem.find();
            console.log("FROM REPO:",problems);
            return problems;
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async deleteProblem(problemId) {
    try {
        const problem = await Problem.findByIdAndDelete(problemId);
        console.log("FROM REPO:",problem);
        return problem;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


    async updateProblem(problemId, updateData) {
    try {
        const problem = await Problem.findByIdAndUpdate(
            problemId,
            updateData,
            {
                new: true,          // return updated doc
                runValidators: true
            }
        );
        console.log("FROM REPO:",problem);
        return problem;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


}

module.exports = ProblemRepository;