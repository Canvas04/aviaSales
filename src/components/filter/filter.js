import Search from "antd/lib/input/Search";
import React from "react";
import TabPanel from "../tab-panel";
import Checkbox from "./checkbox/";
import classes from "./filter.module.scss";
const { filter, header, aside ,search} = classes;

export default function Filter() {
  return (
    <div className={filter}>
      <aside className={aside}>
        <h1 className={header}>Количество пересадок</h1>
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
