import { combineReducers } from "redux";
// import mainReducer from "./mainReducer.js";
import categoriesReducer from "./categories.js";
import productsReducer from "./productsReducer.js";

export default combineReducers({
  categoriesReducer,
  productsReducer
});
