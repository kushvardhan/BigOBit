const mongoose = require('mongoose');
const { MONGO_URL, NODE_ENV } = require('./server.config');

async function connectDB(){
    try{
        if(NODE_ENV === 'development'){  
            await mongoose.connect(MONGO_URL);
        }
    }catch(err){
        console.log("ERROR CONNECTING WITH DB.");
        console.log(err);
    }
}

module.exports = connectDB;