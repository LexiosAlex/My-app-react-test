const categoriesReducer = (
  state = {
    list: [],
    isLoading: false,
    isError: false
  },
  action
) => {
  const addCategory = () => {
    const newCategory = {
      categoryId: action.categoryId,
      categoryName: action.categoryName
    };

    return [...state.list, newCategory];
  };

  const deleteCategory = id => {
    return state.list.filter(category => category.categoryId !== id);
  };

  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        list: addCategory(),
        isLoading: false,
        isError: false
      };

    case "DELETE_CATEGORY":
      return {
        list: deleteCategory(action.categoryId),
        isLoading: false,
        isError: false
      };

    case "FETCHING_CATEGORIES":
      return {
        list: [],
        isLoading: true,
        isError: false
      };

    case "FETCH_CATEGORIES_ERROR":
      return {
        list: [],
        isLoading: false,
        isError: true
      };

    case "FETCH_CATEGORIES":
      return {
        list: action.payload,
        isLoading: false,
        isError: false
      };

    default:
      return state;
  }
};

export default categoriesReducer;
