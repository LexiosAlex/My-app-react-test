import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import MainPage from "./containers/categoryItems.js";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/rootReducer.js";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);

// If you want your mainPage to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
