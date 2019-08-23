import { connect } from "react-redux";
import ProductPage from "../components/productComponent/ProductComponent.js"
import {
  getProductById
} from "../actions/userActions.js"

const mapStateToProps = state => {
  return {
    product: state.productPageReducer
  }
};

const mapDispatchToProps = dispatch => ({
  getProductById: (id) => {
    dispatch(getProductById(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
