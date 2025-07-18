import mongoose from "mongoose";
import config from "../envconfig/envVars.js";

const dbUrl = `${config.MONGO_DB_URI}`;

console.log("dbURL: ", dbUrl)

/**
 * @Method MongoDB connection setup
 * @date 18-JULY-2025
 */
const connect = mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log("Error==>> ", error));

export default connect;