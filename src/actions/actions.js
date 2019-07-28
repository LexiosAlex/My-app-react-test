import getCategories from "../backend/getCategories.js";

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
  setTimeout(() => {
    console.log("i got categories");
    console.log(getCategories());
    dispatch({ type: "FETCH_CATEGORIES", payload: getCategories() });
  }, 3000);
};
