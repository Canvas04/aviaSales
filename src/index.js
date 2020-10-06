import React from "react";
import "normalize.css";
import ReactDom from "react-dom";
import classes from './index.module.scss';
import Logo from './components/logo';
import Filter from "./components/filter/filter";
const {main} = classes;


const App = () => {
  return <main className={main}>
      <Logo />
      <Filter />
  </main>;
};
ReactDom.render(<App />, document.querySelector("#root"));
