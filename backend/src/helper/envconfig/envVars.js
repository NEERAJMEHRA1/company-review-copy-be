
import dotenv from "dotenv";
dotenv.config();

const envVars = {
    NODE_ENV: "localhost",
    DB_NAME: "companies_information",
    DB_HOST: 3000,
    DB_PORT: 27017,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRE: process.env.JWT_EXPIRE,
    IMAGE_ACCESS_URL: "https://company-review-copy-be.onrender.com/",
    MONGO_DB_URI: "mongodb+srv://neerajmehra448:Neeraj%40123@cluster0.biiynon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
};
export default envVars;
