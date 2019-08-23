import { connect } from "react-redux";
import DashBoard from "../components/dashBoard/DashBoard.js";
import {
  addCategory,
  deleteCategory,
  addProduct,
  deleteProduct,
  changeProduct,
  asyncGetCategories,
  asyncGetProducts
} from "../actions/dashboardActions.js";

import {
  logOut
} from "../actions/userActions.js"

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer,
    productsData: state.productsReducer,
    loginData: state.userReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(logOut());
  },

  onGetCategories: () => {
    dispatch(asyncGetCategories());
  },

  onGetProducts: (categoryId, page) => {
    dispatch(asyncGetProducts(categoryId, page));
  },

  onAddCategory: name => {
    dispatch(addCategory(name));
  },

  onDeleteCategory: (id, activeCategory, page) => {
    dispatch(deleteCategory(id, activeCategory, page));
  },

  onAddProduct: (categoryId, name, wholePrice, price, activeCategoryId, page) => {
    dispatch(addProduct(categoryId, name, wholePrice, price, activeCategoryId, page));
  },

  onDeleteProduct: (id, activeCategory, page) => {
    dispatch(deleteProduct(id, activeCategory, page));
  },

  onChangeProduct: (
    id,
    categoryId,
    name,
    wholePrice,
    price,
    activeCategory,
    page
  ) => {
    dispatch(
      changeProduct(
        id,
        categoryId,
        name,
        wholePrice,
        price,
        activeCategory,
        page
      )
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
