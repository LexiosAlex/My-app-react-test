import express from "express";
import { productsData, categories } from "./db/db.js";
const server = express();
server.get("/api/products", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "productsData retrieved successfully",
    productsData: productsData
  });
});

server.get("/api/categories", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "categories retrieved successfully",
    productsData: categories
  });
});
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
