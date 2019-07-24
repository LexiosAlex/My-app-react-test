import productsData from "../mocks/productItems.js";
import categories from "../mocks/productCategories.js";

const productsReducer = (state = { categories, productsData }, action) => {
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
    const productId = productsData.findIndex(it => it.id === action.id);
    const arrayOfProducts = [...state.productsData];

    arrayOfProducts[productId] = {
      categoryId: action.categoryId,
      id: action.id,
      key: action.key,
      name: action.name,
      price: action.price,
      wholePrice: action.wholePrice
    };

    return arrayOfProducts;
  };

  const deleteProduct = () => {
    const filteredArrayOfProducts = state.productsData.filter(
      item => parseInt(item.id, 10) !== parseInt(action.id, 10)
    );

    return [...filteredArrayOfProducts];
  };

  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        productsData: addProduct()
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        productsData: deleteProduct()
      };

    case "CHANGE_PRODUCT": {
      return {
        ...state,
        productsData: changeProductInArray()
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
