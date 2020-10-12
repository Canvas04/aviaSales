import React from "react";
import TabPanel from "../tab-panel";
import Checkbox from "./checkbox/";
import classes from "./filter.module.scss";
import {useMediaQuery } from 'react-responsive';
const { filter, header, aside ,search,filterSm,asideSm,searchSm } = classes;

export default function Filter() {
  const mobileScreen = useMediaQuery({ query: "(max-width: 567px)" });
  const laptopScreen = useMediaQuery({ query: "(min-width: 567px)" });
  return (
    <>
   {mobileScreen && <FilterSm />} 
   {laptopScreen && <FilterLg />}
    </>
  );
}
function FilterLg() {
  return (
    <div className={filter}>
      <aside className={aside}>
        <h1 className={header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <Checkbox />
      </aside>
      <aside className={search}>
          <TabPanel />
      </aside>
    </div>
  );
}
function FilterSm () {
  return <>
 <div className={filterSm}>
      <aside className={asideSm}>
        <h1 className={header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <Checkbox  />
        <Checkbox  />
        <Checkbox  />
        <Checkbox  />
        <Checkbox />
      </aside>
      <aside className={searchSm}>
          <TabPanel />
      </aside>
    </div>
  </>
}