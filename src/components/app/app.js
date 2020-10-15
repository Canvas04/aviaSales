import React from "react";
import "normalize.css";
import classes from "./index.module.scss";
import Logo from "../logo";
import Filter from "../filter";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";

const MyContext = React.createContext()
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
const App = ({ checkboxes }) => {
  

  const mobileScreen = useMediaQuery({ query: "(max-width: 567px)" });
  const laptopScreen = useMediaQuery({ query: "(min-width: 567px)" });
  return (
    <>
      <MyContext.Provider value={checkboxes}>
        {" "}
        {laptopScreen && <MainLg />}
        {mobileScreen && <MainSM />}
      </MyContext.Provider>
    </>
  );
};

const mapStateToProps = (store) => {
  const { checkboxes } = store.checkboxes;
  return {
    checkboxes,
  };
};

export {MyContext};
export default connect(mapStateToProps)(App);
