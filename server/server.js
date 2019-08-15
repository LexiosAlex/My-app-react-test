import express from "express";
import bodyParser from "body-parser";

import "./connection/connection.js";
import productRouter from "./routers/productRouter.js"
import categoriesRouter from "./routers/categoriesRouter.js"
import userRouter from "./routers/userRouter.js"

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(productRouter);
server.use(categoriesRouter);
server.use(userRouter);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
