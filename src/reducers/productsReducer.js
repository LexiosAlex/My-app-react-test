const productsReducer = (
  state = {
    list: [],
    isLoading: false,
    isError: false
  },
  action
) => {
  switch (action.type) {
    case "ADDING_PRODUCT":
      return {
        list: [],
        isLoading: true,
        isError: false
      };

    case "ADD_PRODUCT_ERROR":
      return {
        list: [],
        isLoading: false,
        isError: true
      };

    case "ADD_PRODUCT":
      return {
        isLoading: false,
        isError: false,
        list: [...state.list, action.payload]
      };

    case "DELETING_PRODUCT":
      return {
        list: [],
        isLoading: true,
        isError: false
      };

    case "DELETE_PRODUCT_ERROR":
      return {
        list: [],
        isLoading: false,
        isError: true
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case "CHANGING_PRODUCT":
      return {
        list: [],
        isLoading: true,
        isError: false
      };

    case "CHANGE_PRODUCT_ERROR":
      return {
        list: [],
        isLoading: false,
        isError: true
      };

    case "CHANGE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        isError: false
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

    case "FETCHING_PRODUCTS":
      return {
        list: [],
        isLoading: true,
        isError: false
      };

    case "FETCH_PRODUCTS_ERROR":
      return {
        list: [],
        isLoading: false,
        isError: true
      };

    case "FETCH_PRODUCTS":
      console.log(action.payload);
      return {
        list: action.payload,
        isLoading: false,
        isError: false
      };

    default:
      return state;
  }
};

export default productsReducer;
