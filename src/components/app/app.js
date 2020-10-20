import React from "react";
import "normalize.css";
import classes from "./index.module.scss";
import Logo from "../logo";
import Filter from "../filter";
import { useMediaQuery } from "react-responsive";
const { mainLg, mainSm } = classes;

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
const App = () => {
  const mobileScreen = useMediaQuery({ query: "(max-width: 567px)" });
  const laptopScreen = useMediaQuery({ query: "(min-width: 567px)" });
  return (
    <>
      {" "}
      {laptopScreen && <MainLg />}
      {mobileScreen && <MainSM />}
    </>
  );
};

export default App;
