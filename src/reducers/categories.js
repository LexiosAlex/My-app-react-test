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

  const deleteCategory = id => {
    const filteredCategories = state.categories.filter(
      category => category.categoryId !== id
    );

    state.productsData
      .filter(item => item.categoryId === id)
      .forEach(it => {
        it.categoryId = 0;
      });

    return {
      categories: filteredCategories,
      productsData: state.productsData
    };
  };

  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        categories: addCategory(),
        productsData: state.productsData
      };

    case "DELETE_CATEGORY":
      return deleteCategory(action.categoryId);

    default:
      return state;
  }
};

export default categoriesReducer;
