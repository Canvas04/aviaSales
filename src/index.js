import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleWare from 'redux-saga';
import { createStore, applyMiddleware, compose } from "redux";
import App from "./components/app";
import rootReducer from "./reducers";
import { watchSearchId } from "./saga/saga";
import { watchSearchTickets } from "./saga/loadTickets";

const loggerMiddleWare = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

const sagaMiddleWare = createSagaMiddleWare();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddleWare,sagaMiddleWare))
);
sagaMiddleWare.run(watchSearchId);
sagaMiddleWare.run(watchSearchTickets);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
