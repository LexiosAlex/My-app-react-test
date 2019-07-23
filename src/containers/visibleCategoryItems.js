import { connect } from "react-redux";
import App from "../components/app/App.js";
import {
  addCategory,
  deleteCategory,
  addProduct,
  deleteProduct
} from "../actions/actions.js";

const mapStateToProps = state => {
  return {
    data: state.categoriesReducer
  };
};

const mapDispatchToProps = dispatch => ({
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
