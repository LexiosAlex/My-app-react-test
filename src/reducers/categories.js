import productsData from "../mocks/productItems.js";
import categories from "../mocks/productCategories.js";

const categoriesReducer = (state = { categories, productsData }, action) => {
  const addCategory = () => {
    const newCategory = {
      categoryId: action.categoryId,
      categoryName: action.categoryName
    };
    state.categories.push(newCategory);
    return state.categories;
  };
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        categories: addCategory(),
        productsData: [state.productsData]
      };

    case "CHANGE_CATEGORY":
      return {
        selectedCategory: action.payload
      };

    case "CHANGE_ITEMS":
      return {
        selectedItems: action.payload
      };
    default:
      return state;
  }
};

export default categoriesReducer;
