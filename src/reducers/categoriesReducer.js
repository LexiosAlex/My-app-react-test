const categoriesReducer = (
  state = {
    list: [],
    isLoading: false,
    isError: false
  },
  action
) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case "ADDING_CATEGORY":
      return {
        list: [],
        isLoading: true,
        isError: false
      };

    case "ADD_CATEGORY_ERROR":
      return {
        list: [],
        isLoading: false,
        isError: true
      };

    case "DELETING_CATEGORY":
      return {
        list: [],
        isLoading: true,
        isError: false
      };

    case "DELETE_CATEGORY_ERROR":
      return {
        list: [],
        isLoading: false,
        isError: true
      };

    case "DELETE_CATEGORY":
      return {
        ...state,
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
