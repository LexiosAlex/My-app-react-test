import { connect } from "react-redux";
import App from "../components/app/App.js";

const mapStateToProps = state => {
  return {
    data: state.mainReducer
  };
};

export default connect(mapStateToProps)(App);
