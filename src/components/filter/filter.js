import React,{useContext} from "react";
import TabPanel from "../tab-panel";
import Checkbox from "./checkbox/";
import classes from "./filter.module.scss";
import { useMediaQuery } from "react-responsive";
import {MyContext} from '../app/app';

const { filter, header, aside, search, filterSm, asideSm, searchSm } = classes;



function Filter() {
  const mobileScreen = useMediaQuery({ query: "(max-width: 567px)" });
  const laptopScreen = useMediaQuery({ query: "(min-width: 567px)" });
  return (
    <>
      {mobileScreen && <FilterSm/>}
      {laptopScreen && <FilterLg />}
    </>
  );
}
function FilterLg() {
    const checkboxes = useContext(MyContext);
  const {all,noStops,oneStop,twoStops,threeStops} = checkboxes;
  return (
    <div className={filter}>
      <aside className={aside}>
        <h1 className={header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <Checkbox label={all.text} />
        <Checkbox label={noStops.text} />
        <Checkbox label={oneStop.text} />
        <Checkbox label={twoStops.text} />
        <Checkbox label={threeStops.text} />
      </aside>
      <aside className={search}>
        <TabPanel />
      </aside>
    </div>
  );
}
function FilterSm() {
    const checkboxes = useContext(MyContext);
    const {all,noStops,oneStop,twoStops,threeStops} = checkboxes;
  return (
    <>
      <div className={filterSm}>
        <aside className={asideSm}>
          <h1 className={header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
          <Checkbox label={all.text} />
        <Checkbox label={noStops.text} />
        <Checkbox label={oneStop.text} />
        <Checkbox label={twoStops.text} />
        <Checkbox label={threeStops.text} />
        </aside>
        <aside className={searchSm}>
          <TabPanel />
        </aside>
      </div>
    </>
  );
}


export default Filter;
