import { connect } from "react-redux";
import {LandingPage } from "../components/landingPage/LandingPage.js"
import {
  asyncGetCategories,
  asyncGetProducts
} from "../actions/dashboardActions.js"

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer,
    productsData: state.productsData,
  }
};

const mapDispatchToProps = dispatch => ({
  onGetCategories: () => {
    dispatch(asyncGetCategories());
  },

  onGetProducts: (categoryId, page) => {
    dispatch(asyncGetProducts(categoryId, page));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
