import axios from "axios";
import { DEFAULT_PAGE } from "../constants";
import { WITHOUT_CATEGORY_ID } from "../constants";

export const addCategory = name => dispatch => {
  dispatch({ type: "ADDING_CATEGORY" });
  axios
    .post("/api/categories/create", {
      categoryName: name
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: "ADD_CATEGORY",
        payload: res.data.categories
      });
    })
    .catch(error => {
      dispatch({ type: "ADD_CATEGORY_ERROR", error });
    });
};

export const deleteProduct = (id, activeCategory, page) => dispatch => {
  dispatch({ type: "DELETING_PRODUCT" });
  axios
    .delete("/api/product/delete", {
      params: { id }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: "DELETE_PRODUCT"
      });
      dispatch(asyncGetProducts(activeCategory, page));
    })
    .catch(error => {
      dispatch({ type: "DELETE_PRODUCT_ERROR", error });
    });
};

export const addProduct = (
  categoryId,
  name,
  wholePrice,
  price,
  activeCategoryId
) => dispatch => {
  dispatch({ type: "ADDING_PRODUCT" });
  axios
    .post("/api/products/create", {
      categoryId: categoryId,
      name: name,
      wholePrice: wholePrice,
      price: price
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: "ADD_PRODUCT",
        payload: activeCategoryId === categoryId && res.data.product
      });
    })
    .catch(error => {
      dispatch({ type: "ADD_PRODUCT_ERROR", error });
    });
};

export const deleteCategory = (id, activeCategory, page) => dispatch => {
  dispatch({ type: "DELETING_CATEGORY" });
  axios
    .delete("/api/category/delete", {
      params: { categoryId: id }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: "DELETE_CATEGORY"
      });
      dispatch(asyncGetCategories());
      dispatch(
        id === activeCategory
          ? asyncGetProducts(WITHOUT_CATEGORY_ID, DEFAULT_PAGE)
          : asyncGetProducts(activeCategory, page)
      );
    })
    .catch(error => {
      dispatch({ type: "DELETE_CATEGORY_ERROR", error });
    });
};

export const changeProduct = (
  id,
  categoryId,
  name,
  wholePrice,
  price,
  activeCategory,
  page
) => dispatch => {
  dispatch({ type: "CHANGING_PRODUCT" });
  axios
    .put("/api/product/change", {
      id,
      categoryId,
      name,
      wholePrice,
      price
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: "CHANGE_PRODUCT"
      });
      dispatch(asyncGetProducts(activeCategory, page));
    })
    .catch(error => {
      dispatch({ type: "CHANGE_PRODUCT_ERROR", error });
    });
};

export const asyncGetCategories = () => dispatch => {
  dispatch({ type: "FETCHING_CATEGORIES" });
  axios
    .get(`/api/categories`)
    .then(res => {
      console.log(res);
      dispatch({ type: "FETCH_CATEGORIES", payload: res.data.categoriesData });
    })
    .catch(error => {
      dispatch({ type: "FETCH_CATEGORIES_ERROR", error });
    });
};

export const asyncGetProducts = (categoryId, page) => dispatch => {
  dispatch({ type: "FETCHING_PRODUCTS" });
  axios
    .get("/api/products", {
      params: { categoryId: categoryId, page: page }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: "FETCH_PRODUCTS", payload: res.data.productsData });
    })
    .catch(error => {
      dispatch({ type: "FETCH_PRODUCTS_ERROR", error });
    });
};
