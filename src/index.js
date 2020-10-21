import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import {createStore,applyMiddleware,compose} from 'redux';
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
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(loggerMiddleWare)))
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
// Надо настроить react dev tools