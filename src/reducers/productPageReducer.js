const productPageReducer = (
  state = {
    product: "",
    isLoading: false,
    isError: false
  },
  action
) => {
  switch (action.type) {
    case "LOADING_PRODUCT" :
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "PRODUCT_LOADED_SUCCESS" :
      return {
        product: action.product,
        isLoading: false,
        isError: false,
      };

    case "PRODUCT_LOADING_ERROR" :
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
};

export default productPageReducer;
