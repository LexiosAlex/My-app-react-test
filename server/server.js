import express from "express";
import bodyParser from "body-parser";

import "./connection/connection.js";
import productRouter from "./routers/productRouter.js"
import categoriesRouter from "./routers/categoriesRouter.js"

const server = express();

// autoIncrement.initialize(mongoose.connection);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(productRouter);
server.use(categoriesRouter);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
