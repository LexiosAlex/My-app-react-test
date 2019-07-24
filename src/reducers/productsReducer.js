import productsData from "../mocks/productItems.js";

const productsReducer = (state = productsData, action) => {
  const addProduct = () => {
    const newItem = [
      {
        key: action.key,
        id: action.id,
        name: action.name,
        wholePrice: action.wholePrice,
        price: action.price,
        categoryId: action.categoryId
      }
    ];

    return [...state.productsData, ...newItem];
  };

  const changeProductInArray = () => {
    return state.productsData.map(item =>
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
    const filteredArrayOfProducts = state.productsData.filter(
      item => parseInt(item.id, 10) !== parseInt(action.id, 10)
    );

    return [...filteredArrayOfProducts];
  };

  switch (action.type) {
    case "ADD_PRODUCT":
      return addProduct();

    case "DELETE_PRODUCT":
      return deleteProduct();

    case "CHANGE_PRODUCT":
      return changeProductInArray();

    default:
      return state;
  }
};

export default productsReducer;
