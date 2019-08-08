import express from "express";
import mongoose from "mongoose";
import {
  queryStringProductsParser,
  getMax,
  changeProductInArray,
  deleteProduct,
  deleteCategory,
  carryDeletedCategoryProducts
} from "./helpers/helpers.js";
import dotenv from "dotenv";

import CategoryModel from "../models/category.js";
import ProductModel from "../models/product.js";
import bodyParser from "body-parser";

const PRODUCTS_PER_PAGE = 10;
const WITHOUT_CATEGORY_ID = 0;

dotenv.config();
const server = express();

const devDbUrl = process.env.MONGOLAB_URI;

mongoose.connect(devDbUrl, { dbName: "testshop", useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/api/products", (req, res) => {
  console.log(req.query);
  ProductModel.find({ categoryId: req.query.categoryId })
    .limit(req.query.page * PRODUCTS_PER_PAGE)
    .exec((err, products) => {
      console.log(products);
      if (err) {
        res.send({
          success: "false",
          message: "cant get products"
        });
      }

      res.status(200).send({
        success: "true",
        message: "categories retrieved successfully",
        productsData: products
      });
    });
});

server.get("/api/categories", (req, res) => {
  CategoryModel.find({}, function(err, categories) {
    if (err) {
      res.send({
        success: "false",
        message: "cant get categories"
      });
    }
    res.status(200).send({
      success: "true",
      message: "categories retrieved successfully",
      categoriesData: categories
    });
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

  ProductModel.find({})
    .sort({ id: -1 })
    .limit(1)
    .exec((err, maxValueItem) => {
      if (err) {
        console.log(err);
        return res.status(400).send({
          success: "false",
          message: "something went wrong"
        });
      } else {
        const product = new ProductModel({
          _id: new mongoose.Types.ObjectId(),
          id: maxValueItem[0].id + 1,
          key: maxValueItem[0].id + 1,
          categoryId: req.body.categoryId,
          name: req.body.name,
          wholePrice: req.body.wholePrice,
          price: req.body.price
        });

        product
          .save()
          .then(result => {
            console.log(result);
            return res.status(201).send({
              success: "true",
              message: "products added successful",
              product
            });
          })
          .catch(err => {
            console.log(err);
            return res.status(400).send({
              success: "false",
              message: "something went wrong"
            });
          });
      }
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

  CategoryModel.find({})
    .sort({ categoryId: -1 })
    .limit(1)
    .exec((err, maxValueItem) => {
      if (err) {
        console.log(err);
        return res.status(400).send({
          success: "false",
          message: "something went wrong"
        });
      } else {
        const category = new CategoryModel({
          _id: new mongoose.Types.ObjectId(),
          categoryId: maxValueItem[0].categoryId + 1,
          categoryName: req.body.categoryName
        });

        category
          .save()
          .then(result => {
            console.log(result);
            return res.status(201).send({
              success: "true",
              message: "category added successful"
            });
          })
          .catch(err => {
            console.log(err);
            return res.status(400).send({
              success: "false",
              message: "something went wrong"
            });
          });
      }
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

  ProductModel.findOneAndUpdate(
    { id: req.body.id },
    {
      $set: {
        categoryId: req.body.categoryId,
        id: req.body.id,
        key: req.body.id,
        name: req.body.name,
        price: req.body.price,
        wholePrice: req.body.wholePrice
      }
    },
    { new: true }
  )
    .exec()
    .then(result => {
      console.log(result);
      return res.status(201).send({
        success: "true",
        message: "product changed successful"
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send({
        success: "false",
        message: err
      });
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

  ProductModel.deleteOne({ id: req.query.id })
    .exec()
    .then(result => {
      console.log(result);
      return res.status(201).send({
        success: "true",
        message: "product deleted successful"
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send({
        success: "false",
        message: err
      });
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

  ProductModel.updateMany(
    { categoryId: req.query.categoryId },
    { $set: { categoryId: WITHOUT_CATEGORY_ID } }
  ).exec().catch(err => {
    console.log(err);
    return res.status(500).send({
      success: "false",
      message: err
    });
  });
  CategoryModel.deleteOne({ categoryId: req.query.categoryId })
    .exec()
    .then(result => {
      console.log(result);
      return res.status(201).send({
        success: "true",
        message: "category deleted successful"
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send({
        success: "false",
        message: err
      });
    });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
