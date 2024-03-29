import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App.js"
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/rootReducer.js";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();
