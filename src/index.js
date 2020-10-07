import React from "react";
import "normalize.css";
import ReactDom from "react-dom";
import classes from "./index.module.scss";
import Logo from "./components/logo";
import Filter from "./components/filter/filter";
import { useMediaQuery } from "react-responsive";

const { mainLg ,mainSm} = classes;

const App = () => {
  const mobileScreen = useMediaQuery({ query: "(max-width: 567px)" });
  const laptopScreen = useMediaQuery({ query: "(min-width: 567px)" });
  return <>
  {laptopScreen && <MainLg />}
  {mobileScreen && <MainSM />}
  </>;
};
ReactDom.render(<App />, document.querySelector("#root"));

function MainLg() {
  return (
    <main className={mainLg}>
      <Logo />
      <Filter />
    </main>
  );
}
function MainSM() {
  return (
    <main className={mainSm}>
      <Logo />
      <Filter />
    </main>
  );
}
