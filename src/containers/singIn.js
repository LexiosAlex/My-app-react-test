import { connect } from "react-redux";
import signIn from "../components/signIn/signIn.js"
import {onAdminLogin} from "../actions/userActions.js";

const mapStateToProps = (state) => {
  return {
    loginData: state.userReducer,
  }
};

const mapDispatchToProps = dispatch => ({
  onAdminLogin: (userName, password) => {
    dispatch(onAdminLogin(userName, password))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signIn);
