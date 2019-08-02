const productsReducer = (
  state = {
    list: [],
    isLoading: false,
    isError: false
  },
  action
) => {
  const deleteCategory = id => {
    const filteredProducts = [...state.list];
    filteredProducts
      .filter(item => item.categoryId === id)
      .forEach(it => {
        it.categoryId = 0;
      });

    return filteredProducts;
  };

  const changeProductInArray = () => {
    return state.list.map(item =>
      item.id === action.id
        ? {
            categoryId: action.categoryId,
            id: action.id,
            key: action.key,
            name: action.name,
            price: action.price,
            wholePrice: action.wholePrice
          }
        : item
    );
  };

  const deleteProduct = () => {
    return state.list.filter(item => item.id !== action.id);
  };

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

    case "DELETE_CATEGORY":
      return {
        ...state,
        list: deleteCategory(action.categoryId)
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
