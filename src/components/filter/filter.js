import React from "react";
import TabPanel from "../tab-panel";
import Checkbox from "./checkbox/";
import classes from "./filter.module.scss";
import {useMediaQuery } from 'react-responsive';
const { filter, header, aside ,search} = classes;

export default function Filter() {
  const mobileScreen = useMediaQuery({ query: "(max-width: 567px)" });

  const laptopScreen = useMediaQuery({ query: "(min-width: 567px)" });
  return (
    <>
    <FilterLg />
    </>
  );
}
function FilterLg() {
  return (
    <div className={filter}>
      <aside className={aside}>
        <h1 className={header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <Checkbox label={"Все"} />
        <Checkbox label={"Без пересадок"} />
        <Checkbox label={"1 пересадка"} />
        <Checkbox label={"2 пересадки"} />
        <Checkbox label={"3 пересадки"} />
      </aside>
      <aside className={search}>
          <TabPanel />
      </aside>
    </div>
  );
}
function FilterSm () {
  return <>
  
  </>
}