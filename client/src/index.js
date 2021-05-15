import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import "./index.css";

import App from "./pages";
import reducers from "./reducers";
import ReactGA from "react-ga";
import axios from "axios";
window.axios = axios;

ReactGA.initialize("UA-196841521-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
