import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
