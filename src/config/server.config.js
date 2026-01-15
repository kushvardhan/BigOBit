require('dotenv').config();

module.exports={
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV || "development",
}