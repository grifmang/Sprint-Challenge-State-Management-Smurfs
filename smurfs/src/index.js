import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
