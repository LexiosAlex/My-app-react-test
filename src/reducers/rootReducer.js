import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer.js";
import productsReducer from "./productsReducer.js";

export default combineReducers({
  categoriesReducer,
  productsReducer
});
