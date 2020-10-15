import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {store} from './store/configureStore';


ReactDom.render(
    <Provider store={store} >
          <App />
          </Provider>
  
,
 document.querySelector("#root")
);
