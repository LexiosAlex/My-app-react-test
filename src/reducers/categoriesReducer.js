import categories from "../mocks/productCategories.js";

const categoriesReducer = (state = categories, action) => {
  const addCategory = () => {
    const newCategory = {
      categoryId: action.categoryId,
      categoryName: action.categoryName
    };

    return [...state, newCategory];
  };

  const deleteCategory = id => {
    return state.filter(category => category.categoryId !== id);
  };

  switch (action.type) {
    case "ADD_CATEGORY":
      return addCategory();

    case "DELETE_CATEGORY":
      return deleteCategory(action.categoryId);

    case "FETCH_CATEGORIES":
      return action.payload;

    default:
      return state;
  }
};

export default categoriesReducer;
