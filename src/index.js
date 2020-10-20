import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
function loggerMiddleWare(store) {
  return function (next ) {
    return function (action) {
      const result  = next(action);
      console.log('MiddleWare',store.getState());
      return result;

    }
  }
}

const store = createStore(rootReducer,applyMiddleware(loggerMiddleWare))
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
