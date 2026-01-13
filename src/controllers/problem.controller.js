function pingProblemController(req,res){
        return res.json({msg:"FROM /api/v1/problems PINGPROBLEMCONTROLLER."});
}

function addProblem(req,res){
    
}

function getProblem(req,res){

}

function getProblems(req,res){
    return res.json({msg:"FROM /api/v1/problems ROUTE"});
}

function updateProblem(req,res){

}

function deleteProblem(req,res){

}

module.exports={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}