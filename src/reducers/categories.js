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
    const filteredCategories = state.filter(
      category => category.categoryId !== id
    );

    console.log(filteredCategories);

    return filteredCategories;
  };

  switch (action.type) {
    case "ADD_CATEGORY":
      return addCategory();

    case "DELETE_CATEGORY":
      return deleteCategory(action.categoryId);

    default:
      return state;
  }
};

export default categoriesReducer;
