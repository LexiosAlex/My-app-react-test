import ProductModel from "../models/product.js";

const PRODUCTS_PER_PAGE = 10;

export const getProductById = (req, res) => {
  console.log(req.query);
  if (!req.query.id) {
    res.send({
      success: "false",
      message: "id of product is required"
    })
  }

  ProductModel.find({ _id: req.query.id })
    .exec((err, product) => {
      console.log(product);
    if (err) {
      res.status(404).send({
        success: "false",
        message: "product not found"
      })
    }
    res.status(200).send({
      success: "true",
      message: "product retrieved successfully",
      product: product[0]
    })
  })

};

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

  const product = new ProductModel({
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
};
export const changeProduct = (req, res) => {
  console.log(req.body);
  console.log(req.body.categoryId);


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
    { _id: req.body.id },
    {
      $set: {
        _id: req.body.id,
        categoryId: req.body.categoryId,
        name: req.body.name,
        price: req.body.price,
        wholePrice: req.body.wholePrice
      }
    },
    { new: true },
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

  ProductModel.deleteOne({ _id: req.query.id })
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
