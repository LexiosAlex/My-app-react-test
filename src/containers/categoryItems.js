import { connect } from "react-redux";
import App from "../components/app/App.js";
import {
  addCategory,
  deleteCategory,
  addProduct,
  deleteProduct,
  changeProduct,
  asyncGetCategories
} from "../actions/actions.js";

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer,
    productsData: state.productsReducer
  };
};

const mapDispatchToProps = dispatch => ({
  onGetCategories: () => {
    dispatch(asyncGetCategories());
  },

  onAddCategory: (categories, name) => {
    dispatch(addCategory(categories, name));
  },

  onDeleteCategory: id => {
    dispatch(deleteCategory(id));
  },

  onAddProduct: (categoryId, name, wholePrice, price, products) => {
    dispatch(addProduct(categoryId, name, wholePrice, price, products));
  },

  onDeleteProduct: id => {
    dispatch(deleteProduct(id));
  },

  onChangeProduct: (id, categoryId, name, wholePrice, price) => {
    dispatch(changeProduct(id, categoryId, name, wholePrice, price));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
