import CategoryModel from "../models/category.js";
import ProductModel from "../models/product.js";

const WITHOUT_CATEGORY_ID = 0;

export const getCategories = (req, res) => {
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
      categoriesData: categories,
    });
  });
};

export const createCategory = (req, res) => {
  console.log(req.body);
  if (!req.body.categoryName) {
    return res.status(400).send({
      success: "false",
      message: "name of category is required"
    });
  }

  const category = new CategoryModel({
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
};

export const deleteCategory = (req, res) => {
  console.log(req.query);
  if (!req.query.id) {
    return res.status(400).send({
      success: "false",
      message: "id of category is required"
    });
  }

  ProductModel.updateMany(
    { categoryId: req.query.id },
    { $set: { categoryId: WITHOUT_CATEGORY_ID } },
  )
    .exec()
    .catch(err => {
      console.log(err);
      return res.status(500).send({
        success: "false",
        message: err
      });
    })
    .then(
      CategoryModel.deleteOne({ _id: req.query.id })
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
        })
    );
};
