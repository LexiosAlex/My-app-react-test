import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const devDbUrl = process.env.MONGOLAB_URI;

mongoose.connect(devDbUrl, { dbName: "testshop", useNewUrlParser: true });
mongoose.Promise = global.Promise;
export const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "MongoDB connection error:"));
