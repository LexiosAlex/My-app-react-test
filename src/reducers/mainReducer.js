import productsData from "../mocks/productItems.js";
import categories from "../mocks/productCategories.js";
import addProductsToCategories from "../addProductsToCategories.js";

const initialState = addProductsToCategories(productsData, categories);

export default (state = initialState, action) => {
  return initialState;
};
