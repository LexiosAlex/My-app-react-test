import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import productRouter from "../routers/productRouter.js"
import categoriesRouter from "../routers/categoriesRouter.js"

dotenv.config();
const server = express();

const devDbUrl = process.env.MONGOLAB_URI;

mongoose.connect(devDbUrl, { dbName: "testshop", useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
// autoIncrement.initialize(mongoose.connection);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(productRouter);
server.use(categoriesRouter);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
