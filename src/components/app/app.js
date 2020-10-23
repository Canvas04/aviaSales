import React,{useEffect} from "react";
import {useDispatch} from 'react-redux';
import { useMediaQuery } from "react-responsive";
import classes from "./index.module.scss";
import Logo from "../logo";
import Filter from "../filter";
import { loadSearchId, loadTickets } from "../../action";

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
  const dispatch = useDispatch();
  useEffect(() => {
    const getSearchId = () => dispatch(loadSearchId());
    getSearchId();
    const getTickets = () => dispatch(loadTickets());
    getTickets()
  
  })
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
