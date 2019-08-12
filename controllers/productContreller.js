import ProductModel from "../models/product";
import mongoose from "mongoose";
const PRODUCTS_PER_PAGE = 10;

export const getProducts = (req, res) => {
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
};

export const createProduct = (req, res) => {
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
};

export const changeProduct = (req, res) => {
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
};

export const deleteProduct = (req, res) => {
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
};
