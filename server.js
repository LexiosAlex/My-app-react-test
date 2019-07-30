import express from "express";
import queryStringProductsParser from "./src/backend/queryStringProductsParser.js";
import { productsData, categories } from "./src/db/db.js";
const server = express();
server.get("/api/products", (req, res) => {
  console.log(req.query);
  res.status(200).send({
    success: "true",
    message: "productsData retrieved successfully",
    productsData: queryStringProductsParser(req.query, productsData)
  });
});

server.get("/api/categories", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "categories retrieved successfully",
    categoriesData: categories
  });
});
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
