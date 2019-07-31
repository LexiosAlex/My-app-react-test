import axios from "axios";

const getMax = (items, fieldName) => Math.max(...items.map(i => i[fieldName]));

export const addCategory = (categories, name) => {
  return {
    type: "ADD_CATEGORY",
    categoryId: getMax(categories, "categoryId") + 1,
    categoryName: name
  };
};

export const deleteProduct = id => ({
  type: "DELETE_PRODUCT",
  id: id
});

export const addProduct = (categoryId, name, wholePrice, price, products) => {
  return {
    type: "ADD_PRODUCT",
    id: getMax(products, "id") + 1,
    key: getMax(products, "id") + 1,
    categoryId: categoryId,
    name: name,
    wholePrice: wholePrice,
    price: price
  };
};

export const deleteCategory = id => ({
  type: "DELETE_CATEGORY",
  categoryId: id
});

export const changeProduct = (id, categoryId, name, wholePrice, price) => {
  return {
    type: "CHANGE_PRODUCT",
    id: id,
    key: id,
    categoryId: categoryId,
    name: name,
    wholePrice: wholePrice,
    price: price
  };
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
