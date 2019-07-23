import productsData from "../mocks/productItems.js";
import categories from "../mocks/productCategories.js";

const productsReducer = (state = { categories, productsData }, action) => {
  const addProduct = () => {
    const newItem = {
      key: action.key,
      id: action.id,
      name: action.name,
      wholePrice: action.wholePrice,
      price: action.price,
      categoryId: action.categoryId
    };

    state.productsData.push(newItem);
    return state.productsData;
  };

  const changeProductInArray = () => {
    const productId = productsData.findIndex(it => it.id === action.id);
    productsData[productId] = {
      categoryId: action.categoryId,
      id: action.id,
      key: action.key,
      name: action.name,
      price: action.price,
      wholePrice: action.wholePrice
    };

    console.log(productsData);
    console.log(productsData[productId]);
  };

  const deleteProduct = () => {
    return state.productsData.filter(item => item.id !== action.id);
  };

  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        categories: state.categories,
        productsData: addProduct()
      };

    case "DELETE_PRODUCT":
      return {
        categories: state.categories,
        productsData: deleteProduct()
      };

    case "CHANGE_PRODUCT": {
      console.log(action);
      changeProductInArray();
      return {
        categories: state.categories,
        productsData: state.productsData
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
