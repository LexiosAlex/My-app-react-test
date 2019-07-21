import { connect } from "react-redux";
import App from "../components/app/App.js";
import { addCategory } from "../actions/actions.js";

const mapStateToProps = state => {
  return {
    data: state.categoriesReducer
  };
};

const mapDispatchToProps = dispatch => ({
  onAddCategory: (categories, name) => {
    dispatch(addCategory(categories, name));
  }
});

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// });
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
