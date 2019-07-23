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

  const deleteProduct = id => {
    return state.productsData.filter(item => item.id !== id);
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
        productsData: deleteProduct(action.id)
      };

    case "CHANGE_PRODUCT": {
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
