const productsReducer = (
  state = {
    list: [],
    isLoading: false,
    isError: false
  },
  action
) => {
  const addProduct = () => {
    const newItem = {
      key: action.key,
      id: action.id,
      name: action.name,
      wholePrice: action.wholePrice,
      price: action.price,
      categoryId: action.categoryId
    };

    return [...state.list, newItem];
  };

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
    case "ADD_PRODUCT":
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    case "DELETE_PRODUCT":
      return {
        list: deleteProduct(),
        isLoading: false,
        isError: false
      };

    case "CHANGE_PRODUCT":
      return {
        ...state,
        list: changeProductInArray()
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
