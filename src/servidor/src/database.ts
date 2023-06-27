import mongoose from "mongoose";
import config from "./config";
import { ConnectionOptions } from "tls";

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2`);
        console.log("Database is connected: ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
