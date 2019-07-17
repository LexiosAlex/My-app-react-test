import productsData from "../mocks/productItems.js";
import categories from "../mocks/productCategories.js";
import categoriesSorter from "../categoriesSorter.js";

const initialState = categoriesSorter(productsData, categories);

export default (state = initialState, action) => {
  return initialState;
};
