import productsData from "../mocks/productItems.js";

const categoriesReducer = (state = productsData, action) => {
  const addCategory = () => {
    const newCategory = {
      categoryId: action.categoryId,
      categoryName: action.categoryName
    };

    return [...state.categories, newCategory];
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
