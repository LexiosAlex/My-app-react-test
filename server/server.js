import express from "express";
import {
  queryStringProductsParser,
  getMax,
  changeProductInArray,
  deleteProduct,
  deleteCategory,
  carryDeletedCategoryProducts
} from "./helpers/helpers.js";
import bodyParser from "body-parser";
// import db from "../src/db/db.js";
const server = express();
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb+srv://Agent070:1234567890@myapptestcluster-rhaak.mongodb.net/test?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/api/products", (req, res) => {
  console.log(req.query);
  res.status(200).send({
    success: "true",
    message: "productsData retrieved successfully",
    productsData: queryStringProductsParser(req.query, db.productsData)
  });
});

server.get("/api/categories", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "categories retrieved successfully",
    categoriesData: db.categories
  });
});

server.post("/api/products/create", (req, res) => {
  console.log(req.body);
  if (!req.body.categoryId) {
    return res.status(400).send({
      success: "false",
      message: "category is required"
    });
  } else if (!req.body.name) {
    return res.status(400).send({
      success: "false",
      message: "name is required"
    });
  } else if (!req.body.wholePrice) {
    return res.status(400).send({
      success: "false",
      message: "wholePrice is required"
    });
  } else if (!req.body.price) {
    return res.status(400).send({
      success: "false",
      message: "price is required"
    });
  }
  const product = {
    id: getMax(db.productsData, "id") + 1,
    key: getMax(db.productsData, "id") + 1,
    categoryId: req.body.categoryId,
    name: req.body.name,
    wholePrice: req.body.wholePrice,
    price: req.body.price
  };

  db.productsData.push(product);
  return res.status(201).send({
    success: "true",
    message: "product added successful",
    product
  });
});

server.post("/api/categories/create", (req, res) => {
  console.log(req.body);
  if (!req.body.categoryName) {
    return res.status(400).send({
      success: "false",
      message: "name of category is required"
    });
  }
  const category = {
    categoryId: getMax(db.categories, "categoryId") + 1,
    categoryName: req.body.categoryName
  };

  db.categories.push(category);
  return res.status(201).send({
    success: "true",
    message: "category added successful",
    categories: db.categories
  });
});

server.put("/api/product/change", (req, res) => {
  console.log(req.body);
  if (!req.body.id) {
    return res.status(400).send({
      success: "false",
      message: "id of product is required"
    });
  } else if (!req.body.categoryId) {
    return res.status(400).send({
      success: "false",
      message: "id of category is required"
    });
  } else if (!req.body.name) {
    return res.status(400).send({
      success: "false",
      message: "name is required"
    });
  } else if (!req.body.wholePrice) {
    return res.status(400).send({
      success: "false",
      message: "wholePrice is required"
    });
  } else if (!req.body.price) {
    return res.status(400).send({
      success: "false",
      message: "price is required"
    });
  }

  db.productsData = changeProductInArray(req.body, db.productsData);

  return res.status(201).send({
    success: "true",
    message: "product changed successful"
  });
});

server.delete("/api/product/delete", (req, res) => {
  console.log(req.query);
  if (!req.query.id) {
    return res.status(400).send({
      success: "false",
      message: "id of product is required"
    });
  }

  db.productsData = deleteProduct(req.query.id, db.productsData);

  return res.status(201).send({
    success: "true",
    message: "product deleted successful"
  });
});

server.delete("/api/category/delete", (req, res) => {
  console.log(req.query);
  if (!req.query.categoryId) {
    return res.status(400).send({
      success: "false",
      message: "id of category is required"
    });
  }

  console.log(deleteCategory(req.query.categoryId, db.categories));
  db.categories = deleteCategory(req.query.categoryId, db.categories);
  db.productsData = carryDeletedCategoryProducts(
    req.query.categoryId,
    db.productsData
  );

  return res.status(201).send({
    success: "true",
    message: "category deleted successful"
  });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
