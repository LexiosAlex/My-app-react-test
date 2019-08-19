import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer.js";
import productsReducer from "./productsReducer.js";
import userReducer from "./userReducer.js";

export default combineReducers({
  categoriesReducer,
  productsReducer,
  userReducer
});
