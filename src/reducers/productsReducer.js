import productsData from "../mocks/productItems.js";

const productsReducer = (state = productsData, action) => {
  const addProduct = () => {
    const newItem = {
      key: action.key,
      id: action.id,
      name: action.name,
      wholePrice: action.wholePrice,
      price: action.price,
      categoryId: action.categoryId
    };

    return [...state, newItem];
  };

  const deleteCategory = id => {
    const filteredProducts = [...state];
    filteredProducts
      .filter(item => item.categoryId === id)
      .forEach(it => {
        it.categoryId = 0;
      });

    return filteredProducts;
  };

  const changeProductInArray = () => {
    return state.map(item =>
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
    return state.filter(item => item.id !== action.id);
  };

  switch (action.type) {
    case "ADD_PRODUCT":
      return addProduct();

    case "DELETE_PRODUCT":
      return deleteProduct();

    case "CHANGE_PRODUCT":
      return changeProductInArray();

    case "DELETE_CATEGORY":
      return deleteCategory(action.categoryId);

    default:
      return state;
  }
};

export default productsReducer;
