import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import App from "./components/app/App";
import { render } from "react-dom";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import initialState from "./reducers/mainReducer.js";

const store = createStore(initialState);

render(<App data={store.getState()} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
